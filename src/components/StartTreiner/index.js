import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button, Overlay, ListItem, Icon as Teste } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import analytics from '../../assets/icons/teste.png'

const StartTreiner = () => {

    const [visible, setVisible] = useState(false);
    // const [exercicio, setExercicio] = useState(data)


    const data = [
        {
            id: '1',
            name: 'Appointments',
        },
        {
            id: '2',
            name: 'Trips',
        },
    ]

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    //Time

    // useEffect(() => {
    //     let i = 1.0
    //     i+1
    //     let timer = setInterval(() => console.log(i+1), 1000);

    //     return () => clearInterval(timer)
    // }, [])

  
    return (
        <View>
            <View >
                <View style={styles.timer}>
                    <Icon
                        name='hourglass'
                        color='#e84a5b'
                        size={20}
                    />
                    <Text style={styles.timeText}>
                        00m 00s
                     </Text>
                </View>

                <Button
                    title="Abdominal"
                    iconRight={true}
                    type="outline"
                    titleStyle={styles.exercicioText}
                    // icon={
                    //     <Icon

                    //         name="arrow-right"
                    //         size={15}
                    //         color="black"
                    //     />
                    // }
                    onPress={toggleOverlay}
                    buttonStyle={styles.exercicio}

                />
                <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                    <View style={styles.overlay}>
                        
                    </View>
                </Overlay>
            </View>
            <View style={styles.buttons}>
                <Button
                    title="INICIAR"
                    buttonStyle={styles.button}
                    icon={
                        <Icon
                            name="play"
                            size={15}
                            color="white"
                            style={styles.icon}
                        />
                    }
                />
                <Button
                    buttonStyle={styles.button}
                    title="RELATÓRIOS"
                    icon={

                        <Icon
                            name="align-left"
                            size={15}
                            color="white"
                            style={styles.icon}
                        />

                    }
                />
            </View>
        </View>

    )
}

export default StartTreiner;


const styles = StyleSheet.create({
    icon: {
        marginRight: 10,
        // paddingLeft:20,

    },
    button: {
        width: 150,
        backgroundColor: '#e84a5b',

    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,

    },
    timer: {

        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: ,
    },
    timeText: {
        marginLeft: 20,
        marginBottom: 0,
        fontSize: 20,
    },
    exercicio: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#A8A8A8',
        margin: 20,
        marginTop: 0,
        marginBottom: 0,
    },
    exercicioText: {
        color: "#a8a8a8",
    },
    overlay: {
        flexDirection: 'row',
        alignContent: "center",

    }
})