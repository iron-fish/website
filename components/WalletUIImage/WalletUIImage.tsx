import { useBreakpointValue, Flex } from '@/lib/ui';
import Image from 'next/image';

export function WalletUIImage() {
  const imageProps = useBreakpointValue(
    {
      base: {
        src: '/images/shared/wallet-ui/wallet-ui-base.svg',
        width: 382,
        height: 216,
      },
      sm: {
        src: '/images/shared/wallet-ui/wallet-ui-md.svg',
        width: 832,
        height: 471,
      },
      lg: {
        src: '/images/shared/wallet-ui/wallet-ui-lg.svg',
        width: 1016,
        height: 471,
      },
      xl: {
        src: '/images/shared/wallet-ui/wallet-ui-xl.svg',
        width: 1151,
        height: 471,
      },
      '2xl': {
        src: '/images/shared/wallet-ui/wallet-ui-2xl.svg',
        width: 1364,
        height: 478,
      },
    },
    {
      ssr: false,
    }
  );
  return imageProps ? (
    <Flex justifyContent="center">
      <Image {...imageProps} alt="" />
    </Flex>
  ) : null;
}
