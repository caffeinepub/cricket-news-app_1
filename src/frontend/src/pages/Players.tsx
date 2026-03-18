import { playersData } from "@/data/mockData";
import { motion } from "motion/react";
import { useState } from "react";

type RoleFilter = "All" | "Batsman" | "Bowler" | "All-rounder" | "WK-Batsman";

const roleColors: Record<string, string> = {
  Batsman: "bg-blue-100 text-blue-700",
  Bowler: "bg-red-100 text-red-700",
  "All-rounder": "bg-purple-100 text-purple-700",
  "WK-Batsman": "bg-amber-100 text-amber-700",
};

export default function Players() {
  const [roleFilter, setRoleFilter] = useState<RoleFilter>("All");

  const roles: RoleFilter[] = [
    "All",
    "Batsman",
    "Bowler",
    "All-rounder",
    "WK-Batsman",
  ];

  const filtered =
    roleFilter === "All"
      ? playersData
      : playersData.filter((p) => p.role === roleFilter);

  return (
    <div className="flex flex-col h-full">
      {/* Filter chips */}
      <div className="sticky top-0 z-10 bg-white border-b border-border px-4 py-3">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-0.5">
          {roles.map((role) => (
            <button
              type="button"
              key={role}
              onClick={() => setRoleFilter(role)}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                roleFilter === role
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
              data-ocid={`players.${role.toLowerCase().replace("-", "").replace(" ", "")}.tab`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Players grid */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((player, idx) => (
            <motion.article
              key={player.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
              className="bg-white rounded-2xl shadow-card overflow-hidden"
              data-ocid={`players.item.${idx + 1}`}
            >
              <div className="relative h-32">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 right-2 text-xl">
                  {player.flag}
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-sm text-foreground leading-tight mb-1">
                  {player.name}
                </h3>
                <span
                  className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2 ${roleColors[player.role]}`}
                >
                  {player.role}
                </span>
                <div className="space-y-0.5">
                  {player.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between"
                    >
                      <span className="text-[10px] text-muted-foreground">
                        {stat.label}
                      </span>
                      <span className="text-[11px] font-bold text-foreground">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
