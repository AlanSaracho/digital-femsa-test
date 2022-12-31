import React from "react";
import { RecoilRoot } from "recoil"
import { useFonts } from 'expo-font';
import { Screens } from './screens';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ApiConfig } from "./api";

export const App = () => {
  const [d] = useFonts({
    'Avenir': require('../assets/fonts/AvenirLTStd-Book.otf'),
    'Avenir-Book': require('../assets/fonts/AvenirLTStd-Book.otf'),
    'Avenir-Roman': require('../assets/fonts/AvenirLTStd-Roman.otf'),
  });

  return (
    <RecoilRoot>
      <ApiConfig>
        <SafeAreaProvider>
          <StatusBar translucent />
          <Screens/>
        </SafeAreaProvider>
      </ApiConfig>
    </RecoilRoot>
  )
}