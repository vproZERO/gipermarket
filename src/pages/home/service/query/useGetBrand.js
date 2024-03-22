import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

import React from 'react'

const useGetBrand = () => {
  return useQuery({
    queryKey: ["brand"],
    queryFn: () => request.get("/brand").then((res) => res.data),
  })
}

export default useGetBrand
