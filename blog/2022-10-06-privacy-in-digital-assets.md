---
author: Craig Timm
author_title: General Counsel @ Iron Fish
author_url: https://twitter.com/craigmtimm
author_image_url: /img/blog/craig.jpeg
author_description: Craig is the General Counsel of Iron Fish, previously at Bank of America and Department of Justice.
hide_table_of_contents: true
title: The Importance of Responsible Privacy in Digital Assets
description: A paper that the Iron Fish team submitted to the Treasury Department in response to their request to comment on the recent digital asset EO.
image: /img/blog/privacy_digital_assets.png
tags: [ironfish, privacy, treasury, department]
---

In the Executive Order on “Ensuring Responsible Development of Digital Assets,” President Biden made clear that the United States should be at the forefront of the development and design of digital assets.[1] To do so, the President said the United States should ensure that there are safeguards “to protect consumers, investors, and businesses; maintain privacy; and shield against arbitrary or unlawful surveillance, which can contribute to human rights abuses.”[2] While there has been much discussion (rightfully so) on how to better protect consumers, investors, and businesses, largely absent from the dialogue thus far has been the lack of safeguards to maintain privacy on most blockchains today. As the President acknowledged, this lack of privacy can lead to arbitrary and unlawful surveillance that can impact fundamental human rights like freedom of speech, religion, and the right to assemble. What seems to be less appreciated is how the lack of privacy on blockchains also presents national security, cybercrime, and consumer protection risks.[3] Improving privacy on blockchains is essential to mitigating these risks and ensuring the technology is developed in a way that promotes democratic values.

## Lack of Privacy on Most Blockchains

Many people do not realize that, on most blockchains, all of your digital assets and all of your transactions are available for the world to see. Yes, many wallets used to hold digital assets are pseudonymous, so your name is not immediately connected to your assets. But it’s not hard to put two and two together. Anytime you use digital assets to buy anything or transfer digital assets to someone else, that person or that company now knows that wallet address belongs to you. Even if you have not directly interacted with someone else’s wallet, pseudonymity is relatively easy to overcome using data analytics.[4] Once someone knows your wallet address, they can see everything in your wallet, every transaction you’ve ever made, and follow every transaction you will make going forward in near real-time.
This matters because our spending is a window into many of the most personal aspects of our lives. If someone knows what you buy and who you transact with they could learn, among other things, where you live, where you work, who your family is, who your friends are, your interests, your political or religious beliefs, your sexual orientation, your medical conditions, or whether you receive mental health treatment.

## More and More Americans are Using Digital Assets

According to a March 2022 NBC News poll, 1 in 5 Americans have invested in, traded, or used digital assets.[5] That number goes up to 50% for men ages 18 to 49, 42% for all people ages 18 to 34, and 40% for Black Americans.[6] According to blockchain analytics firm Chainalysis, the total transaction volume across all digital assets was up 567% in 2021 to $15.8 trillion.[7] Digital asset adoption is increasing at such a significant pace that, according to research by Deloitte, nearly 75% of businesses expect to accept digital assets as payment within the next two years.[8]

## The Ever Increasing Amount of Public Data on Blockchains Creates Significant Risks

As more and more Americans use digital assets, they are, intentionally or unintentionally, publicly revealing more and more personal information about themselves and others. The result is an unprecedented and ever increasing amount of financial data available on U.S. citizens for the entire world to capture, analyze, and potentially exploit. This publicly available data presents national security, cybercrime, and consumer protections risks.

## National Security Risks

We know that foreign governments already collect and exploit U.S. citizens’ data through various channels for various purposes. For years, China has embarked on a campaign to steal the personal data of American citizens and businesses.[9] They use this data to drive artificial intelligence, research and development programs, and to facilitate their military and economic goals.[10] More recently, China has turned its internal surveillance network outward by analyzing Western social media and other publicly available data to provide information on foreign targets and government critics to the Chinese government, military, and police.[11]

Making things easier, private businesses now gather personal information about Americans and sell it to foreign companies and governments. These data brokers sell information ranging from records of cell phone locations to credit card purchases to web browsing histories. A bi-partisan group of U.S. Senators recently sponsored a bill that seeks to prevent data brokers from selling or transferring Americans’ data to certain high risk jurisdictions.[12] “Data brokers dolling out American’s personal information to companies in foreign nations can be more than a violation of privacy - it can be a serious national security threat. We need sensible rules of the road to prevent our personal data from falling into the wrong hands,” Senator Sheldon Whitehouse (D - R.I.) said. “It is common sense to prevent our adversaries from obtaining the highly sensitive personal information of millions of Americans,” said Senator Marco Rubio (R - Fla.). “Our bill would address this massive national security threat and protect Americans’ privacy.”

The data on blockchains is just as ripe for exploitation as the data obtained through hacks, social media, or data brokers, as it can give foreign adversaries a window into so many different aspects of Americans’ lives. Equally concerning, it gives foreign governments the ability to track users’ activity and movements in near real-time, as transactions publicly post to most blockchains within 10 minutes. So if I buy a cup of coffee at my local coffee shop using most digital assets, a foreign government can know where I am within 10 minutes.

While the government is taking steps to make the exploitation of Americans’ personal data more difficult in certain areas, it appears to be actively discouraging attempts to bring more privacy to blockchains. For example, in the Treasury Department’s recent “Action Plan to Address Illicit Financing Risk of Digital Assets,” every reference to technology that could bring more privacy to blockchains was negative, each time associating the desire for privacy with criminal motives.[13]

## Cybercrime and Consumer Protection Risks

Publicly available data on blockchains also helps criminals use “social engineering” to execute cybercrime and fraud schemes. Social engineering involves criminals gathering and using information about their victims to trick them into giving them money, information, or access to systems. With more publicly available information, criminals are able to more effectively develop personalized schemes and stories to trick their victims.

Social engineering has increased at an alarming rate in recent years. According to World Bank analysis, 98% of cyberattacks use social engineering techniques.[14] In the first nine months of 2022, the FBI has put out at least twenty-five different Consumer and Industry Alerts related to cybercrime and fraud schemes that involve social engineering.[15]

In the digital asset space, crimes that often involve social engineering are by far the largest percentage of digital asset-based crime. According to Chainalysis, in 2021, scams accounted for 55% of all digital asset-based crime at a loss to victims of $7.7 billion.[16]If you add in theft and ransomware, which also often begin with social engineering, these three categories of crime account for $11 billion in illicit proceeds or 78.5% of all digital asset-based crime.[17]

I’ve seen first hand how criminals use blockchain data to social engineer their fraud schemes. In early 2022, I donated a small amount of cryptocurrency via a transparent blockchain to the official Ukrainian government wallet to buy defensive equipment for Ukrainian citizens defending their country. Shortly after, I received an unsolicited NFT “air dropped” into my wallet that purported to support the Ukrainian cause. It’s possible this was a legitimate project, but it’s more likely that it was a scam. Because criminals could see that I had sent cryptocurrency to support Ukraine using a blockchain, they could use that information to target their schemes against me. From there, they were hoping that I would let my guard down and either click on a malicious link or send them money under false pretenses. And I’m sure I’m not the only one. According to blockchain analytics company TRM Labs, between February 22 and March 28, 2022, Ukraine received more than $135.7 million in cryptocurrency donations.[18] If the scammers are collecting and exploiting this data, it’s safe to assume the Russian government is probably doing the same thing.

## Bringing Privacy to Blockchains Using Zero Knowledge Proofs

When Bitcoin and Ethereum were first developed, the technology did not sufficiently exist to have decentralized, trustless blockchains with privacy. Today, the technology, while still relatively nascent and developing, does exist in the form of zero knowledge proofs. Zero knowledge proofs are a form of advanced math that allows someone to prove that a statement is true without revealing anything about why it’s true.

The concept of zero knowledge proofs can be counterintuitive and is often best understood through examples.[19] Imagine we are both looking at a “Where’s Waldo?” book. “Where’s Waldo?” books have a series of drawings with very crowded scenes of people, animals, and things where the reader’s goal is to find Waldo, in his red and white striped shirt and hat, hidden somewhere in the scene. Imagine now that I’ve found Waldo and want to prove to you that I have found him without revealing his location so you can continue looking. To do so, I take the book and bring it behind a large poster board with one very small hole in the board. While I’m behind the board with you on the other side, I adjust the book so that you can see Waldo through that very small hole that I’ve cut in the poster board, but nothing else. I’ve now proven to you that I know where Waldo is, without revealing anything else to you about where he might be on the page. This is an example of a zero knowledge proof in one of its simplest forms.

Zero knowledge proofs have the potential to make everything we do on the internet more private and secure. Imagine if you could login to a website or computer network without entering your password, but using a zero knowledge proof that proves that you know the password without actually having to reveal the password. Then, even in the event of a hack, your password would not be available for the hacker to steal.

In the blockchain context, zero knowledge proofs allow me to prove to all of the miners or validators, whose job is to ensure that what gets recorded on the blockchain is accurate, that I have enough digital assets in my wallet to pay for the transaction I’ve just made without having to show the amount of the transaction, how much is in my wallet, or any of my transactions prior to that point. The miners or validators are then able to record that the transaction occurred on the blockchain without seeing or revealing any of the details about the transaction.

## Responsible Development of Privacy on Blockchains

Greater privacy on blockchains is necessary for the responsible development of digital assets. It’s needed to protect national security. It’s needed to protect consumers and businesses. It’s needed to allow for more commercial use. And it’s needed to ensure that the technology is designed and developed to promote democratic values and not surveillance and censorship.

That said, this same technology that has the potential to protect U.S. interests, citizens, and businesses could be exploited by criminals to help conceal their illicit activity. As a country, we need to try to strike the right balance between protecting privacy and trying to keep bad actors from exploiting it. Technology is almost certainly part of the solution. Privacy preserving technologies and wallets can be built with “view keys” that enable the owners of the wallet to reveal their transaction history to regulated entities and others as necessary to show that they have not been involved in illicit activity. The development of decentralized controls is also almost certainly another part of the solution. Things like screening wallet addresses for sanctions or other criminal exposure, waiting periods for higher risk addresses when moving between blockchains or protocols, and other ways to make it more difficult for criminals to move digital assets in decentralized finance. Finally, continuing to help regulated entities improve their anti-money laundering and fraud controls of the on-ramps and off-ramps between fiat currency and digital assets is also almost certainly part of the solution.

But whatever the solution ends up needing to be, it will be better if the public and private sectors work together in developing it. If America wants to be at the forefront of the responsible development of digital assets, it needs to be at the forefront in bringing greater privacy to blockchains in a responsible way. At Iron Fish, we are committed to collaborating with legislators, policy makers, regulators, law enforcement, builders, and other members of the public and private sectors on ways to bring greater privacy to blockchains while having the right controls in place to prevent rogue regimes, terrorists, and criminals from exploiting it.

Craig Timm  
Iron Fish  
General Counsel

---

[1] “Ensuring Responsible Development of Digital Assets,” Exec. Order No. 14067, 87 FR 14143 (2022).

[2] Id.

[3] The Treasury Department’s September 2022 “Action Plan to Address Illicit Financing Risks of Digital Assets” (the “Treasury Action Plan”) did not mention any national security or illicit finance risks that come as a result of the lack of privacy on blockchains. https://home.treasury.gov/system/files/136/Digital-Asset-Action-Plan.pdf.

[4] See, Treasury Action Plan at 6 (“regulators and law enforcement can in some cases take viewable pseudonymous user and transaction information and pair it with other pieces of information to identify transactions participants.”) See also, Sherman, Justin. (2021, December 18). “Big Data May Not Know Your Name But It Knows Everything Else.” Wired. www.wired.com/story/big-data-may-not-know-your-name-but-it-knows-everything-else/. (citing multiple examples of how easy it is to overcome pseudonymity using publicly available data).

[5] Franck, Thomas. (2021, March 31). “One in five adults has invested in, traded or used cryptocurrency, NBC News poll shows.” CNBC.
www.cnbc.com/2022/03/31/cryptocurrency-news-21percent-of-adults-have-traded-or-used-crypto-nbc-poll -shows.html.

[6] Id.

[7] Chainalysis. (2022). The 2022 Crypto Crime Report. https://go.chainalysis.com/rs/503-FAP-074/images/Crypto-Crime-Report-2022.pdf at 3.

[8] Deloitte. (2022). Merchants getting ready for crypto. www.deloitte.com/content/dam/Deloitte/us/Documents/technology/us-cons-merchant-getting-ready-for-cry pto.pdf.

[9] The Comprehensive Threat To America Posed By the Communist Party of China (CCP): Hearing before the Senate Select Committee on Intelligence, (2021) (statement of William R. Evanina). www.intelligence.senate.gov/sites/default/files/documents/os-bevanina-080421.pdf. (“It is estimated that 80% of American adults have had all of their personal data stolen by the CCP, and the other 20 percent most of their personal data.”).

[10] Id.

[11] Cadell, Cate. (2021, December 31). “China harvests masses of data on Western targets, documents show.” The Washington Post. www.washingtonpost.com/national-security/china-harvests-masses-of-data-on-western-targets-document s-show/2021/12/31/3981ce9c-538e-11ec-8927-c396fa861a71_story.html.

[12] United States Senator Ron Wyden. (2022, June 23). Wyden, Lummis, Whitehouse, Rubio and Hagerty Introduce Bipartisan Legislation to Protect Americans’ Private Data from Hostile Foreign Governments
[Press Release]. www.wyden.senate.gov/news/press-releases/wyden-lummis-whitehouse-rubio-and-hagerty-introduce-bip artisan-legislation-to-protect-americans-private-data-from-hostile-foreign-governments.

[13] See Treasury Action Plan at 2, 3, 4, and 5.

[14] Johns, Kimberly. (2021, January 7). “Social engineering as a corruption risk.” The World Bank. https://blogs.worldbank.org/governance/social-engineering-corruption-risk. (citing data from https://purplesec.us/resources/cyber-security-statistics/#SocialEngineering).

[15] See “Consumer Alerts” and “Industry Alerts.” FBI Internet Crime Complaint Center (IC3). www.ic3.gov/. Accessed September 2022.

[16] The 2020 Crypto Crime Report at 79.

[17] Id. at 38, 70.

[18]“Update on Ukrainian Crypto Donations.” (2022, March 30). TRM. https://www.trmlabs.com/post/update-on-ukrainian-crypto-donations.

[19] For a good description of zero knowledge proofs with several examples, see the linked video where Computer scientist Amit Sahai, PhD explains the concept of zero-knowledge proofs to 5 different people; a child, a teen, a college student, a grad student, and an expert. “Zero knowledge, explained - at 5 Levels of Difficulty.” (2022, January 18). Wired. https://www.youtube.com/watch?v=fOGdb1CTu5c.
