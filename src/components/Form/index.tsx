import { Button, Flex, Grid, Input, InputGroup, InputLeftElement, Select, Text, Image, Box, useToast } from "@chakra-ui/react";
import { Envelope, MapPin, MapTrifold, Phone, User } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export function Form({
    // formRef
}) {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    let [selectedState, setSelectedState] = useState('')

    let emailData = {}
    const toast = useToast()

    useEffect(() => {
        const fetchStates = async () => {
            const statesList = await axios(
              'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
            );
    
            let statesListPivot = []
    
            statesList.data.map(item => {
                statesListPivot.push(item.sigla)})
            setStates(statesListPivot.sort());
        }
        fetchStates();
    }, [])

    useEffect(() => {
        const fetchCities = async (state) => {
            if (selectedState !== '') {
                const citiesList = await axios(
                    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`,
                );
                let citiesListPivot = []
        
                citiesList.data.map(item => {
                    citiesListPivot.push(item.nome)})
                setCities(citiesListPivot.sort());
            };
        }
    
        fetchCities(selectedState)
      }, [selectedState]);

    const {
        handleSubmit,
        register,
        formState: { isSubmitting, isSubmitSuccessful },
        setError,
        clearErrors
    } = useForm()

    const onSubmit = useCallback(async (values) => {
        emailData = {...values, state: selectedState}

        if(values.name === '' || values.name === undefined) {
            toast({
                title: 'O nome é obrigatório',
                description: "Olá! Vimos que esqueceu de preencher o seu nome no formulário, mas precisamos dessa informação para melhor atendê-lo. Pode preencher e tentar novamente!",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })

            setError('name', { type: 'required', message: 'O nome é obrigatório' }, { shouldFocus: true });

            return
        }

        if(values.email === '' || values.email === undefined) {
            toast({
                title: 'O e-mail é obrigatório',
                description: "Olá! Vimos que esqueceu de preencher o seu e-mail no formulário, mas precisamos dessa informação para melhor atendê-lo. Pode preencher e tentar novamente!",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })

            setError('email', { type: 'required', message: 'O e-mail é obrigatório' }, { shouldFocus: true });

            return
        }

        if(values.ddd === '' || values.ddd === undefined) {
            toast({
                title: 'O ddd é obrigatório',
                description: "Olá! Vimos que esqueceu de preencher o seu ddd no formulário, mas precisamos dessa informação para melhor atendê-lo. Pode preencher e tentar novamente!",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })

            setError('ddd', { type: 'required', message: 'O ddd é obrigatório' }, { shouldFocus: true });

            return
        }

        if(values.number === '' || values.number === undefined) {
            toast({
                title: 'O número é obrigatório',
                description: "Olá! Vimos que esqueceu de preencher o seu número no formulário, mas precisamos dessa informação para melhor atendê-lo. Pode preencher e tentar novamente!",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })

            setError('number', { type: 'required', message: 'O número é obrigatório' }, { shouldFocus: true });

            return
        }

        if(selectedState === '') {
            toast({
                title: 'O estado é obrigatório',
                description: "Olá! Vimos que esqueceu de preencher o seu estado no formulário, mas precisamos dessa informação para melhor atendê-lo. Pode preencher e tentar novamente!",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })

            setError('state', { type: 'required', message: 'O estado é obrigatório' }, { shouldFocus: true });

            return
        }

        if(values.city === '' || values.city === undefined) {
            toast({
                title: 'A cidade é obrigatória',
                description: "Olá! Vimos que esqueceu de preencher a sua cidade no formulário, mas precisamos dessa informação para melhor atendê-lo. Pode preencher e tentar novamente!",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })

            setError('city', { type: 'required', message: 'A cidade é obrigatória' }, { shouldFocus: true });

            return
        }

        await fetch('/api/mail', {
            method:'post',
            body:JSON.stringify(emailData)
        })

    }, [selectedState])


    return (
        <Grid
            templateColumns={{base: '1fr', sm: '1fr', md: '1fr', lg: '0.9fr 1.1fr'}}
            gap={8}
            mx={{base: 8, sm: 8, md: 8, lg: 16}}
        >
            <Flex 
                alignItems='center' 
                justifyContent='center'
                px={{base: 8, sm: 8, md: 8, lg: 16}}
                py={{base: 8, sm: 8, md: 8, lg: 16}}
                my={{base: 4, sm: 4, md: 4, lg: 12}}
                direction='column'
                color='beige.500'
                bgColor='darkBrown'
                as='form'
                onSubmit={handleSubmit(onSubmit)}
            >
                <Text fontWeight='bold' fontSize={{base: '2xl', sm: '2xl', lg: '4xl'}}>Seja uma consultora</Text>
                <Text fontWeight='light' fontSize={{base: 'sm', sm: 'sm', md: 'md'}}>Nos ajude a tornar os cuidados com a pele simples e sustentáveis</Text>
                <InputGroup mt={{base: 6, sm: 6, lg: 16}}>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<User size={24} color="#e6cebe" weight="duotone" />}
                    />
                    <Input 
                        type='text'
                        variant='flushed' 
                        placeholder='Qual o seu nome?' 
                        borderColor='beige.500' 
                        _placeholder={{
                            color: 'beige.500',
                            fontWeight: 'light'
                        }}
                        {...register("name")}
                        // ref={formRef}
                    />
                </InputGroup>
                <InputGroup mt={4}>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<Envelope size={24} color="#e6cebe" weight="duotone" />}
                    />
                    <Input 
                        type='email'
                        variant='flushed' 
                        placeholder='Qual o seu e-mail?' 
                        borderColor='beige.500' 
                        _placeholder={{
                            color: 'beige.500',
                            fontWeight: 'light'
                        }}
                        {...register("email")}
                    />
                </InputGroup>
                <Flex alignItems='center' mt={4} w='100%'>
                    <InputGroup w='fit-content'>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<Phone size={24} color="#e6cebe" weight="duotone" />}
                        />
                        <Input 
                            type='tel'
                            variant='flushed' 
                            placeholder='DDD' 
                            borderColor='beige.500' 
                            _placeholder={{
                                color: 'beige.500',
                                fontWeight: 'light'
                            }}
                            {...register("ddd")}
                            minLength={2} maxLength={3}
                        />
                    </InputGroup>
                    <Input 
                        type='tel'
                        variant='flushed' 
                        placeholder='Telefone' 
                        borderColor='beige.500' 
                        _placeholder={{
                            color: 'beige.500',
                            fontWeight: 'light'
                        }}
                        minLength={8} maxLength={9}
                        {...register("number")}
                    />
                </Flex>
                <Flex alignItems='center' mt={4} gap={4} w='100%' direction={{base: 'column', sm: 'column', md: 'row'}}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<MapTrifold size={24} color="#e6cebe" weight="duotone" />}
                        />
                        <Select 
                            pl={10}
                            variant='flushed' 
                            placeholder='Seu estado' 
                            fontWeight='light'
                            borderColor='beige.500' 
                            _placeholder={{
                                color: 'beige.500',
                                fontWeight: 'light'
                            }}
                            onChange={(e) => {setSelectedState(e.target.value); clearErrors('state')}}
                        >
                            {states.map(item => <option key={item}>{item}</option>)}
                        </Select>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<MapPin size={24} color="#e6cebe" weight="duotone" />}
                        />
                        <Select 
                            pl={10}
                            variant='flushed' 
                            placeholder='Sua cidade' 
                            fontWeight='light'
                            borderColor='beige.500' 
                            _placeholder={{
                                color: 'beige.500',
                                fontWeight: 'light'
                            }}
                            isDisabled={selectedState === ''}
                            {...register("city")}
                        >
                                {cities.map(item => <option key={item}>{item}</option>)}
                        </Select>
                    </InputGroup>
                </Flex>
                <Button
                    mt={8}
                    borderRadius={0}
                    w='100%'
                    bgColor='beige.500'
                    color='darkBrown'
                    transition='all .3s ease'
                    _hover={{
                        bgColor: 'beige.300'
                    }}
                    type='submit'
                    disabled={isSubmitSuccessful}
                    isLoading={isSubmitting}
                >
                    {isSubmitSuccessful
                        ? 'Obrigada!'
                        : 'Envie seus dados'
                    }
                </Button>
            </Flex>
            <Box
                py={12}
                position='relative'
                display={{base: 'none', sm: 'none', md: 'none', lg: 'block'}}
            >
                <Text
                    position='absolute'
                    right={32}
                    top={20}
                    fontSize='3xl'
                    fontWeight='light'
                >
                    Pensado em você
                </Text>
                <Text
                    position='absolute'
                    right={16}
                    top={32}
                    fontSize='3xl'
                    fontFamily='KissMe'
                >
                    Feito para sua pele
                </Text>
                <Image 
                    position='absolute'
                    bottom={8}
                    h={20}
                    src={'static/img/MYCODE_TM-LOGO-MARROM-ESCURO-RGB-01.png'} 
                />
                <Image 
                    src={'static/img/marco-testi-thsLtslnjos-unsplash.jpeg'} 
                    h='100%'
                    w='100%'
                    objectFit='cover'
                />
            </Box>
        </Grid>
    )
}