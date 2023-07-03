import './App.css';
import FileList from './components/FileList';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div class="table-container" style={{ backgroundColor: 'grey' }} >
      <Container className="container">
        <FileList />
      </Container>
    </div>
  );
}

export default App;
