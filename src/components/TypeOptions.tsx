import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { useFormik } from 'formik'

const SelectButton = ({ options, setFieldValue, type }) => {
  const handlePress = (index: number) => {
    setFieldValue('type', index)
  }

  const getButtonClass = (index: number) => {
    if (type === index) {
      return index === 0 ? 'bg-emerald-700' : 'bg-red-500'
    }
    return 'bg-neutral-900'
  }

  return (
    <View className="flex-row mt-4 gap-x-2">
      {options.map((option: string, index: number) => (
        <TouchableOpacity
          key={index}
          className={`ml-1 p-3 rounded flex-1 items-center ${getButtonClass(index)}`}
          onPress={() => handlePress(index)}
        >
          <Text className="text-white">{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default SelectButton
