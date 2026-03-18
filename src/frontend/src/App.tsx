import LatestNews from "@/pages/LatestNews";
import MatchScores from "@/pages/MatchScores";
import Players from "@/pages/Players";
import Teams from "@/pages/Teams";
import { Activity, Newspaper, Shield, User } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Tab = "news" | "scores" | "teams" | "players";

const tabs: {
  id: Tab;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: "news", label: "Latest", icon: Newspaper },
  { id: "scores", label: "Scores", icon: Activity },
  { id: "teams", label: "Teams", icon: Shield },
  { id: "players", label: "Players", icon: User },
];

const sectionTitles: Record<Tab, string> = {
  news: "Latest News",
  scores: "Match Scores",
  teams: "Teams",
  players: "Players",
};

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("news");

  const renderPage = () => {
    switch (activeTab) {
      case "news":
        return <LatestNews />;
      case "scores":
        return <MatchScores />;
      case "teams":
        return <Teams />;
      case "players":
        return <Players />;
    }
  };

  return (
    // Outer shell: gray bg on large screens, mobile centered
    <div className="min-h-screen bg-gray-200 flex items-start justify-center">
      {/* Phone shell */}
      <div
        className="relative w-full max-w-[430px] min-h-screen flex flex-col bg-[#F5F7FA]"
        style={{ boxShadow: "0 0 40px rgba(0,0,0,0.15)" }}
      >
        {/* Header */}
        <header className="flex-shrink-0 bg-cricket-navy px-4 pt-10 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏏</span>
            <span className="font-bold text-xl text-cricket-green tracking-tight">
              Cricket<span className="text-white">Live</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/60 font-medium">
              {sectionTitles[activeTab]}
            </span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-0 overflow-hidden flex flex-col"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Bottom navigation */}
        <nav
          className="flex-shrink-0 bg-white border-t border-border shadow-nav"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 8px)" }}
        >
          <div className="flex">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  type="button"
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex flex-col items-center gap-0.5 py-3 transition-all relative ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                  data-ocid={`nav.${tab.id}.tab`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full"
                    />
                  )}
                  <Icon
                    className={`h-5 w-5 transition-transform ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                  />
                  <span
                    className={`text-[10px] font-semibold ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="flex-shrink-0 bg-white border-t border-border/50 py-2 text-center">
          <p className="text-[10px] text-muted-foreground">
            © {new Date().getFullYear()}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
