// TODO: Create an interface for the Candidate objects returned by the API

export interface Candidate {
    id: number;
    avatar_url: string;
    name: string; // Optional, as not all users may have a name
    company: string; // Optional, as not all users may have a company
    location: string; // Optional, as not all users may have a location
    bio: string; // Optional, as not all users may have a bio
    email: string; // Optional, as not all users may have an email
}
// Additional fields can be added as needed based on the API response
// Example of how to use this interface in a component
// import { Candidate } from '../interfaces/Candidate.interface';
// const CandidateCard: React.FC<{ candidate: Candidate }> = ({ candidate }) => {
//   return (
//     <div>
//       <img src={candidate.avatar_url} alt={candidate.login} />
//       <h2>{candidate.name || candidate.login}</h2>
//       <p>{candidate.bio}</p>
//       <p>Company: {candidate.company}</p>
//       <p>Location: {candidate.location}</p>
//       <p>Public Repos: {candidate.public_repos}</p>
//       <p>Followers: {candidate.followers}</p>
//       <p>Following: {candidate.following}</p>
//       <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
//         View Profile
//       </a>
//     </div>
//   );
// };
// This interface can be used to type the response from the GitHub API when searching for candidates.