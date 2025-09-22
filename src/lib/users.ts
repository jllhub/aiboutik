export type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  password?: string | null; // In a real app, this would be a hashed password
};

// Mock user database
const users: User[] = [
  { id: '1', name: 'Test User', email: 'test@example.com', password: 'password123' },
];

export const findUserByEmail = (email: string): User | undefined => {
  return users.find(user => user.email === email);
};
