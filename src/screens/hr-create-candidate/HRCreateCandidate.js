import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { insertCandidate } from "../../service/candidate.service";

export const HRCreateCandidate = ({navigation}) => {

    const [data, setData] = useState({
        userUsername: "",
        candidateEmail: "",
        candidateName: ""
    })

    const handleChangeUserUsername = (userUsername) => {
        setData(() => {
            return { ...data, userUsername }
        })
    }
    const handleChangeCandidateEmail = (candidateEmail) => {
        setData(() => {
            return { ...data, candidateEmail }
        })
    }
    const handleChangeCandidateName = (candidateName) => {
        setData(() => {
            return { ...data, candidateName }
        })
    }
    const handleCreateCandidate = () => {
        insertCandidate(data).then(() => {
            navigation.navigate('HRHomescreen')
        })
    }

    return (
        <View style={styles.container}>
            <Text>
                This is HR CreateCandidate
            </Text>
            <TextInput
                style={styles.textInput}
                mode='outlined'
                label='Username'
                value={data.userUsername}
                onChangeText={(userUsername) => handleChangeUserUsername(userUsername)}
            />

            <TextInput
                style={styles.textInput}
                mode='outlined'
                label='Email'
                value={data.candidateEmail}
                onChangeText={(candidateEmail) => handleChangeCandidateEmail(candidateEmail)}

            />
            <TextInput
                style={styles.textInput}
                mode='outlined'
                label='Name'
                value={data.candidateName}
                onChangeText={(candidateName) => handleChangeCandidateName(candidateName)}
            />
            <Button
                style={styles.button}
                icon='login'
                mode='contained'
                onPress={() => handleCreateCandidate()}
            >
                CREATE
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 275,
        marginVertical: 10
    },
    textInput: {
        width: 300,
        marginVertical: 10
    }
})

