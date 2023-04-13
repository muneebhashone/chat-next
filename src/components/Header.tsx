import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from "@chakra-ui/react";
import {
  BsFillMoonFill as MoonIcon,
  BsFillSunFill as SunIcon,
} from "react-icons/bs";
import { IconType } from "react-icons";
import { MdPermContactCalendar } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiSettingsFill } from "react-icons/ri";
import { NavItem } from "./Navitem";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Contacts", icon: MdPermContactCalendar },
  { name: "Chats", icon: IoChatboxEllipsesOutline },
  { name: "Settings", icon: RiSettingsFill },
];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        borderBottom="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.800")}
      >
        <Flex h={24} alignItems={"center"} justifyContent={"flex-start"}>
          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              ChatNext
            </Text>
          </Box>
          <Flex ml="8">
            {LinkItems.map((link) => (
              <NavItem key={link.name} icon={link.icon}>
                {link.name}
              </NavItem>
            ))}
          </Flex>

          <Flex alignItems={"center"} ml="auto">
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Profile</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
