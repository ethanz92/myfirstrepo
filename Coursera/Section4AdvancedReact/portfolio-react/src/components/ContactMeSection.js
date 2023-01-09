import React, { useEffect, useState } from "react";
import { setIn, useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoadingRef, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values) => submit("", values),
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
  });

  useEffect(() => {
    console.log(isLoadingRef.current);
  }, [isLoadingRef.current]);

  useEffect(() => {
    console.log(response);
  }, [response]);

  const [input, setInput] = useState({
    firstName: "",
    email: "",
    comment: "",
  });
  const [blur, setBlur] = useState({
    firstNameBlur: false,
    emailBlur: false,
    commentBlur: false,
  });
  const handleChange = (e) =>
    setInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  const handleBlur = (e) =>
    setBlur((prevState) => {
      return { ...prevState, [e.target.name + "Blur"]: true };
    });
  const isErrorFirstName = input.firstName === "" && blur.firstNameBlur;
  const isErrorEmail = input.email === "" && blur.emailBlur;
  const isErrorComment = input.comment === "" && blur.commentBlur;

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              return formik.handleSubmit;
            }}
          >
            <VStack spacing={4}>
              <FormControl isInvalid={isErrorFirstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={input.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={isErrorEmail}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={isErrorComment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  value={input.comment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                {isLoadingRef.current && (
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                )}
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
