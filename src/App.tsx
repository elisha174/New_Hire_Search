import { Outlet } from 'react-router-dom';
import  Nav  from './components/Nav';

type Styles = {
  card: React.CSSProperties;
  cardArticle: React.CSSProperties;
  cardImg: React.CSSProperties;
  cardH3: React.CSSProperties;
  cardP: React.CSSProperties;
};

const styles: Styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  cardArticle: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  cardImg: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  cardH3: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  cardP: {
    fontSize: '1em',
    color: '#555',
  },
};


function App() {
  return (
    <>
      <Nav styles={styles} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
