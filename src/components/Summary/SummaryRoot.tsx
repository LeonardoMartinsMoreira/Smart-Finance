import React, { ReactNode } from 'react'
import { View, ViewProps } from 'react-native'

interface ISummaryRoot extends ViewProps {
  children: ReactNode
}

export default function SummaryRoot({ children, ...props }: ISummaryRoot) {
  return (
    <View className="min-w-[250px]" {...props}>
      {children}
    </View>
  )
}
