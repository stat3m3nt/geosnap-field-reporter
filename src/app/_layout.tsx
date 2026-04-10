/**
 * "StAuth10244: I Andrew Evboifo, 000909727 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."
 */

import { Stack } from "expo-router";
import { ReportProvider } from "../context/ReportContext";

export default function RootLayout() {
  return (
    <ReportProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ReportProvider>
  );
}
