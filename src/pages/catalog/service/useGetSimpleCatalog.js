import { useQuery } from "@tanstack/react-query"
import { request } from "../../../config/request"

const useGetSimpleCatalog = (catalog) => {
  return useQuery({
    queryKey: ["catalog", catalog],
    queryFn: () => request.get(`/${catalog}`).then((res) => res.data),
  })
}

export default useGetSimpleCatalog
