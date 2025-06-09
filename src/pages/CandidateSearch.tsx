import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import { Candidate } from "../interfaces/Candidate.interface";
import React from "react";

type Styles = {
  card: React.CSSProperties;
  cardArticle: React.CSSProperties;
  cardImg: React.CSSProperties;
  cardH3: React.CSSProperties;
  cardP: React.CSSProperties;
  buttonContainer: React.CSSProperties;
  button: React.CSSProperties;
};

const styles: Styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  cardArticle: {
    marginBottom: "20px",
    textAlign: "center",
  },
  cardImg: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  cardH3: {
    fontSize: "1.5em",
    marginBottom: "10px",
  },
  cardP: {
    fontSize: "1em",
    color: "#555",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "1em",
    cursor: "pointer",
  },
};

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCandidate() {
      try {
        const username = "octocat"; // Replace with desired GitHub username
        const user = await searchGithubUser(username);
        const candidateInfo = await searchGithub();

        console.log("user", user);
        console.log("candidateInfo", candidateInfo);

        setCandidate({
          id: user.id,
          avatar_url: user.avatar_url,
          name: user.name || "Unknown",
          company: candidateInfo.company || user.company || "Independent",
          location: candidateInfo.location || user.location || "Not specified",
          bio: candidateInfo.bio || user.bio || "No bio available",
          email: candidateInfo.email || user.email || "Not available",
        });
      } catch (error) {
        console.error("Error fetching candidate:", error);
      }
    }
    fetchCandidate();
  }, []);

  const handleAccept = () => {
    setStatusMessage(`✅ Candidate ${candidate?.name} Accepted!`);
    setCandidate(null);
  };

  const handleReject = () => {
    setStatusMessage(`❌ Candidate ${candidate?.name} Rejected.`);
    setCandidate(null);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Candidate Search</h1>

      {statusMessage && (
        <p style={{ fontSize: "1.2em", color: "#008000" }}>{statusMessage}</p>
      )}

      {candidate ? (
        <div style={styles.card}>
          {/* Profile picture */}
          <article style={styles.cardArticle}>
            <img
              src={candidate.avatar_url}
              alt="Candidate"
              style={styles.cardImg}
            />
            <h3 style={styles.cardH3}>
              {candidate.name || "No Name Provided"}
            </h3>
            <p style={styles.cardP}>
              <strong>Location:</strong> {candidate.location}
            </p>
            <p style={styles.cardP}>
              <strong>Email:</strong> {candidate.email}
            </p>
            <p style={styles.cardP}>
              <strong>Company:</strong> {candidate.company}
            </p>
            <p style={styles.cardP}>
              <strong>Bio:</strong> {candidate.bio}
            </p>
          </article>

          {/* Action buttons */}
          <div style={styles.buttonContainer}>
            <button
              style={{ ...styles.button, backgroundColor: "red" }}
              onClick={handleReject}
            >
              Reject ❌
            </button>
            <button
              style={{ ...styles.button, backgroundColor: "green" }}
              onClick={handleAccept}
            >
              Accept ✅
            </button>
          </div>
        </div>
      ) : (
        <p>Loading candidate data or selection complete...</p>
      )}
    </div>
  );
};

export default CandidateSearch;
