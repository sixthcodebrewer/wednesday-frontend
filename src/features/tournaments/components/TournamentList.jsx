import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export default function TournamentList({ tournaments = [], isLoading }) {
  const navigate = useNavigate();

  if (!tournaments?.length) {
    return <p className="text-muted-foreground">No tournaments available.</p>;
  }

  return (
    isLoading ? (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-lg border p-4">
            <div className="h-5 w-2/3 animate-pulse rounded bg-muted mb-4" />
            <div className="space-y-2">
              <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
              <div className="h-4 w-1/3 animate-pulse rounded bg-muted" />
              <div className="h-8 w-24 animate-pulse rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tournaments.map((t) => (
          <Card key={t.id || t._id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
              <span>{t.name}</span>
              <Badge variant="secondary">{t.kind_of_match}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm">Venue: {t.venue}</div>
            <div className="text-sm">Teams: {t.number_of_teams}</div>
            <Button size="sm" onClick={() => navigate(`/tournaments/${t.id || t._id}/matches`)}>
              View Matches
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
    )
  );
}
