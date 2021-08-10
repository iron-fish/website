import React from "react";

export default [
  <span data-ty="input">ironfish faucet</span>,
  <span data-ty className="notVisibleOnMobile">
    {`
::::::::::          :::::::::::::::::
::::::::::::       :::::::::::::::::::
:::::::::::::     :::::::::::::::::::::
::::::::::::::   ::::::::::::::::::::::::
 ::::::::::::: ::::::::::        :::::::::
   :::::::::::::::::::::          ::::::::::
   :::::::::::::::::::::          :::::::::
 ::::::::::::: ::::::::::        :::::::::
::::::::::::::   ::::::::::::::::::::::::
:::::::::::::     :::::::::::::::::::::
::::::::::::       :::::::::::::::::::
::::::::::           ::::::::::::::::
`}
  </span>,
  <span data-ty>
    {`
Receive funds, check your balance and send money.

Thanks for contributing to Iron Fish!
`}
  </span>,
  <span
    data-ty="input"
    data-ty-type-delay="400"
    data-ty-prompt="Enter your email to stay updated with Iron Fish:"
  >
    newfish@ironfish.network
  </span>,
  <span data-ty="progress"></span>,
  <span data-ty>
    {`
Added newfish@ironfish.network to our newsletter.
Faucet request successfully added to the queue for key: 12a3e7fa7c09eedfdb1a4c4c87a7cf9a45bd8dab6982c82b59685d5c03486429a5f32faf4375aeb9e79e6b.
`}
  </span>,
  <span data-ty className="notVisibleOnMobile">
    {`
::::::::::          :::::::::::::::::             ::::::::::          :::::::::::::::::
::::::::::::       :::::::::::::::::::            ::::::::::::       :::::::::::::::::::
:::::::::::::     :::::::::::::::::::::           :::::::::::::     :::::::::::::::::::::
::::::::::::::   ::::::::::::::::::::::::         ::::::::::::::   ::::::::::::::::::::::::
 ::::::::::::: ::::::::::        :::::::::         ::::::::::::: ::::::::::        :::::::::
   :::::::::::::::::::::          ::::::::::         :::::::::::::::::::::          ::::::::::
   :::::::::::::::::::::          :::::::::          :::::::::::::::::::::          :::::::::
 ::::::::::::: ::::::::::        :::::::::         ::::::::::::: ::::::::::        :::::::::
::::::::::::::   ::::::::::::::::::::::::         ::::::::::::::   ::::::::::::::::::::::::
:::::::::::::     :::::::::::::::::::::           :::::::::::::     :::::::::::::::::::::
::::::::::::       :::::::::::::::::::            ::::::::::::       :::::::::::::::::::
::::::::::           ::::::::::::::::             ::::::::::           ::::::::::::::::
`}
  </span>,
  <span data-ty>
    {`
Congratulations! The Iron Fish Faucet just sent funds to your account!

Check your balance by running:
- ironfish accounts:balance

Learn how to send a transaction by running:
- ironfish accounts:pay --help
`}
  </span>,
];
