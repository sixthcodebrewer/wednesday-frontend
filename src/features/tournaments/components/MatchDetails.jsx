import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MatchDetails({ match }) {
  if (!match) return null;
  const id = match.id || match._id;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Match {id}: {match.team1} vs {match.team2}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>Score: {match.score1 ?? 0} - {match.score2 ?? 0}</div>
        {match.winner && <div>Winner: {match.winner}</div>}
        {match.venue && <div>Venue: {match.venue}</div>}
        {match.time && <div>Time: {new Date(match.time).toLocaleString()}</div>}
      </CardContent>
    </Card>
  );
}
