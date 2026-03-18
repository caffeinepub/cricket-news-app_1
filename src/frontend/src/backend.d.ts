import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Player {
    id: bigint;
    name: string;
    role: string;
    team: string;
    nationality: string;
    stats: {
        runs: bigint;
        average: number;
        wickets: bigint;
    };
}
export interface NewsArticle {
    id: bigint;
    title: string;
    source: string;
    summary: string;
    imageUrl: string;
    timestamp: Time;
    category: string;
}
export interface CricketTeam {
    id: bigint;
    country: string;
    name: string;
    wins: bigint;
    losses: bigint;
    matchesPlayed: bigint;
    flagUrl: string;
    ranking: bigint;
}
export type Time = bigint;
export interface MatchScore {
    id: bigint;
    matchType: string;
    status: string;
    team1: string;
    team2: string;
    venue: string;
    date: Time;
    score1: bigint;
    score2: bigint;
}
export interface backendInterface {
    addCricketTeam(id: bigint, name: string, country: string, flagUrl: string, ranking: bigint, matchesPlayed: bigint, wins: bigint, losses: bigint): Promise<void>;
    addMatchScore(id: bigint, team1: string, team2: string, score1: bigint, score2: bigint, status: string, matchType: string, venue: string, date: Time): Promise<void>;
    addNewsArticle(id: bigint, title: string, summary: string, imageUrl: string, category: string, source: string): Promise<void>;
    addPlayer(id: bigint, name: string, team: string, role: string, nationality: string, runs: bigint, wickets: bigint, average: number): Promise<void>;
    getAllCricketTeams(): Promise<Array<CricketTeam>>;
    getAllMatchScores(): Promise<Array<MatchScore>>;
    getAllNewsArticles(): Promise<Array<NewsArticle>>;
    getAllPlayers(): Promise<Array<Player>>;
    getNewsByCategory(category: string): Promise<Array<NewsArticle>>;
    getNewsById(id: bigint): Promise<NewsArticle>;
}
