import React from 'react'
import  { Box, HStack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import {Link } from "@chakra-ui/react"
import { IconType } from 'react-icons'
import { FiUser, FiUserPlus, FiGlobe} from 'react-icons/fi'
interface INavBar {

}

export const NavItemLeft:React.FC<{children: string, href: string}> = ({children, href}) => {
  const router = useRouter();
  const isActive = router.pathname === href;
    return (
        <NextLink href={href}>
            <Link>
            <Box p={"1rem 1rem 0 1rem"} 
            borderTopRadius={'xl'} 
            textDecoration={'none'} 
            _hover={{textDecoration: 'none', backgroundColor: 'blackAlpha.500' }} 
            backgroundColor={isActive? 'blackAlpha.500': 'none'} 
            color={isActive? 'yellow.500': '#fff'}
            >
                <Text fontSize={'18px'} fontWeight={'bold'}>{children}</Text>
            </Box>
            </Link>
        </NextLink>
    )
}

export const NavItemRight:React.FC<{Icon?:IconType, name: string}> = ({Icon, name}) => {
    return (
    <NextLink href={'/'}>
        <Box display={'inline-flex'} alignItems={'center'}>
           {Icon && <Icon size={'1rem'} />}
           <Text px={1} mr={4} fontWeight={'medium'}>{name}</Text>
        </Box>
        </NextLink>
    )}

export const NavBar:React.FC<{}> = () => {

    return (
        <HStack pt={"1px"} justifyContent={'space-between'} px={'4rem'} minW={'full'} backgroundColor={'facebook.500'}>
            <HStack w={'30vw'} justifyContent={'space-between'}>
                <NavItemLeft href="/">getir</NavItemLeft>
                <NavItemLeft href="/getiryemek">getiryemek</NavItemLeft>
                <NavItemLeft href="/getirsu">getirsu</NavItemLeft>
                <NavItemLeft href="/getircarsi">getircarsi</NavItemLeft>
                <NavItemLeft href="/getirbuyuk">getirbuyuk</NavItemLeft>
            </HStack>
            <HStack display={{base: 'none', md: 'block'}}>
                <NavItemRight Icon={FiGlobe} name={'Türkçe'} />
                <NavItemRight Icon={FiUser} name={'Giriş yap'} />
                <NavItemRight Icon={FiUserPlus} name={'Kayit ol'} />
            </HStack>
        
        </HStack>
    )
}