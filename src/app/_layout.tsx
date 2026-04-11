import { Stack } from "expo-router";
import { ReportProvider } from "@/src/context/ReportContext";

export default function RootLayout() {
    return (
        <ReportProvider>
            <Stack screenOptions={{ headerShown: false }}/>
        </ReportProvider>
    );

}