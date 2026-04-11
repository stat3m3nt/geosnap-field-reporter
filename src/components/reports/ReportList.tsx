import { FlatList, StyleSheet } from "react-native";
import { Report } from "@/src/context/ReportContext";
import ReportCard from './ReportCard';

type ReportListProps = {
    reports: Report[];
    onStatusChange: (id: string, newStatus: Report["status"]) => void;
};  

export default function ReportList({ reports, onStatusChange }: ReportListProps) {
    return (
        <FlatList
            data={reports}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
                <ReportCard report={item} onStatusChange={onStatusChange} />
            )}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
    },
});