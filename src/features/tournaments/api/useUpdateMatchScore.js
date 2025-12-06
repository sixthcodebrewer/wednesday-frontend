import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/api/axios";
import endpoints from "@/api/endpoints";

async function updateMatchScoreFn({ matchId, payload }) {
  const { data } = await api.patch(endpoints.organizer.updateMatchScore(matchId), payload);
  return data;
}

export function useUpdateMatchScore(options = {}) {
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ["updateMatchScore"],
    mutationFn: updateMatchScoreFn,
    onSuccess: (data, variables) => {
      const { matchId, tournamentId } = variables || {};
      if (matchId) qc.invalidateQueries({ queryKey: ["match", matchId] });
      if (tournamentId) qc.invalidateQueries({ queryKey: ["matches", tournamentId] });
      qc.invalidateQueries({ queryKey: ["tournaments"] });
    },
    ...options,
  });
}
