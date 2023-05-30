// Token :218b0f8c13ffb025c01905d9395612697c3e861bf46bf8700a1984a02136161c
import * as React from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from 'react-native'
import Service from '../networking/service'
import {endpoints} from '../networking/urls'

const ListView = ({navigation}) => {
    React.useEffect(() => {
        getListApi()
    }, [])

    const [listdata, setListData] = React.useState([])

    const getListApi = async () => {
        try {
            let response = await Service.getAnswers(endpoints.users)
            if (response) {
                console.log(response, 'getListApi')
                setListData(response.data)
            } else {
                setListData()
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleNavigateToUpdate =(item)=>{
        let ItemData={ItemData:item}
        navigation.navigate('UpdateUser',ItemData)
    }

    const Item = ({item}) => {
        return (
            <TouchableOpacity style={styles.item} onPress={()=>handleNavigateToUpdate(item)}>
                <View style={styles.col}>
                <Text style={styles.title}>User Id : {item.id}</Text>
                <Text style={styles.title}>Name : {item.name}</Text>
                <Text style={styles.title}>Email: {item.email}</Text>
                <Text style={styles.title}>Status : {item.status}</Text>
                </View>
                <Image
                    source={{uri: 'https://w7.pngwing.com/pngs/766/581/png-transparent-computer-icons-editing-others-thumbnail.png'}}
                    style={styles.imageStyle}
                />
            </TouchableOpacity>
        )
    }
    const renderItem = ({item}) => <Item item={item} />
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={listdata}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
    },
    item: {
        backgroundColor: '#b3bbbd',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:"row"
    },
    col:{
        flexDirection:"column"
    },
     imageStyle: {
        height: 20,
        width: 20,
        // backgroundColor:"red"
    },
    title: {
        fontSize: 32,
        color: '#000000',
    },
})
export default ListView
