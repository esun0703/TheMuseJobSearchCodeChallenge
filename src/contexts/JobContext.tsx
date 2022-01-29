import React, { useState, createContext, FC} from 'react';

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

    const searchJobTitle = async (jobTitle : string) => {
        const result = [{title: 'this is a job for now'}, {title: 'this is another job'}, {title: 'this is a job for now'}, {title: 'this is another job'}]
        setJobsList(result);
    }
    
    return (
        <Context.Provider value={{jobsList, searchJobTitle}}>
            {children}
        </Context.Provider>
    )
}