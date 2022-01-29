import React, { useContext } from 'react';
import './SearchFilterDisplay.scss';
import { Context } from '../contexts/JobContext';

const SearchFilterDisplay = () => {
    const JobContext = useContext(Context)
    // @TODO update key when api hooked up
    return (
        <section className='search-filter-display'></section>
    )
}

export default SearchFilterDisplay;