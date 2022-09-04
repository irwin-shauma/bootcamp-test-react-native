import { StyleSheet, View } from "react-native"
import React from 'react'
import { TextInput, Button } from 'react-native-paper'
import { giveScore } from "../../service/candidate-essay-answer-header.service"

export const ReviewerScoring = ({ route, navigation }) => {
    const { answerHeaderId } = route.params;
    const [scoreData, setScoreData] = React.useState({
        id: answerHeaderId,
        score: 0,
        reccomendation: ""
    })

    const handleChangeScore = (score) => {
        setScoreData(() => {
            return { ...scoreData, score }
        })
    }

    const handleChangeReccomendation = (reccomendation) => {
        setScoreData(() => {
            return { ...scoreData, reccomendation }
        })
    }

    const handleScoring = () => {
        console.log(scoreData);
        giveScore(scoreData).then(() => {
            navigation.navigate('ReviewerHomescreen')
        })
    }

    return (
        <View>
            <TextInput
                label='Score'
                mode="outlined"
                value={scoreData.score}
                keyboardType='number-pad'
                onChangeText={(score) => handleChangeScore(Number(score))}
            />
            <TextInput
                label='Reccomendation'
                mode="outlined"
                style={styles.reccomendationInput}
                multiline={true}
                value={scoreData.reccomendation}
                onChangeText={(reccomendation) => handleChangeReccomendation(reccomendation)}
            />
            <Button
                style={styles.scoreButton}
                mode='contained'
                onPress={() => handleScoring()}
            >
                GIVE SCORE
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scoreButton: {
        marginTop: 10,
        width: 275,
        alignSelf: 'center'
    },
    reccomendationInput: {
        marginVertical: 10,
        height: 300,
    }
})