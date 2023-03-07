---
author: Neil Doshi
author_title: Content Marketing Manager at Iron Fish
author_url: https://twitter.com/n_doshi_
author_image_url: "/img/blog/Neil.png"
author_description: Neil is Content Marketing Manager at Iron Fish
hide_table_of_contents: true
title: "Iron Fish AMA"
description: A summary of the AMA held Feb 23
image: /img/blog/ama-summary/ama-summary-banner.png
tags: [ironfish, ama, mainnet]
---

On February 23, 2023, Iron Fish hosted a [YouTube live session](https://www.youtube.com/watch?v=kXPR89Q8jaA) to announce the end of Phase 3 and the mainnet launch date, which is set for March 14, 2023! We also held our first live AMA, where we answered the questions you submitted 🎉

If you missed it, here are the questions by category and a summary of answers.

## Iron Fish Goals and Organization
-   [What are the key goals for Iron Fish after mainnet?](#what-are-the-key-goals-for-iron-fish-after-mainnet)
-   [Where do you see Iron Fish in five years?](#where-do-you-see-iron-fish-in-five-years)
-   [What are some of Iron Fish's biggest challenges, and how have you addressed them?](#what-are-some-of-iron-fishs-biggest-challenges-and-how-have-you-addressed-them)
-   [I don't understand how you're a privacy company but acting centralized.](#i-dont-understand-how-youre-a-privacy-company-but-acting-centralized)
-   [How do you maintain such positivity in the team? It seems that you're always interested in working together with the community.](#how-do-you-maintain-such-positivity-in-the-team-it-seems-that-youre-always-interested-in-working-together-with-the-community)
    
## Tokenomics, Tokens, and Funding
-   [Will you be releasing information about Iron Fish tokenomics? What are the team and investor allocations and vesting periods? What is the total supply, and what will the initial circulating supply be?](#will-you-be-releasing-information-about-iron-fish-tokenomics-what-are-the-team-and-investor-allocations-and-vesting-periods-what-is-the-total-supply-and-what-will-the-initial-circulating-supply-be)
-   [When will Iron Fish be listed on exchanges? Will there be a public sale?](#when-will-iron-fish-be-listed-on-exchanges-will-there-be-a-public-sale)
-   [Will there be a series B funding round in the near future?](#will-there-be-a-series-b-funding-round-in-the-near-future)
    
## Use Cases and Growth
-   [How is Iron Fish different from its competitors' projects?](#how-is-iron-fish-different-from-its-competitors-projects)
-   [What are the use cases for Iron Fish?](#what-are-the-use-cases-for-iron-fish)
-   [Are there plans to develop tools to expand the use cases for Iron Fish?](#are-there-plans-to-develop-tools-to-expand-the-use-cases-for-iron-fish)
-   [How do you anticipate businesses using Iron Fish, and what are the benefits for businesses?](#how-do-you-anticipate-businesses-using-iron-fish-and-what-are-the-benefits-for-businesses)
-   [As the Iron Fish community continues to grow and as more users adopt it, how will the project handle scalability?](#as-the-iron-fish-community-continues-to-grow-and-as-more-users-adopt-it-how-will-the-project-handle-scalability)

## Regulation
-   [Some exchanges and projects have excluded Russian users. Do you expect that you will be required to do the same?](#some-exchanges-and-projects-have-excluded-russian-users-do-you-expect-that-you-will-be-required-to-do-the-same)
-   [What compliance requirements does the platform meet, and how do you stay up to date with new regulations?](#what-compliance-requirements-does-the-platform-meet-and-how-do-you-stay-up-to-date-with-new-regulations)

## Iron Fish Network and Mining
-   [Will node operators be able to earn rewards on the mainnet?](#will-node-operators-be-able-to-earn-rewards-on-the-mainnet)
-   [Will there be a GPU miner?](#will-there-be-a-gpu-miner)
-   [What's the best response to people who criticize Iron Fish for using PoW instead of PoS (out of environmental concern)?](#whats-the-best-response-to-people-who-criticize-iron-fish-for-using-pow-instead-of-pos-out-of-environmental-concern)

## Iron Fish Goals and Organization

### What are the key goals for Iron Fish after mainnet?

**Elena (CEO)**: We want Iron Fish to be the privacy platform for crypto. Look at SSL technology. Right now, we are all using HTTPS, which was controversial when it was developed. And we see Iron Fish as that continuation. We want to make Iron Fish fundamental for crypto so that people have the privacy they want without needing to know how the cryptography works.

Phase 3 was about multi-asset, which is the first stepping stone in that direction. We want to partner with bridges so that Iron Fish can interact with other chains and provide privacy to other crypto assets. We want to make Iron Fish more accessible by doing things like building a wallet that helps people easily launch and use Iron Fish — and we want to have continuous partnerships with existing projects, existing infrastructure projects, wallets, and other apps to make the integration seamless.

### Where do you see Iron Fish in five years?
**Lawrence (Engineering Manager)**: Right now, private transactions on blockchains account for less than 1% of overall transaction volume. So if you start with the assumption that blockchain and crypto transactions will move towards privacy, just as HTTP moved towards HTTPS, that's a huge opportunity that we are excited to tackle. We're very early and that this transaction volume is going to go from well under 1% to over 50%. There will be many winners in this space and lots of really interesting developments — and we're on the ground floor of it.

### What are some of Iron Fish's biggest challenges, and how have you addressed them?
**Jason (Principal Engineer)**: First and foremost, building a new layer-1 is extremely difficult. It's very, very hard. My general push on the engineering team is to build something simple that works well and expand it from there.

Elena said that Mainnet launch is not the end for iron Fish. I would rather cut down on features, build something incredibly stable, and then expand it.

**Mat (Engineer)**: The biggest challenge is that privacy is hard to get right. We had to build some new zero-knowledge proof circuits, which, if built incorrectly, can lead to leaks or diminish privacy. So we spent a considerable amount of time making sure those were as good as possible. Everything's harder if you're concerned about privacy because you have to make sure there are no obvious attack vectors.

**Jason**: Iron Fish is innovating in core privacy and other ways. We have some new, interesting P2P networking where we support Web Sockets and WebRTC. Derek, would you like to speak about this?

**Derek (Engineer)**: With many other tokens, nodes make a simple direct connection. We have multiple types of connections that can be made, and the node will kind of switch between them depending on what's available and what allows two different people to be connected. Some of the challenges that we'll be looking at include:

-   How do you figure out who to download blocks from to get blocks the fastest?
-   Should you switch to somebody else when the person you're downloading blocks from slows down?
-   When a new block is mined or a transaction is created, how do you get that out to the network as fast as possible?
    
Fortunately, since we're in the open source space, we have the advantage of looking at other solutions that people have come up with and combining that with our individual ideas to make something that works.

**Yajun (Engineer)**: We are building an innovative product, and there are not many L1 privacy chains. So whenever we want to build a feature or solve a problem, we can't just go on Google and get the answer. The whole team is navigating through the unknown, and we need to figure out the best solutions for our use case.

**Jason**: Speaking on that, a lot of people on [Discord](https://discord.ironfish.network/) are wondering why their mint, burn, and send orders are not being processed. As long as your mint burn and send transactions are confirmed on the blockchain, they will get credit when we count the points.

**Elena**: One of the biggest challenges is safely launching a privacy project. Privacy is a double-edged sword. Take Tornado Cash, which was a privacy solution for Ethereum sanctioned by OFAC, which is part of the US regulatory government. That was because North Korean hackers were using Tornado Cash to launder money.

A challenge for Iron Fish relates to how we communicate to regulators that what we are building is to protect consumers and protect crypto users with privacy. We are not building this for the bad actors of the world.

### I don't understand how you're a privacy company but acting centralized.
**Elena**: So I can interpret that question as: is it okay for a decentralized project to be VC funded? And the answer to that is yes. Humble brag, I think our engineering team is amazing. I think we have some great talent and would not be able to make up this team if we were not funded. That's just the truth of it. In this format, we're able to build the best product with the best people.

### How do you maintain such positivity in the team? It seems that you're always interested in working together with the community.
**Lawrence**: The way we do this is by hiring people who really care about this project. We have talked to so many engineers in the crypto space to find the right set of people to bring this project forward. And we have, in many ways, accomplished that. It bleeds through, into Discord, our community, and everything we do. This kind of passion brings in a passionate community, a positive community. And I'm personally really, really proud of that.


## Tokenomics, Tokens, and Funding
### Will you be releasing information about Iron Fish tokenomics? What are the team and investor allocations and vesting periods? What is the total supply, and what will the initial circulating supply be?
**Elena**: We will be releasing very detailed tokenomics of the genesis block. But I do want to point out some of the things that are already available. The initial supply will be 42 million, and the emissions curve is available on our website. We put a lot of thought into making sure that the emissions curve was such that inflation was reasonable while still giving proper rewards to miners.

In terms of the actual allocation for the team and investors, everyone is going to be under a 12-month lockup. There is then an additional year of gradual unlocking. We planned so that the circulating supply is such that it's not super insider heavy, and we want the community to know that we're here for the long term — we're not going to dump on the market. We genuinely want to see this project succeed long term. Look for the tokenomics paper soon.

### When will Iron Fish be listed on exchanges? Will there be a public sale?
**Elena**: There will not be a public sale. We are focused on making Iron Fish a great technical project and relying on you, the community, for adoption. I do also want to point out that Iron Fish is a privacy project operating within the US regulatory framework. There is no plan to have Iron Fish listed on an exchange on day 1. We're happy to answer more questions on Discord.

### Will there be a series B funding round in the near future?
**Elena**: At this moment in time, the team is focused on getting to Mainnet. For the purposes of transparency, we are well-funded and have more than a two-year runway. We don't feel the need to raise funds.

## Use Cases and Growth
### How is Iron Fish different from its competitors' projects?
**Elena**: Some of the projects that people have asked about in the past are Aleo, Aztec, Zcash, Oasis, and Monero. I'll talk about all these projects. But I want to start by saying that privacy is really hard, and I have deep respect for any project trying to do privacy. It is very hard technically, it's very hard regulatorily, so I'm very supportive of all the projects mentioned because they're helping the crypto community pave the way for privacy being accepted.

It's very healthy that we have competitors in the space because that means we have more allies to push privacy forward. And the competition is always good — we're learning from all of our competitors, and they're learning from us.

The first project that people asked about was Aleo, another Layer-1. I believe they're also currently in their third testnet. Their timeline is similar to ours, but the use case for Aleo is different from Iron Fish. Aleo wants to be more generic in terms of private programmability; they provide a different smart contract language called Leo to help them with that.

Aleo does not have privacy by default and doesn't have privacy only. You can do private smart contracts on top of Aleo with customization of what's public and what's private, so I think they're trying to go for a broader use case.

Iron Fish wants to keep messaging very clear. We are here for private transactions, and we are here to make that easy and safe for people to use.

Aztec is another privacy project. Aztec is a great ally. They've been helping us quite a bit, especially with messaging on the regulatory side, and I'm a huge fan. Versus Iron Fish, which wants to support other chains, Aztec is mostly focusing on Ethereum. Iron Fish is the generic layer for private crypto transactions across different chains. Aztec is very Ethereum-focused.

Next is Zcash — we are huge fans of Zcash. We bootstrapped our privacy mechanism from them. Zcash is siloed in that you can take Zcash to Ethereum, but you can't put Ethereum assets onto Zcash. Iron Fish is aiming to be more collaborative, and we want other crypto assets to come to Iron Fish for privacy.

Oasis is a project that was more prominent in the 2017-2018 era. So I'm surprised people asked about it. They work on enclaves, so something called SGX Enclave System. I think that their privacy mechanism is dangerous to use.

Monero is similar to Zcash in that it is a siloed chain. They had a lot of community development early on, but I don't see much present development. Monero just provides privacy for Monero. It has no plans for multi-asset capabilities and providing privacy to other chains.

### What are the use cases for Iron Fish?
**Elena**: One of the questions I've seen in the chat has to do with use cases. Iron Fish is all about providing privacy. So right now, if you're using Ethereum or Bitcoin, all your transactions are out in the open. That leaves you vulnerable to efficient attacks and scams, and targeted attacks. Our main use case is to give more safety to people who use crypto.

### Are there plans to develop tools to expand the use cases for Iron Fish?
**Jason**: If you're a part of our Discord, you'll notice that people have started to build their own tools. Our goal is not to build all the tools – but we're interested in wallets and bridges.

In general, we're very excited for the community to take our project and build things that we did not even think of. People from Discord are already starting to do that. There's FishGuy, who also goes by the name Hairtail, who built [OreoScan](http://www.oreoscan.info/en), which is used by a lot of people.

Iron Fish is a privacy platform, and what we enable people to do with that platform is a big part of how we'll measure success. Building good developer tooling is a high priority for the team.

### How do you anticipate businesses using Iron Fish, and what are the benefits for businesses?
**Elena**: We have spoken to other companies in the non-crypto space who are very interested in privacy in the context of crypto. So for instance, JP Morgan – one of the largest financial institutions. They have a crypto team inside the company that has done a project called Z Ether. Z Ether is a privacy protocol for Ethereum.

EY is the biggest consulting group. Again, it's non-crypto, but one of the biggest financial consulting groups. They're actively working on something called Nightfall, which I think was adopted by the Polygon team. Nightfall, again is a privacy protocol for Ethereum or EVM-compatible chains. And then VISA has a pretty healthy crypto team as well. They are interested in privacy because they cannot operate their business in a totally transparent environment that crypto is today.

There is a clear demand that privacy is a necessity for any real financial institution to actually use crypto. We want Iron Fish to be the go-to solution for any privacy in crypto, and we're actively working to make sure that happens.

### As the Iron Fish community continues to grow and as more users adopt it, how will the project handle scalability?
**Joe (Engineer)**: We've been working a lot in the Testnet to handle some of the issues we will see with the Mainnet. You in the community helped us in Phase 2 when dealing with load testing of our transaction throughput. So we're confident in the ability of the Iron Fish network to handle transaction load for the near term and potentially even the long term.

There are many post-mainnet launch plans which will help stabilize and maintain the health of our network. We have a lot of tooling that we're building internally and projects on the roadmap to handle load testing our system to catch issues before they land on the Mainnet.

The last thing that I'll mention is that telemetry will now be an optional feature. It will be helpful if users choose to opt-in to telemetry because that will help us debug issues occurring in the decentralized network.

## Regulation
### Some exchanges and projects have excluded Russian users. Do you expect that you will be required to do the same?
**Elena**: We are a US company, so we are operating under US regulations. So I want to point out that under current US sanctions, there are some Russian individuals and some Russian banks who are on there, and all citizens of Crimea are on there, but not Russian citizens. We'll be going through the process of KYC and figuring out who's eligible for the airdrop quite soon.

### What compliance requirements does the platform meet, and how do you stay up to date with new regulations?
**Elena**: This is a question about some of the US regulations specifically for privacy coins or any coin in a securities context. I want to preface it by reminding you that the US regulatory regime is complex. We have contacted both former and current regulators at the SEC – the Securities and Exchange Commission – which oversees anything that looks like a security.

We also talk to people from FINCEN, an organization under the US Treasury Department responsible for financial crimes such as money laundering. We have talked to some people from the OCC, another regulatory body under the Treasury Department, which oversees bank charters and what's called the Bank Secrecy Act. So we have talked to quite a few people to understand to the best of our ability, how to push a privacy project forward that protects the consumer and gives them privacy without violating any requirements.

**Daniel (Engineer)**: Most people want consumer protections and privacy, and we're trying to find that balance of how you both continue regulation and give consumer privacy protection. So it's been a collaborative effort [with government] and maybe not as antagonistic as some people see from the outset.

**Elena**: That is, that is very true. Whenever we talk to people from the government, everyone is very aligned on privacy. Everyone understands that privacy is a good thing for not only US citizens but also for the world. Obviously, at Iron Fish, we have full intent of making sure bad actors do not use the system.

## Iron Fish Network and Mining
### Will node operators be able to earn rewards on the mainnet?
**Rohan**: We don't have any plans for explicit rewards right now, but we want to encourage people to run nodes and opt in on telemetry. This is something that's going to help the decentralization and integrity of our network.

### Will there be a GPU miner?
**Jason**: There already are two GPU miners that are closed-source and private. We want to make the Iron Fish mining pool an option for people, even if it doesn't have a lot of hash power. Coming up with an open-source GPU miner is in our goals, but we are probably not going to be the ones to build it; if you're interested in this type of thing, please reach out.

### What's the best response to people who criticize Iron Fish for using PoW instead of PoS (out of environmental concern)?
**Evan (Engineer)**: I'm always excited to talk about the merits of Proof of Work versus Proof of Stake. Versus Proof of Work, Proof of Stake by design empowers the largest token holders to veto the will of the network. It's a de facto oligarchy, where those who have the most tokens have the most power.

An additional point is that Proof of Work is far more battle-tested than Proof of Stake. Proof of Stake projects have very large research departments for a reason. There are unknown attack vectors for Proof of Stake.

But there's an economic dimension too. Proof of Work only becomes worth mining in areas where energy is low-cost and green. So it provides this interesting incentive to the global energy grid to produce the lowest emission, lowest cost energy possible.

Jason: We want to build the best tooling that exists in blockchain. Remember also that when we started building, Ethereum's Proof of Stake hadn't been launched. We can't work on interesting new technologies and also focus on building in Proof of Stake. It's untested technology at scale.

If you think about resources as tokens you have when you're trying to build a technology, you realize that you only have a certain number of coins to spend at one time. When you ship and your technology becomes stable, you get that currency back, and you can spend it on more things. Thinking about it in this way, you don't spend too many of your innovation tokens at once: you don't want to do many things poorly and do fewer things well.

That's the strategy of the entire engineering team. If we don't have something now, it doesn't mean that it won't be here at some point in some form in the future.

• 🎤 [Discord](https://discord.ironfish.network)

• 🐦 [Twitter](https://twitter.com/ironfishcrypto)

• 🚀 [Careers](https://ironfish.network/careers)

• 📧 [Email Updates](https://ironfish.network/#email-signup)
