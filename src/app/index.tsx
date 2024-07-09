import { ActivityIndicator, FlatList, ListRenderItem, ListRenderItemInfo, StatusBar, Text, View } from 'react-native'
import Header from '../components/Header'
import Summarys from '../components/Summary/Summarys'
import { Input } from '../components/Input'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import Card, { ITransaction } from '../components/Card'
import useGetTransactions from '../hooks/useGetTransactions'
import { Formik } from 'formik'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useFilterStore } from '../stores/useFilter'

const renderItem = ({ item }: ListRenderItemInfo<ITransaction>) => <Card {...item} />

interface IInitialValues {
  query: string
}

const initialValues: IInitialValues = {
  query: '',
}

export default function Home() {
  const { data: transactions, isLoading } = useGetTransactions()
  const setQuery = useFilterStore((state) => state.setQuery)

  if (isLoading)
    return (
      <View className="flex-1 justify-center items-center bg-neutral-900">
        <ActivityIndicator size={32} />
      </View>
    )

  const handleFilter = ({ query }: IInitialValues) => {
    setQuery(query)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleFilter}>
      {({ setFieldValue, handleSubmit }) => {
        return (
          <View className="bg-neutral-900 flex-1 gap-y-4">
            <View>
              <StatusBar backgroundColor={'#000000'} barStyle={'light-content'} />
              <Header />
              <View>
                <Summarys transactions={transactions} />
              </View>
            </View>

            <View className="px-4 gap-y-4 flex-1">
              <View className="flex-row justify-between">
                <Text className="text-gray-400">Transações</Text>
                <Text className="text-gray-400">{transactions?.length} itens</Text>
              </View>

              <View className="flex-row gap-x-5">
                <View className="flex-1">
                  <Input
                    onChangeText={(value) => {
                      setFieldValue('query', value)
                    }}
                    placeholder="Busque por algo..."
                    placeholderTextColor="white"
                    className="w-full bg-neutral-950 text-gray-400"
                  />
                </View>

                <TouchableOpacity
                  onPress={handleSubmit}
                  className="p-2 px-3 border border-emerald-600 items-center justify-center rounded"
                >
                  <Icon name="magnify" size={24} color="#059669" />
                </TouchableOpacity>
              </View>

              <FlatList
                className="gap-y-4 flex-1"
                showsVerticalScrollIndicator={false}
                data={transactions}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                renderItem={renderItem}
              />
            </View>
          </View>
        )
      }}
    </Formik>
  )
}
