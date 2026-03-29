import { Text, View, StyleSheet, Pressable } from "react-native";
import { useRouter } from 'expo-router';


export default function HomeScreen() {
  const router = useRouter();

  const totalReports = 8;
  const openReports = 5;
  const resolvedReports = 3;

  return (
    <View style={styles.container}>
      <Text style ={styles.title}>GeoSnap Field Reporter</Text>
      <Text style={styles.subtitle}> Capture field issues with photos, location, and map-based tracking.</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{totalReports}</Text>
          <Text style={styles.statLabel}>Total Reports</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{openReports}</Text>
          <Text style={styles.statLabel}>Open Reports</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{resolvedReports}</Text>
          <Text style={styles.statLabel}>Resolved Reports</Text>
        </View>
      </View>

      <View style={styles.buttonGroup}>
        <Pressable style={styles.button} onPress={() => router.push('/create-report')}>
          <Text style={styles.buttonText}>Create Report</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => router.push('/map')}>
          <Text style={styles.buttonText}>View Map</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => router.push('/reports')}>
          <Text style={styles.buttonText}>View Reports</Text>
        </Pressable>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#f4f7fb',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color:'#1e2a3a',
  },
  subtitle: {
    fontSize: 16,
    color: '#1e2a3a',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    width: '100%',
    paddingHorizontal: 20,
  },
  statBox: {
    // alignItems: "center",
    // marginHorizontal: 4,
    // marginVertical: 10,
    // backgroundColor: '#ffffff',
    // padding: 20,
    // borderRadius: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // elevation: 3,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#1e2a3a',
  },
  statLabel: {
    fontSize: 12,
    color: '#1e2a3a',
    marginTop: 4,
    textAlign: 'center',
  },
  buttonGroup: {
    gap: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#1e2a3a',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: "bold",   
  },
});
