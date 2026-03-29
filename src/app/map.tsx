import { View, Text, StyleSheet} from 'react-native';

export default function mapScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Map Screen coming soon</Text>
        </View>
    )

}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: '#f4f7fb',
            padding: 24,
        },
        text: {
            fontSize: 16,
            color: '#1e2a3a',
        }
    });