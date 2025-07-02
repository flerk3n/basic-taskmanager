# 📝 Task Manager App

A beautiful and intuitive task management application built with **React Native**, **Expo**, and **Material Design** components.

![Task Manager](https://img.shields.io/badge/React%20Native-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## 🚀 Features

- ✅ **Add Tasks**: Create new tasks with a beautiful input interface
- ✅ **Mark Complete**: Tap to toggle task completion with visual feedback
- ✅ **Delete Tasks**: Remove tasks with smooth animations
- ✅ **Progress Tracking**: Real-time statistics and progress visualization
- ✅ **Beautiful Animations**: Smooth transitions and micro-interactions
- ✅ **Material Design**: Clean, modern UI following Material Design principles
- ✅ **Responsive Layout**: Optimized for different screen sizes
- ✅ **Empty States**: Engaging empty state with helpful instructions

## 🎨 UI/UX Highlights

- **Floating Action Button (FAB)** for adding tasks
- **Smooth animations** for task creation, completion, and deletion
- **Progress indicators** showing completion percentage
- **Task statistics** with visual counters
- **Intuitive gestures** and interactions
- **Visual feedback** for all user actions
- **Clean typography** and consistent spacing

## 🔧 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (optional, but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on your preferred platform**
   - **Web**: Press `w` in the terminal or visit `http://localhost:8081`
   - **iOS**: Press `i` in the terminal (requires Xcode)
   - **Android**: Press `a` in the terminal (requires Android Studio)
   - **Mobile**: Scan QR code with Expo Go app

## 📦 Third-Party Libraries

| Library | Purpose | Version |
|---------|---------|---------|
| `react-native-paper` | Material Design components | Latest |
| `react-native-vector-icons` | Icon library for Material Design | Latest |
| `@react-navigation/native` | Navigation framework | Latest |
| `react-native-screens` | Native screen optimization | Latest |
| `react-native-safe-area-context` | Safe area handling | Latest |
| `react-native-gesture-handler` | Enhanced gesture system | Latest |
| `react-native-reanimated` | Advanced animations | Latest |

## 📝 Usage Instructions

### Adding Tasks
1. Tap the text input field at the top
2. Type your task description
3. Press Enter or tap the "+" FAB button
4. Watch your task appear with a smooth animation

### Managing Tasks
- **Mark Complete**: Tap the checkbox or the task itself
- **Delete Task**: Tap the red delete icon
- **View Progress**: Check the statistics card for your progress

### Understanding the Interface
- **Header**: Shows total tasks and remaining count
- **Statistics Card**: Displays total, completed, and remaining tasks with progress bar
- **Task List**: Scrollable list of all your tasks
- **Empty State**: Helpful guidance when you have no tasks

## 🏗️ Project Structure

```
task-manager/
├── components/
│   ├── TaskInput.tsx    # Task input with FAB
│   ├── TaskItem.tsx     # Individual task component
│   └── TaskList.tsx     # Main task list with stats
├── app/
│   └── (tabs)/
│       ├── index.tsx    # Main tasks screen
│       ├── explore.tsx  # About/info screen
│       └── _layout.tsx  # Tab navigation layout
├── App.js              # Entry point (legacy)
└── README.md           # This file
```

## 🎯 Development Features

- **TypeScript**: Full type safety for better development experience
- **Component-based**: Modular, reusable components
- **State Management**: Clean React hooks for local state
- **Animations**: Smooth, performant animations using React Native Reanimated
- **Responsive**: Adapts to different screen sizes and orientations

## 🌟 Key Components

### TaskInput
- Material Design text input with icon
- FAB (Floating Action Button) for adding tasks
- Smooth animations and visual feedback
- Input validation and auto-clear

### TaskItem
- Individual task display with checkbox
- Smooth toggle animations
- Visual completion states
- Delete functionality with confirmation animation

### TaskList
- Main container component
- Task statistics and progress tracking
- Empty state management
- Optimized FlatList rendering

## 🚀 Performance Features

- **Optimized Rendering**: Uses FlatList for efficient scrolling
- **Native Animations**: Hardware-accelerated animations
- **Minimal Re-renders**: Optimized state management
- **Responsive UI**: 60fps interactions and animations

## 🎨 Design System

- **Colors**: Material Design color palette
- **Typography**: Clear hierarchy with appropriate font sizes
- **Spacing**: Consistent 8dp grid system
- **Elevation**: Proper shadow and depth for cards
- **Icons**: Material Design icon set

## 🔮 Future Enhancements

- [ ] Task categories and tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Search and filter functionality
- [ ] Data persistence with AsyncStorage
- [ ] Dark mode support
- [ ] Task sharing capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Material Design** for the beautiful design system
- **Expo** for the excellent development platform
- **React Native Paper** for the amazing component library
- **React Native Community** for the incredible ecosystem

---

Made with ❤️ using React Native and Expo
