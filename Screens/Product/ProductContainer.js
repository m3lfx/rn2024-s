import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList, Dimensions } from 'react-native'
import { Container, Icon, Heading, Input, Text, NativeBaseProvider, extendTheme, VStack, Center } from "native-base";
import ProductList from "./ProductList";
import { Ionicons } from "@expo/vector-icons";
import SearchedProduct from "./SearchedProduct";
const data = require('../../assets/data/products.json')

const newColorTheme = {
    brand: {
        900: "#8287af",
        800: "#7c83db",
        700: "#b3bef6",
    },
};
const theme = extendTheme({ colors: newColorTheme });
var { height } = Dimensions.get('window')
import Banner from "../../Shared/Banner";
const ProductContainer = () => {
    const [products, setProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }
    const openList = () => {
        setFocus(true);
    }

    const onBlur = () => {
        setFocus(false);
    }

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false)
        return () => {
            setProducts([])
            setProductsFiltered([]);
            setFocus()
        }
    }, [])
    return (
        <NativeBaseProvider
            theme={theme}
        >
            <Center>

                <VStack w="100%" space={5} alignSelf="center">

                    <Input placeholder="Search"
                        onFocus={openList}
                        onChangeText={(text) => searchProduct(text)}
                        variant="filled"
                        width="100%"
                        borderRadius="10"
                        py="1"
                        px="2"
                        InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="search" />} />}
                        InputRightElement={focus === true ? <Icon ml="2" size="4" color="gray.400" as={<Ionicons name="close" size="12" color="black" onPress={onBlur} />} /> : null}
                    />
                </VStack>
                {focus === true ? (
                    <SearchedProduct
                        productsFiltered={productsFiltered}
                    />
                ) : (

                    <View style={styles.container}>
                        <View style={styles.listContainer} >
                            <Banner />
                            <FlatList
                                columnWrapperStyle={{ justifyContent: 'space-between' }}
                                numColumns={2}
                                data={products}

                                renderItem={({ item }) => <ProductList key={item.brnad} item={item} />}
                                keyExtractor={item => item.name}
                            />
                        </View>
                    </View>
                )}
                {/* <View style={{ marginTop: 80 }} >
                    <FlatList
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        numColumns={2}
                        data={products}
                        renderItem={({ item }) => <ProductList key={item.id} item={item} />}
                        keyExtractor={item => item.name}
                    />
                </View> */}
            </Center>
        </NativeBaseProvider>

    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
    listContainer: {
        height: height,
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProductContainer;