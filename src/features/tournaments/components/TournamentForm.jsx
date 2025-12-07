import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateTournament } from "../api/useCreateTournament";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function TournamentForm({ onCreated }) {
  const [form, setForm] = useState({
    name: "",
    number_of_teams: "",
    venue: "",
    kind_of_match: "Football",
  });
  const { mutateAsync, isPending } = useCreateTournament();

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      name: form.name,
      number_of_teams: Number(form.number_of_teams),
      venue: form.venue,
      kind_of_match: form.kind_of_match || "points",
    };
    await mutateAsync(payload);
    setForm({ name: "", number_of_teams: "", venue: "", kind_of_match: "points" });
    onCreated?.();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Tournament</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2 sm:col-span-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Summer Cup 2025" value={form.name} onChange={onChange} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number_of_teams">Number of Teams</Label>
            <Input
              id="number_of_teams"
              name="number_of_teams"
              type="number"
              inputMode="numeric"
              min="2"
              step="1"
              placeholder="8"
              value={form.number_of_teams}
              onChange={onChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="venue">Venue</Label>
            <Input id="venue" name="venue" placeholder="Main Arena" value={form.venue} onChange={onChange} required />
          </div>
          <div className="grid gap-2 sm:col-span-2">
            <Label>Game</Label>
            <Select
              defaultValue="Football"
              value={form.kind_of_match || "Football"}
              onValueChange={(v) => setForm((f) => ({ ...f, kind_of_match: v }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select game" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Football">Football</SelectItem>
                <SelectItem value="Cricket">Cricket</SelectItem>
                <SelectItem value="Basketball">Basketball</SelectItem>
                <SelectItem value="Tennis">Tennis</SelectItem>
                <SelectItem value="Badminton">Badminton</SelectItem>
                <SelectItem value="Volleyball">Volleyball</SelectItem>
                <SelectItem value="Hockey">Hockey</SelectItem>
                <SelectItem value="Baseball">Baseball</SelectItem>
                <SelectItem value="Rugby">Rugby</SelectItem>
                <SelectItem value="Table Tennis">Table Tennis</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Creating..." : "Create"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
