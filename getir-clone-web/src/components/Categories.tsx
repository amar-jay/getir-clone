import { Box, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import NextImage from 'next/image'
import { idText } from 'typescript'
import { Container } from './Container'

interface ICategory {
    id: number,
    name: string,
    image?: string,
    description: string,
}

const Category: React.FC<ICategory> = ({name, id, description}) => {

    return (
        <Box dir={'column'} m={3} cursor={'pointer'} _hover={{ backgroundColor: 'blackAlpha.300'}} borderRadius={'2xl'} p={3}>
            <Box position={'relative'} w={"5rem"} h={"5rem"} m={3}>
                <NextImage src={'https://www.themanan.me/images/carousel/istanbul-0.jpg'} layout={'fill'} alt={id.toString()}/>
            </Box>
            <Text textAlign={'center'}>
                {name || 'name'}
            </Text>
        </Box>
    )
}

const Categories: React.FC<{}> = () => {
    const categories: ICategory[] = [
        {
            id: 1,
            name: 'Kahvaltı',
            image: '/static/images/categories/1.jpg',
            description: 'Kahvaltı'
        },
        {
            id: 2,
            name: 'Kahvaltı',
            image: '/static/images/categories/1.jpg',
            description: 'Kahvaltı'
        },
        {
            id: 3,
            name: 'Kahvaltı',
            image: '/static/images/categories/1.jpg',
            description: 'Kahvaltı'
        }
    ]
    return (
        <Container minW={'full'} dir={'row'}>
            <Heading variant={'section-title'}>Kategoriler</Heading>
        <Container minW={'full'} flexWrap={'wrap'} flexDir={'row'} >
            {categories.map(category => (
                <Category key={category.id} name={category.name} description={category.description} id={category.id} />
            ))}
        {categories.map(category => (
                <Category key={category.id} name={category.name} description={category.description} id={category.id} />
            ))}
        {categories.map(category => (
                <Category key={category.id} name={category.name} description={category.description} id={category.id} />
            ))}
        {categories.map(category => (
                <Category key={category.id} name={category.name} description={category.description} id={category.id} />
            ))}
        </Container>
        </Container>
    )
}

export default Categories