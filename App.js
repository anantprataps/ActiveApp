import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, I18nProvider, AnalyticsProvider, ErrorBoundaryProvider } from '@/core/providers';
import Navigation from './src/navigation';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ErrorBoundaryProvider>
          <ThemeProvider>
            <I18nProvider>
              <AnalyticsProvider>
                <Navigation />
              </AnalyticsProvider>
            </I18nProvider>
          </ThemeProvider>
        </ErrorBoundaryProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
