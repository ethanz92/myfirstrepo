import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
  };

  return (
    <Box style={cardStyle} >
      <Image src={imageSrc} alt="project picture" borderRadius="10px" />
      <VStack margin="20px">
        <Heading color="#000" size="sm">
          {title}
        </Heading>
        <Text color="#666666" fontSize="12px">
          {description}
        </Text>
        <HStack alignItems="center">
          <Text color="#000" fontSize="12px">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#000" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
