import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAllTournaments } from "../api/useGetAllTournaments";
import TournamentList from "../components/TournamentList";
import TournamentForm from "../components/TournamentForm";
import { useOrganizer } from "@/context/OrganizerContext";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function TournamentsPage() {
  const { data, isLoading, refetch } = useGetAllTournaments();
  const { setMode, isOrganizer } = useOrganizer();
  const tournaments = Array.isArray(data) ? data : data?.tournaments || data?.data || [];
  const [showForm, setShowForm] = useState(false);
  const { isDark, setTheme } = useTheme();

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Tournaments</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setTheme(isDark ? "light" : "dark")}>
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant={isOrganizer ? "default" : "outline"} onClick={() => setMode("organizer")}>Organizer</Button>
          <Button variant={!isOrganizer ? "default" : "outline"} onClick={() => setMode("user")}>User</Button>
        </div>
      </div>

      {isOrganizer && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Create New Tournament</span>
              <Button size="sm" variant="secondary" onClick={() => setShowForm((s) => !s)}>
                {showForm ? "Hide" : "Show"} Form
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {showForm && <TournamentForm onCreated={refetch} />}
          </CardContent>
        </Card>
      )}

      {isLoading ? (
        <div>Loading tournaments...</div>
      ) : (
        <TournamentList tournaments={tournaments} />
      )}
    </div>
  );
}
