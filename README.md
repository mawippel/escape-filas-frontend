# escape-filas-frontend

React Native application to let people know the places that have big queues in real time. The lines data are provided by the own community that report the queues in the app.

###  Creating your app.json file
Create an ```app.json``` file in the root of the project, filling with your keys as described bellow.

```
{
  "expo": {
    "name": "EscapeFilas",
    "slug": "escape-filas-frontend",
    "privacy": "public",
    "sdkVersion": "33.0.0",
    "platforms": [
      "ios",
      "android"
    ],
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./images/squareLogo.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.br.furb.escapefilas",
      "config": {
        "googleMapsApiKey": "KEY_HERE"
      }
    },
    "android": {
      "package": "com.br.furb.escapefilas",
      "config": {
        "googleMaps": {
          "apiKey": "KEY_HERE"
        }
      }
    },
    "extra": {
      "FIREBASE_API_KEY":"KEY_HERE",
      "FIREBASE_AUTH_DOMAIN":"KEY_HERE",
      "FIREBASE_DATABASE_URL":"KEY_HERE",
      "FIREBASE_PROJECT_ID":"KEY_HERE",
      "FIREBASE_STORAGE_BUCKET":"KEY_HERE",
      "FIREBASE_MESSAGING_SENDER_ID":"KEY_HERE",
      "GOOGLE_MAPS_API_KEY":"KEY_HERE"
    }
  }
}
```
