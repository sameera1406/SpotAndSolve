import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Report, Poll } from '../types';

interface DataContextType {
  reports: Report[];
  polls: Poll[];
  addReport: (report: Omit<Report, 'id' | 'createdAt'>) => void;
  updateReportStatus: (id: string, status: Report['status']) => void;
  voteOnPoll: (reportId: string, userId: string) => void;
  getLeaderboard: () => Array<{ username: string; points: number; reports: number }>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [reports, setReports] = useState<Report[]>([
    {
      id: '1',
      title: 'Pothole on Main Street',
      description: 'Large pothole causing traffic issues',
      location: 'Main Street & 5th Ave',
      status: 'submitted',
      userId: 'user1',
      username: 'john_doe',
      votes: 15,
      createdAt: new Date('2024-01-15'),
      category: 'Road Maintenance'
    },
    {
      id: '2',
      title: 'Broken Streetlight',
      description: 'Streetlight not working for past week',
      location: 'Oak Avenue',
      status: 'acknowledged',
      userId: 'user2',
      username: 'jane_smith',
      votes: 8,
      createdAt: new Date('2024-01-14'),
      category: 'Public Safety'
    },
    {
      id: '3',
      title: 'Park Bench Vandalism',
      description: 'Graffiti on park benches',
      location: 'Central Park',
      status: 'resolved',
      userId: 'user3',
      username: 'mike_wilson',
      votes: 12,
      createdAt: new Date('2024-01-13'),
      category: 'Vandalism'
    }
  ]);

  const [polls, setPolls] = useState<Poll[]>([
    { id: '1', reportId: '1', votes: 15, voters: ['user1', 'user2', 'user3'] },
    { id: '2', reportId: '2', votes: 8, voters: ['user1', 'user4'] },
    { id: '3', reportId: '3', votes: 12, voters: ['user2', 'user3', 'user4'] }
  ]);

  const addReport = (reportData: Omit<Report, 'id' | 'createdAt'>) => {
    const newReport: Report = {
      ...reportData,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    
    setReports(prev => [newReport, ...prev]);
    
    // Create corresponding poll
    const newPoll: Poll = {
      id: Date.now().toString(),
      reportId: newReport.id,
      votes: 0,
      voters: []
    };
    setPolls(prev => [newPoll, ...prev]);
  };

  const updateReportStatus = (id: string, status: Report['status']) => {
    setReports(prev => prev.map(report => 
      report.id === id ? { ...report, status } : report
    ));
  };

  const voteOnPoll = (reportId: string, userId: string) => {
    setPolls(prev => prev.map(poll => {
      if (poll.reportId === reportId && !poll.voters.includes(userId)) {
        return {
          ...poll,
          votes: poll.votes + 1,
          voters: [...poll.voters, userId]
        };
      }
      return poll;
    }));

    // Update report votes
    setReports(prev => prev.map(report => {
      if (report.id === reportId) {
        const poll = polls.find(p => p.reportId === reportId);
        return { ...report, votes: poll ? poll.votes + 1 : report.votes };
      }
      return report;
    }));
  };

  const getLeaderboard = () => {
    const userStats = reports.reduce((acc, report) => {
      if (!acc[report.username]) {
        acc[report.username] = { reports: 0, totalVotes: 0 };
      }
      acc[report.username].reports += 1;
      acc[report.username].totalVotes += report.votes;
      return acc;
    }, {} as Record<string, { reports: number; totalVotes: number }>);

    return Object.entries(userStats)
      .map(([username, stats]) => ({
        username,
        points: stats.reports * 10 + stats.totalVotes * 2,
        reports: stats.reports
      }))
      .sort((a, b) => b.points - a.points);
  };

  return (
    <DataContext.Provider value={{
      reports,
      polls,
      addReport,
      updateReportStatus,
      voteOnPoll,
      getLeaderboard
    }}>
      {children}
    </DataContext.Provider>
  );
};