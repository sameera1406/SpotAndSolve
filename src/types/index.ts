export interface User {
  id: string;
  username: string;
  phone: string;
  role: 'user' | 'admin';
  points?: number;
}

export interface Report {
  id: string;
  title: string;
  description: string;
  location: string;
  photo?: string;
  status: 'submitted' | 'acknowledged' | 'resolved';
  userId: string;
  username: string;
  votes: number;
  createdAt: Date;
  category?: string;
}

export interface Poll {
  id: string;
  reportId: string;
  votes: number;
  voters: string[];
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  role: 'user' | 'admin' | null;
}