import React, { useRef, useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Button, FAB, Text, TextInput, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { insertTestHeader } from "../../service/test-header.service";

export const HRCreateTest = ({ navigation }) => {
    const [data, setData] = useState({
        testCategoryChoosed: 1,
        testTitle: "",
        testDetails: []
    })

    const [textValue, setTextValue] = useState('')
    const [numInputs, setNumInputs] = useState(1)

    const refInputs = useRef([textValue]);

    const inputs = [];
    for (let i = 0; i < numInputs; i++) {
        inputs.push(
            <View key={i} style={{ flexDirection: 'row' }}>
                <Text style={{ alignSelf: 'center', marginLeft: 10, marginRight: 10 }}>{i + 1}</Text>
                <TextInput
                    // style={styles.input}
                    style={{ width: 275, marginVertical: 10 }}
                    onChangeText={value => {
                        setInputValue(i, value)

                    }}
                    value={refInputs.current[i]}
                    placeholder="Insert Question Here"
                />
                <Pressable
                    onPress={() => removeInput(i)}
                    style={{ alignSelf: 'center' }}
                >
                    <Button
                        mode='contained'
                        style={{ marginLeft: 10 }}
                    >Delete</Button>
                </Pressable>
            </View>
        )
    }

    const handleChangeTestTitle = (testTitle) => {
        setData(() => {
            return { ...data, testTitle }
        })
        console.log(data);
    }

    const handleSaveData = () => {
        console.log(data);
    }

    const setInputValue = (index, value) => {
        // first, we are storing input value to refInputs array to track them
        const inputs = refInputs.current
        inputs[index] = value
        // we are also setting the text value to the input field onChangeText
        setTextValue(value)
        console.log(textValue);
    }

    const addInput = () => {
        // add a new element in our refInputs array
        refInputs.current.push('');
        // increase the number of inputs
        setNumInputs(value => value + 1);

        setData(() => {
            return ({
                ...data, testDetails: [
                    ...data.testDetails,
                    {
                        testContent: textValue
                    }
                ]
            })
        })
    }

    const removeInput = (i) => {
        //remove from the array by index value
        refInputs.current.splice(i, 1)[0]
        // decrease the number of inputs
        setNumInputs(value => value - 1)
    }

    const { bottom } = useSafeAreaInsets();
    const theme = useTheme()

    return (
        // <View style={{ flex: 1 }}>
        <View>
            <View style={{ borderWidth: 1, borderColor: 'red' }}>
                <Text>This is HR Create Test Screen</Text>
                <TextInput
                    mode='outlined'
                    label="Test Title"
                    placeholder="Input test title here"
                    value={data.testTitle}
                    onChangeText={(testTitle) => handleChangeTestTitle(testTitle)}
                />
                <Button
                    mode='contained'
                    // onPress={() => console.log(data, refInputs.current)}
                    onPress={handleSaveData}
                    style={{ marginTop: 15 }}
                >
                    SAVE
                </Button>

                <ScrollView>
                    {inputs}
                    <Pressable onPress={addInput}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }} >
                            + Add new input
                        </Text>
                    </Pressable>
                    <View style={{ marginTop: 25 }} >
                        <Text>You have answered</Text>
                        {refInputs.current.map((value, i) => {
                            return <Text key={i}>
                                {`${i + 1} - ${value}`}
                            </Text>
                        })}
                    </View>
                </ScrollView>
            </View>

            {/* <Appbar
                style={[
                    styles.bottom,
                    {
                        height: BOTTOM_APPBAR_HEIGHT + bottom,
                        backgroundColor: theme.colors.elevation.level2,
                    },
                ]}
                safeAreaInsets={{ bottom }}
            >
                <Appbar.Action icon="archive" onPress={() => { }} />
                <Appbar.Action icon="email" onPress={() => { }} />
                <Appbar.Action icon="label" onPress={() => { }} />
                <Appbar.Action icon="delete" onPress={() => { }} />
                <FAB
                    mode="flat"
                    size="medium"
                    icon="plus"
                    onPress={() => { }}
                    style={[
                        styles.fab,
                        { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
                    ]}
                />
            </Appbar> */}
        </View>
    )
}

const styles = StyleSheet.create({
    bottom: {
        backgroundColor: 'aquamarine',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    fab: {
        position: 'absolute',
        right: 16,
    },
});