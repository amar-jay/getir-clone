import React from 'react'
import  { Box, HStack, Text, textDecoration } from '@chakra-ui/react'

import NextLink from 'next/link'
import {Link } from "@chakra-ui/react"
import { IconType } from 'react-icons'
import { FiUser, FiUserPlus, FiGlobe} from 'react-icons/fi'
interface INavBar {

}

export const NavItemLeft:React.FC<{children: string}> = ({children}) => {
    return (
        <NextLink href={'/'}>
            <Link>
            <Box p={".5rem 1.5rem 0 1.5rem"} borderTopRadius={'xl'} textDecoration={'none'} _hover={{textDecoration: 'none', backgroundColor: 'blackAlpha.500' }} >
            {children}
            </Box>
            </Link>
        </NextLink>
    )
}

const NavItemRight:React.FC<{Icon?:IconType, name: string}> = ({Icon, name}) => {
    return (
    <NextLink href={'/'}>
        <Box display={'inline-flex'} alignItems={'center'}>
            <Icon size={'1rem'} />
           <Text px={1} mr={4}>{name}</Text>
        </Box>
        </NextLink>
    )}

export const NavBar:React.FC<{}> = () => {
    return (
        <HStack pt={"1px"} justifyContent={'space-between'} px={'4rem'} minW={'full'} backgroundColor={'facebook.500'}>
            <HStack w={'30vw'} justifyContent={'space-between'}>
                <NavItemLeft>getir</NavItemLeft>
                <NavItemLeft>getir</NavItemLeft>
                <NavItemLeft>getir</NavItemLeft>
                <NavItemLeft>getir</NavItemLeft>
                <NavItemLeft>getir</NavItemLeft>
            </HStack>
            <HStack>
                <NavItemRight Icon={FiGlobe} name={'Türkçe'} />
                <NavItemRight Icon={FiUser} name={'Giriş yap'} />
                <NavItemRight Icon={FiUserPlus} name={'Kayit ol'} />
            </HStack>
        
        </HStack>
    )
}