import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

const StartTreiner = () => {
    return (
        <View>
            <View>
                <Text>
                    00m 00s
                </Text>
                <Button
                    title="Abdominal"
                    iconRight={true}
                    type="outline"
                    icon={
                        <Icon
                            style={styles.icon}
                            name="arrow-right"
                            size={15}
                            color="black"
                        />
                    }

                />
            </View>
            <View style={styles.buttons}>
                <Button
                    title="INICIAR"
                    buttonStyle={styles.button}
                />
                <Button
                    buttonStyle={styles.button}
                    title="RELATÓRIOS"
                />
            </View>
        </View>

    )
}

export default StartTreiner;


const styles = StyleSheet.create({
    icon: {
        // paddingLeft:20,

    },
    button: {
        width: 150,
        backgroundColor: '#e84a5b',
        
    },
    buttons: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin:20,

    }
})