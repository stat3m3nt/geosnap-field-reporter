import { View, StyleSheet, Text, FlatList, Image, Pressable} from 'react-native';
import { useReportContext } from '../context/ReportContext';
import { normalizeCSSTransitionProperties } from 'react-native-reanimated/lib/typescript/css/native';

export default function ReportsScreen(){
    const { reports, updateReportStatus } = useReportContext();

    return(
        <View style={styles.container}>
            <Text style={styles.title}> Saved Reports</Text>

            {reports.length === 0 ? (
                <View style={styles.noReportsContainer}>
                    <Text style={styles.noReportsTitle}>No reports submitted yet.</Text>
                    <Text style={styles.noReportsText}>Use the "Create Report" button to submit your first report.</Text>
                </View>
            ) : (
                <FlatList
                    data={reports}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListContent}
                    renderItem={({ item }) => (
                        <View style={styles.reportCard}>
                            {item.photoURI ? (
                                <Image source={{ uri: item.photoURI }} style={styles.reportImage} />
                            ) : (
                                <View style={styles.noImagePlaceholder}>
                                    <Text style={styles.noImageText}>No Photo</Text>
                                </View>
                            )}

                            <Text style={styles.reportTitle}>{item.title}</Text>
                            <Text style={styles.reportCategory}>Category: {item.category}</Text>
                            <Text style={styles.reportSeverity}>Severity: {item.severity}</Text>
                            <Text style={styles.reportStatus}>Status: {item.status}</Text>
                            <Text style={styles.reportNotes}>Notes: {item.notes}</Text>
                            
                            {item.status === 'Open' && (
                                <Pressable style={styles.resolveButton} onPress={() => updateReportStatus(item.id, 'Resolved')}>
                                    <Text style={styles.resolveButtonText}>Mark as Resolved</Text>
                                </Pressable>
                            )}
                        </View>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",   
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: '#1e2a3a',
    },

    noReportsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    noReportsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    noReportsText: {
        fontSize: 16,
        color: '#1e2a3a',
        textAlign: 'center',
    },
    reportCard: {
        width: '90%',
        backgroundColor: '#f4f7fb', 
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    reportImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    noImagePlaceholder: {
        width: '100%',
        height: 200,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    noImageText: {
        fontSize: 16,
        color: '#1e2a3a',

    },

    flatListContent: {
        paddingBottom: 20,
    },

    reportTitle: {
        fontSize: 16,
        fontWeight: 'bold', 
    },
    reportCategory: {
        fontSize: 14,
    },
    reportSeverity: {
        fontSize: 14,
    },
    reportStatus: {
        fontSize: 14,
    },
    reportNotes: {
        fontSize: 14,
    },
    resolveButton: {
        marginTop: 10,
        backgroundColor: '#1e2a3a', 
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    resolveButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    
});