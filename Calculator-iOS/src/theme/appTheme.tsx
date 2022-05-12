import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right'
    },
    resultSmall: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 20,
        textAlign: 'right'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 8,
    },
    buttonText: {
        alignSelf: 'center',
        padding: 10,
        fontSize: 30,
    }
});