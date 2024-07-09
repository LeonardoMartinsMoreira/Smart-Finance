import api from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { ITransaction } from '../components/Card'
import { useFilterStore } from '../stores/useFilter'

export default function useGetTransactions() {
  const query = useFilterStore((state) => state.query)

  return useQuery({
    queryKey: ['transactions', query],
    queryFn: () => {
      return api
        .get<ITransaction[]>('/transactions', {
          params: {
            q: query,
            _sort: 'createdAt',
          },
        })
        .then(({ data }) => data)
    },
  })
}
