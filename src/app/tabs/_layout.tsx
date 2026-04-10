import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#1e2a3a",
                tabBarInactiveTintColor: "#94a3b8",
            }} 
            >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tabs.Screen
                name="create-report"
                options={{
                    tabBarLabel: "Create Report",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add" color={color} size={size} />
                    )
                }}
            />
            <Tabs.Screen
                name="reports"
                options={{
                    tabBarLabel: "Reports",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="list" color={color} size={size} />
                    )
                }}
            />
        </Tabs>
    );
}

