import {Button, Flex, Image, Text} from '@chakra-ui/react'
import { 
    CaretDoubleRight, 
    // Handshake 
} from 'phosphor-react'
import { useState } from 'react'

export function Header({
    // formRef, 
    catalogRef
}) {
    // const [isConsultantButtonHovered, setIsConsultantButtonHovered] = useState(false)
    const [isCatalogButtonHovered, setIsCatalogButtonHovered] = useState(false)

    return (
        <Flex
            alignItems='center'
            justifyContent={{base: 'start', sm: 'start', md: 'center'}}
            bgColor='beige.300'
            mx={{base: 8, sm: 8, md: 8, lg: 16}}
            h='10vh'
            borderBottom='2px solid'
            borderColor='darkbrown'
            position='relative'
        >
            <Image 
                src={'static/img/MYCODE_TM-LOGO-MARROM-ESCURO-RGB-01.png'} 
                maxW={{base: 32, sm: 32, md: 48}} 
            />
            <Button
                position='absolute'
                right={0}
                bgColor='transparent'
                display='flex'
                gap={{base: 1, sm: 1, lg: 2}}
                borderRadius={0}
                _hover={{
                    bgColor:'darkBrown',
                    color:'beige.500'
                }}
                onMouseEnter={() => setIsCatalogButtonHovered(true)}
                onMouseLeave={() => setIsCatalogButtonHovered(false)}
                onClick={() => catalogRef.current?.scrollIntoView({behavior: 'smooth'})}
                fontSize={{base: 'sm', sm: 'sm', md: 'md'}}
            >
                <Text color='darkbrown' fontWeight='light'>Veja nosso catálogo</Text>
                {isCatalogButtonHovered 
                    ? <CaretDoubleRight size={16} color="#e6cebe" weight="duotone" />
                    : <CaretDoubleRight size={16} color="#100c0b" weight="duotone" />
                }
            </Button>
            {/* <Text fontFamily='KissMe' fontSize='5xl' color='darkBrown'>daily boosters</Text> */}
            {/* <Button
                bgColor='transparent'
                display='flex'
                gap={2}
                borderRadius={0}
                _hover={{
                    bgColor:'darkBrown',
                    color:'beige.500'
                }}
                onMouseEnter={() => setIsConsultantButtonHovered(true)}
                onMouseLeave={() => setIsConsultantButtonHovered(false)}
                onClick={() => formRef.current.focus()}
                fontSize={{base: 'sm', sm: 'sm', md: 'md'}}
            >
                <Text color='darkbrown' fontWeight='light'> Seja uma consultora</Text>
                {isConsultantButtonHovered 
                    ? <Handshake size={20} color="#e6cebe" weight="duotone" />
                    : <Handshake size={20} color="#100c0b" weight="duotone" />
                }
            </Button> */}
        </Flex>
    )
}