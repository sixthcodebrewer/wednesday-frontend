import { useParams } from "react-router-dom";
import { useGetMatchDetails } from "../api/useGetMatchDetails";
import MatchDetails from "../components/MatchDetails";

export default function MatchDetailsPage() {
  const { matchId } = useParams();
  const { data, isLoading } = useGetMatchDetails(matchId);

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Match Details</h1>
      {isLoading ? <div>Loading match...</div> : <MatchDetails match={data} />}
    </div>
  );
}
