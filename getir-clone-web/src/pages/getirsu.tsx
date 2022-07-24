import React from 'react'
import { NavBar } from '../components/NavBar'
import { Container } from '../components/Container'
import { Text } from '@chakra-ui/react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { useSession, signIn, signOut } from 'next-auth/react'

const GetirSu = () => {
  const { data: session } = useSession();
  return (
  <Container height="100vh" margin={0} p={0}>
    <NavBar/>
    <Banner/>
    {/* <Heros/> */}
    <Categories/>
    <Container>
      <Text h={16} fontSize={24}>{session? "true": "false"}</Text>
    </Container>
  <DarkModeSwitch/>
  </Container>
)
  }
export default GetirSu