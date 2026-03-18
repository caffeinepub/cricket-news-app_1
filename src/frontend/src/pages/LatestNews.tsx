import { Badge } from "@/components/ui/badge";
import { type NewsCategory, newsData } from "@/data/mockData";
import { Clock, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const categoryColors: Record<NewsCategory, string> = {
  Test: "bg-blue-100 text-blue-700",
  ODI: "bg-green-100 text-green-700",
  T20: "bg-purple-100 text-purple-700",
  IPL: "bg-orange-100 text-orange-700",
  WPL: "bg-pink-100 text-pink-700",
  ICC: "bg-yellow-100 text-yellow-700",
};

export default function LatestNews() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = searchQuery
    ? newsData.filter(
        (n) =>
          n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          n.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : newsData;

  return (
    <div className="flex flex-col h-full">
      {/* Sticky search */}
      <div className="sticky top-0 z-10 bg-white px-4 py-3 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-full bg-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            data-ocid="news.search_input"
          />
        </div>
      </div>

      {/* News feed */}
      <div className="flex-1 overflow-y-auto">
        {/* Featured card — first item */}
        {filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative mx-4 mt-4 rounded-2xl overflow-hidden shadow-card cursor-pointer"
            data-ocid="news.item.1"
          >
            <img
              src={filtered[0].image}
              alt={filtered[0].title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span
                className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${categoryColors[filtered[0].category]}`}
              >
                {filtered[0].category}
              </span>
              <h2 className="text-white font-bold text-base leading-snug line-clamp-2">
                {filtered[0].title}
              </h2>
              <div className="flex items-center gap-1.5 mt-1.5">
                <Clock className="h-3 w-3 text-white/70" />
                <span className="text-xs text-white/70">
                  {filtered[0].source} · {filtered[0].timeAgo}
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Remaining news cards */}
        <div className="px-4 pb-4 pt-3 space-y-3">
          {filtered.slice(1).map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="flex gap-3 bg-white rounded-xl shadow-card overflow-hidden cursor-pointer active:scale-[0.99] transition-transform"
              data-ocid={`news.item.${idx + 2}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[100px] h-[80px] object-cover flex-shrink-0"
              />
              <div className="flex-1 py-2.5 pr-3 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span
                    className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[item.category]}`}
                  >
                    {item.category}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-foreground leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 mt-1.5">
                  <Clock className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                  <span className="text-[11px] text-muted-foreground truncate">
                    {item.source} · {item.timeAgo}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
