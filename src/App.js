import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movie from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <MovieList movies={ movie } />
      </section>
    </div>
  );
}

export default App;
