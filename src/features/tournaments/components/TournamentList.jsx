import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export default function TournamentList({ tournaments = [] }) {
  const navigate = useNavigate();

  if (!tournaments?.length) {
    return <p className="text-muted-foreground">No tournaments available.</p>;
  }

  return (
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
  );
}
