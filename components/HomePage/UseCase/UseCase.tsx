import {
  Box,
  Text,
  Container,
  FancyArrowRight,
  Flex,
  HStack,
} from '@/lib/ui';
import Link from 'next/link';
import { ReactNode } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useIsClient } from 'usehooks-ts';
import { NodeAppUIImage } from '../../NodeAppUIImage/NodeAppImage';

const messages = defineMessages({
  heading: {
    id: 'useCase.heading',
    defaultMessage: 'Find your Use Case',
  },
  description: {
    id: 'useCase.description',
    defaultMessage:
      'Iron Fish is built for everyone. Decentralized currency should be easy-to-use and convenient while offering developers a needed base for building sophisticated applications on our encrypted network.',
  },
});

export function UseCase() {
  const isClient = useIsClient();
  const { formatMessage } = useIntl();
  return (
    <Box
      bg="black"
      pt={{
        base: 24,
        lg: 32,
        xl: '150px',
      }}
      px={{
        base: 4,
      }}
    >
      <Container
        maxW="62ch"
        textAlign={{
          base: 'left',
          md: 'center',
        }}
        mb={{
          base: 16,
          md: 32,
          xl: '140px',
        }}
      >
        <Text as="h2" textStyle="h3" color="white" mb={8}>
          {formatMessage(messages.heading)}
        </Text>
        <Text color="#CCC" textStyle="lg" mb={8}>
          {formatMessage(messages.description)}
        </Text>
        <HStack justifyContent="center" gap={8}>
          <FancyLink href="/use/node-app" color="pink.400">
            The App
          </FancyLink>
          <FancyLink href="/use/get-started" color="green.400">
            The CLI
          </FancyLink>
        </HStack>
      </Container>
      {isClient && <NodeAppUIImage />}
    </Box>
  );
}

function FancyLink({
  href,
  color,
  children,
}: {
  href: string;
  color: string;
  children: ReactNode;
}) {
  return (
    <Flex
      display="inline-flex"
      alignItems="center"
      gap={3}
      as={Link}
      href={href}
      pb={4}
      position="relative"
      color={color}
      _hover={{
        '& > div:last-child': {
          w: '100%',
        },
      }}
    >
      <Text textStyle="h4" fontWeight="bold">
        {children}
      </Text>
      <FancyArrowRight />
      <Box
        w="0%"
        h="2px"
        bg="currentColor"
        position="absolute"
        bottom="0"
        left="0"
        transition="width 0.15s ease-in-out"
      />
    </Flex>
  );
}
