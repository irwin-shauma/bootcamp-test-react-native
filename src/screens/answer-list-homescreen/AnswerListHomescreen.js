import React, { useEffect, useState } from "react"
import { getAllByHeaderId } from '../../service/candidate-essay-answer-detail.service'
import { FlatList, StyleSheet, Text, View } from "react-native"
import { findByAssignId } from "../../service/candidate-essay-answer-header.service"
import { findAllByTestHeaderId } from "../../service/test-detail.service"
import { Button, Text as TextPaper } from "react-native-paper"

export const AnswerListHomescreen = ({ route, navigation }) => {
    const [answerList, setAnswerList] = useState([])
    const [testDetails, setTestDetails] = useState([])
    const { assignId, testHeaderId } = route.params;

    const getData = async () => {
        findByAssignId(assignId).then((res) => {
            getAllByHeaderId(res.data.id).then((res) => {
                setAnswerList(() => {
                    return res.data
                })
            })
        })

        findAllByTestHeaderId(testHeaderId).then((res) => {
            console.log(res.data);
            setTestDetails(() => {
                return res.data
            })
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const ShowQuestion = (props) => {
        for (const item of testDetails) {
            if (item.id == props.id) {
                return (
                    <Text>{item.testContent}</Text>
                )
            }
        }
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.container_item}>
                <TextPaper variant="headlineMedium">{index + 1}. </TextPaper>
                <View>
                    {/* <Text style={{ fontWeight: 'bold', fontSize: 22 }} >Soal : {item.candidateName}</Text> */}
                    <ShowQuestion id={item.testDetailId} />
                    <Text style={{ fontSize: 22 }}>Jawaban : {item.answerEssay}</Text>
                </View>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={answerList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style={{ marginTop: 20 }}>
                <Button
                    mode="contained"
                >Give Score</Button>
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
    }
})