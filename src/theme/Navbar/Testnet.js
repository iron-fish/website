import React from "react";

import TestnetGridElement from "./TestnetGridElement";
import SectionHeader from "./SectionHeader";
import overrides from "./overrides.module.css";

function Testnet({ condensed = false }) {
  const elementClassName = `py-4 ${condensed ? "px-2" : "px-6"}`;
  const textClassName = `ml-4`;
  const className = condensed
    ? "bg-white z-10 w-full"
    : "absolute bg-white left-0 right-0 shadow-navbar z-20 top-5.5";
  return (
    <div className="flex">
      <div
        className={className}
        style={{ clipPath: !condensed ? "inset(0 0 -100% 0)" : undefined }}
      >
        <div
          className={`flex justify-center ${
            condensed
              ? "flex-col"
              : `border-0 border-b border-t border-solid border-iflightgray flex-row`
          }`}
        >
          <div
            className={`flex ${
              condensed
                ? `justify-start p-4`
                : `justify-end border-0 border-r border-solid border-iflightgray p-8 pb-10`
            }`}
          >
            <div style={{ maxWidth: condensed ? undefined : "14rem" }}>
              <SectionHeader>IRON FISH CLI</SectionHeader>
              <div className="text-ifgray">
                <h4
                  className={`text-xl text-black mb-1 ${overrides.testnetH4}`}
                >
                  Installation Guide
                </h4>
                <p className="font-favorit text-sm mb-2">
                  An in-depth walkthrough of how to set up Iron Fish on your
                  machine.
                </p>
                <a
                  href="https://ironfish.network/docs/onboarding/iron-fish-tutorial"
                  className={`flex font-favorit text-sm ${overrides.link}`}
                >
                  <span>Read the walkthrough</span>
                  <span className="ml-2">&#x203A;</span>
                </a>
              </div>
            </div>
          </div>
          <div className={`flex ${condensed ? "p-4" : "p-8 pl-14"} pb-12`}>
            <div className={condensed ? "w-full" : ""}>
              <SectionHeader>INCENTIVIZED TESTNET</SectionHeader>
              <div
                className={
                  condensed
                    ? "flex flex-col w-full"
                    : "grid grid-rows-2 grid-cols-2 gap-4 -ml-6"
                }
              >
                <TestnetGridElement
                  href="/about"
                  header="About the Testnet"
                  body="How to earn points"
                  className={elementClassName}
                  textClassName={textClassName}
                  cubeClassName="text-iforange"
                />
                <TestnetGridElement
                  href="/leaderboard"
                  header="Testnet Leaderboard"
                  body="Earn your way to the top"
                  className={elementClassName}
                  textClassName={textClassName}
                  cubeClassName="text-ifcubepink"
                />
                <TestnetGridElement
                  href="/faq"
                  header="Testnet FAQ"
                  body="Frequently asked questions"
                  className={elementClassName}
                  textClassName={textClassName}
                  cubeClassName="text-iflightblue"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testnet;
