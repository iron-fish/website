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
        {links.map((link) =>
          link.isDownload ? (
            <li key={link.link}>
              <Link to={link.link} target="_blank" download>
                {link.name}
              </Link>
            </li>
          ) : (
            <li key={link.link}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          )
        )}
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
            <Link to="https://www.ironfish.network" target="_self">
              <img
                src="/img/logo.svg"
                alt="Iron Fish index"
                width="165"
                height="18"
                role="presentation"
              />
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
              {
                link: "/blog/",
                name: "Blog",
              },
              {
                link: "/docs/privacy/",
                name: "Privacy Policy",
              },
            ]}
          />
          <LinksBlock
            classes={classes}
            title="Product"
            links={[
              // {
              //   link: "/docs/onboarding/iron-fish-tutorial",
              //   name: "Get started",
              // },
              {
                link: "https://explorer.ironfish.network/",
                name: "Block Explorer",
              },
              {
                link: "/docs/whitepaper/1_introduction",
                name: "Whitepaper",
              },
              {
                link: "/faq/",
                name: "FAQ",
              },
              {
                link: "/img/iron_fish.zip",
                name: "Brand Assets",
                isDownload: true,
              },
            ]}
          />
          <a href="mailto:contact@ironfish.network">
            <button
              variant="outlined"
              className={`${classes.button} button button--outline`}
            >
              Drop us a line!
            </button>
          </a>
        </div>
        <div className={classes.contact}>
          <p>
            Copyright {new Date().getFullYear()} Iron Fish. All rights reserved.
          </p>
          <div className={classes.links}>
            <a href="https://t.me/ironfishcryptochat">
              <img
                src="/img/footer/telegram.svg"
                width="14"
                height="16"
                alt="Telegram"
                target="_blank"
                rel="noreferrer"
              />
            </a>
            <a href="https://github.com/iron-fish">
              <img
                src="/img/footer/github.svg"
                width="16"
                height="16"
                alt="Github"
                target="_blank"
                rel="noreferrer"
              />
            </a>
            <a href="http://reddit.com/r/ironfish">
              <img
                src="/img/footer/reddit.svg"
                width="17"
                height="16"
                alt="Reddit"
                target="_blank"
                rel="noreferrer"
              />
            </a>
            <a href="https://twitter.com/ironfishcrypto">
              <img
                src="/img/footer/twitter.svg"
                width="17"
                height="16"
                alt="Twitter"
                target="_blank"
                rel="noreferrer"
              />
            </a>
            <a href="https://discord.gg/EkQkEcm8DH">
              <img
                src="/img/footer/discord.svg"
                width="15"
                height="16"
                alt="Discord"
                target="_blank"
                rel="noreferrer"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
