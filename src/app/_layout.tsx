import { Slot } from 'expo-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetProvider } from '../context/BottomSheetContext'
import { ToastProvider } from '../components/Toast'

export default function _layout() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ToastProvider position="top">
          <BottomSheetProvider>
            <Slot />
          </BottomSheetProvider>
        </ToastProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}
