import React, { useContext } from 'react';
import './SearchResultsDisplay.scss';
import { Context } from '../contexts/JobContext';

const SearchResultsDisplay = () => {
    const JobContext = useContext(Context)

    return (
        <ul className={'search-results'}>
            {JobContext?.jobsList.map((singleJob) => {
                return <li key={singleJob.title}>{singleJob.title}</li>
            })}
        </ul>
    )
}

export default SearchResultsDisplay;