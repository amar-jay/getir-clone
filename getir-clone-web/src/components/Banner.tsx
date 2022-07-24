import { Box } from "@chakra-ui/react";
import React from "react";
import NextImage from 'next/image'
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

const ImageContainer:React.FunctionComponent<{url:string, alt?: string}> = ({ url, alt}) => {
    return (
        <Box pos={'relative'} minW={'full'}>
            <NextImage src={url} alt={alt || url} layout={'fill'}/>
        </Box>
    )

}

export default function Banner (){
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><ImageContainer url="https://themanan.me/images/istanbul-0.jpg"/></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
