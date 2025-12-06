import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRoutes from "@/routes/AppRoutes";
import { OrganizerProvider } from "@/context/OrganizerContext";

const queryClient = new QueryClient();

export default function AppTournament() {
  return (
    <QueryClientProvider client={queryClient}>
      <OrganizerProvider>
        <AppRoutes />
      </OrganizerProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
