import React, { useRef, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

export const HRCreateTest = () => {
    const [data, setData] = useState({
        testCategoryChoosed : 1,
        testTitle: ""
    })

    // const [textValue, setTextValue] = useState('')

    // const [numInputs, setNumInputs] = useState(1)

    // const refInputs = useRef<string>([textValue]);




    const handleChangeTestTitle = (testTitle) => {
        setData(() => {
            return {...data, testTitle}
        })
    }

    return (
        <View>
            <Text>This is HR Create Test Screen</Text>
            <TextInput 
                mode='outlined'
                label="Test Title"
                placeholder = "Input test title here"
                value={data.testTitle}
                onChangeText={(testTitle) => handleChangeTestTitle(testTitle)}
            />
            <Button
                icon='login'
                mode='contained'
                onPress={() => console.log(data)}
            >
                LOGIN
            </Button>

            <FlatList 
            
            />
        </View>
    )
}