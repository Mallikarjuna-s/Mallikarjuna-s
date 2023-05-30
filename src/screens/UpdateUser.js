import React, {useState} from 'react'
import {View, TextInput, Button, Switch, Text} from 'react-native'

import Service from '../networking/service'
import {endpoints} from '../networking/urls'

const UpdateUser = ({route, navigation}) => {
    const {ItemData} = route.params
    const [form, setForm] = useState({
        email: ItemData?.email ?? '',
        gender: ItemData?.gender ?? '',
        id: ItemData?.id ?? '',
        name: ItemData?.name ?? '',
        status: ItemData?.status ?? '',
    })
    const [isActive, setIsActive] = useState(ItemData?.id ?? false)

    const handleSwitchToggle = () => {
        setIsActive(prevIsActive => !prevIsActive)
    }
    const handleInputChange = (fieldName, value) => {
        setForm({...form, [fieldName]: value})
    }

    const handleSubmit = () => {
        // console.log(form)
        hadleUpdate(form)
    }

    const hadleUpdate = async (form) => {
        try {
            let response = await Service.updateUser(endpoints.updateUser+ItemData?.id, form)
            if (response) {
                console.log(response, 'hadleUpdate')
                navigation.navigate('ListView')
            } else {
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log('ItemData', ItemData)
    return (
        <View>
            <TextInput
                placeholder="Email"
                value={form.email}
                onChangeText={value => handleInputChange('email', value)}
            />
            <TextInput
                placeholder="Name"
                value={form.name}
                onChangeText={value => handleInputChange('name', value)}
            />
            <Text>Status: {isActive ? 'Active' : 'Inactive'}</Text>
            <Switch value={isActive} onValueChange={handleSwitchToggle} />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    )
}

export default UpdateUser
