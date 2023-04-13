import Head from "next/head";
import useUserStore from "@/stores/useUserStore";
import { Layout } from "@/components/Layout";
import {
  Flex,
  Grid,
  Input,
  InputLeftElement,
  InputGroup,
  Icon,
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { UserCard } from "@/components/UserCard";

export const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pl="4" h="14" pointerEvents="none">
        <Icon as={FiSearch} fontSize="20" color="gray.300" />
      </InputLeftElement>
      <Input
        pl="12"
        borderWidth="0px"
        borderRadius="2xl"
        bg="blackAlpha.600"
        _placeholder={{ color: "gray.300" }}
        h="14"
        type="text"
        placeholder="Search"
      />
    </InputGroup>
  );
};

export default function Home() {
  const currentUser = useUserStore((state) => state.currentUser);

  return (
    <>
      <Head>
        <title>Next Chakra Starter Template</title>
        <meta name="description" content="next chakra starter template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Grid templateColumns="1fr 50% 1fr">
            <Flex flexDirection="column" gap="4">
              <SearchInput />
              <Box>
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem border="none">
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Text fontSize="sm" color="gray.500">
                          Unread
                        </Text>
                      </Box>
                      <AccordionIcon color="gray.500" />
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      <Flex flexDirection="column" gap="2">
                        <UserCard
                          name="Segun Adebayo"
                          subtext="Creator, Chakra UI"
                          avatarSrc="https://bit.ly/sage-adebayo"
                        />
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem border="none">
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Text fontSize="sm" color="gray.500">
                          All Messages
                        </Text>
                      </Box>
                      <AccordionIcon color="gray.500" />
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      <Flex flexDirection="column" gap="2">
                        <UserCard
                          name="Segun Adebayo"
                          subtext="Creator, Chakra UI"
                          avatarSrc="https://bit.ly/sage-adebayo"
                        />
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Flex>
          </Grid>
        </Layout>
      </main>
    </>
  );
}
