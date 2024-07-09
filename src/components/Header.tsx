import React from 'react'
import { Image, Text, View } from 'react-native'
import { Button } from './Button'
import { useBottomSheet } from '../context/BottomSheetContext'
import NewTransactionBottomSheet from './NewTransactionBottomSheet'

export default function Header() {
  const { openBottomSheet } = useBottomSheet()

  return (
    <View className="bg-black pt-8 pb-24 px-8">
      <View className="flex-row justify-between items-center">
        <Image source={require('../../assets/Logo.jpeg')} className="w-32 h-10" />
        <Button
          label="Nova transação"
          variant="ghost"
          className="bg-emerald-700"
          labelClasses="text-white"
          onPress={() => openBottomSheet(<NewTransactionBottomSheet />)}
        />
      </View>
    </View>
  )
}
