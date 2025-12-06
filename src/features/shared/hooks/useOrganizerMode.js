import { useOrganizer } from "@/context/OrganizerContext";
export default function useOrganizerMode() {
  const { isOrganizer } = useOrganizer();
  return isOrganizer;
}
