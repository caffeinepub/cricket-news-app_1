export type NewsCategory = "Test" | "ODI" | "T20" | "IPL" | "WPL" | "ICC";

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  category: NewsCategory;
  image: string;
  source: string;
  timestamp: string;
  timeAgo: string;
}

export interface MatchScore {
  id: number;
  team1: { name: string; flag: string; score: string; overs?: string };
  team2: { name: string; flag: string; score: string; overs?: string };
  matchType: string;
  venue: string;
  status: "live" | "recent";
  result?: string;
  liveStatus?: string;
}

export interface Team {
  id: number;
  name: string;
  flag: string;
  iccRanking: { test: number; odi: number; t20: number };
  matches: number;
  wins: number;
  losses: number;
  color: string;
}

export interface Player {
  id: number;
  name: string;
  nationality: string;
  flag: string;
  role: "Batsman" | "Bowler" | "All-rounder" | "WK-Batsman";
  stats: { label: string; value: string }[];
  image: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "India Dominate Australia in Thrilling 3rd Test at MCG",
    description:
      "Virat Kohli's masterful century guides India to a commanding 180-run lead on Day 3, putting Australia under immense pressure.",
    category: "Test",
    image: "/assets/generated/news-india-aus.dim_600x340.jpg",
    source: "CricInfo",
    timestamp: "2026-03-18T08:30:00",
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    title:
      "ICC Champions Trophy 2025: India Lift Title After Sensational Final",
    description:
      "India defeated South Africa by 8 wickets in a dominant chase at the Dubai International Cricket Stadium.",
    category: "ICC",
    image: "/assets/generated/news-worldcup.dim_600x340.jpg",
    source: "ICC",
    timestamp: "2026-03-18T06:00:00",
    timeAgo: "4 hours ago",
  },
  {
    id: 3,
    title: "IPL 2026 Mega Auction: 5 Surprise Picks That Stunned Everyone",
    description:
      "From unheard youngsters to veterans making comebacks, the IPL auction delivered drama worth crores.",
    category: "IPL",
    image: "/assets/generated/news-ipl.dim_600x340.jpg",
    source: "ESPNcricinfo",
    timestamp: "2026-03-17T15:00:00",
    timeAgo: "17 hours ago",
  },
  {
    id: 4,
    title: "England vs Pakistan: Stokes' All-Round Show Wins It for England",
    description:
      "Ben Stokes hit an unbeaten 89 and then took 4 wickets as England sealed a memorable victory at Lord's.",
    category: "Test",
    image: "/assets/generated/news-eng-pak.dim_600x340.jpg",
    source: "BBC Sport",
    timestamp: "2026-03-17T12:00:00",
    timeAgo: "20 hours ago",
  },
  {
    id: 5,
    title: "South Africa Upset New Zealand in Nail-Biting T20 Decider",
    description:
      "Rabada's hat-trick in the final over sealed a historic 3-run win for the Proteas in Auckland.",
    category: "T20",
    image: "/assets/generated/news-sa-nz.dim_600x340.jpg",
    source: "CricBuzz",
    timestamp: "2026-03-17T09:00:00",
    timeAgo: "1 day ago",
  },
  {
    id: 6,
    title: "IPL 2026: MI vs CSK Preview — The Classic Rivalry Returns",
    description:
      "Mumbai Indians and Chennai Super Kings renew their legendary rivalry at Wankhede Stadium. Who prevails this time?",
    category: "IPL",
    image: "/assets/generated/cricket-hero.dim_800x450.jpg",
    source: "CricInfo",
    timestamp: "2026-03-17T07:00:00",
    timeAgo: "1 day ago",
  },
  {
    id: 7,
    title: "Pakistan Announce Squad for Bangladesh ODI Series",
    description:
      "Babar Azam returns to lead a strong Pakistan side, with three uncapped players earning their first call-ups.",
    category: "ODI",
    image: "/assets/generated/news-eng-pak.dim_600x340.jpg",
    source: "PCB",
    timestamp: "2026-03-16T14:00:00",
    timeAgo: "2 days ago",
  },
  {
    id: 8,
    title: "New Zealand vs Sri Lanka: Record ODI Partnership Steals the Show",
    description:
      "Conway and Latham's 287-run partnership broke the NZ ODI record and set up a massive total of 382.",
    category: "ODI",
    image: "/assets/generated/news-sa-nz.dim_600x340.jpg",
    source: "CricBuzz",
    timestamp: "2026-03-16T10:00:00",
    timeAgo: "2 days ago",
  },
  {
    id: 9,
    title: "Afghanistan Cricket: Rising Stars Who Can Change World Cricket",
    description:
      "From Rashid Khan's leg-spin to Mujeeb's variations — a deep dive into Afghanistan's new generation of cricketers.",
    category: "T20",
    image: "/assets/generated/cricket-hero.dim_800x450.jpg",
    source: "ESPN",
    timestamp: "2026-03-15T11:00:00",
    timeAgo: "3 days ago",
  },
];

export const matchesData: MatchScore[] = [
  {
    id: 1,
    team1: { name: "India", flag: "🇮🇳", score: "287/4", overs: "48.2" },
    team2: { name: "Australia", flag: "🇦🇺", score: "220/7", overs: "35.0" },
    matchType: "ODI",
    venue: "MCG, Melbourne",
    status: "live",
    liveStatus: "India need 68 more • 11.4 overs left",
  },
  {
    id: 2,
    team1: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "412/8", overs: "80.0" },
    team2: { name: "Pakistan", flag: "🇵🇰", score: "198/4", overs: "55.3" },
    matchType: "Test",
    venue: "Lord's, London",
    status: "live",
    liveStatus: "Day 3 — 2nd Innings • Pakistan trail by 214",
  },
  {
    id: 3,
    team1: { name: "South Africa", flag: "🇿🇦", score: "165/8", overs: "18.4" },
    team2: { name: "New Zealand", flag: "🇳🇿", score: "162/5", overs: "20.0" },
    matchType: "T20",
    venue: "Eden Park, Auckland",
    status: "live",
    liveStatus: "South Africa need 4 from 8 balls",
  },
  {
    id: 4,
    team1: { name: "West Indies", flag: "🏏", score: "201/9", overs: "20.0" },
    team2: { name: "Sri Lanka", flag: "🇱🇰", score: "185/6", overs: "19.2" },
    matchType: "T20",
    venue: "Providence, Guyana",
    status: "live",
    liveStatus: "Sri Lanka need 17 from 4 balls",
  },
  {
    id: 5,
    team1: { name: "India", flag: "🇮🇳", score: "324/5" },
    team2: { name: "Bangladesh", flag: "🇧🇩", score: "210" },
    matchType: "ODI",
    venue: "Eden Gardens, Kolkata",
    status: "recent",
    result: "India won by 114 runs",
  },
  {
    id: 6,
    team1: { name: "Australia", flag: "🇦🇺", score: "389" },
    team2: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "391/7" },
    matchType: "Test",
    venue: "The Oval, London",
    status: "recent",
    result: "England won by 3 wickets",
  },
  {
    id: 7,
    team1: { name: "Pakistan", flag: "🇵🇰", score: "187/4" },
    team2: { name: "Afghanistan", flag: "🇦🇫", score: "183" },
    matchType: "T20",
    venue: "Lahore",
    status: "recent",
    result: "Pakistan won by 6 wickets",
  },
  {
    id: 8,
    team1: { name: "South Africa", flag: "🇿🇦", score: "246/8" },
    team2: { name: "West Indies", flag: "🏏", score: "249/4" },
    matchType: "ODI",
    venue: "Cape Town",
    status: "recent",
    result: "West Indies won by 6 wickets",
  },
  {
    id: 9,
    team1: { name: "New Zealand", flag: "🇳🇿", score: "156" },
    team2: { name: "Sri Lanka", flag: "🇱🇰", score: "157/3" },
    matchType: "T20",
    venue: "Colombo",
    status: "recent",
    result: "Sri Lanka won by 7 wickets",
  },
];

export const teamsData: Team[] = [
  {
    id: 1,
    name: "India",
    flag: "🇮🇳",
    iccRanking: { test: 1, odi: 1, t20: 2 },
    matches: 148,
    wins: 102,
    losses: 40,
    color: "bg-blue-600",
  },
  {
    id: 2,
    name: "Australia",
    flag: "🇦🇺",
    iccRanking: { test: 2, odi: 2, t20: 1 },
    matches: 152,
    wins: 98,
    losses: 47,
    color: "bg-yellow-500",
  },
  {
    id: 3,
    name: "England",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    iccRanking: { test: 3, odi: 3, t20: 4 },
    matches: 144,
    wins: 85,
    losses: 52,
    color: "bg-red-600",
  },
  {
    id: 4,
    name: "Pakistan",
    flag: "🇵🇰",
    iccRanking: { test: 4, odi: 4, t20: 3 },
    matches: 139,
    wins: 82,
    losses: 50,
    color: "bg-green-700",
  },
  {
    id: 5,
    name: "New Zealand",
    flag: "🇳🇿",
    iccRanking: { test: 5, odi: 5, t20: 5 },
    matches: 130,
    wins: 76,
    losses: 48,
    color: "bg-black",
  },
  {
    id: 6,
    name: "South Africa",
    flag: "🇿🇦",
    iccRanking: { test: 6, odi: 6, t20: 6 },
    matches: 128,
    wins: 72,
    losses: 50,
    color: "bg-yellow-600",
  },
  {
    id: 7,
    name: "West Indies",
    flag: "🏏",
    iccRanking: { test: 7, odi: 9, t20: 7 },
    matches: 125,
    wins: 64,
    losses: 55,
    color: "bg-red-700",
  },
  {
    id: 8,
    name: "Sri Lanka",
    flag: "🇱🇰",
    iccRanking: { test: 8, odi: 7, t20: 8 },
    matches: 122,
    wins: 60,
    losses: 56,
    color: "bg-blue-800",
  },
  {
    id: 9,
    name: "Bangladesh",
    flag: "🇧🇩",
    iccRanking: { test: 9, odi: 8, t20: 9 },
    matches: 115,
    wins: 52,
    losses: 58,
    color: "bg-green-600",
  },
  {
    id: 10,
    name: "Afghanistan",
    flag: "🇦🇫",
    iccRanking: { test: 10, odi: 10, t20: 10 },
    matches: 88,
    wins: 44,
    losses: 40,
    color: "bg-purple-700",
  },
];

export const playersData: Player[] = [
  {
    id: 1,
    name: "Virat Kohli",
    nationality: "India",
    flag: "🇮🇳",
    role: "Batsman",
    stats: [
      { label: "ODI Avg", value: "58.5" },
      { label: "Centuries", value: "80" },
      { label: "T20 Runs", value: "4,008" },
    ],
    image: "/assets/generated/player-rohit.dim_300x300.jpg",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    nationality: "India",
    flag: "🇮🇳",
    role: "Batsman",
    stats: [
      { label: "ODI Avg", value: "48.9" },
      { label: "Centuries", value: "31" },
      { label: "T20 Runs", value: "4,231" },
    ],
    image: "/assets/generated/player-generic1.dim_300x300.jpg",
  },
  {
    id: 3,
    name: "Pat Cummins",
    nationality: "Australia",
    flag: "🇦🇺",
    role: "Bowler",
    stats: [
      { label: "Test Wkts", value: "268" },
      { label: "ODI Wkts", value: "201" },
      { label: "Avg", value: "21.4" },
    ],
    image: "/assets/generated/player-rohit.dim_300x300.jpg",
  },
  {
    id: 4,
    name: "Ben Stokes",
    nationality: "England",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    role: "All-rounder",
    stats: [
      { label: "Test Avg", value: "35.2" },
      { label: "Test Wkts", value: "198" },
      { label: "Centuries", value: "14" },
    ],
    image: "/assets/generated/player-generic1.dim_300x300.jpg",
  },
  {
    id: 5,
    name: "Babar Azam",
    nationality: "Pakistan",
    flag: "🇵🇰",
    role: "Batsman",
    stats: [
      { label: "ODI Avg", value: "57.3" },
      { label: "Centuries", value: "20" },
      { label: "T20 Avg", value: "41.8" },
    ],
    image: "/assets/generated/player-rohit.dim_300x300.jpg",
  },
  {
    id: 6,
    name: "Rashid Khan",
    nationality: "Afghanistan",
    flag: "🇦🇫",
    role: "Bowler",
    stats: [
      { label: "T20 Wkts", value: "142" },
      { label: "Econ", value: "6.2" },
      { label: "Avg", value: "13.8" },
    ],
    image: "/assets/generated/player-generic1.dim_300x300.jpg",
  },
  {
    id: 7,
    name: "Quinton de Kock",
    nationality: "South Africa",
    flag: "🇿🇦",
    role: "WK-Batsman",
    stats: [
      { label: "ODI Avg", value: "45.2" },
      { label: "Centuries", value: "18" },
      { label: "Dismissals", value: "341" },
    ],
    image: "/assets/generated/player-rohit.dim_300x300.jpg",
  },
  {
    id: 8,
    name: "Kane Williamson",
    nationality: "New Zealand",
    flag: "🇳🇿",
    role: "Batsman",
    stats: [
      { label: "Test Avg", value: "54.8" },
      { label: "Centuries", value: "33" },
      { label: "ODI Avg", value: "47.5" },
    ],
    image: "/assets/generated/player-generic1.dim_300x300.jpg",
  },
  {
    id: 9,
    name: "Shakib Al Hasan",
    nationality: "Bangladesh",
    flag: "🇧🇩",
    role: "All-rounder",
    stats: [
      { label: "ODI Wkts", value: "315" },
      { label: "ODI Runs", value: "7,742" },
      { label: "Avg", value: "37.1" },
    ],
    image: "/assets/generated/player-rohit.dim_300x300.jpg",
  },
  {
    id: 10,
    name: "Jasprit Bumrah",
    nationality: "India",
    flag: "🇮🇳",
    role: "Bowler",
    stats: [
      { label: "Test Wkts", value: "195" },
      { label: "ODI Wkts", value: "157" },
      { label: "Avg", value: "19.8" },
    ],
    image: "/assets/generated/player-generic1.dim_300x300.jpg",
  },
  {
    id: 11,
    name: "David Warner",
    nationality: "Australia",
    flag: "🇦🇺",
    role: "Batsman",
    stats: [
      { label: "Test Avg", value: "44.6" },
      { label: "Centuries", value: "26" },
      { label: "T20 SR", value: "142" },
    ],
    image: "/assets/generated/player-rohit.dim_300x300.jpg",
  },
  {
    id: 12,
    name: "Angelo Mathews",
    nationality: "Sri Lanka",
    flag: "🇱🇰",
    role: "All-rounder",
    stats: [
      { label: "Test Avg", value: "44.1" },
      { label: "ODI Wkts", value: "228" },
      { label: "Centuries", value: "14" },
    ],
    image: "/assets/generated/player-generic1.dim_300x300.jpg",
  },
];
