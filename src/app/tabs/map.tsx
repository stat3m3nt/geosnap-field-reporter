/**
 * "StAuth10244: I Andrew Evboifo, 000909727 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."
 */
import { View, Text, StyleSheet} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useReportContext } from '../../context/ReportContext';


export default function MapScreen(){
    const { reports } = useReportContext();

    const markerReports = reports.filter((report) => report.latitude !== undefined && report.longitude !== undefined);
    const initialRegion = markerReports.length > 0 ? {
        latitude: markerReports[0].latitude,
        longitude: markerReports[0].longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    } : {
        latitude: 43.17126, // Default to location
        longitude: -79.24267,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}> Report Map</Text>

            <Text style={{ paddingHorizontal: 16, fontSize: 16, color: '#1e2a3a', marginBottom: 10 }}>
  Reports with coords: {reports.filter(r => r.latitude !== undefined && r.longitude !== undefined).length}
</Text>

            <View style={styles.mapContainer}>
                <MapView style={styles.map} initialRegion={initialRegion} showsUserLocation={true} mapType="standard">
                {reports.filter((report) => report.latitude !== undefined && report.longitude !== undefined).map((report) => (
                    <Marker
                        key={report.id}
                        coordinate={{
                            latitude: report.latitude,
                            longitude: report.longitude,
                        }}
                        pinColor={report.status === 'Open' ? 'red' : 'green'}
                    >
                        <Callout>
                            <View style={styles.callout}>
                                <Text style={styles.calloutTitle}>{report.category}</Text>
                                <Text style={styles.calloutText}>Severity: {report.severity}</Text>
                                <Text style={styles.calloutText}>Status: {report.status}</Text>
                                <Text style={styles.calloutText}>Notes: {report.notes}</Text>
                            </View> 
                        </Callout>
                    </Marker>
                    ))}
                </MapView>
            </View>
            
        </View>
    )

}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'center',
            // padding: 16,
            backgroundColor:'slategray',
            
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            paddingHorizontal: 16,
            paddingBottom: 10,
            paddingTop: 16,
            color: '#ffffff',
            marginTop: 50,
            textAlign: 'center',
        },
        mapContainer: {
            flex: 1,
            marginHorizontal: 15,
            marginBottom: 15,
            borderRadius: 10,
            overflow: 'hidden',
        },
        map: {
            flex: 1,
            // width: '100%',
        },
        callout: {
            width: 200,
            padding: 5,
        },
        calloutTitle: {
            fontWeight: "bold",
            fontSize: 16,
            marginBottom: 5,
        },
        calloutText: {
            fontSize: 14,
            marginBottom: 2,

        },




    });