import { createContext, useContext, useState, ReactNode } from 'react';

export type Report = {
    id: string;
    title: string;
    category: string;
    severity: string;
    notes: string;
    photoURI: string | null;
    status: 'Open' | 'Resolved';
    createdAt: Date;

};

type ReportContextType = {
    reports: Report[];
    addReport: (report: Report) => void;
    updateReportStatus: (id: string, status: 'Open' | 'Resolved') => void;
};

const ReportContext = createContext<ReportContextType | undefined>(undefined);

export function ReportProvider({ children }: { children: ReactNode }) {
    const [reports, setReports] = useState<Report[]>([]);

    const addReport = (report: Report) => {
        setReports((currentReports) => [report, ...currentReports]);
    };

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

export function useReportContext() {
    const context = useContext(ReportContext);

    if (!context) {
        throw new Error('useReportContext must be used within a ReportProvider');
    }
    return context;
}