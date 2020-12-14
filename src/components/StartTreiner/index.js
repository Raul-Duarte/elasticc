import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const StartTreiner = () => {

    const [visible, setVisible] = useState(false);
    const [exercicio, setExercicio] = useState('');
    const [time, setTime] = useState(0)

    const data = [
        {
            id: '1',
            title: 'Abdominal',
        },
        {
            id: '2',
            title: 'Flexção',
        },
    ]

    const Item = ({ title }) => (
        <View style={styles.item}>

            <Button
                title={title}
                buttonStyle={styles.button}
                onPress={() => setButton(title)}
            />
        </View>
    )

    const setButton = title => {
        setExercicio(title)
        toggleOverlay()
    }

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    const timerFun = () => {
        let i = 1
        let timer = setInterval(() => {
            if (i < 6) {
                setTime(i++)
            }

        }, 1000);
    }

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
                        {time} s
                     </Text>
                </View>

                <Button
                    title={exercicio != '' ? exercicio : 'Selecione...'}
                    iconRight={true}
                    type="outline"
                    titleStyle={styles.exercicioText}
                    onPress={toggleOverlay}
                    buttonStyle={styles.exercicio}

                />
                <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                    <View style={styles.overlay}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </Overlay>
            </View>
            <View style={styles.buttons}>
                <Button
                    title="INICIAR"
                    buttonStyle={styles.button}
                    onPress={() => timerFun()}
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

    },
    item: {
        // backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})