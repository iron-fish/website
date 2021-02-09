/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import classes from "./styles.module.css";
import Link from "@docusaurus/Link";

const LinksBlock = ({ title, links, classes }) => {
  return (
    <div className={classes.linksBlock}>
      <p>{title}</p>
      <ul>
        {links.map((link) => (
          <li key={link.link}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

function Footer() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { themeConfig = {} } = siteConfig;
  const { footer } = themeConfig;

  if (!footer) {
    return null;
  }

  return (
    <footer className={classes.footer}>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.about}>
            <Link to="https://www.ironfish.network">
              <img src="/img/logo.svg" role="decorative" />
            </Link>
            <p>
              Iron Fish is a novel cryptocurrency focused on privacy and
              accessibility
            </p>
          </div>

          <LinksBlock
            classes={classes}
            title="Company"
            links={[
              {
                link: "/about/",
                name: "About Us",
              },
              {
                link: "/careers/",
                name: "Careers",
              },
              // { link: 'https://ironfish.network/blog/', name: t('app.footer.blog') },
            ]}
          />
          <LinksBlock
            classes={classes}
            title="Product"
            links={[
              {
                link: "https://explorer.ironfish.network/",
                name: "Block Explorer",
              },
              {
                link: "/docs/whitepaper/1_introduction",
                name: "WhitePaper",
              },
              {
                link: "/faq/",
                name: "FAQ",
              },
            ]}
          />
          <button
            href="mailto:contact@ironfish.network"
            variant="outlined"
            className={`${classes.button} button button--outline`}
          >
            Drop us a line!
          </button>
        </div>
        <div className={classes.contact}>
          <p>
            Copyright {new Date().getFullYear()} Iron Fish. All rights reserved.
          </p>
          <div className={classes.links}>
            <a href="https://t.me/ironfishcrypto">
              <img src="/img/footer/telegram.svg" alt="Telegram" />
            </a>
            <a href="https://github.com/iron-fish">
              <img src="/img/footer/github.svg" alt="Github" />
            </a>
            <a href="http://reddit.com/r/ironfish">
              <img src="/img/footer/reddit.svg" alt="Reddit" />
            </a>
            <a href="https://twitter.com/ironfishcrypto">
              <img src="/img/footer/twitter.svg" alt="Twitter" />
            </a>
            <a href="https://discord.gg/H7Mk3qacyM">
              <img src="/img/footer/discord.svg" alt="Discord" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
