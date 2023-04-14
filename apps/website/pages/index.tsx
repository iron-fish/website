import { Box } from '@ironfish/website/ui';
import { Community } from '../components/HomePage/Community/Community';
import { Hero } from '../components/HomePage/Hero/Hero';
import { UseCase } from '../components/HomePage/UseCase/UseCase';
import { Whitepaper } from '../components/HomePage/Whitepaper/Whitepaper';
import { WhyIronFish } from '../components/HomePage/WhyIronFish/WhyIronFish';
import { MainnetCountdownModal } from '../components/MainnetCountdown/Modal/MainnetCountdownModal';

export default function Index() {
  return (
    <Box>
      <Hero />
      <Whitepaper />
      <UseCase />
      <WhyIronFish />
      <Community />
      <MainnetCountdownModal />
    </Box>
  );
}
