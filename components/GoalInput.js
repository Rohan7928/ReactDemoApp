import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
function GoalInput(props) {

    const [enterGoalText, setEnterGoalText] = useState('');

    function getGoalTexts(enterText) {
        setEnterGoalText(enterText);
    };

    function addGoalText() {
        props.onAddGoal(enterGoalText);
        setEnterGoalText('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/dinar_icon.png')} />
                <TextInput placeholder='Your Course Goal::'
                    style={styles.textInput}
                    onChangeText={getGoalTexts}
                    value={enterGoalText}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color={'#f31882'} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalText} color={'#b180f0'} />
                    </View>

                </View>

            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
        marginRight: 8,
        padding: 16,
        color: '#120438'
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 8
    }
})