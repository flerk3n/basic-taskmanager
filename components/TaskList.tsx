import React, { useState, useMemo } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Appbar, Surface, Text, Card, ProgressBar, Divider } from 'react-native-paper';
import { Colors, Spacing, BorderRadius, Shadows, Typography } from '@/constants/Colors';
import TaskItem from './TaskItem';
import TaskInput from './TaskInput';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const taskStats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const remaining = total - completed;
    const progress = total > 0 ? completed / total : 0;
    
    return { total, completed, remaining, progress };
  }, [tasks]);

  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now().toString(), text, completed: false }]);
  };

  const toggleComplete = (taskId: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const EmptyState = () => (
    <View style={styles.emptyContainer}>
      <View style={styles.emptyIconContainer}>
        <Surface style={styles.iconBackground} elevation={2}>
          <Text style={styles.emptyIconText}>✓</Text>
        </Surface>
      </View>
      <Text variant="headlineSmall" style={styles.emptyTitle}>
        Ready to be productive?
      </Text>
      <Text variant="bodyLarge" style={styles.emptyText}>
        Add your first task above and start getting things done!
      </Text>
      <View style={styles.emptyFeatures}>
        <Text variant="bodyMedium" style={styles.featureText}>
          ✓ Tap to mark complete
        </Text>
        <Text variant="bodyMedium" style={styles.featureText}>
          ✓ Swipe or tap delete to remove
        </Text>
        <Text variant="bodyMedium" style={styles.featureText}>
          ✓ Track your progress
        </Text>
      </View>
    </View>
  );

  const TaskStats = () => (
    <Card style={styles.statsCard} elevation={0}>
      <Card.Content style={styles.statsContent}>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text variant="headlineSmall" style={styles.statNumber}>
              {taskStats.total}
            </Text>
            <Text variant="bodySmall" style={styles.statLabel}>
              Total
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text variant="headlineSmall" style={[styles.statNumber, styles.completedNumber]}>
              {taskStats.completed}
            </Text>
            <Text variant="bodySmall" style={styles.statLabel}>
              Done
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text variant="headlineSmall" style={[styles.statNumber, styles.remainingNumber]}>
              {taskStats.remaining}
            </Text>
            <Text variant="bodySmall" style={styles.statLabel}>
              Left
            </Text>
          </View>
        </View>
        {taskStats.total > 0 && (
          <>
            <Divider style={styles.divider} />
            <View style={styles.progressContainer}>
              <Text variant="bodyMedium" style={styles.progressText}>
                {Math.round(taskStats.progress * 100)}% Complete
              </Text>
              <ProgressBar 
                progress={taskStats.progress} 
                style={styles.progressBar}
                color={Colors.light.accent}
              />
            </View>
          </>
        )}
      </Card.Content>
    </Card>
  );

  return (
    <Surface style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Task Manager" titleStyle={styles.headerTitle} />
        {taskStats.total > 0 && (
          <Text style={styles.headerSubtitle}>
            {taskStats.remaining} of {taskStats.total} left
          </Text>
        )}
      </Appbar.Header>
      <View style={styles.content}>
        <TaskInput onAddTask={addTask} />
        
        {taskStats.total > 0 && <TaskStats />}
        
        {tasks.length === 0 ? (
          <EmptyState />
        ) : (
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskItem
                task={item}
                onToggleComplete={toggleComplete}
                onDelete={deleteTask}
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            style={styles.list}
            contentContainerStyle={styles.listContent}
          />
        )}
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    backgroundColor: Colors.light.primary,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.md,
  },
  headerTitle: {
    fontSize: Typography.fontSize['2xl'],
    fontFamily: Typography.fontFamily.sans,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.light.primaryForeground,
  },
  headerSubtitle: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.sans,
    color: Colors.light.primaryForeground,
    marginRight: Spacing.md,
    fontWeight: Typography.fontWeight.medium,
    opacity: 0.9,
  },
  statsCard: {
    marginBottom: Spacing.md,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.light.card,
    borderWidth: 1,
    borderColor: Colors.light.border,
    shadowColor: Shadows.md.shadowColor,
    shadowOffset: Shadows.md.shadowOffset,
    shadowOpacity: Shadows.md.shadowOpacity,
    shadowRadius: Shadows.md.shadowRadius,
    elevation: Shadows.md.elevation,
  },
  statsContent: {
    paddingVertical: Spacing.lg,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: Typography.fontFamily.sans,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.light.foreground,
    fontSize: Typography.fontSize['2xl'],
  },
  completedNumber: {
    color: Colors.light.accent,
  },
  remainingNumber: {
    color: Colors.light.primary,
  },
  statLabel: {
    fontFamily: Typography.fontFamily.sans,
    color: Colors.light.mutedForeground,
    marginTop: Spacing.xs,
    fontWeight: Typography.fontWeight.medium,
    fontSize: Typography.fontSize.xs,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  divider: {
    marginVertical: Spacing.md,
    backgroundColor: Colors.light.border,
  },
  progressContainer: {
    alignItems: 'center',
  },
  progressText: {
    fontFamily: Typography.fontFamily.sans,
    marginBottom: Spacing.sm,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.light.foreground,
    fontSize: Typography.fontSize.sm,
  },
  progressBar: {
    width: '100%',
    height: 8,
    borderRadius: BorderRadius.sm,
    backgroundColor: Colors.light.muted,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Spacing['2xl'] * 1.5,
    paddingHorizontal: Spacing.xl,
  },
  emptyIconContainer: {
    marginBottom: Spacing.lg,
    alignItems: 'center',
  },
  iconBackground: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.light.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyIconText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.light.primaryForeground,
  },
  emptyTitle: {
    fontFamily: Typography.fontFamily.sans,
    marginBottom: Spacing.md,
    textAlign: 'center',
    fontWeight: Typography.fontWeight.bold,
    color: Colors.light.foreground,
    fontSize: Typography.fontSize.xl,
  },
  emptyText: {
    fontFamily: Typography.fontFamily.sans,
    textAlign: 'center',
    color: Colors.light.mutedForeground,
    lineHeight: 24,
    marginBottom: Spacing.xl,
    fontSize: Typography.fontSize.base,
  },
  emptyFeatures: {
    alignItems: 'flex-start',
  },
  featureText: {
    fontFamily: Typography.fontFamily.sans,
    color: Colors.light.mutedForeground,
    marginBottom: Spacing.sm,
    fontWeight: Typography.fontWeight.medium,
    fontSize: Typography.fontSize.sm,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: Spacing.lg,
  },
});

export default TaskList;