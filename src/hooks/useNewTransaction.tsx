import api from '@/services/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ITransaction } from '../components/Card'
import { useBottomSheet } from '@gorhom/bottom-sheet'
import { useToast } from '../components/Toast'

export default function useNewTransaction() {
  const queryClient = useQueryClient()
  const { close } = useBottomSheet()

  const { toast } = useToast()

  return useMutation({
    mutationKey: ['newTransactions'],
    mutationFn: (data: ITransaction) => {
      return api.post<ITransaction>('/transactions', data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] })
      close()
      toast('Transação adicionada com sucesso.', 'success', 5000, 'top', true)
    },
  })
}
