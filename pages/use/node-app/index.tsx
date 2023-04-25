import {
  Box,
  Flex,
  Hero,
  HeroImageUtil,
  LocalImage,
} from '@/lib/ui';
import { NewsletterSignUp } from '../../../components/NewsletterSignUp/NewsletterSignUp';
import eel from '../../../assets/heroImages/node-app/eel.svg';
import octopus from '../../../assets/heroImages/node-app/octopus.svg';
import wallet from '../../../assets/heroImages/node-app/node-app.svg';
import { NodeAppUIImage } from '../../../components/NodeAppUIImage/NodeAppImage';
import { useIsClient } from 'usehooks-ts';

const eelImage = eel as LocalImage;
const octopusImage = octopus as LocalImage;
const appImage = wallet as LocalImage;

export default function NodeApp() {
  const isClient = useIsClient();
  return (
    <Box bg="orange.500">
      <Hero
        bg="orange.500"
        heading="Node App"
        subheading="Built for everyone"
        description="Our desktop node app is launching soon! Sign up for our newsletter to be informed for its launch."
        borderBottom="none"
        textContainerProps={{
          pb: {
            base: '48px',
            md: '48px',
          },
        }}
        images={
          <>
            <HeroImageUtil
              image={eelImage}
              top={{
                md: '0px',
                xl: '20px',
              }}
              left={{
                md: '-120px',
                xl: '30px',
                '2xl': `calc(50vw - 700px)`,
              }}
            />
            <HeroImageUtil
              image={appImage}
              bottom={{
                md: '20px',
                xl: '15px',
              }}
              left={{
                md: '-50px',
                xl: '-20px',
                '2xl': `calc(50vw - 850px)`,
              }}
            />
            <HeroImageUtil
              image={octopusImage}
              top={{
                md: '20px',
                xl: '85px',
              }}
              right={{
                md: '-120px',
                xl: '-20px',
                '2xl': `calc(50vw - 700px)`,
              }}
            />
          </>
        }
      >
        <Flex mb="64px" justifyContent="center">
          <NewsletterSignUp bordered />
        </Flex>
      </Hero>
      <Box px={8}>{isClient && <NodeAppUIImage />}</Box>
    </Box>
  );
}
