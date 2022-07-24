import React from 'react'
import  { Box, HStack, textDecoration } from '@chakra-ui/react'

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
            <Box p={3} mt={1} mx={3} borderTopRadius={'xl'} textDecoration={'none'} _hover={{textDecoration: 'none', backgroundColor: 'blackAlpha.500' }} >
            {children}
            </Box>
            </Link>
        </NextLink>
    )
}

const NavItemRight:React.FC<{Icon?:IconType, name: string}> = ({Icon, name}) => {
    return (
    <NextLink href={'/'}>
        <Box w={"8rem"} flexDir={'row'}>
            {Icon && <Icon size={'1rem'} />}
            {name}
        </Box>
        </NextLink>
    )}

export const NavBar:React.FC<{}> = () => {
    return (
        <HStack pt={3} justifyContent={'space-between'} px={5} minW={'full'} backgroundColor={'facebook.500'}>
            <HStack>
                <NavItemLeft>getir</NavItemLeft>
                <NavItemLeft>getir</NavItemLeft>
                <NavItemLeft>getir</NavItemLeft>
                <NavItemLeft>getir</NavItemLeft>
                <NavItemLeft>getir</NavItemLeft>
            </HStack>
            <HStack>
                {/* <NavItemRight Icon={FiGlobe} name={'Türkçe'} />
                <NavItemRight Icon={FiUser} name={'Giriş yap'} />
                <NavItemRight Icon={FiUserPlus} name={'Kayit ol'} /> */}
            </HStack>
        
        </HStack>
    )
}