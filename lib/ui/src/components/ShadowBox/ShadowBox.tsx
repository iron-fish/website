import { Box, BoxProps } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
  shadowColor?: BoxProps['bg'];
  offset?: string;
} & Omit<BoxProps, 'children'>;

export function ShadowBox({
  children,
  shadowColor = 'pink.500',
  offset = '6px',
  borderRadius = '1.5px',
  ...rest
}: Props) {
  return (
    <Box
      position="relative"
      pr={offset}
      pb={offset}
      display="flex"
      alignItems="stretch"
      justifyContent="stretch"
      w="100%"
    >
      <Box
        border="1.5px solid black"
        position="absolute"
        borderRadius={borderRadius}
        inset={0}
        mt={offset}
        ml={offset}
        bg={shadowColor}
      />
      <Box
        bg="white"
        border="1.5px solid black"
        borderRadius={borderRadius}
        position="relative"
        w="100%"
        {...rest}
      >
        {children}
      </Box>
    </Box>
  );
}
