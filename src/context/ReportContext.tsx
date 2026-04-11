/**
 * GeoSnapFieldReporter - Reports Context
 * -------------------------------------------------------------------
 * @author: Andrew Evboifo
 * 
 * Description:
 * This file defines the ReportContext for managing the state of reports in the GeoSnapFieldReporter app. It provides a context provider and a custom hook for accessing and updating the list of reports throughout the application.
 * 
 * The ReportContext includes:  
 * - A `Report` type that defines the structure of a report object.
 * - A `ReportContextType` that defines the shape of the context value, including the list of reports and functions to add a report and update report status.
 * - A `ReportProvider` component that wraps the application and provides the context value.
 */

import { createContext, useContext, useState, ReactNode } from 'react';

// Types
export type ReportStatus = 'Open' | 'Resolved';

// report structure
export type Report = {
    id: string;
    title: string;
    category: string;
    severity: string;
    notes: string;
    photoURI: string | null;
    status: ReportStatus;
    latitude: number;
    longitude: number;
    createdAt: Date;
    

};

// context type
type ReportContextType = {
    reports: Report[];
    addReport: (report: Report) => void;
    updateReportStatus: (id: string, status: ReportStatus) => void;
};

// context creation
const ReportContext = createContext<ReportContextType | undefined>(undefined);

// provider component
export function ReportProvider({ children }: { children: ReactNode }) {
    const [reports, setReports] = useState<Report[]>([]);

    /**
     * Adds a new report to the list of reports. 
     * The function takes a report object as an argument and updates the state by adding the new report to the beginning of the current list of reports.
     */
    const addReport = (report: Report) => {
        setReports((currentReports) => [report, ...currentReports]);
    };

    /**
     * Updates the status of a report based on its ID. 
     * The function maps through the current list of reports and updates the status of the report that matches the provided ID.
     */
    const updateReportStatus = (id: string, status: 'Open' | 'Resolved') => {
        setReports((currentReports) =>
            currentReports.map((report) =>
                report.id === id ? { ...report, status } : report
            )
        );
    };

    return (
        <ReportContext.Provider value={{ reports, addReport, updateReportStatus }}>
            {children}
        </ReportContext.Provider>
    );
}

// custom hook for using the report context
export function useReportContext() {
    const context = useContext(ReportContext);

    if (!context) {
        throw new Error('useReportContext must be used within a ReportProvider');
    }
    return context;
}