import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

import React from 'react'

const useGetCartCatalog = () => {
  return useQuery({
    queryKey: ["catalog"],
    queryFn: () => request.get("/catalog").then((res) => res.data),
  })
}

export default useGetCartCatalog

