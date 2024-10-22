import {
  AspectRatio,
  Box,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { useToggle } from "usehooks-ts";

const TRANSITION_SPEED = "0.15s";

export function VideoPopup({
  children,
  videoUrl,
}: {
  children: ReactNode;
  videoUrl: string;
}) {
  const [isOpen, toggleIsOpen] = useToggle(false);
  return (
    <>
      <Box
        as="button"
        onClick={toggleIsOpen}
        _hover={{
          ".play-button": {
            backgroundColor: "#F2B2FF",
          },
          ".shade": {
            opacity: 1,
          },
        }}
      >
        {children}
        <Box
          className="shade"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="rgba(0, 0, 0, 0.15)"
          opacity={0}
          transition={`opacity ${TRANSITION_SPEED} ease-in-out`}
        />
        <Box
          className="play-button"
          aria-label="Play promo video"
          as="span"
          backgroundColor="#DE83F0"
          height="80px"
          width="80px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={1}
          borderRadius="full"
          position="relative"
          transition={`background-color ${TRANSITION_SPEED} ease-in-out`}
        >
          <Box marginLeft={2} zIndex={1}>
            <svg width="30" height="36" fill="none">
              <path
                stroke="#fff"
                strokeWidth="3.077"
                d="M2.308 32.846V3.616L26.923 18.23 2.308 32.846Z"
              />
            </svg>
          </Box>
        </Box>
      </Box>
      {isOpen && (
        <Modal isOpen isCentered onClose={toggleIsOpen}>
          <ModalOverlay />
          <ModalContent
            maxWidth={{
              base: "calc(100vw - 32px)",
              md: "calc(100vw - 64px)",
            }}
            width="960px"
          >
            <AspectRatio position="relative" ratio={1920 / 1080} width="100%">
              <video width="100%" height="100%" controls autoPlay playsInline>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </AspectRatio>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
