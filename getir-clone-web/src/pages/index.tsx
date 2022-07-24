import React from 'react'
import { NavBar } from '../components/NavBar'
import { Container } from '../components/Container'
import { Main } from 'next/document'
import { Text } from '@chakra-ui/react'
import Banner from '../components/Banner'

const Index = () => (
  <Container height="100vh">
    <NavBar/>
    <Banner/>
    <Container>
      <Text>Hello</Text>
    </Container>
  </Container>
)

export default Index
