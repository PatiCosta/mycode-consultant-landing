import {Button, Flex, Image, Text} from '@chakra-ui/react'
import { CaretDoubleRight, Handshake } from 'phosphor-react'
import { useState } from 'react'

export function Header({formRef, catalogRef}) {
    const [isConsultantButtonHovered, setIsConsultantButtonHovered] = useState(false)
    const [isCatalogButtonHovered, setIsCatalogButtonHovered] = useState(false)

    return (
        <Flex
            alignItems='center'
            justifyContent='space-between'
            bgColor='beige.300'
            mx={16}
            h='10vh'
            borderBottom='2px solid'
            borderColor='darkbrown'
        >
            <Button
                bgColor='transparent'
                display='flex'
                gap={2}
                borderRadius={0}
                _hover={{
                    bgColor:'darkBrown',
                    color:'beige.500'
                }}
                onMouseEnter={() => setIsCatalogButtonHovered(true)}
                onMouseLeave={() => setIsCatalogButtonHovered(false)}
                onClick={() => catalogRef.current?.scrollIntoView({behavior: 'smooth'})}
            >
                <Text color='darkbrown' fontWeight='light'>veja nosso catálogo</Text>
                {isCatalogButtonHovered 
                    ? <CaretDoubleRight size={16} color="#e6cebe" weight="duotone" />
                    : <CaretDoubleRight size={16} color="#100c0b" weight="duotone" />
                }
            </Button>
            <Image src={'static/img/MYCODE_TM-LOGO-MARROM-ESCURO-RGB-01.png'} maxW={48} />
            {/* <Text fontFamily='KissMe' fontSize='5xl' color='darkBrown'>daily boosters</Text> */}
            <Button
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
            >
                <Text color='darkbrown' fontWeight='light'> Seja uma consultora</Text>
                {isConsultantButtonHovered 
                    ? <Handshake size={20} color="#e6cebe" weight="duotone" />
                    : <Handshake size={20} color="#100c0b" weight="duotone" />
                }
            </Button>
        </Flex>
    )
}