import { Pressable, StyleSheet, View, Linking } from "react-native"
import { Text } from "react-native-paper"
import React, { useState } from 'react'
import DocumentPicker, { types } from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import { postFile } from '../../service/file.service'
import { BASE_URL } from "../../constant/constant";

export const CandidateHomescreen = ({ navigation }) => {
    // const handlePressIn = () => {
    //     navigation.navigate('')
    // }
    const [file, setFile] = useState();
    const [visible, setVisible] = useState(false)
    const [idInsert, setIdInsert] = useState(0);
    const [upload, setUpload] = useState({
        fileName: '',
        fileExt: ''
    })

    // const onDismissSnackBar = () => setVisible(false)

    const selectFile = async () => {
        try {
            const result = await DocumentPicker.pickSingle({
                type: [types.pdf, types.images]
            })
            setFile(result)
            const fileName = (result.name)
            const ext = fileName.substring(fileName.lastIndexOf('.') + 1)
            const data = RNFS.readFile(result.uri, 'base64').then(res => { return res });
            data.then(res => {
                setUpload({
                    fileName: res,
                    fileExt: ext
                })
            })
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                setVisible(!visible)
            }
        }
    }
    const uploadFile = () => {
        postFile(upload).then(res => {
            setIdInsert(res.insertResData.id)
        })
        // console.log(upload.fileExtension)
    }

    const downloadFile = () => {
        Linking.openURL(`${BASE_URL}/files/${idInsert}`)
    }


    return (
        <View>
            <View style={{
                borderRadius: 50,
                overflow: 'hidden',
                alignSelf: 'center'
            }}>
                <Text>{idInsert}</Text>
                <Pressable
                    android_ripple={{ color: 'black', borderless: false }}
                    style={styles.container}
                    onPressIn={selectFile}
                >
                    <Text>Select File</Text>
                </Pressable>
                <Pressable
                    android_ripple={{ color: 'black', borderless: false }}
                    style={styles.container}
                    onPressIn={uploadFile}
                >
                    <Text>Upload File</Text>
                </Pressable>
                <Pressable
                    android_ripple={{ color: 'black', borderless: false }}
                    style={styles.container}
                    onPressIn={downloadFile}
                >
                    <Text>Download File - {idInsert}</Text>
                </Pressable>
            </View>
        </View>
    )



}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderColor: 'red',
        borderWidth: 1
    }
})
