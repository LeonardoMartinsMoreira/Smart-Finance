import { formattToReal } from '@/src/utils/formatters'
import React from 'react'
import { Text, TextProps } from 'react-native'

interface ISummaryValue extends TextProps {
  value: number | undefined
}

export default function SummaryValue({ value, ...props }: ISummaryValue) {
  if (typeof value !== 'number') return null

  const formattedPrice = formattToReal(value)
  return <Text {...props}>{formattedPrice}</Text>
}
