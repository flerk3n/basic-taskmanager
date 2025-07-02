import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.primary,
        tabBarInactiveTintColor: '#6b7280',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
          fontFamily: 'Satoshi-SemiBold',
          textAlign: 'center',
          position: 'absolute',
          bottom: 4,
          left: 4,
          right: 4,
          zIndex: 10,
          backgroundColor: 'transparent',
          overflow: 'visible',
          minWidth: 60,
        },
        tabBarItemStyle: {
          height: 60,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 4,
          paddingBottom: 20,
          paddingHorizontal: 8,
          minWidth: 80,
        },
        tabBarIconStyle: {
          marginTop: 0,
          marginBottom: 0,
        },
        tabBarStyle: {
          height: 60,
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          paddingBottom: 0,
          paddingTop: 0,
          paddingLeft: 0,
          paddingRight: 0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color }) => <IconSymbol size={20} name="checklist" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="info.circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
