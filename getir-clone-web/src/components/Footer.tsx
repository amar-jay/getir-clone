import { Flex, FlexProps, Text, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import { IconType } from 'react-icons';
import { FiBox, FiFacebook, FiTwitter} from 'react-icons/fi'
const Icons:React.FC<{Icon: IconType }> = ({Icon}) => {
  return (
    <NextLink href={'/'}>
      <Icon size={'1rem'}/>
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
      <Icons Icon={FiFacebook}/>
      <Icons Icon={FiFacebook}/>
      <Icons Icon={FiFacebook}/>
    </Box>
    </Flex>
)
