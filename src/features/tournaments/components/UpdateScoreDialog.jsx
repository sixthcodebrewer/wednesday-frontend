import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateMatchScore } from "../api/useUpdateMatchScore";

export default function UpdateScoreDialog({ open, onOpenChange, match, tournamentId }) {
  const id = match?.id || match?._id;
  const [form, setForm] = useState({ score1: "", score2: "", winner: "" });
  const { mutateAsync, isPending } = useUpdateMatchScore();

  useEffect(() => {
    if (match) {
      setForm({
        score1: match.score1 ?? 0,
        score2: match.score2 ?? 0,
        winner: match.winner ?? "",
      });
    }
  }, [match]);

  async function handleSave() {
    await mutateAsync({
      matchId: id,
      tournamentId,
      payload: { score1: Number(form.score1), score2: Number(form.score2), winner: form.winner },
    });
    onOpenChange?.(false);
  }

  if (!id) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Score</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="score1">Score 1</Label>
            <Input id="score1" value={form.score1} onChange={(e) => setForm({ ...form, score1: e.target.value })} type="number" min="0" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="score2">Score 2</Label>
            <Input id="score2" value={form.score2} onChange={(e) => setForm({ ...form, score2: e.target.value })} type="number" min="0" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="winner">Winner</Label>
            <Input id="winner" value={form.winner} onChange={(e) => setForm({ ...form, winner: e.target.value })} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange?.(false)}>Cancel</Button>
          <Button onClick={handleSave} disabled={isPending}>{isPending ? "Saving..." : "Save"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
