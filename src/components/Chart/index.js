import React from 'react';
import { View, Text, Dimensions, StyleSheet} from 'react-native';
import {
    LineChart,
} from "react-native-chart-kit";

// import { Container } from './styles';

const Chart = () => {
    return (
        <View style={styles.conteiner}>
            <Text>Bezier Line Chart</Text>
            {console.log(Dimensions.get("window").width)}
            <LineChart
                data={{
                    labels: ["0.0 s", "1.0 s", "2.0 s", "3.0 s", "4.0 s", "5.0 s"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
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
                        stroke: "#e84a5b"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    marginHorizontal:0,
                    borderRadius: 16
                }}
            />
        </View>
    )
}

export default Chart;


const styles = StyleSheet.create({
    conteiner:{
        
        // marginTop:20,
    }
})