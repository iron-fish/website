import React from 'react'

import Logo from './components/Logo'
import Close from './icons/Close'
import NavbarLinks from './Links'

import overrides from './overrides.module.css'

export function NavbarFlyout({
  flyoutVisible,
  closeFlyout,
  companyClicked,
  testnetClicked,
  companyVisible,
  testnetVisible,
}) {
  const navbarLinksProps = {
    companyClicked,
    testnetClicked,
    companyVisible,
    testnetVisible,
  }
  return (
    <div
      className={`absolute z-40 h-screen w-screen bg-white text-black font-extended transition-all overflow-y-auto ${
        !flyoutVisible ? 'pb-6' : 'pb-32'
      } md:hidden`}
      style={{ transform: flyoutVisible ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)' }}
    >
      <div className="flex flex-col px-5 max-w-xl mx-auto">
        <div className="flex mt-7 mb-10 justify-between items-center">
          <div className={overrides.logo}>
            <Logo fill="black" width={190} height={32} />
          </div>
          <button className={`${overrides.button} ${overrides.closeButton}`} onClick={closeFlyout}>
            <Close />
          </button>
        </div>
        <NavbarLinks
          condensed
          className="leading-relaxed text-4xl"
          {...navbarLinksProps}
        />
      </div>
    </div>
  )
}

export default NavbarFlyout
