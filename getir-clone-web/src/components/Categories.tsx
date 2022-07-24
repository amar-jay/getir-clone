import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import NextImage from 'next/image'
import { idText } from 'typescript'

interface ICategory {
    id: number,
    name: string,
    image?: string,
    description: string,
}

const Category: React.FC<ICategory> = ({name, id, description}) => {

    return (
        <Box dir={'column'}>
            <Box>
                <NextImage src={'/static/images/categories/1.jpg'} layout={'fill'} alt={id}/>
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
        <Box>
            {categories.map(category => (
                <Category key={category.id} name={category.name} description={category.description} id={category.id} />
            ))}
        </Box>
    )
}

export default Categories