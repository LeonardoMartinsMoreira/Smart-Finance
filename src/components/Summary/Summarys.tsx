import { ScrollView, View } from 'react-native'
import { Summary } from '.'
import { ITransaction } from '../Card'

interface SummaryProps {
  transactions: ITransaction[] | undefined
}

export default function Summarys({ transactions }: SummaryProps) {
  const transactionCalculated =
    transactions &&
    transactions.reduce(
      (acc, { type, price }) => {
        if (type === 'income') {
          acc.income += price
          acc.total += price
        }

        if (type === 'expense') {
          acc.expense += price
          acc.total -= price
        }

        return acc
      },
      {
        expense: 0,
        income: 0,
        total: 0,
      },
    )

  return (
    <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 16 }} className="-mt-16 gap-x-4 flex-row">
      <View className="flex-1">
        <Summary.Root className="bg-[#323238] px-6 py-4 rounded-md gap-y-4">
          <View className="flex-row items-center justify-between gap-x-4">
            <Summary.Title title="Entradas" className="text-gray-300 text-md" />
            <Summary.Icon icon="arrow-up-circle-outline" size={32} className="text-emerald-700" />
          </View>
          <Summary.Value value={transactionCalculated?.income} className="text-2xl text-white font-semibold" />
        </Summary.Root>
      </View>

      <View className="flex-1">
        <Summary.Root className="bg-[#323238] px-8 py-4 rounded-md gap-y-4">
          <View className="flex-row items-center justify-between gap-x-4">
            <Summary.Title title="Saídas" className="text-gray-300 text-md" />
            <Summary.Icon icon="arrow-down-circle-outline" size={32} className="text-red-500" />
          </View>
          <Summary.Value value={transactionCalculated?.expense} className="text-2xl text-white font-semibold" />
        </Summary.Root>
      </View>

      <View className="flex-1">
        <Summary.Root
          className={`${
            transactionCalculated?.total >= 0 ? 'bg-emerald-700' : 'bg-red-500'
          } px-8 py-4 rounded-md gap-y-4`}
        >
          <View className="flex-row items-center justify-between gap-x-4">
            <Summary.Title title="Entradas" className="text-gray-300 text-md" />
            <Summary.Icon icon="currency-usd" size={32} className="text-white" />
          </View>
          <Summary.Value value={transactionCalculated?.total} className="text-2xl font-semibold text-white" />
        </Summary.Root>
      </View>
    </ScrollView>
  )
}
