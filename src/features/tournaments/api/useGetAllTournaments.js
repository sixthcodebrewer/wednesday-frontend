import { useQuery } from "@tanstack/react-query";
import api from "@/api/axios";
import endpoints from "@/api/endpoints";

async function getAllTournamentsFn() {
  const { data } = await api.get(endpoints.user.getAllTournaments);
  return data;
}

export function useGetAllTournaments(options = {}) {
  return useQuery({
    queryKey: ["tournaments"],
    queryFn: getAllTournamentsFn,
    staleTime: 60_000,
    ...options,
  });
}
