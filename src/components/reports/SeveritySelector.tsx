import { View, Text, StyleSheet, Pressable } from "react-native";
import { REPORT_SEVERITIES } from "@/src/constants/reportOptions";
import { COLORS } from "@/src/constants/colors";

type SeveritySelectorProps = {
    severity: string;
    onChange: (value: string) => void;
};

export default function SeveritySelector({ severity, onChange }: SeveritySelectorProps) {
    return (
        <View style={styles.optionsContainer}>
            {REPORT_SEVERITIES.map((option) => {
                const isSelected = severity === option;
                return (
                    <Pressable
                        key={option}
                        style={[styles.optionButton, isSelected && styles.selectedOption]}
                        onPress={() => onChange(option)}
                    >
                        <Text style={[styles.optionText, isSelected && styles.selectedOptionText]}>
                            {option}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    optionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        marginVertical: 10,
    },
    optionButton: {
        flex: 1,
        paddingVertical: 10,    
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 5,
        alignItems: "center",
        backgroundColor: COLORS.white,
    },
    selectedOption: {
        backgroundColor: COLORS.primary,
    },
    optionText: {
        color: COLORS.secondary,
    },
    selectedOptionText: {
        color: COLORS.white,
    },  
});