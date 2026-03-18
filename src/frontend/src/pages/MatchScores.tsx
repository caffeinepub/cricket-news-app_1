import { matchesData } from "@/data/mockData";
import { MapPin } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function MatchScores() {
  const [tab, setTab] = useState<"live" | "recent">("live");

  const liveMatches = matchesData.filter((m) => m.status === "live");
  const recentMatches = matchesData.filter((m) => m.status === "recent");
  const shown = tab === "live" ? liveMatches : recentMatches;

  return (
    <div className="flex flex-col h-full">
      {/* Sub tabs */}
      <div className="sticky top-0 z-10 bg-white border-b border-border px-4">
        <div className="flex gap-1 pt-3 pb-0">
          {(["live", "recent"] as const).map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setTab(t)}
              className={`relative flex-1 py-2.5 text-sm font-semibold capitalize transition-colors ${
                tab === t ? "text-primary" : "text-muted-foreground"
              }`}
              data-ocid={`scores.${t}.tab`}
            >
              {t === "live" && (
                <span className="mr-1.5 inline-block w-2 h-2 rounded-full bg-cricket-live animate-pulse" />
              )}
              {t === "live" ? "Live" : "Recent"}
              {tab === t && (
                <motion.div
                  layoutId="scoreTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Match cards */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: tab === "live" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            {shown.map((match, idx) => (
              <article
                key={match.id}
                className="bg-white rounded-2xl shadow-card overflow-hidden"
                data-ocid={`scores.item.${idx + 1}`}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-muted/50">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {match.matchType}
                  </span>
                  {match.status === "live" ? (
                    <span className="flex items-center gap-1.5 text-xs font-bold text-cricket-live">
                      <span className="w-1.5 h-1.5 rounded-full bg-cricket-live animate-pulse" />
                      LIVE
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-muted-foreground">
                      Completed
                    </span>
                  )}
                </div>

                {/* Teams + Scores */}
                <div className="px-4 py-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{match.team1.flag}</span>
                      <span className="font-bold text-sm text-foreground">
                        {match.team1.name}
                      </span>
                    </div>
                    <span className="font-bold text-base text-foreground">
                      {match.team1.score}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{match.team2.flag}</span>
                      <span className="font-bold text-sm text-foreground">
                        {match.team2.name}
                      </span>
                    </div>
                    <span
                      className={`font-bold text-base ${
                        match.status === "live"
                          ? "text-muted-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {match.team2.score}
                    </span>
                  </div>
                </div>

                {/* Status + Venue */}
                <div className="px-4 pb-3">
                  {match.status === "live" && match.liveStatus && (
                    <p className="text-xs font-semibold text-primary mb-1.5">
                      {match.liveStatus}
                    </p>
                  )}
                  {match.result && (
                    <p className="text-xs font-semibold text-cricket-green mb-1.5">
                      {match.result}
                    </p>
                  )}
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs">{match.venue}</span>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
