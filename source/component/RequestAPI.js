
import React, { useState, useEffect } from "react";

import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    ActivityIndicator
} from "react-native";




export default RequestAPI = () => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getList();

    }, [])


    getList = () => {
        const URL = 'https://jsonplaceholder.typicode.com/photos';
        fetch(URL)
            .then((response) => response.json())
            .then((res) => {
                setData(res)
            }).catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false))
    }

    renderItem = ({ item, index }) => {
        return (
            <View style={style.item}>
                <Text> {item.title}</Text>
                <Image 
                style={style.image}
                source={{uri: item.url}}
                resizeMode="contain"
                />
            </View>
        )
    }
    return (
        <View style={style.container}>
            {loading ? <ActivityIndicator /> :
                <FlatList
                    style={style.item}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}


                />
            }
        </View>
    );
}



const style = StyleSheet.create({
    container: {
        // flexDirection:'row',
        flex: 1,
        // flex:100
    },
    item: {
        textAlign:"center",
        flex:1

    },
    image: {
        width:100,
        height:100
    }

})
