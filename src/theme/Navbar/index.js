import React from "react";
import { useLocation } from "@docusaurus/router";

import Logo from "./components/Logo";
import Menu from "./icons/Menu";
import { useNav, NavState } from "./hooks/useNav";

import NavbarLinks from "./Links";
import NavbarFlyout from "./Flyout";

import overrides from "./overrides.module.css";

function Navbar({ fill = "white", className = "bg-black text-white" }) {
  const {
    isCompanyVisible,
    isTestnetVisible,
    $flyoutVisible,
    $setFlyoutVisible,
    $subnavState,
    toggleNavCompany,
    enterNavCompany,
    toggleNavTestnet,
    enterNavTestnet,
    hideNav,
  } = useNav();
  const companyVisible = isCompanyVisible();

  const testnetVisible = isTestnetVisible();
  const navBarLinksProps = {
    companyVisible,
    companyHovered: enterNavCompany,
    companyClicked: toggleNavCompany,
    testnetVisible,
    testnetHovered: enterNavTestnet,
    testnetClicked: toggleNavTestnet,
  };

  const isBlueHeader = [
    "/",
    "/jd-backend",
    "/jd-cryptographer",
    "/jd-mobile",
    "/blog",
    "/blog/",
  ].includes(useLocation().pathname);
  className = isBlueHeader ? "bg-ifblue text-white" : "bg-white text-black";

  return (
    <nav
      className={`font-extended relative group hover:bg-white hover:shadow-navbar hover:text-black ${
        $subnavState !== NavState.NONE ? "bg-white text-black" : className
      }`}
      onMouseLeave={() => {
        if (!$flyoutVisible) {
          hideNav();
        }
      }}
    >
      <NavbarFlyout
        flyoutVisible={$flyoutVisible}
        closeFlyout={() => $setFlyoutVisible(false)}
        {...navBarLinksProps}
      />
      <div className="flex items-stretch justify-between px-3 lg:px-10 2lg:px-16 max-w-menu m-auto">
        <div className="py-7">
          <a href="/" className={overrides.logoLink}>
            <Logo fill={fill} width={190} height={32}></Logo>
          </a>
        </div>
        <div className="hidden md:flex items-center lg:text-xl">
          <NavbarLinks
            className="px-1.5 lg:px-3 h-full flex items-center whitespace-nowrap transition-font transition-fast transition-padding"
            {...navBarLinksProps}
          />
        </div>
        <button
          className={`md:hidden ${overrides.button} ${overrides.menuButton}`}
          onClick={() => $setFlyoutVisible(true)}
        >
          <Menu />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
