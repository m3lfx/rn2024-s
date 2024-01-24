import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { Container,  Icon, Item, Input, Text } from "native-base";
import ProductList from "./ProductList";
const data = require('../../assets/data/products.json')

const ProductContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(data);
        return () => {
            setProducts([])
        }
    }, [])
    return (
            <View style={{ marginTop: 80 }} >
                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    numColumns={2}
                    data={products}
                    renderItem={({ item }) => <ProductList key={item.id} item={item} />}
                    keyExtractor={item => item.name}
                />
            </View>
        
    )
}

export default ProductContainer;