import type React from "react";

type Styles = {
  card: React.CSSProperties;
  cardArticle: React.CSSProperties;
  cardImg: React.CSSProperties;
  cardH3: React.CSSProperties;
  cardP: React.CSSProperties;
};
type CardProps = {
  styles: Styles;
};

const Nav = ({ styles }: CardProps) => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div style={styles.card}>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/candidate-search">Candidate Search</a>
          </li>
        </ul>
      </nav>
      <h1>Candidate Search App</h1>
    </div>
  );
};

export default Nav;
