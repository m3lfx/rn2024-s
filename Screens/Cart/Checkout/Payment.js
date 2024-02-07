import React from 'react'
import { View, Text } from 'react-native'

const Payment = ({route}) => {
    console.log(route.params)
    return (
        <View>
            <Text> Payment</Text>
        </View>
    )
}
export default Payment;