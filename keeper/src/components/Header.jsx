import {  Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function Header() {
  return (
    <Flex border={"2px solid red"} p={'20px'} bg={'orangered'}>
        <Heading color={'whitesmoke'} fontSize={30}>LOGO</Heading>
    </Flex>
  )
}

export default Header