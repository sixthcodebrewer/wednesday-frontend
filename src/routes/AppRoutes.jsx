import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TournamentsPage from "@/features/tournaments/pages/TournamentsPage";
import TournamentMatchesPage from "@/features/tournaments/pages/TournamentMatchesPage";
import MatchDetailsPage from "@/features/tournaments/pages/MatchDetailsPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/tournaments" replace />} />
        <Route path="/tournaments" element={<TournamentsPage />} />
        <Route path="/tournaments/:tournamentId/matches" element={<TournamentMatchesPage />} />
        <Route path="/match/:matchId" element={<MatchDetailsPage />} />
        <Route path="*" element={<div className="p-6">Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
