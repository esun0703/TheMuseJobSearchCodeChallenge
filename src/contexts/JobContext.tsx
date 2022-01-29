import React, { useState, createContext, FC} from 'react';
import Axios from 'axios';

interface SingleJob {
    title: string,
}
interface ContextDefault {
    jobsList: SingleJob[], // update this when Ik the type
    searchJobTitle: (jobTitle: string) => void,
}
export const Context = createContext<ContextDefault | null>(null);


export const JobSearchProvider: FC = ({children}) => {
    // const [jobTitle, setJobTitle] = useState('');
    const [jobsList, setJobsList] = useState<SingleJob[]>([]);
    const [jobSearchPage, setjobSearchPage] = useState<number>(0);

    const searchJobTitle = async (jobTitle : string) => {
        try {
            const {data} = await Axios.get(`https://www.themuse.com/api/public/jobs?category=${'Accounting'}&page=${jobSearchPage}`);
            console.log({data})
            const result = [{title: 'this is a job for now'}, {title: 'this is another job'}, {title: 'this is a job for now'}, {title: 'this is another job'}]
            setJobsList(result);
            setjobSearchPage(jobSearchPage + 1)
        } catch(e) {
            console.error(e)
        }
    }
    
    return (
        <Context.Provider value={{jobsList, searchJobTitle}}>
            {children}
        </Context.Provider>
    )
}