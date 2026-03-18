import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  // Types
  type NewsArticle = {
    id : Nat;
    title : Text;
    summary : Text;
    imageUrl : Text;
    category : Text;
    timestamp : Time.Time;
    source : Text;
  };

  type MatchScore = {
    id : Nat;
    team1 : Text;
    team2 : Text;
    score1 : Nat;
    score2 : Nat;
    status : Text; // live/completed/upcoming
    matchType : Text;
    venue : Text;
    date : Time.Time;
  };

  type CricketTeam = {
    id : Nat;
    name : Text;
    country : Text;
    flagUrl : Text;
    ranking : Nat;
    matchesPlayed : Nat;
    wins : Nat;
    losses : Nat;
  };

  type Player = {
    id : Nat;
    name : Text;
    team : Text;
    role : Text; // batsman/bowler/allrounder/wicketkeeper
    nationality : Text;
    stats : {
      runs : Nat;
      wickets : Nat;
      average : Float;
    };
  };

  // Custom comparison module for NewsArticle
  module NewsArticle {
    public func compare(article1 : NewsArticle, article2 : NewsArticle) : Order.Order {
      Nat.compare(article1.id, article2.id);
    };
  };

  // Custom comparison module for MatchScore
  module MatchScore {
    public func compare(score1 : MatchScore, score2 : MatchScore) : Order.Order {
      Nat.compare(score1.id, score2.id);
    };
  };

  // Custom comparison module for CricketTeam
  module CricketTeam {
    public func compare(team1 : CricketTeam, team2 : CricketTeam) : Order.Order {
      Nat.compare(team1.id, team2.id);
    };
  };

  // Custom comparison module for Player
  module Player {
    public func compare(player1 : Player, player2 : Player) : Order.Order {
      Nat.compare(player1.id, player2.id);
    };
  };

  // Persistent Storage
  let newsArticles = Map.empty<Nat, NewsArticle>();
  let matchScores = Map.empty<Nat, MatchScore>();
  let cricketTeams = Map.empty<Nat, CricketTeam>();
  let players = Map.empty<Nat, Player>();

  // News Article Management
  public shared ({ caller }) func addNewsArticle(id : Nat, title : Text, summary : Text, imageUrl : Text, category : Text, source : Text) : async () {
    let article : NewsArticle = {
      id;
      title;
      summary;
      imageUrl;
      category;
      timestamp = Time.now();
      source;
    };
    newsArticles.add(id, article);
  };

  public query ({ caller }) func getAllNewsArticles() : async [NewsArticle] {
    newsArticles.values().toArray().sort();
  };

  public query ({ caller }) func getNewsByCategory(category : Text) : async [NewsArticle] {
    newsArticles.values().toArray().filter(
      func(article) {
        article.category == category;
      }
    );
  };

  // Match Score Management
  public shared ({ caller }) func addMatchScore(id : Nat, team1 : Text, team2 : Text, score1 : Nat, score2 : Nat, status : Text, matchType : Text, venue : Text, date : Time.Time) : async () {
    let match : MatchScore = {
      id;
      team1;
      team2;
      score1;
      score2;
      status;
      matchType;
      venue;
      date;
    };
    matchScores.add(id, match);
  };

  public query ({ caller }) func getAllMatchScores() : async [MatchScore] {
    matchScores.values().toArray().sort();
  };

  // Cricket Team Management
  public shared ({ caller }) func addCricketTeam(id : Nat, name : Text, country : Text, flagUrl : Text, ranking : Nat, matchesPlayed : Nat, wins : Nat, losses : Nat) : async () {
    let team : CricketTeam = {
      id;
      name;
      country;
      flagUrl;
      ranking;
      matchesPlayed;
      wins;
      losses;
    };
    cricketTeams.add(id, team);
  };

  public query ({ caller }) func getAllCricketTeams() : async [CricketTeam] {
    cricketTeams.values().toArray().sort();
  };

  // Player Management
  public shared ({ caller }) func addPlayer(id : Nat, name : Text, team : Text, role : Text, nationality : Text, runs : Nat, wickets : Nat, average : Float) : async () {
    let player : Player = {
      id;
      name;
      team;
      role;
      nationality;
      stats = {
        runs;
        wickets;
        average;
      };
    };
    players.add(id, player);
  };

  public query ({ caller }) func getAllPlayers() : async [Player] {
    players.values().toArray().sort();
  };

  // Helper function to get specific news article by ID
  public query ({ caller }) func getNewsById(id : Nat) : async NewsArticle {
    switch (newsArticles.get(id)) {
      case (null) { Runtime.trap("News article not found") };
      case (?article) { article };
    };
  };
};
