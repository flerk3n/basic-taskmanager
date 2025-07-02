import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Pressable } from 'react-native';
import { Checkbox, IconButton, Surface, Text, Chip } from 'react-native-paper';
import { Colors, Spacing, BorderRadius, Typography } from '@/constants/Colors';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggleComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleToggle = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 0.95, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
    onToggleComplete(task.id);
  };

  const handleDelete = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 0.8, duration: 300, useNativeDriver: true }),
    ]).start(() => onDelete(task.id));
  };

  return (
    <Animated.View 
      style={[
        styles.animatedContainer,
        {
          opacity: fadeAnim,
          transform: [
            { scale: scaleAnim },
            { translateX: slideAnim }
          ]
        }
      ]}
    >
      <Surface style={[
        styles.container,
        task.completed && styles.completedContainer
      ]} elevation={0}>
        <Pressable style={styles.content} onPress={handleToggle}>
          <Checkbox
            status={task.completed ? 'checked' : 'unchecked'}
            onPress={handleToggle}
          />
          <View style={styles.textContainer}>
            <Text 
              style={[
                styles.text, 
                task.completed && styles.completedText
              ]}
              variant="bodyLarge"
            >
              {task.text}
            </Text>
            {task.completed && (
              <Chip 
                icon="check" 
                compact 
                style={styles.completedChip}
                textStyle={styles.chipText}
              >
                Completed
              </Chip>
            )}
          </View>
          <IconButton
            icon="delete"
            size={24}
            onPress={handleDelete}
            iconColor={Colors.light.destructive}
            style={styles.deleteButton}
          />
        </Pressable>
      </Surface>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    marginVertical: Spacing.xs,
    marginHorizontal: Spacing.xs,
  },
  container: {
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.light.card,
    borderWidth: 1,
    borderColor: Colors.light.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  completedContainer: {
    backgroundColor: Colors.light.muted,
    borderColor: Colors.light.accent,
    opacity: 0.8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    minHeight: 70,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: Spacing.md,
  },
  text: {
    fontSize: Typography.fontSize.base,
    lineHeight: 22,
    color: Colors.light.foreground,
    fontWeight: Typography.fontWeight.medium,
    fontFamily: Typography.fontFamily.sans,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: Colors.light.mutedForeground,
  },
  completedChip: {
    alignSelf: 'flex-start',
    marginTop: Spacing.sm,
    backgroundColor: Colors.light.accent,
  },
  chipText: {
    fontSize: Typography.fontSize.xs,
    color: Colors.light.accentForeground,
    fontWeight: Typography.fontWeight.semibold,
    fontFamily: Typography.fontFamily.sans,
  },
  deleteButton: {
    margin: 0,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.light.destructiveForeground,
  },
});

export default TaskItem; 