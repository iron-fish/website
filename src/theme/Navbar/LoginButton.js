import React from 'react'

import { RawButton } from './Button'
import overrides from './overrides.module.css'

export const LoginButton = () => (
  <RawButton
    className="text-2xl md:text-base h-16 md:h-12 md:ml-4 py-3 px-6 text-center"
    colorClassName="bg-transparent text-current hover:border-black hover:bg-black hover:text-white"
  >
      <a href="/login" className={overrides.link}>
        <span>
          Login<span className="md:hidden"> to Testnet</span>
        </span>
      </a>
  </RawButton>
)
export default LoginButton
