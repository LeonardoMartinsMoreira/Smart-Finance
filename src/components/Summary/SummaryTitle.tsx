import React, { ElementType } from 'react'
import { Text, TextProps, View } from 'react-native'

interface SummaryTitle extends TextProps {
  title: string
}

export default function SummaryTitle({ title, ...props }: SummaryTitle) {
  return <Text {...props}>{title}</Text>
}
