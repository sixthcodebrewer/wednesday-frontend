import { useParams } from "react-router-dom";
import { useGetTournamentMatches } from "../api/useGetTournamentMatches";
import MatchList from "../components/MatchList";
import { useOrganizer } from "@/context/OrganizerContext";

export default function TournamentMatchesPage() {
  const { tournamentId } = useParams();
  const { isOrganizer } = useOrganizer();
  const { data, isLoading } = useGetTournamentMatches({ tournamentId, organizer: isOrganizer });
  const matches = Array.isArray(data) ? data : data?.matches || data?.data || [];

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Matches</h1>
      {isLoading ? <div>Loading matches...</div> : <MatchList matches={matches} tournamentId={tournamentId} />}
    </div>
  );
}
