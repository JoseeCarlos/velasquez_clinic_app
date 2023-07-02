// import React, { useState } from 'react';
// import { View, TouchableOpacity, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import HomeScreen from '../home/Main';


// function Navigation() {
//   const [activeScreen, setActiveScreen] = useState<'home' | 'profile' | 'settings'>('home');

//   const renderScreen = () => {
//     switch (activeScreen) {
//       case 'home':
//         return <HomeScreen />;
//       case 'profile':
//         return <ProfileScreen />;
//       case 'settings':
//         return <SettingsScreen />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.content}>{renderScreen()}</View>
//       <View style={styles.bottomNavigation}>
//         <TouchableOpacity
//           onPress={() => setActiveScreen('home')}
//           style={styles.bottomNavItem}
//         >
//           <Ionicons
//             name={activeScreen === 'home' ? 'home' : 'home-outline'}
//             size={32}
//             color="#F9A13C"
//           />
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => setActiveScreen('profile')}
//           style={styles.bottomNavItem}
//         >
//           <Ionicons
//             name={activeScreen === 'profile' ? 'person' : 'person-outline'}
//             size={32}
//             color="#F9A13C"
//           />
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => setActiveScreen('settings')}
//           style={styles.bottomNavItem}
//         >
//           <Ionicons
//             name={
//               activeScreen === 'settings' ? 'settings' : 'settings-outline'
//             }
//             size={32}
//             color="#F9A13C"
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   content: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   bottomNavigation: {
//     flexDirection: 'row',
//     height: 60,
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//   },
//   bottomNavItem: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default Navigation;
