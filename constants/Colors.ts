/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

// shadcn/ui Design System Colors converted for React Native
// Based on the provided OKLCH values converted to RGB

export const Colors = {
  light: {
    background: '#fafafa', // oklch(0.9809 0.0025 228.7836)
    foreground: '#0a0a0a', // oklch(0.3211 0 0)
    card: '#ffffff', // oklch(1.0000 0 0)
    cardForeground: '#0a0a0a', // oklch(0.3211 0 0)
    popover: '#ffffff', // oklch(1.0000 0 0)
    popoverForeground: '#0a0a0a', // oklch(0.3211 0 0)
    primary: '#f97316', // oklch(0.8677 0.0735 7.0855) - Orange
    primaryForeground: '#000000', // oklch(0 0 0)
    secondary: '#8b5cf6', // oklch(0.8148 0.0819 225.7537) - Purple
    secondaryForeground: '#000000', // oklch(0 0 0)
    muted: '#f5f5f4', // oklch(0.8828 0.0285 98.1033)
    mutedForeground: '#737373', // oklch(0.5382 0 0)
    accent: '#84cc16', // oklch(0.9680 0.2110 109.7692) - Green
    accentForeground: '#000000', // oklch(0 0 0)
    destructive: '#dc2626', // oklch(0.6368 0.2078 25.3313) - Red
    destructiveForeground: '#ffffff', // oklch(1.0000 0 0)
    border: '#e5e5e5', // oklch(0.8699 0 0)
    input: '#e5e5e5', // oklch(0.8699 0 0)
    ring: '#f97316', // oklch(0.8677 0.0735 7.0855)
  },
  dark: {
    background: '#0c0a09', // oklch(0.2303 0.0125 264.2926)
    foreground: '#fafaf9', // oklch(0.9219 0 0)
    card: '#1c1917', // oklch(0.3210 0.0078 223.6661)
    cardForeground: '#fafaf9', // oklch(0.9219 0 0)
    popover: '#1c1917', // oklch(0.3210 0.0078 223.6661)
    popoverForeground: '#fafaf9', // oklch(0.9219 0 0)
    primary: '#ef4444', // oklch(0.8027 0.1355 349.2347) - Red
    primaryForeground: '#000000', // oklch(0 0 0)
    secondary: '#22c55e', // oklch(0.7395 0.2268 142.8504) - Green
    secondaryForeground: '#000000', // oklch(0 0 0)
    muted: '#57534e', // oklch(0.3867 0 0)
    mutedForeground: '#a8a29e', // oklch(0.7155 0 0)
    accent: '#8b5cf6', // oklch(0.8148 0.0819 225.7537) - Purple
    accentForeground: '#000000', // oklch(0 0 0)
    destructive: '#dc2626', // oklch(0.6368 0.2078 25.3313)
    destructiveForeground: '#ffffff', // oklch(1.0000 0 0)
    border: '#57534e', // oklch(0.3867 0 0)
    input: '#57534e', // oklch(0.3867 0 0)
    ring: '#ef4444', // oklch(0.8027 0.1355 349.2347)
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
};

export const BorderRadius = {
  sm: 6, // calc(var(--radius) - 4px)
  md: 8, // calc(var(--radius) - 2px)
  lg: 12, // var(--radius)
  xl: 16, // calc(var(--radius) + 4px)
};

export const Shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 16,
  },
};

export const Typography = {
  fontFamily: {
    sans: 'Satoshi', // Satoshi font family
    display: 'Satoshi', // Satoshi for display text
  },
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    black: '900',
  },
};
