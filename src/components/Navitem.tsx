import { Flex, FlexProps, Link, Icon } from "@chakra-ui/react";
import { ReactText } from "react";

import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon: IconType;
  isActive?: boolean;
  children: ReactText;
}

export const NavItem = ({
  icon,
  isActive,
  children,
  ...rest
}: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="xl"
        role="group"
        cursor="pointer"
        {...(isActive && {
          bg: "yellow.300",
          color: "blackAlpha.900",
        })}
        _hover={{
          bg: "yellow.300",
          color: "blackAlpha.900",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="24"
            _groupHover={{
              color: "blackAlpha.900",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
