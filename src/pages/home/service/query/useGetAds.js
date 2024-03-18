import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

import React from 'react'

const useGetAds = () => {
  return useQuery({
    queryKey: ["ads"],
    queryFn: () => request.get("/ads").then((res) => res.data),
  })
}

export default useGetAds
