import {
  Heading,
  Grid,
  Box,
  Text,
  GridItem,
  Container,
  Button,
  FancyArrowRight,
  AspectRatio,
} from '@ironfish/website/ui';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <Container
      maxW={{
        base: '704px',
        lg: '1600px',
      }}
      w="100%"
      mb={{
        base: 24,
        md: 32,
        xl: '150px',
      }}
      pl={{
        lg: '40px',
        xl: '64px',
        '2xl': '128px',
      }}
    >
      <Grid
        templateColumns={{
          base: '1fr',
          lg: 'repeat(2, 1fr)',
        }}
        w="100%"
        gap={{
          base: '4rem',
          lg: '2rem',
        }}
      >
        <GridItem display="flex" alignItems="center">
          <Box
            padding={{
              base: '4rem 0 0',
              lg: '2.5rem 0 2.5rem',
              '2xl': '6.5rem 6rem 6rem 0',
            }}
          >
            <Heading as="h1" size="h1" mb={4}>
              Seamless, Safe Crypto
            </Heading>
            <Text textStyle="lg" mb={10}>
              Iron Fish encrypts every transaction, shielding your sensitive
              asset information from public view. With read-only view keys, you
              remain compliant and in control
            </Text>
            <Button size="lg" as={Link} href="/use/get-started">
              <Box mr={4}>Get Started</Box>
              <FancyArrowRight />
            </Button>
          </Box>
        </GridItem>
        <GridItem position="relative">
          <Box
            mt={{
              base: 0,
              lg: 4,
            }}
          >
            <AspectRatio position="relative" ratio={1}>
              <Image
                src="/images/home/hero-fish.svg"
                alt=""
                style={{ objectFit: 'contain' }}
                fill
              />
            </AspectRatio>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
