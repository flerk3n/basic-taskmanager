import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import TaskList from '@/components/TaskList';

export default function HomeScreen() {
  return (
    <PaperProvider>
      <TaskList />
    </PaperProvider>
  );
}
