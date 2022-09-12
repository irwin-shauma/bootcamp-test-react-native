import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import { getEmployees } from '../../service/employee.service';

export const HRAssignTest = () => {

    const [data, setData] = useState({
        id: "",
        userUsername: ""
    })

    const getData = () => {
        getEmployees().then((res) => {
            console.log(res.data);
            setData(() => {
                return res.data
            })
        })
    }

    useEffect(() => {
        getData()
        console.log(data);
    }, [])

    const [showDropDown, setShowDropDown] = useState(false);
    const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
    const [gender, setGender] = useState("");
    const genderList = [
        {
            label: "Male",
            value: "male",
        },
        {
            label: "Female",
            value: "female",
        },
        {
            label: "Others",
            value: "others",
        },
    ];
    const userList = [
        {
            label: "Irwin",
            value: "shauma",
        },
        {
            label: "Shauma",
            value: "shauma",
        },
        {
            label: "Others",
            value: "others",
        },
    ];

    return (
        <View>
            <Text>This is HR Assign Test</Text>

            <TextInput
                mode='outlined'
                label=''

            />
            <View
                style={{ marginVertical: 10 }}
            >
                <DropDown
                    label={"Gender"}
                    mode={"outlined"}
                    visible={showDropDown}
                    showDropDown={() => setShowDropDown(true)}
                    onDismiss={() => setShowDropDown(false)}
                    value={gender}
                    setValue={setGender}
                    list={genderList}
                />
            </View>
            <View
                style={{ marginVertical: 10 }}
            >
                <DropDown
                    label={"Gender"}
                    mode={"outlined"}
                    visible={showDropDown}
                    showDropDown={() => setShowDropDown(true)}
                    onDismiss={() => setShowDropDown(false)}
                    value={gender}
                    setValue={setGender}
                    list={userList}
                />
            </View>
            <Button
                mode='outlined'
                onPress={() => console.log(gender)}
            >
                Press Me
            </Button>

        </View>
    )
}