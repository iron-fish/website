import { Button, Box, ButtonProps, ChakraComponent } from '@chakra-ui/react';
import { useMemo } from 'react';
import { FancyArrowRight } from '../../icons';

type Props = Omit<ButtonProps, 'size' | 'colorScheme'> & {
  size?: 'sm' | 'lg';
  colorScheme?: 'pink' | 'white';
};

export const ArrowButton: ChakraComponent<'button', Props> = ({
  children,
  size = 'lg',
  colorScheme = 'pink',
  ...rest
}: Props) => {
  const gap = useMemo(() => {
    if (size === 'sm') return 2;
    if (size === 'lg') return 4;
  }, [size]);
  const arrowScale = useMemo(() => {
    if (size === 'sm') return 'scale(0.8)';
    if (size === 'lg') return 'scale(1)';
  }, [size]);
  const py = useMemo(() => {
    if (size === 'sm') return 4;
    if (size === 'lg') return undefined;
  }, [size]);
  const colorStyles = useMemo(() => {
    if (colorScheme === 'pink') {
      return {
        bg: 'pink.500',
        _hover: { bg: 'purple.500' },
        _focus: { bg: 'purple.500' },
      };
    }
    return {
      bg: 'white',
      _hover: { bg: 'gray.100' },
      _focus: { bg: 'gray.100' },
    };
  }, [colorScheme]);

  return (
    <Button size={size} py={py} {...colorStyles} {...rest}>
      <Box mr={gap}>{children}</Box>
      <Box transform={arrowScale}>
        <FancyArrowRight />
      </Box>
    </Button>
  );
};
