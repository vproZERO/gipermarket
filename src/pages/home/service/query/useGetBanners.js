import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetBanners = () => {
  return useQuery({
    queryKey: ["banners"],
    queryFn: () => request.get("/banners").then((res) => res.data),
  });
};
