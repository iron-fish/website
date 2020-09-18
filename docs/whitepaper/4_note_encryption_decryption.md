---
id: 4_note_encryption_decryption
title: Note Encryption and Decryption
---

The **note plaintext** is $$np = (d, v, rcm, memo)$$ where `d` is the _diversifier_ of the note owner, `v` is the plaintext value of the note, `rcm` is the randomness used for the note commitment and memo. The note plaintext is encrypted using a symmetric key and becomes $$C^{enc}$$ in the `Output Description`. The sender of the transaction knows the full address of the recipient, ($$d$$, $$pk_d$$), and creates this shared secret by doing:
  1. Sender chooses a random number to create an _ephemeral secret key (**esk**)_
  2. Create an _ephemeral public key (**epk**)_ by using scalar multiplication between the diversifier of the recipient represented as a field point and esk. This ephemeral public key is a publicly known component of the Output Description and is seen by everyone.
      1. $$epk = esk * g_d$$
          1. Note: $$g_d$$ is the diversifier, `d`, represented as a field a point on the JubJub curve so we can do scalar multiplication (elliptic curve multiplication) using it
  3. Derive `shared_secret` using Diffie Hellman Key Exchange between $$esk$$ and $$pk_d$$ (diversified public address of the recipient)
      1. The public key portion of the full public address, $$pk_d$$, is derived by multiplying the diversifier with the incoming view key `(ivk)`, meaning $$pk_d = g_d * ivk$$
      2. Therefore, each party has the same information to get to the shared secret
          1. Remember that $$epk = esk * g_d$$ where $$g_d$$ is the diversifier
          2. The **sender** calculates $$shared\_secret =  	esk * pk_d	= esk * g_d * ivk$$
          3. The **recipient** calculates $$shared\_secret = 	epk * ivk 	= esk * g_d * ivk$$
  4. Now that each party has a shared secret they both can calculate using their own secret information and the ephemeral public key, to get the symmetric encryption key to encrypt the note plaintext, we **hash** the shared secret with the ephemeral public key
      1. $$encryption\_key = hash(shared_secret, epk)$$
  5. Using the **encryption_key** the sender uses symmetric encryption to calculate $$C^{enc}$$ that is part of the Output Description
      1. Anyone who possesses the **recipient’s incoming view key (ivk)** can decrypt $$C^{enc}$$ and see the plaintext value of the note as they can calculate the `shared_secret` and get the symmetric encryption key
      2. To make the **sender’s outgoing viewing key (ovk)** useful, we also include $$C^{out}$$ as part of the Output Description
          1. Remember that the sender calculates their `shared_secret` using $$esk$$ and $$pk_d$$ so that is the necessary information we need to hide in $$C^{out}$$
          2. Here we also create a symmetric encryption key, by hashing (using Blake2b) the value commitment `(cv)`, the field element version of the note commitment `(cmu)`, and the ephemeral public key `(epk)`
              1. **symmetric_encryption_key** = Black2b_hasher(buffer = **ovk**, cv, cmu, epk)
              2. Notice that the symmetric_encryption_key is created using all public values and the sender’s outgoing viewing key (ovk) so one must have access to the outgoing view key to decrypt the note sent by the sender
          3. Now that the sender has their symmetric_encryption_key they can create $$C^{out}$$ by using the **symmetric_encryption_key** to encrypt $$esk$$ and $$p_d$$ encrypt
              1. $$C^{out}$$ = **SymmetricEncrypt(key=symmetric_encryption_key, `esk` concatenated with $$pk_d$$)**

