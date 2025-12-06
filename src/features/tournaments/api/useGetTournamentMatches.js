import { useQuery } from "@tanstack/react-query";
import api from "@/api/axios";
import endpoints from "@/api/endpoints";

async function getTournamentMatchesFn({ tournamentId, organizer = false }) {
  const url = organizer
    ? endpoints.organizer.getMatches(tournamentId)
    : endpoints.user.getMatches(tournamentId);
  const { data } = await api.get(url);
  return data;
}

export function useGetTournamentMatches({ tournamentId, organizer = false }, options = {}) {
  return useQuery({
    queryKey: ["matches", tournamentId, organizer ? "org" : "user"],
    queryFn: () => getTournamentMatchesFn({ tournamentId, organizer }),
    enabled: Boolean(tournamentId),
    ...options,
  });
}
