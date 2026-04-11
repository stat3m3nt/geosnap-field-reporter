import { Report } from '../context/ReportContext';

export function createReportTitle(category: string, severity: string) {
    return `${category} - ${severity}`;
}

export function validateReportInput(category: string, severity: string, notes: string) {
    if (!category || !severity || !notes.trim()) {
        return 'Please select a category, severity, and provide notes for the report.';
    }

    return '';
}

export function createNewReport( data : {
    category: string;
    severity: string;
    notes: string;
    photoURI: string | null;
    latitude: number;
    longitude: number;
}): Report {
    return {
        id: Date.now().toString(),
        title: createReportTitle(data.category, data.severity),
        category: data.category,
        severity: data.severity,
        notes: data.notes,
        photoURI: data.photoURI,
        latitude: data.latitude,
        longitude: data.longitude,
        status: 'Open',
        createdAt: new Date(),
    };
}