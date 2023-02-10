import React from "react";
import { RawButton } from "./Button";

export const LoginButton = () => (
  <RawButton
    className="text-2xl md:text-base h-16 md:h-12 md:ml-4 py-3 px-6 text-center"
    colorClassName="bg-transparent text-current hover:border-black hover:bg-black hover:text-white"
    as="a"
    href="https://testnet.ironfish.network/login"
    target="_blank"
    rel="noreferrer"
  >
    <span>
      Login<span className="md:hidden"> to Testnet</span>
    </span>
  </RawButton>
);
export default LoginButton;
