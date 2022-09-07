import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View, Text, Pressable, Linking } from 'react-native'
import { IconButton, Text as TextPaper } from 'react-native-paper'
import { getAllByReviewer } from '../../service/assign-essay.service'
import { getId } from '../../service/login.service'
import { getEmployeeByUserId } from '../../service/employee.service'
import { useDispatch } from 'react-redux'
import { save_assignId } from '../../redux/actions/countAction'
import { BASE_URL } from '../../constants/constant'

export const ReviewerHomescreen = ({ navigation }) => {
    const [assignEssay, setAssignEssay] = useState([])

    const dispatch = useDispatch();

    const getData = async () => {
        const id = await getId();
        getEmployeeByUserId(id).then((res) => {
            getAllByReviewer(res.data.id).then((res) => {
                setAssignEssay(() => {
                    return res.data
                })
            })
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const renderItem = ({ item, index }) => {
        return (
            <View>
                <Pressable
                    android_ripple={{ color: 'green', borderless: false }}
                    style={styles.container}
                    onPress={() => {
                        dispatch(save_assignId(item.id, item.testHeaderId))
                        navigation.navigate('AnswerListHomescreen')
                        // navigation.navigate('AnswerListHomescreen', { assignId: item.id, testHeaderId: item.testHeaderId })
                    }}
                >
                    <View style={styles.container_item}>
                        <TextPaper variant="headlineLarge">{index + 1}. </TextPaper>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 22 }} >Candidate Name : {item.candidateName}</Text>
                            <Text style={{ fontSize: 22 }}>Test Name : {item.testHeaderName}</Text>
                        </View>
                    </View>

                    <View>
                        <IconButton
                            icon="file-download"
                            size={25}
                            style={{ alignSelf: 'flex-end' }}
                            onPress={() => {
                                Linking.openURL(`${BASE_URL}/files/${item.id}`)
                            }}
                        />
                        <IconButton
                            icon="circle-edit-outline"
                            size={25}
                            style={{ alignSelf: 'flex-end' }}
                            onPress={() => {
                                dispatch(save_assignId(item.id, item.testHeaderId))
                                navigation.navigate('AnswerListHomescreen')
                            }}
                        />
                    </View>
                </Pressable>
            </View>
        )
    }

    return (
        <View>
            {/* <Pressable
                android_ripple={{ color: 'black', borderless: false }}
                onPressIn={handlePressIn}
                style={styles.pressable}
            >
                <TextPaper>View Candidates</TextPaper>
            </Pressable> */}
            <View>
                <TextPaper style={{ borderBottomWidth: 2 }} variant='headlineSmall'>Welcome to Reviewer Menu</TextPaper>
                <FlatList
                    data={assignEssay}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container_item: {
        flexDirection: 'row',
        flex: 1,
        borderEndWidth: 1,
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: 1
    },
    pressable: {
        width: 100,
        height: 100,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 1
    }
})