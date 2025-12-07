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
      {isLoading ? (
        <div className="grid gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="rounded-lg border p-4">
              <div className="h-5 w-2/3 animate-pulse rounded bg-muted mb-3" />
              <div className="h-4 w-1/3 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      ) : (
        <MatchList matches={matches} tournamentId={tournamentId} />
      )}
    </div>
  );
}
