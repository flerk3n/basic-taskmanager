import React, { useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { TextInput, FAB, Surface } from 'react-native-paper';
import { Colors, Spacing, BorderRadius, Typography } from '@/constants/Colors';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task.trim());
      setTask('');
      // Small bounce animation for feedback
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 0.8, duration: 100, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
      ]).start();
    }
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Surface style={styles.surface} elevation={0}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="What needs to be done?"
            placeholderTextColor={Colors.light.mutedForeground}
            value={task}
            onChangeText={setTask}
            onSubmitEditing={handleAddTask}
            mode="outlined"
            dense
            left={<TextInput.Icon icon="playlist-check" />}
            outlineColor={Colors.light.border}
            activeOutlineColor={Colors.light.ring}
            textColor={Colors.light.foreground}
          />
          <FAB
            icon="plus"
            size="small"
            onPress={handleAddTask}
            style={styles.fab}
            disabled={!task.trim()}
            color={Colors.light.primaryForeground}
            customSize={48}
          />
        </View>
      </Surface>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.md,
  },
  surface: {
    borderRadius: BorderRadius.xl,
    padding: Spacing.md,
    backgroundColor: Colors.light.card,
    borderWidth: 1,
    borderColor: Colors.light.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  textInput: {
    flex: 1,
    backgroundColor: Colors.light.background,
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontFamily.sans,
  },
  fab: {
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.light.primary,
  },
});

export default TaskInput; 