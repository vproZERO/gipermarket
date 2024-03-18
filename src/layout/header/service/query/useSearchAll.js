import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

import React from 'react'

const useSearchAll = (value) => {
  return useQuery({
    queryKey: ["search", value],
    queryFn: () => {
        if(value.length > 2) {
            return request.get('/all', {
                params: {title_like: value}
            }).then((res) => res.data)
        }

        return
    }
  })
}

export default useSearchAll
