import { Flex, FlexProps } from '@chakra-ui/react'
import NextLink from 'next/link'
const Icons:React.FC<{Icon: Element; }> = ({Icon}) => {
  return (
    <NextLink href={'/'}>
      <Icon/>
    </NextLink>
  )
}
export const Footer = (props: FlexProps) => (
  <Flex
    as="footer"
    align="center"
    justify="center"
    bg="gray.50"
    color="gray.700"
    fontSize="sm"
    fontWeight="bold"
    p={4}
    {...props}
    >
    <Text>© {new Date().getFullYear()}, Built by Manan </Text>
    <Box>
      <
    </Box>
    </Flex>
)
