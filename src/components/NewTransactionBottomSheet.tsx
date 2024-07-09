import { Text, View } from 'react-native'
import { Input } from './Input'
import useNewTransaction from '../hooks/useNewTransaction'
import { Formik } from 'formik'
import { ITransaction } from './Card'
import SelectButton from './TypeOptions'
import { TouchableOpacity } from 'react-native'

export default function NewTransactionBottomSheet() {
  const { mutate } = useNewTransaction()

  const handleNewTransaction = ({ category, price, title, type }: ITransaction) => {
    const createdAt = new Date()

    const typped = type === 0 ? 'income' : 'expense'

    mutate({
      category,
      createdAt,
      price,
      title,
      type: typped,
    })
  }

  return (
    <Formik initialValues={{} as ITransaction} onSubmit={handleNewTransaction}>
      {({ handleSubmit, setFieldValue, values }) => {
        return (
          <View className="mx-4 gap-y-2 flex-1">
            <View>
              <Text className="text-white font-medium text-xl">Nova Transação</Text>
            </View>
            <View className="gap-y-2">
              <View>
                <Input
                  placeholder="Descrição"
                  placeholderTextColor="white"
                  className="w-full bg-neutral-950 text-gray-400"
                  onChangeText={(value) => {
                    setFieldValue('title', value)
                  }}
                />
              </View>

              <View>
                <Input
                  placeholder="Preço"
                  placeholderTextColor="white"
                  className="w-full bg-neutral-950 text-gray-400"
                  onChangeText={(value) => {
                    setFieldValue('price', Number(value))
                  }}
                />
              </View>

              <View>
                <Input
                  placeholder="Categoria"
                  placeholderTextColor="white"
                  className="w-full bg-neutral-950 text-gray-400"
                  onChangeText={(value) => {
                    setFieldValue('category', value)
                  }}
                />
              </View>
            </View>

            <SelectButton type={values.type} setFieldValue={setFieldValue} options={['Entrada', 'Saída']} />

            <View className="mb-4 flex-1 justify-end">
              <TouchableOpacity
                onPress={handleSubmit}
                className="items-center justify-center text-white bg-emerald-700 rounded p-3"
              >
                <Text className="text-white">Adicionar nova transação</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }}
    </Formik>
  )
}
