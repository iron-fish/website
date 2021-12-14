import React from "react";
import clsx from "clsx";

import SubnavButton from "./SubnavButton";
import LoginButton from "./LoginButton";
import Company from "./Company";
import Testnet from "./Testnet";

import overrides from "./overrides.module.css";

export function NavbarLinks({
  className = "",
  selectedClassName = "absolute left-0 right-0 bottom-0 border-b-2 border-black",
  companyClicked,
  companyHovered,
  companyVisible = false,
  testnetClicked,
  testnetHovered,
  testnetVisible = false,
  condensed,
}) {
  const itemPadding = [`px-2`, `lg:px-3.5`, `3xl:px-5`];
  const cc = clsx([
    className,
    ...itemPadding,
    overrides.button,
    { [overrides.condensedSubNavButton]: condensed },
    { [overrides.regularSubNavButton]: !condensed },
  ]);
  const buttonStyles = { className: cc, selectedClassName };

  const linkClass = `${cc} ${overrides.link}`;

  return (
    <>
      <a className={linkClass} href="/docs/onboarding/iron-fish-tutorial">
        Get Started
      </a>
      <a className={linkClass} href="/docs/whitepaper/1_introduction">
        Whitepaper
      </a>
      <a className={linkClass} href="/roadmap">
        Roadmap
      </a>
      <SubnavButton
        label="Company"
        {...buttonStyles}
        isVisible={companyVisible}
        toggle={companyClicked}
        enter={companyHovered}
        condensed={condensed}
      >
        {companyVisible && <Company condensed={condensed} />}
      </SubnavButton>
      <SubnavButton
        label="Testnet"
        {...buttonStyles}
        isVisible={testnetVisible}
        toggle={testnetClicked}
        enter={testnetHovered}
        condensed={condensed}
      >
        {testnetVisible && <Testnet condensed={condensed} />}
      </SubnavButton>
      <LoginButton />
    </>
  );
}
export default NavbarLinks;
