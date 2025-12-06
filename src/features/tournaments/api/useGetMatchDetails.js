import { useQuery } from "@tanstack/react-query";
import api from "@/api/axios";
import endpoints from "@/api/endpoints";

async function getMatchDetailsFn(matchId) {
  const { data } = await api.get(endpoints.user.getMatchDetails(matchId));
  return data;
}

export function useGetMatchDetails(matchId, options = {}) {
  return useQuery({
    queryKey: ["match", matchId],
    queryFn: () => getMatchDetailsFn(matchId),
    enabled: Boolean(matchId),
    ...options,
  });
}
