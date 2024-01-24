import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { Container, Icon, Heading, Input, Text, NativeBaseProvider, extendTheme } from "native-base";
import ProductList from "./ProductList";
import { Ionicons } from "@expo/vector-icons";
const data = require('../../assets/data/products.json')

const newColorTheme = {
    brand: {
        900: "#8287af",
        800: "#7c83db",
        700: "#b3bef6",
    },
};
const theme = extendTheme({ colors: newColorTheme });
const ProductContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(data);
        return () => {
            setProducts([])
        }
    }, [])
    return (
        <NativeBaseProvider theme={theme}>
            <Container>
            <VStack w="100%" space={5} alignSelf="center">
                <Heading fontSize="lg">Search</Heading>
                <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="search" />} />} />
            </VStack>
                <View style={{ marginTop: 80 }} >
                    <FlatList
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        numColumns={2}
                        data={products}
                        renderItem={({ item }) => <ProductList key={item.id} item={item} />}
                        keyExtractor={item => item.name}
                    />
                </View>
            </Container>
        </NativeBaseProvider>

    )
}

export default ProductContainer;