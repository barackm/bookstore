import BooksForm from '../containers/BooksForm';
import Navbar from './navbar';
import BooksList from '../containers/BooksList';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
