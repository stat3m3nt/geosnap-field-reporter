/**
 * "StAuth10244: I Andrew Evboifo, 000909727 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."
 */

import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useReportContext } from "../../context/ReportContext";


export default function HomeScreen() {
  const router = useRouter();
  const { reports } = useReportContext();

  const totalReports = reports.length;
  const openReports = reports.filter((r) => r.status === "Open").length;
  const resolvedReports = reports.filter((r) => r.status === "Resolved").length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GeoSnap Field Reporter</Text>
      <Text style={styles.subtitle}>
        {" "}
        Capture field issues with photos, location, and map-based tracking.
      </Text>

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
        <Pressable
          style={styles.button}
          onPress={() => router.push("/tabs/create-report")}
        >
          <Text style={styles.buttonText}>Create Report</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/tabs/map")}
        >
          <Text style={styles.buttonText}>View Map</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/tabs/reports")}
        >
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
    backgroundColor: "slategrey",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "#1e2a3a",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    width: "100%",
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
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e2a3a",
  },
  statLabel: {
    fontSize: 12,
    color: "#1e2a3a",
    marginTop: 4,
    textAlign: "center",
  },
  buttonGroup: {
    gap: 10,
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#1e2a3a",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
