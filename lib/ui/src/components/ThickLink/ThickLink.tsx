import { Text, TextProps, ChakraComponent } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  underlineColor: string;
} & TextProps;

export const ThickLink: ChakraComponent<'span', Props> = ({
  children,
  underlineColor,
  ...rest
}: Props) => {
  const color = underlineColor.includes('.')
    ? `var(--chakra-colors-${underlineColor.split('.').join('-')})`
    : underlineColor;

  return (
    <Text
      as="span"
      display="inline-block"
      boxShadow={`
      inset 0 calc(0.3em * -1) 0 0 white,
      inset 0 calc(0.75em * -1) 0 0 ${color}
    `}
      {...rest}
    >
      {children}
    </Text>
  );
};
