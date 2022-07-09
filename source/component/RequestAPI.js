
import React, { useState, useEffect } from "react";

import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Button,
    Image,
    ActivityIndicator,
    SafeAreaView,
} from "react-native";




export default RequestAPI = () => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getList();

    }, [])


    getList = () => {
        // const URL = 'https://jsonplaceholder.typicode.com/photos';

        const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        fetch(URL)
            .then((response) => response.json())
            .then((res) => {
                setData(res);

            }).catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false))
    }

    const renderUI = (data) => {
        return (
            <View>
                {/* <Text> {data.chartName}</Text> */}
                {/* {data.map(item=> */}
                <Text style={style.item}>
                    Code: {data.code} {'\n'}
                    Symbol:  {data.symbol}{'\n'}
                    Rate:  {data.rate} {'\n'}
                    Description: {data.description} {'\n'}
                    Rate_float: {data.rate_float} {'\n'}
                </Text>
                {/* )} */}
            </View>
        )
    }

    return (
        <View style={style.container}>

            {loading ? <ActivityIndicator /> :

                <View>

                    <Text>
                            update: {data.time.updateduk}
                        </Text>
                   
                        <Button
                            onPress={() => { getList() }}
                            title=" ReLoad"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                

                    <Text style={{ textAlign: "center", fontSize: 30 }}>   {data.chartName}</Text>
                    {/* {data.bpi.map(item=><Text> {item.code} </Text>) } */}
                    {renderUI(data.bpi.USD)}
                    {renderUI(data.bpi.GBP)}
                    {renderUI(data.bpi.EUR)}



                </View>
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
        // flexDirection:'row',
        color: "#0f522bf0",
        fontSize: 30,
        textAlign: "left",
        marginHorizontal: 20,
        fontWeight: "500"
        // flex: 1

    },
    image: {
        // alignItems:"flex-end",
        width: 100,
        height: 100
    }

})
