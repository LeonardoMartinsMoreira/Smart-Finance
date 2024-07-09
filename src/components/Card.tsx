import { View, Text } from 'react-native'
import McIcon from '@expo/vector-icons/MaterialCommunityIcons'
import { formattToReal } from '../utils/formatters'

export interface ITransaction {
  title: string
  category: string
  price: number
  type: 'income' | 'expense'
  createdAt: Date
}

export default function Card({ category, createdAt, price, title, type }: ITransaction) {
  const formattedDate = new Date(createdAt).toLocaleString('pt-br')
  const isExpenseType = type === 'expense'

  const formattedPrice = isExpenseType ? `- ${formattToReal(price)}` : formattToReal(price)

  return (
    <View className="py-3 px-4 bg-neutral-800 rounded-md gap-y-1">
      <Text className="text-gray-300 text-lg">{title}</Text>
      <View className="gap-y-2">
        <Text className={`${isExpenseType ? 'text-red-500' : 'text-emerald-600'} text-xl font-medium`}>
          {formattedPrice}
        </Text>
        <View className="flex-row justify-between">
          <View className="flex-row gap-x-2">
            <McIcon name="tag-text-outline" color="#7C7C8A" size={20} />
            <Text className="text-gray-400">{category}</Text>
          </View>
          <View className="flex-row gap-x-2">
            <McIcon name="calendar-blank-outline" color="#7C7C8A" size={20} />
            <Text className="text-gray-400">{formattedDate}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
