import React from 'react'
import { Box, Button, Container, Flex, Heading, HStack, Input, Text } from "@chakra-ui/react";
import NextImage from 'next/image'

const ImageContainer:React.FunctionComponent<{url:string, alt?: string}> = ({ url, alt}) => {
    return (
        <Box pos={'relative'} minW={'full'} minHeight={'80vh'} style={{background: 'linear-gradient( 90deg, var(--color-primary) 0%, rgba(93,62,188,0) 100% )'}}>
            <NextImage src={url} alt={alt || url} layout={'fill'}/>
        </Box>
        );
}

export default function Banner (){
  return (
    <Container minW={'100vw'} minHeight={'80vh'} margin={0} p={0} position={'relative'} >
    <ImageContainer url={'https://www.themanan.me/images/carousel/istanbul-0.jpg'} alt={'banner'}/>
    <Box position={'absolute'} top={'0'} left={'0'} right={'0'} bottom={'0'} maxW={'100vw'}>
      <HStack p={'4rem'} alignItems={'center'} justifyContent={'space-between'}  flexDir={'row'} h={'100%'}>
        <Box fontSize={'2xl'}>
          <Heading as={'h1'}>
            Getirbüyük
            </Heading>
          <Heading as={'h3'} color={'yellow.500'}>
            Uygun fiyatlarınızda kapanızda
            </Heading>
        </Box>
        <Box backgroundColor={'white'} boxShadow={'2xl'} p={7} borderRadius={'xl'} width={'25rem'}>
          <Text as={'h3'} color={'messenger.500'} textAlign={'center'} fontSize={'1xl'} fontWeight={'bold'} py={0} my={2}> Giriş yap veya kayıt ol</Text>
          <Box alignItems={'center'} display={'inline-flex'} justifyContent={'center'} w={'full'}>
            <Input placeholder={'Arama'} backgroundColor={'#ccc'} p={5} w={'5rem'}/>
            <Input type={'text'} flex={1} placeholder={'Telefon numarasi'} p={5} my={5} backgroundColor={"#ccc"}/>
          </Box>
          <Button color={'yellow.500'} backgroundColor={'blackAlpha.300'} w={'full'} py={'1rem'}> Telefon Numarasi ile devam et </Button>
        
          </Box>
      </HStack>
    </Box>
    </Container>
  )
//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, A11y]}
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       {/* <SwiperSlide><ImageContainer url="https://www.themanan.me/images/istanbul-0.jpg"/></SwiperSlide>
//       <SwiperSlide><ImageContainer url="https://www.themanan.me/images/istanbul-0.jpg"/></SwiperSlide>
//       <SwiperSlide><ImageContainer url="https://www.themanan.me/images/istanbul-0.jpg"/></SwiperSlide>
//       <SwiperSlide><ImageContainer url="https://www.themanan.me/images/istanbul-0.jpg"/></SwiperSlide> */}
//           </Swiper>
//   );
};
