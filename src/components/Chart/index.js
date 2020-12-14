import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

const Chart = () => {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

    return (
        <>
            <View style={styles.icons} >
                <Icon
                    raised
                    style={styles.icon}
                    name='cog'
                    size={30}
                    type='font-awesome'
                    color='#e84a5b'
                    onPress={() => console.log('hello')} />
                <Icon
                    raised
                    name='align-left'
                    type='font-awesome'
                    size={30}
                    color='#e84a5b'
                    onPress={() => console.log('hello')} />
            </View>
            <View style={styles.chart}>
                {console.log(Dimensions.get("window").width)}
                <LineChart
                    data={{
                        labels: ["0.0 s", "1.0 s", "2.0 s", "3.0 s", "4.0 s", "5.0 s"],
                        datasets: [
                            {
                                data: [
                                    0,
                                    getRandomInt(0,31),
                                    getRandomInt(0,31),
                                    getRandomInt(0,31),
                                    getRandomInt(0,31),
                                    getRandomInt(0,31),
                                ]
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native

                    height={220}
                    yAxisSuffix="kg"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#fff",
                        backgroundGradientFrom: "#FFF",
                        backgroundGradientTo: "#A8A8A8",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(232, 74, 91, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(232, 74, 91, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#FFF"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        marginHorizontal: 0,
                        borderRadius: 16
                    }}
                />
            </View>
        </>
    )
}

export default Chart;


const styles = StyleSheet.create({
    chart: {

    },
    icons: {
        flexDirection:'row',
        marginTop:15,
        marginRight:40,
        marginLeft:40,
        alignItems:'center',
        justifyContent:'space-between',
        alignContent:'space-between',
    },

    icon:{

        height:50,

    }
})