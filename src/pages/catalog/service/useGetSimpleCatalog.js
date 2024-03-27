import { useQuery } from "@tanstack/react-query"
import { request } from "../../../config/request"

const useGetSimpleCatalog = (id) => {
  return useQuery({
    queryKey: ["catalog", id],
    queryFn: () => request.get(`/${id}`).then((res) => res.data),
  })
}

export default useGetSimpleCatalog
