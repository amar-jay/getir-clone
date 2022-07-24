import React from 'react'
import { NavBar } from '../components/NavBar'
import { Container } from '../components/Container'
import { Main } from 'next/document'
import { Text } from '@chakra-ui/react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
const Index = () => (
  <Container height="100vh" margin={0} p={0}>
    <NavBar/>
    <Banner/>
    {/* <Heros/> */}
    <Categories/>
    <Container>
      <Text>Hello</Text>
    </Container>
  <DarkModeSwitch/>
  </Container>
)

export default Index
