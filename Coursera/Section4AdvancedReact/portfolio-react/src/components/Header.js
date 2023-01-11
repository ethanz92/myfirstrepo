import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [currentY, setCurrentY] = useState(window.scrollY);
  const [prevY, setPrevY] = useState(0);

  const [boxStyle, setBoxStyle] = useState({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    translateY: 0,
    transform: "translateY(0)",
    transitionProperty: "transform",
    transitionDuration: ".3s",
    transitionTimingFunction: "ease-in-out",
    backgroundColor: "#18181b",
  });

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      setPrevY(currentY);
      setCurrentY(window.scrollY);
      if (prevY < currentY) {
        setBoxStyle({ ...boxStyle, transform: "translateY(-200px)" });
      } else {
        setBoxStyle({ ...boxStyle, transform: "translateY(0)" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentY]);

  return (
    <Box {...boxStyle}>
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing="24px">
              {socials.map((social, index) => {
                return (
                  <a href={social.url} key={"icon" + index}>
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#contact-me" onClick={() => handleClick("contactme")}>
                Contact Me
              </a>
              <a href="/#projects" onClick={() => handleClick("projects")}>
                Projects
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
