// Centralized API endpoints
const endpoints = {
  organizer: {
    createTournament: "organizer/tournaments",
    getMatches: (tournamentId) => `organizer/matches/${tournamentId}`,
    updateMatchScore: (matchId) => `organizer/match/${matchId}/score`,
  },
  user: {
    getAllTournaments: "user/tournaments",
    getMatches: (tournamentId) => `user/matches/${tournamentId}`,
    getMatchDetails: (matchId) => `user/match/${matchId}`,
  },
};

export default endpoints;
