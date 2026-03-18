import { teamsData } from "@/data/mockData";
import { Trophy, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type RankingFormat = "test" | "odi" | "t20";

export default function Teams() {
  const [activeFormat, setActiveFormat] = useState<RankingFormat>("test");
  const [selectedTeam, setSelectedTeam] = useState<
    (typeof teamsData)[0] | null
  >(null);

  const sorted = [...teamsData].sort(
    (a, b) => a.iccRanking[activeFormat] - b.iccRanking[activeFormat],
  );

  return (
    <div className="flex flex-col h-full">
      {/* Format tabs */}
      <div className="sticky top-0 z-10 bg-white border-b border-border px-4">
        <div className="flex gap-1 pt-3 pb-0">
          {(["test", "odi", "t20"] as RankingFormat[]).map((f) => (
            <button
              type="button"
              key={f}
              onClick={() => setActiveFormat(f)}
              className={`relative flex-1 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors ${
                activeFormat === f ? "text-primary" : "text-muted-foreground"
              }`}
              data-ocid={`teams.${f}.tab`}
            >
              {f}
              {activeFormat === f && (
                <motion.div
                  layoutId="teamTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Teams grid */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
          ICC {activeFormat.toUpperCase()} Rankings
        </p>
        <div className="grid grid-cols-2 gap-3">
          {sorted.map((team, idx) => (
            <motion.button
              key={team.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
              onClick={() => setSelectedTeam(team)}
              className="bg-white rounded-2xl shadow-card p-4 text-left active:scale-[0.98] transition-transform"
              data-ocid={`teams.item.${idx + 1}`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-4xl">{team.flag}</span>
                <div className="flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded-full">
                  <Trophy className="h-3 w-3 text-primary" />
                  <span className="text-xs font-bold text-primary">
                    #{team.iccRanking[activeFormat]}
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-sm text-foreground mb-1">
                {team.name}
              </h3>
              <div className="flex gap-2 text-[11px] text-muted-foreground">
                <span className="text-green-600 font-medium">{team.wins}W</span>
                <span>/</span>
                <span className="text-red-500 font-medium">{team.losses}L</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Team detail sheet */}
      {selectedTeam && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center"
          onClick={() => setSelectedTeam(null)}
          data-ocid="teams.modal"
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-t-3xl w-full max-w-[430px] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-5xl">{selectedTeam.flag}</span>
                <div>
                  <h2 className="font-bold text-xl text-foreground">
                    {selectedTeam.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {selectedTeam.matches} matches played
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTeam(null)}
                className="p-2 rounded-full bg-muted text-muted-foreground"
                data-ocid="teams.close_button"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-5">
              {(["test", "odi", "t20"] as RankingFormat[]).map((f) => (
                <div key={f} className="bg-muted/50 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-primary">
                    #{selectedTeam.iccRanking[f]}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase font-semibold mt-0.5">
                    {f}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-green-50 rounded-xl p-3 text-center">
                <div className="text-xl font-bold text-green-600">
                  {selectedTeam.wins}
                </div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">
                  Wins
                </div>
              </div>
              <div className="bg-red-50 rounded-xl p-3 text-center">
                <div className="text-xl font-bold text-red-500">
                  {selectedTeam.losses}
                </div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">
                  Losses
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-3 text-center">
                <div className="text-xl font-bold text-blue-600">
                  {selectedTeam.matches -
                    selectedTeam.wins -
                    selectedTeam.losses}
                </div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">
                  Draws/NR
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
