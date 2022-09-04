import React, { Fragment, Component } from 'react';
import { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    Text
} from 'react-native';

export const ReduxTesting = () => {
    const [count, setCount] = useState(0)
    const decrement = () => {
        let countInside = count
        countInside--
        setCount(() => {
            return countInside
        })
    }
    const increment = () => {
        let countInside = count
        countInside++
        setCount(() => {
            return countInside
        })
    }

    return (
        <View>
            <Button
                title='increment'
                onPress={() => increment()}
            />
            <Text>{count}</Text>
            <Button
                title='decrement'
                onPress={() => decrement()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})