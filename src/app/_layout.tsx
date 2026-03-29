import { Stack } from "expo-router";
import { ReportProvider } from "../context/ReportContext";

export default function RootLayout() {
  return (
    <ReportProvider>
      <Stack />
    </ReportProvider>
  );
}
