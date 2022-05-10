/* DO NOT EDIT THIS FILE DIRECTLY, INSTEAD LOOK AT update-links.js */
import React from 'react'
import styles from './links.module.css'

const links = [
  [
    "Website",
    "https://ironfish.network"
  ],
  [
    "Docs",
    "https://ironfish.network/docs"
  ],
  [
    "Github",
    "https://github.com/iron-fish"
  ],
  [
    "Twitter",
    "https://twitter.com/ironfishcrypto"
  ],
  [
    "Discord",
    "https://discord.gg/ironfish"
  ],
  [
    "Telegram",
    "https://t.me/ironfishcryptochat"
  ]
]

const Link = ({href, children}) => (<a className={styles.link} href={href}>{children}</a>)

const Links = () => (
  <div className={styles.page}>
    <h1>Links</h1>
    {links.map(([label, link]) => <Link href={link} key={link}>{label}</Link>)}
  </div>
)

export default Links