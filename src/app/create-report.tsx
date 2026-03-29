import { View, StyleSheet, Text, Pressable, ScrollView, TextInput} from 'react-native';
import { useState } from 'react';

export default function createReportsScreen(){
    const [category, setCategory] = useState('');
    const [severity, setSeverity] = useState('');
    const [notes, setNotes] = useState('');
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}> Create New Report</Text>
            <Text style={styles.subtitle}> Capture and document field issues.</Text>

            {/* photo section */}
            <View style={styles.section}>
                <Text style={styles.label}>Photo</Text>
                <Pressable style={styles.photoButton}>
                    <Text style={styles.photoButtonText}>Take Photo</Text>
                </Pressable>
            </View>

            {/* category section */}
            <View style={styles.section}>
                <Text style={styles.label}>Category</Text>
                <Text style={styles.subtitle}>(Select the category that best describes the issue.)</Text>
                <View style={styles.optionRow}>
                    <Pressable style={[styles.optionButton, category === 'Safety' && styles.selectedOption]} onPress={() => setCategory('Safety')}>
                        <Text style={[styles.optionText, category === 'Safety' && styles.selectedOptionText]}>Safety</Text>
                    </Pressable>

                    <Pressable style={[styles.optionButton, category === 'Maintenance' && styles.selectedOption]} onPress={() => setCategory('Maintenance')}>
                        <Text style={[styles.optionText, category === 'Maintenance' && styles.selectedOptionText]}>Maintenance</Text>
                    </Pressable>

                    <Pressable style={[styles.optionButton, category === 'Damage' && styles.selectedOption]} onPress={() => setCategory('Damage')}>
                        <Text style={[styles.optionText, category === 'Damage' && styles.selectedOptionText]}>Damage</Text>
                    </Pressable>

                    <Pressable style={[styles.optionButton, category === 'Cleanliness' && styles.selectedOption]} onPress={() => setCategory('Cleanliness')}>
                        <Text style={[styles.optionText, category === 'Cleanliness' && styles.selectedOptionText]}>Cleanliness</Text>
                    </Pressable>

                    <Pressable style={[styles.optionButton, category === 'Accessibility' && styles.selectedOption]} onPress={() => setCategory('Accessibility')}>
                        <Text style={[styles.optionText, category === 'Accessibility' && styles.selectedOptionText]}>Accessibility</Text>
                    </Pressable>
                </View>
            </View>

            {/* severity section */}
            <View style={styles.section}>
                <Text style={styles.label}>Severity</Text>
                <Text style={styles.subtitle}>(Indicate the severity level of the issue.)</Text>
                
                <View style={styles.optionRow}>
                    <Pressable style={[styles.optionButton, severity === 'Low' && styles.selectedOption]} onPress={() => setSeverity('Low')}>
                        <Text style={[styles.optionText, severity === 'Low' && styles.selectedOptionText]}>Low</Text>
                    </Pressable>

                     <Pressable style={[styles.optionButton, severity === 'Medium' && styles.selectedOption]} onPress={() => setSeverity('Medium')}>
                        <Text style={[styles.optionText, severity === 'Medium' && styles.selectedOptionText]}>Medium</Text>
                    </Pressable>

                    <Pressable style={[styles.optionButton, severity === 'High' && styles.selectedOption]} onPress={() => setSeverity('High')}>
                        <Text style={[styles.optionText, severity === 'High' && styles.selectedOptionText]}>High</Text>
                    </Pressable>
                </View>
            </View>


            {/* notes section */}
            <View style={styles.section}>
                <Text style={styles.label}>Notes</Text>
                <TextInput
                style={styles.textInput}
                value={notes}
                onChangeText={setNotes}
                placeholder="Enter additional details..."
                multiline />
            </View>

            <Pressable style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save Report</Text>
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: 'slategray',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#1e2a3a',
        marginBottom: 10,
    },
    section:{
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1e2a3a',
        marginBottom: 8,
    },
    photoButton: {
        backgroundColor: '#1e2a3a68',
        height: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#1e2a3a',
        borderStyle: 'dashed',
    },
    photoButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    optionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    optionButton: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',   
        borderWidth: 1,
        borderColor: '#1e2a3a',
    },
    selectedOption: {
        backgroundColor: '#1e2a3a',
        borderColor: 'white',
    },
    optionText: {
        color: 'gray',
        fontWeight: '800',
    },
    selectedOptionText: {
        color: 'white',
        fontWeight: '600',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#1e2a3a',
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
    },
    saveButton: {
        backgroundColor: '#1e2a3a',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    
});