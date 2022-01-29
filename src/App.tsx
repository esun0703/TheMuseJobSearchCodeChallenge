import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';
import SearchResultsDisplay from './components/SearchResultsDisplay';
import { JobSearchProvider } from './contexts/JobContext';

function App() {
  return (
    <JobSearchProvider>
      <section className="App">
        <div className='container'>
          <SearchBar/>
          <SearchResultsDisplay/>
        </div>
      </section>
    </JobSearchProvider>
  );
}

export default App;
