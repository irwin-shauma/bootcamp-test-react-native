import React, { useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Button, FAB, Text, TextInput, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { insertTestHeader } from "../../service/test-header.service";

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

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
                <View style={{ width: 30, justifyContent: 'center' }}>
                    <Text
                        variant='titleSmall'
                        style={{ alignSelf: 'center', marginLeft: 5, marginRight: 5 }}>{i + 1}.</Text>
                </View>
                <TextInput
                    mode='outlined'
                    style={{ width: 225, marginVertical: 10 }}
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
    }

    const handleSaveData = () => {
        const localTestDetails = []
        for (let i = 0; i < numInputs; i++) {
            localTestDetails.push({
                testContent: refInputs.current[i]
            })
        }

        setData(() => {
            return ({
                ...data, testDetails: localTestDetails
            })
        })

        insertTestHeader(data).then((res) => {
            console.log(res);
            navigation.navigate('HRHomescreen')
        })
    }

    const setInputValue = (index, value) => {
        const inputs = refInputs.current
        inputs[index] = value
        setTextValue(value)
    }

    const addInput = () => {
        refInputs.current.push('');
        // console.log(refInputs.current);
        setNumInputs(value => value + 1);

        // setData(() => {
        //     return ({
        //         ...data, testDetails: [
        //             ...data.testDetails,
        //             {
        //                 testContent: textValue
        //             }
        //         ]
        //     })
        // })
    }

    const removeInput = (i) => {
        refInputs.current.splice(i, 1)[0]
        setNumInputs(value => value - 1)
    }

    const { bottom } = useSafeAreaInsets();
    const theme = useTheme()

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    style={{ width: 350, alignSelf: 'center' }}
                    mode='outlined'
                    label="Title"
                    placeholder="Input test title here"
                    value={data.testTitle}
                    onChangeText={(testTitle) => handleChangeTestTitle(testTitle)}
                />

                <ScrollView style={{ maxHeight: 540, marginTop: 10 }}>
                    {inputs}
                    <Button
                        style={{ color: 'white', fontWeight: 'bold', width: 200, alignSelf: 'center' }}
                        mode="contained"
                        onPress={addInput}

                    >
                        + Add new question
                    </Button>
                    {/* <View style={{ marginTop: 25 }} >
                        <Text>You have input</Text>
                        {refInputs.current.map((value, i) => {
                            return <Text key={i}>
                                {`${i + 1} - ${value}`}
                            </Text>
                        })}
                    </View> */}
                </ScrollView>
            </View>

            <Appbar
                style={[
                    styles.bottom,
                    {
                        height: BOTTOM_APPBAR_HEIGHT + bottom,
                        backgroundColor: theme.colors.elevation.level2,
                    },
                ]}
                safeAreaInsets={{ bottom }}
            >
                {/* <Appbar.Action icon="delete" onPress={() => { }} /> */}
                <FAB
                    mode="flat"
                    size="medium"
                    label='SAVE'
                    icon="content-save"
                    onPress={handleSaveData}
                    style={[
                        styles.fab,
                        { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
                    ]}
                />
            </Appbar>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottom: {
        backgroundColor: 'white',
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