import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";

interface IUserCard {
  avatarSrc?: string;
  name: string;
  subtext: string;
}

export const UserCard = ({ name, subtext, avatarSrc }: IUserCard) => {
  return (
    <Flex
      flex="1"
      gap="4"
      alignItems="center"
      flexWrap="wrap"
      cursor="pointer"
      p="3"
      borderRadius="2xl"
      transition="0.2s ease-in-out"
      _hover={{ bg: "yellow.300" }}
      role="group"
    >
      <Avatar name={name} src={avatarSrc} />

      <Box>
        <Heading _groupHover={{ color: "blackAlpha.800" }} size="sm">
          {name}
        </Heading>
        <Text _groupHover={{ color: "blackAlpha.800" }} fontSize="sm">
          {subtext}
        </Text>
      </Box>
    </Flex>
  );
};
