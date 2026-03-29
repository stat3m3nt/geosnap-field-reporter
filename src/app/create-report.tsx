import { View, StyleSheet, Text} from 'react-native';

export default function createReportsScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Reports Screen coming soon</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",   
        alignItems: "center",
    },
    text: {
        fontSize: 16,
        color: '#1e2a3a',
    },
});