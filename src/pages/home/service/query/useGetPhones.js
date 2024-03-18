import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

const useGetPhones = () => {
  return useQuery({
    queryKey: ['phones'],
    queryFn:() => request.get('/phones').then((res) => res.data),
  })
}

export default useGetPhones
