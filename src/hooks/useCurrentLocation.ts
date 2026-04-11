import { Alert } from 'react-native';
import * as Location from 'expo-location';

export function useCurrentLocation() {
    const getCurrentLocation = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission denied', 'Location permission is required to submit reports.');
                return null;
            }
            const loc = await Location.getCurrentPositionAsync();
            return {
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude
            };

        } catch (error) {
            console.error('Error getting current location:', error);
            Alert.alert('Error', 'Failed to get current location.');
            return null;
        }

    };

    return { getCurrentLocation };
}