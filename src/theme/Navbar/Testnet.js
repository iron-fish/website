import React from "react";

import TestnetGridElement from "./TestnetGridElement";
import SectionHeader from "./SectionHeader";

function Testnet({ condensed = false }) {
  const elementClassName = `p-2 lg:p-4 lg:mr-4 ${condensed ? '' : 'mr-2'}`
  const textClassName = `lg:ml-4 ${condensed ? 'ml-4' : 'ml-2'}`
  const className = condensed
    ? 'bg-white z-40 w-full'
    : 'absolute bg-white left-0 right-0 shadow-navbar z-40 top-5.5'
  return (
    <div className="flex">
      <div
        className={className}
        style={{ clipPath: !condensed ? "inset(0 0 -100% 0)" : undefined }}
      >
        <div
          className={`flex flex-col ${
            condensed
              ? 'w-full items-start p-2'
              : 'border-0  border-b border-t border-solid border-iflightgray items-center p-8'
          }`}
        >
          <div className={condensed ? 'w-full' : ''}>
            <div className={`flex flex-col ${condensed ? 'w-full' : ''}`}>
              {!condensed && <SectionHeader>INCENTIVIZED TESTNET</SectionHeader>}
              <div
                className={`flex ${condensed ? 'flex-col w-full' : 'flex-row'}`}
              >
                <TestnetGridElement
                  href="https://testnet.ironfish.network/leaderboard"
                  header="Testnet Leaderboard"
                  body="Earn your way to the top"
                  className={elementClassName}
                  textClassName={textClassName}
                  cubeClassName="text-ifcubepink"
                />
                <TestnetGridElement
                  href="https://testnet.ironfish.network/faq"
                  header="Testnet FAQ"
                  body="Frequently asked questions"
                  className={elementClassName}
                  textClassName={textClassName}
                  cubeClassName="text-iflightblue"
                />
                <TestnetGridElement
                  href="https://testnet.ironfish.network/dashboard"
                  header="Testnet Dashboard"
                  body="Claim your rewards"
                  className={elementClassName}
                  textClassName={textClassName}
                  cubeClassName="text-iflightblue"
                  target="_blank"
                  rel="noreferrer"
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
