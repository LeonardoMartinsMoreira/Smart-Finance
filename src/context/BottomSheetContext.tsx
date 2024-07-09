import React, { createContext, ReactNode, useContext, useRef, useState } from 'react'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import { View } from 'react-native'

interface IBottomSheetProvider {
  children: ReactNode
}

interface IBottomSheetContext {
  openBottomSheet: (newContent: ReactNode) => void
  closeBottomSheet: () => void
}

const BottomSheetContext = createContext({} as IBottomSheetContext)

export const BottomSheetProvider = ({ children }: IBottomSheetProvider) => {
  const bottomSheetRef = useRef<BottomSheetMethods>(null)
  const [content, setContent] = useState<ReactNode>()

  const openBottomSheet = (newContent: ReactNode) => {
    setContent(newContent)
    bottomSheetRef.current?.expand()
  }

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close()
  }

  return (
    <BottomSheetContext.Provider value={{ openBottomSheet, closeBottomSheet }}>
      {children}
      <BottomSheet
        backgroundStyle={{ backgroundColor: '#262626' }}
        enablePanDownToClose
        ref={bottomSheetRef}
        snapPoints={['60%']}
        index={-1}
      >
        {content}
      </BottomSheet>
    </BottomSheetContext.Provider>
  )
}

export const useBottomSheet = () => useContext(BottomSheetContext)
