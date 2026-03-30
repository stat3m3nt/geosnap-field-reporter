import { useRef, useState } from 'react'; // for managing form state and references
import { 
    View, 
    StyleSheet, 
    Text, 
    Pressable, 
    ScrollView, 
    TextInput,
    Image,
    Alert,
} from 'react-native'; 
import { Picker } from '@react-native-picker/picker'; // for dropdown selection
import { CameraView, useCameraPermissions } from 'expo-camera'; // for camera functionality 
import { useRouter } from 'expo-router';   // for navigation between screens
import { useReportContext } from '../context/ReportContext'; // for accessing report context

export default function CreateReportsScreen(){
    const [category, setCategory] = useState('');
    const [severity, setSeverity] = useState('');
    const [notes, setNotes] = useState('');

    const router = useRouter();
    const { addReport } = useReportContext();

    const [photoURI, setPhotoURI] = useState<string | null>(null); // to store the URI of the captured photo
    const [showCamera, setShowCamera] = useState(false);
    const [cameraReady, setCameraReady] = useState(false);
    
    const cameraRef = useRef<CameraView | null>(null);

    const [cameraPermission, requestCameraPermission] = useCameraPermissions();

    // Function to handle taking a photo
    const openCamera = async () => {
        if (!cameraPermission?.granted) {
            const permission = await requestCameraPermission();
            if (!permission.granted) {
                Alert.alert('Permission Denied', 'Camera access is required to take photos for your reports.');
                return;
            }
        }
        setShowCamera(true);
    };

    // Function to capture photo and save URI
    const takePhoto = async () => {
        if(!cameraRef.current || !cameraReady) {
            Alert.alert('Camera Not Ready', 'The camera is not ready yet. Please wait a moment and try again.');
            return;
        }

        try {
            const photo = await cameraRef.current.takePictureAsync();
            
            if (photo?.uri) {
                setPhotoURI(photo.uri);
                setShowCamera(false);
            }

        } catch (error) {
                Alert.alert('Error', 'Failed to take photo. Please try again.');
                console.log(error);
        }
    };

    
    // Function to retake photo
    const retakePhoto = () => {
        setPhotoURI(null);
        setShowCamera(true);
    };

    const saveReport = () => {
        if (!category || !severity || !notes.trim()) {
            Alert.alert('Missing Information', 'Please select a category, severity, and provide notes for your report.');
            return;
        }
        const newReport = {
            id: Date.now().toString(),
            title: `${category} Issue - ${severity} Severity`,
            category,
            severity,
            notes,
            photoURI,
            status: "Open" as "Open" | "Resolved",
            createdAt: new Date(),
        };


        addReport(newReport);
        Alert.alert('Report Saved', 'Your report has been saved successfully.');

        setCategory('');
        setSeverity('');
        setNotes('');
        setPhotoURI(null);
        router.push('/reports');
    };

    // show camera view if user wants to take a photo, otherwise show the form
    if (showCamera) { 
        return (
            <View style={styles.cameraContainer}>
                <CameraView
                    ref={cameraRef}
                    style={styles.camera}
                    facing="back"
                    onCameraReady={() => setCameraReady(true)}
                />
                <View style={styles.cameraButtons}>
                    <Pressable style={styles.cancelButton} onPress={() => setShowCamera(false)}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </Pressable>

                    <Pressable style={styles.captureButton} onPress={takePhoto} disabled={!cameraReady}>
                        <Text style={styles.captureButtonText}>Capture</Text>
                    </Pressable>
                </View> 
            </View>
        );
    }
    
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}> Create New Report</Text>
            <Text style={styles.subtitle}> Capture and document field issues.</Text>

            {/* photo section */}
            <View style={styles.section}>
                <Text style={styles.label}>Photo</Text>

                {photoURI ? (
                    <View>
                        <Image source={{ uri: photoURI }} style={styles.previewImage} />
                        <Pressable style={styles.retakeButton} onPress={retakePhoto}>
                            <Text style={styles.retakeButtonText}>Retake Photo</Text>
                        </Pressable>
                    </View>
                ) : (
                    <Pressable style={styles.photoButton} onPress={openCamera}>
                        <Text style={styles.photoButtonText}>Take Photo</Text>
                    </Pressable>
                )}
            </View>

            {/* category section */}
            <View style={styles.section}>
                <Text style={styles.label}>Category</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={category}
                        onValueChange={(itemValue) => setCategory(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select a category..." value="" />
                        <Picker.Item label="Safety" value="Safety" />
                        <Picker.Item label="Maintenance" value="Maintenance" />
                        <Picker.Item label="Damage" value="Damage" />
                        <Picker.Item label="Accessibility" value="Accessibility" />
                        <Picker.Item label="Cleanliness" value="Cleanliness" />
                    </Picker>
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

            <Pressable style={styles.saveButton} onPress={saveReport}>
                <Text style={styles.saveButtonText}>Save Report</Text>
            </Pressable>
        </ScrollView>
    );
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
        fontWeight: '400',
    },
    selectedOptionText: {
        color: 'white',
        fontWeight: '600',
    },
    picker: {
        color: '#1e2a3a',
    },
    previewImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    retakeButton: {
        marginTop: 10,
        backgroundColor: '#1e2a3a',
        borderRadius: 10,  
        padding: 12,
        alignItems: 'center',

    },
    retakeButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
    cameraContainer: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    cameraButtons: {
        flexDirection: 'row',
        backgroundColor: '#111827',
        gap: 20,
        padding: 20,
    },

    cancelButton: {
        backgroundColor: '#6b7280',
        padding: 15, 
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',   
    },

    cancelButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },

    captureButton: {
        backgroundColor: '#8c690a',
        padding: 15,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
    },

    captureButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },  
    textInput: {
        borderWidth: 1,
        borderColor: '#1e2a3a',
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
        minHeight: 100,
        textAlignVertical: 'top',
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
    pickerContainer:{
        borderWidth: 1,
        borderColor: '#1e2a3a',
        borderRadius: 5,
        backgroundColor: '#ffffff',
    },
});
