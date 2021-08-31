import { useCallback, useEffect, useState } from 'react'

export const NavState = {
  NONE: 'hidden',
  COMPANY: 'company',
  TESTNET: 'testnet',
}

export function useNav() {
  const [$flyoutVisible, $setFlyoutVisible] = useState(false)
  const [$subnavState, $setSubnavState] = useState(NavState.NONE)

  const hideNav = useCallback(() => {
    if ($subnavState !== NavState.NONE) {
      $setSubnavState(NavState.NONE)
    }
  }, [$subnavState, $setSubnavState])

  useEffect(() => {
    if ($flyoutVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }
  }, [$flyoutVisible])

  const isCompanyVisible = useCallback(
    () => $subnavState === NavState.COMPANY,
    [$subnavState]
  )

  const isTestnetVisible = useCallback(
    () => $subnavState === NavState.TESTNET,
    [$subnavState]
  )

  const toggleNavCompany = useCallback(
    () =>
      $setSubnavState(
        $subnavState === NavState.COMPANY ? NavState.NONE : NavState.COMPANY
      ),
    [$setSubnavState, $subnavState]
  )
  const enterNavCompany = useCallback(() => {
    if ($subnavState !== NavState.COMPANY) {
      $setSubnavState(NavState.COMPANY)
    }
  }, [$setSubnavState, $subnavState])

  const toggleNavTestnet = useCallback(
    () =>
      $setSubnavState(
        $subnavState === NavState.TESTNET ? NavState.NONE : NavState.TESTNET
      ),
    [$setSubnavState, $subnavState]
  )
  const enterNavTestnet = useCallback(() => {
    if ($subnavState !== NavState.TESTNET) {
      $setSubnavState(NavState.TESTNET)
    }
  }, [$setSubnavState, $subnavState])

  return {
    $flyoutVisible,
    $setFlyoutVisible,
    $subnavState,
    $setSubnavState,
    hideNav,
    toggleNavCompany,
    enterNavCompany,
    toggleNavTestnet,
    enterNavTestnet,
    isTestnetVisible,
    isCompanyVisible,
  }
}
export default useNav
