import React from "react"

import TestnetGridElement from "./TestnetGridElement"
import SectionHeader from "./SectionHeader"

function Company({ condensed = false }) {
  const elementClassName = `p-2 lg:p-4 lg:mr-4 ${condensed ? "" : "mr-2"}`
  const textClassName = `lg:ml-4 ${condensed ? "ml-4" : "ml-2"}`
  const className = condensed
    ? "bg-white z-40 w-full"
    : "absolute bg-white left-0 right-0 shadow-navbar z-40 top-5.5"
  return (
    <div className="flex">
      <div
        className={className}
        style={{ clipPath: !condensed ? "inset(0 0 -100% 0)" : undefined }}
      >
        <div
          className={`flex flex-col ${
            condensed
              ? "w-full items-start p-2"
              : "border-0  border-b border-t border-solid border-iflightgray items-center p-8"
          }`}
        >
          <div className={condensed ? "w-full" : ""}>
            <div className={`flex flex-col ${condensed ? "w-full" : ""}`}>
              {!condensed && <SectionHeader>COMPANY</SectionHeader>}
              <div
                className={`flex ${condensed ? "flex-col w-full" : "flex-row"}`}
              >
                <TestnetGridElement
                  href="/about"
                  header="About Us"
                  body="Learn who Iron Fish is"
                  className={`${elementClassName} ${
                    condensed ? "" : "-ml-2.5"
                  }`}
                  textClassName={textClassName}
                  cubeClassName="text-iforange"
                />
                <TestnetGridElement
                  href="/careers"
                  header="Careers"
                  body="We're hiring!"
                  className={elementClassName}
                  textClassName={textClassName}
                  cubeClassName="text-ifbeige"
                />
                <TestnetGridElement
                  href="/blog"
                  header="Blog"
                  body="What we've got to say"
                  className={elementClassName}
                  textClassName={textClassName}
                  cubeClassName="text-ifcubepink"
                />
                <TestnetGridElement
                  href="/faq"
                  header="FAQ"
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
  )
}

export default Company
