import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import UpdateScoreDialog from "./UpdateScoreDialog";
import { useOrganizer } from "@/context/OrganizerContext";
import { useNavigate } from "react-router-dom";

export default function MatchList({ matches = [], tournamentId }) {
  const { isOrganizer } = useOrganizer();
  const [selectedMatch, setSelectedMatch] = useState(null);
  const navigate = useNavigate();
  const list = Array.isArray(matches) ? matches : [];

  if (!list.length) return <p className="text-muted-foreground">No matches scheduled.</p>;

  return (
    <div className="grid gap-4">
      {list.map((m) => {
        const id = m.id || m._id;
        return (
          <Card key={id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>
                  {m.team1} vs {m.team2}
                </span>
                <span className="text-sm text-muted-foreground">Round: {m.round || m.round_number || 1}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between gap-2">
              <div className="space-x-2">
                <span>
                  Score: {m.score1 ?? 0} - {m.score2 ?? 0}
                </span>
                {m.winner && <span className="text-xs text-green-600">Winner: {m.winner}</span>}
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Button size="sm" onClick={() => navigate(`/match/${id}`)}>
                  View Details
                </Button>
                {isOrganizer && (
                  <Button size="sm" variant="secondary" onClick={() => setSelectedMatch(m)}>
                    Update Score
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}

      <UpdateScoreDialog
        open={!!selectedMatch}
        onOpenChange={(o) => !o && setSelectedMatch(null)}
        match={selectedMatch}
        tournamentId={tournamentId}
      />
    </div>
  );
}
