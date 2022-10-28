import { Box, Button, Flex, Grid, Image, Input, InputGroup, InputLeftElement, Select, Text } from "@chakra-ui/react";
import {Envelope, User, Phone, MapTrifold, MapPin} from 'phosphor-react'

export function Banner() {
    return (
        <Grid
            w='100vw'
            templateColumns='32vw 68vw'
        >
            <Flex 
                alignItems='end' 
                justifyContent='end'
                direction='column'
                position='relative'
                fontFamily='KissMe'
                fontSize='5xl'
                h='100%'
                w='100%'
                py={8}
                pr={2}
            >
                <Text>Cada pele é</Text>
                <Text>Sinta-se</Text>
                <Image 
                    position='absolute'
                    top={6}
                    h={48}
                    src={'static/img/MYCODE-SIMBOLO_01-MARROM-ESCURO-RGB-01.png'} 
                />
            </Flex>
            <Flex
                w='100%'
                position='relative'
                overflow='hidden'
                alignItems='start'
                pr={16}
                py={8}
            >
                <Flex
                    bgImage="url('static/img/actionvance-m2h5-H_08Qk-unsplash.jpeg')"
                    bgPosition='left'
                    bgSize='cover'
                    fontFamily='KissMe'
                    fontSize='5xl'
                    padding={1}
                    alignItems='start'
                    direction='column'
                    justifyContent='end'
                    h='56vh'
                    w='100%'
                    color='tealBlue'
                >
                    <Text>diferente</Text>
                    <Text>dentro da sua</Text>
                </Flex>
            </Flex>
        </Grid>
    )
}