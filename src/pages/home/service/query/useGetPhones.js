import React from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

const useGetPhones = (catalog) => {
  return useQuery({
    queryKey: ["phones", catalog],
    queryFn: () =>
      request
        .get(`/${catalog}`, { params: { _limit: 8 } })
        .then((res) => res.data),
  });
};

export default useGetPhones;
