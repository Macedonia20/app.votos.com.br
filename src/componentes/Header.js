import { Flex, Image } from '@chakra-ui/react'

import enqueteImg from "../bg/capa_enquete.png";

export function Header() {
    return (
      <Flex 
        as="header"
        height="200"
        marginTop="4"
        align="center"
      >
        <Flex 
          maxWidth={400}
          flex="1"
        >
        </Flex>
      </Flex>
    );
}