import React from 'react';
import { View, StyleSheet, ScrollView, ViewStyle, TextStyle } from 'react-native';
import { Surface, Text, Appbar, Card, Divider } from 'react-native-paper';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '@/constants/Colors';

export default function ExploreScreen() {
  return (
    <Surface style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="About" titleStyle={styles.headerTitle} />
      </Appbar.Header>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* App Info Card */}
        <Card style={styles.card} elevation={0}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.iconContainer}>
              <Surface style={styles.iconBackground} elevation={2}>
                <Text style={styles.iconText}>📋</Text>
              </Surface>
            </View>
            <Text style={styles.title}>Task Manager</Text>
            <Text style={styles.description}>
              A beautiful and intuitive task management app built with React Native, Expo, and Material Design components.
            </Text>
          </Card.Content>
        </Card>

        {/* Features Card */}
        <Card style={styles.card} elevation={0}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.sectionTitle}>✨ Key Features</Text>
            <Divider style={styles.divider} />
            <View style={styles.featureList}>
              <View style={styles.featureItem}>
                <Text style={styles.featureIcon}>✅</Text>
                <Text style={styles.featureText}>Add and manage tasks effortlessly</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.featureIcon}>🎯</Text>
                <Text style={styles.featureText}>Mark tasks as complete with satisfaction</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.featureIcon}>🗑️</Text>
                <Text style={styles.featureText}>Delete unwanted tasks easily</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.featureIcon}>📊</Text>
                <Text style={styles.featureText}>Track your progress with beautiful stats</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.featureIcon}>🎨</Text>
                <Text style={styles.featureText}>Enjoy a clean Material Design interface</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Tech Stack Card */}
        <Card style={styles.card} elevation={0}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.sectionTitle}>🛠️ Built With</Text>
            <Divider style={styles.divider} />
            <View style={styles.techGrid}>
              <View style={styles.techItem}>
                <Text style={styles.techIcon}>⚛️</Text>
                <Text style={styles.techText}>React Native</Text>
              </View>
              <View style={styles.techItem}>
                <Text style={styles.techIcon}>📱</Text>
                <Text style={styles.techText}>Expo</Text>
              </View>
              <View style={styles.techItem}>
                <Text style={styles.techIcon}>🎨</Text>
                <Text style={styles.techText}>Material Design</Text>
              </View>
              <View style={styles.techItem}>
                <Text style={styles.techIcon}>⚡</Text>
                <Text style={styles.techText}>TypeScript</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Info Card */}
        <Card style={styles.card} elevation={0}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.sectionTitle}>💡 About This App</Text>
            <Divider style={styles.divider} />
            <Text style={styles.infoText}>
              This task manager demonstrates modern mobile app development with a focus on user experience, 
              beautiful animations, and responsive design. Perfect for organizing your daily tasks with style!
            </Text>
            <View style={styles.versionContainer}>
              <Text style={styles.versionLabel}>Version</Text>
              <Text style={styles.versionNumber}>1.0.0</Text>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    backgroundColor: Colors.light.primary,
  },
  headerTitle: {
    fontSize: Typography.fontSize['2xl'],
    fontFamily: Typography.fontFamily.sans,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.light.primaryForeground,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.md,
  },
  card: {
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
  cardContent: {
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.md,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  iconBackground: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.light.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.light.primaryForeground,
  },
  title: {
    fontSize: Typography.fontSize['2xl'],
    fontFamily: Typography.fontFamily.sans,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.light.foreground,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  description: {
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontFamily.sans,
    color: Colors.light.mutedForeground,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    fontSize: Typography.fontSize.xl,
    fontFamily: Typography.fontFamily.sans,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.light.foreground,
    marginBottom: Spacing.sm,
  },
  divider: {
    backgroundColor: Colors.light.border,
    marginBottom: Spacing.md,
  },
  featureList: {
    gap: Spacing.sm,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  featureIcon: {
    fontSize: 20,
    marginRight: Spacing.sm,
    width: 28,
  },
  featureText: {
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontFamily.sans,
    color: Colors.light.foreground,
    flex: 1,
    lineHeight: 22,
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  techItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
    padding: Spacing.sm,
    backgroundColor: Colors.light.muted,
    borderRadius: BorderRadius.lg,
  },
  techIcon: {
    fontSize: 20,
    marginRight: Spacing.sm,
  },
  techText: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.sans,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.light.foreground,
  },
  infoText: {
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontFamily.sans,
    color: Colors.light.mutedForeground,
    lineHeight: 24,
    marginBottom: Spacing.lg,
  },
  versionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.light.border,
  },
  versionLabel: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.sans,
    color: Colors.light.mutedForeground,
    fontWeight: Typography.fontWeight.medium,
  },
  versionNumber: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.sans,
    color: Colors.light.primary,
    fontWeight: Typography.fontWeight.bold,
  },
});
