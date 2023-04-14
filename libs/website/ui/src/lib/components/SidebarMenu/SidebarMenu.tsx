import NextLink from 'next/link';
import {
  Link,
  Box,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
  useDisclosure,
  Collapse,
  HStack,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useIsClient } from 'usehooks-ts';
import { useRouter } from 'next/router';
import { NAV_HEIGHT } from '../NavBar/NavBar';

type SidebarItems = Array<
  | {
      title: string;
      href: string;
    }
  | {
      title: string;
      items: Array<{
        title: string;
        href: string;
      }>;
    }
>;

const FONT_SIZE = '1rem';

export function SidebarMenu({ items }: { items: SidebarItems }) {
  const { isOpen, onToggle } = useDisclosure();
  const isClient = useIsClient();
  const isExpandable = useBreakpointValue(
    {
      base: true,
      md: false,
    },
    {
      fallback: 'md',
    }
  );

  if (!isExpandable) {
    return <MenuList items={items} />;
  }

  if (!isClient) {
    return null;
  }

  return (
    <Box borderBottom="1.5px solid black">
      <HStack
        as="button"
        onClick={onToggle}
        p={3}
        textAlign="left"
        w="100%"
        gap={2}
      >
        {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        <Text>Menu</Text>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <Box px={3} py={6}>
          <MenuList items={items} />
        </Box>
      </Collapse>
    </Box>
  );
}

function MenuList({ items }: { items: SidebarItems }) {
  const router = useRouter();

  return (
    <VStack
      align="start"
      py={{
        base: 0,
        md: 8,
      }}
      pl={{
        base: 6,
        md: 8,
      }}
      pr={{
        base: 0,
        md: 2,
      }}
      flexGrow={1}
      alignItems="stretch"
      borderRight={{
        base: 'none',
        md: '1.5px solid',
      }}
      position={{
        base: 'relative',
        md: 'sticky',
      }}
      top={{
        base: 'auto',
        md: NAV_HEIGHT,
      }}
      maxHeight={{
        base: 'none',
        md: '100vh',
      }}
      gap={1}
    >
      {items.map((item, i) => {
        if ('href' in item) {
          const isActive = router.asPath === item.href;
          return (
            <Link
              as={NextLink}
              href={item.href}
              key={item.href}
              fontWeight={isActive ? 'bold' : 'normal'}
              color={isActive ? 'inherit' : '#7f7f7f'}
            >
              {item.title}
            </Link>
          );
        }

        const isAccordionItemSelected = item.items.some((subItem) => {
          return router.asPath === subItem.href;
        });

        return (
          <Accordion
            key={i}
            defaultIndex={isAccordionItemSelected ? 0 : undefined}
            allowToggle
            border="none"
          >
            <AccordionItem border="none">
              <Text as="div" role="heading">
                <AccordionButton
                  fontSize={FONT_SIZE}
                  p={0}
                  position="relative"
                  color={isAccordionItemSelected ? 'inherit' : '#7f7f7f'}
                >
                  <Box
                    position="absolute"
                    right="100%"
                    display="flex"
                    justifyContent="center"
                    width={8}
                  >
                    <AccordionIcon />
                  </Box>
                  <Box
                    as="span"
                    fontWeight={isAccordionItemSelected ? 'bold' : 'normal'}
                    color={isAccordionItemSelected ? 'inherit' : '#7f7f7f'}
                  >
                    {item.title}
                  </Box>
                </AccordionButton>
              </Text>
              <AccordionPanel pl={2} pb={2}>
                <VStack alignItems="flex-start" gap={1}>
                  {item.items.map((subItem) => {
                    const isActive = router.asPath === subItem.href;
                    return (
                      <Link
                        as={NextLink}
                        href={subItem.href}
                        key={subItem.href}
                        textDecoration={isActive ? 'underline' : 'none'}
                        color={isActive ? 'inherit' : '#7f7f7f'}
                      >
                        {subItem.title}
                      </Link>
                    );
                  })}
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      })}
    </VStack>
  );
}
