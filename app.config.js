// ============================================
// My Barcelona - App config for Barcelona build/submit
// ============================================
// projectId は eas init 実行時に app.json に書き込まれる（ここで参照）
const appJson = require('./app.json');

module.exports = {
  expo: {
    name: 'My Barcelona',
    slug: 'my-barcelona',
    version: '1.0.2',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'mybarcelona',
    userInterfaceStyle: 'light',
    newArchEnabled: true,

    extra: {
      city: 'barcelona',
      cityName: 'My Barcelona',
      cityNameJa: 'My バルセロナ',
      eas: {
        projectId: appJson.expo?.extra?.eas?.projectId ?? undefined,
      },
    },

    owner: 'nozomusp',

    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.mycity.mybarcelona',
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },

    android: {
      package: 'com.mycity.mybarcelona',
      adaptiveIcon: {
        backgroundColor: '#f5f5f0',
        foregroundImage: './assets/images/android-icon-foreground.png',
        backgroundImage: './assets/images/android-icon-background.png',
        monochromeImage: './assets/images/android-icon-monochrome.png',
      },
      edgeToEdgeEnabled: true,
    },

    web: {
      output: 'static',
      favicon: './assets/images/favicon.png',
    },

    plugins: [
      'expo-font',
      '@react-native-community/datetimepicker',
      'expo-router',
      [
        'expo-location',
        {
          locationWhenInUsePermission:
            'My Barcelona uses your location only when you add or edit a memory. For example, when you tap "Use Current Location", the app uses your position to place a pin on the map within Barcelona. Location is used only in the foreground and is not collected in the background.',
        },
      ],
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#f5f5f0',
        },
      ],
    ],

    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
  },
};
