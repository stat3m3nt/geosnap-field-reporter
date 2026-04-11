
import { Text, View, StyleSheet } from "react-native";
import { useReportContext } from "../../context/ReportContext"; 
import ReportList from "../../components/reports/ReportList";
import ScreenHeader from "../../components/common/ScreenHeader";
import EmptyState from "../../components/common/EmptyState";
import { COLORS } from "../../constants/colors";



export default function HomeScreen() {
  const { reports, updateReportStatus } = useReportContext();

  const totalReports = reports.length;
  const openReports = reports.filter((r) => r.status === "Open").length;
  const resolvedReports = reports.filter((r) => r.status === "Resolved").length;


  const recentReports = reports.slice(0, 3);

  const handleResolve = (id: string) => { 
    updateReportStatus(id,'Resolved');
  };

  return (
    <View style={styles.container}>
      <ScreenHeader title="GeoSnap" subtitle="Track and manage your field reports" />
      {/* {recentReports.length === 0 ? (
        <EmptyState title="No reports found" message="Start by creating a new report!" />
      ) : (
        <>
        <Text style={styles.reportsTitle}>Recent Reports</Text>
        <ReportList reports={recentReports} onStatusChange={(id) =>updateReportStatus(id, "Resolved")} />
        </>
      )} */}

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.background,
    
    // justifyContent: "center",
  },
  // reportsTitle: {
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   marginBottom: 10,
  //   alignSelf: "flex-start",
  //   paddingHorizontal: 20,
  // },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "auto",
    width: "100%",
    paddingHorizontal: 20,
  },
  statBox: {
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
});