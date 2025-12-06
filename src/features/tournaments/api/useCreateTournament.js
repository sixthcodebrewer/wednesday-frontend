import { useMutation } from "@tanstack/react-query";
import api from "@/api/axios";
import endpoints from "@/api/endpoints";

async function createTournamentFn(payload) {
  const { data } = await api.post(endpoints.organizer.createTournament, payload);
  return data;
}

export function useCreateTournament(options = {}) {
  return useMutation({
    mutationKey: ["createTournament"],
    mutationFn: createTournamentFn,
    ...options,
  });
}
