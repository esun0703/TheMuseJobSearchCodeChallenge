import React, { useState, createContext, FC} from 'react';
import Axios from 'axios';

interface Location {
    name: string,
}
interface Catagory {
    name: string,
}
interface Level {
    name: string,
    short_name: string,
}

interface Ref {
    landing_page: string,
}

interface Company {
    id: number,
    short_name: string,
    name: string,
}
interface Job {
    contents: string,
    name: string,
    type: string,
    publication_date: string,
    short_name: string,
    model_type: string,
    id: number,
    locations: Location[],
    categories: Catagory[],
    levels: Level[],
    tags: any[],
    refs: Ref,
    company: Company,
}
interface ContextDefault {
    jobsList: Job[], // update this when Ik the type
    searchJobTitle: (jobTitle: string) => void,
}
export const Context = createContext<ContextDefault | null>(null);


export const JobSearchProvider: FC = ({children}) => {
    const [jobsList, setJobsList] = useState<Job[]>([]);
    const [jobSearchPageNumber, setjobSearchPage] = useState<number>(0);

    const searchJobTitle = async (jobTitle : string) => {
        try {
            const {data} = await Axios.get(`https://www.themuse.com/api/public/jobs?category=${'Accounting'}&page=${jobSearchPageNumber}`);
            console.log({data})
            const result = [
                {
                    "contents": "<p><b> Sr. Manager, Software Development </b> <br><br>Come work for the technology leader in travel! The Travel Partners Group is seeking an Engineering Manager to work on our supply partner tools. We're looking for an individual who enjoys working on web applications and wants to build modern, fast, easy-to-use user interfaces for our partners around the world.<br><br>Our team has a strong DevOps philosophy and our engineers are involved in every aspect of the application lifecycle. We release software to the cloud multiple times a day and closely measure how our applications perform, so we can continuously improve our features and our underlying platform.<br><br>Our business is global, bringing millions of travelers and suppliers together in our marketplace. Our team builds the systems that allow lodging partners to join that marketplace, driving growth for our company.<br><br>If you're a motivated technologist with experience leading teams and delivering highly-scalable web applications, then we want to hear about it!<br><br><b><b>What you'll do:</b></b><br><br><ul><li>Act as a spokesperson for software engineering best-practices - researching and recommending frameworks and architectural/code design patterns<br></li><li>Advocate for operational excellence (such as unit testing, establishing SLAs, programming for resiliency and scalability)<br></li><li>Anticipate and recognize bottlenecks in work processes between teams and makes suggestions for ongoing improvement<br></li><li>Partner with the product-teams to have a clear understanding of how the technology stack is tied to business outcomes and our bottom line<br></li><li>Gain insight into how customers utilize technology for their advantage and apply this knowledge to suggest areas for improvement<br></li><li>Bridge the gap in discussions between technology and non-technology personnel. Report on team status and listen for suggestions to improve lagging project work<br></li><li>Encourage and support education and professional development of your team<br></li></ul><br><br><b><b>Who you are: </b></b><br><br><ul><li>Bachelor's degree or Masters in a related technical field; or related professional experience<br></li><li>An established people leader who manages a team of engineers using an agile, iterative development framework like Scrum<br></li><li>Experience taking a lead role in developing complex software systems that have successfully been delivered to customers<br></li><li>You have acted as a mentor to both individual contributors and managers on your own teams<br></li><li>You have defined team goals and how they fit a business need across multiple teams working together - working as an enabler for multiple teams to then achieve these goals<br></li><li>Experience in working with the product team you have delivered and influenced a product roadmap<br></li><li>Experience with web platform technologies including Java, Spring, MVC, REST web services, Javascript frameworks, HTML and CSS<br></li><li>Experience leading applications deployed to a cloud service provider like AWS or Azure<br></li></ul><br><br><b>About Expedia Group</b> <br><br>Expedia Group (NASDAQ: EXPE) powers travel for everyone, everywhere through our global platform. Driven by the core belief that travel is a force for good, we help people experience the world in new ways and build lasting connections. We provide industry-leading technology solutions to fuel partner growth and success, while facilitating memorable experiences for travelers. Expedia Group's family of brands includes: Brand Expedia®, Hotels.com®, Expedia® Partner Solutions,Vrbo®, Egencia®, trivago®, Orbitz®, Travelocity®, Hotwire®, Wotif®,ebookers®,CheapTickets®, Expedia Group™ Media Solutions, Expedia Local Expert®, CarRentals.com™, and Expedia Cruises™.<br><br><b>About Expedia Group </b> <br><br> Expedia Group (NASDAQ: EXPE) powers travel for everyone, everywhere through our global platform. Driven by the core belief that travel is a force for good, we help people experience the world in new ways and build lasting connections. We provide industry-leading technology solutions to fuel partner growth and success, while facilitating memorable experiences for travelers. Expedia Group's family of brands includes: Brand Expedia®, Hotels.com®, Expedia® Partner Solutions, Vrbo®, Egencia®, trivago®, Orbitz®, Travelocity®, Hotwire®, Wotif®, ebookers®, CheapTickets®, Expedia Group™ Media Solutions, Expedia Local Expert®, CarRentals.com™, and Expedia Cruises™. <br><br>© 2021 Expedia, Inc. All rights reserved. Trademarks and logos are the property of their respective owners. CST: 2029030-50 <br><br>Expedia iscommittedto creating an inclusive workenvironmentwith a diverse workforce. All qualified applicants will receive consideration for employment without regard to race, color, religion, gender, gender identity or expression, sexual orientation, national origin, genetics, disability, age, or veteran status. This employer participates in E-Verify. The employer will provide the Social Security Administration (SSA) and, if necessary, the Department of Homeland Security (DHS) with information from each new employee's I-9 to confirm work authorization.</p>",
                    "name": "Senior Manager, Software Development Engineering",
                    "type": "external",
                    "publication_date": "2021-04-27T11:43:30Z",
                    "short_name": "senior-manager-software-development-engineering-be52d2",
                    "model_type": "jobs",
                    "id": 5711629,
                    "locations": [
                      {
                        "name": "Austin, TX"
                      }
                    ],
                    "categories": [
                      {
                        "name": "Software Engineer"
                      }
                    ],
                    "levels": [
                      {
                        "name": "Senior Level",
                        "short_name": "senior"
                      }
                    ],
                    "tags": [],
                    "refs": {
                      "landing_page": "https://www.themuse.com/jobs/vrbo/senior-manager-software-development-engineering-be52d2"
                    },
                    "company": {
                      "id": 185,
                      "short_name": "vrbo",
                      "name": "Vrbo"
                    }
                  },
                  {
                    "contents": "<p><b>Reporting &amp; Analytics Senior Analyst </b> <br><br>Are you looking to join a team at the forefront of travel technology development? The Expedia, Inc. Data, AI, Platforms and Systems (\"DAPS\") organization is seeking a motivated individual to join our Business Operations team. As the Reporting &amp; Analytics Senior Analyst, you will help DAPS to meet goals and identify, and potential issues. We are looking for a high-energy, motivated analyst to facilitate outstanding outcomes via data-driven analysis and influence across a diverse large-scale organization to ensure critical objectives are met. Bring your innovation, partnership, and determination, and join us as we continue to bring the world within reach!<br><br><b>What you'll do:</b> <br><ul><li>Influence decisions through superb analytics to support portfolio investments, monitor progress against goals and enable transparency across the portfolio<br></li><li>Collaborate with business partners cross-functionally across product, program, and engineering to craft improvements in reporting, analytics, and processes to ensure success, with a focus on continuous improvement, efficiency, and operational excellence<br></li><li>Provide general analytical support for initiatives and special projects, as required, by the business<br></li><li>Enable preparation of events and business meetings that offer leadership an opportunity to check in on progress to business goals<br></li></ul><br><br><b>Who you are:</b> <br><ul><li>4 - 7 years of experience in a finance or business operations role, excellent analytical skills, and love to dig into data be it through Tableau, Excel, or other methods<br></li><li>High level of intellectual curiosity that helps you quickly pick up technical concepts, apply a data-driven and passion for enabling goal attainment<br></li><li>Ability to adapt to changing circumstances and achieve results efficiently and timely with a variety of business partners<br></li><li>Phenomenal teammate and communicator with a history of facilitating positive partnerships<br></li><li>Experienced balancing multiple tasks and projects at a time, prioritizing workload optimally, and resourcefulness in a dynamic, complex environment<br></li></ul><br><br>*LI-KW1<br><br><b>About Expedia Group </b> <br><br> Expedia Group (NASDAQ: EXPE) powers travel for everyone, everywhere through our global platform. Driven by the core belief that travel is a force for good, we help people experience the world in new ways and build lasting connections. We provide industry-leading technology solutions to fuel partner growth and success, while facilitating memorable experiences for travelers. Expedia Group's family of brands includes: Brand Expedia®, Hotels.com®, Expedia® Partner Solutions, Vrbo®, Egencia®, trivago®, Orbitz®, Travelocity®, Hotwire®, Wotif®, ebookers®, CheapTickets®, Expedia Group™ Media Solutions, Expedia Local Expert®, CarRentals.com™, and Expedia Cruises™. <br><br>© 2021 Expedia, Inc. All rights reserved. Trademarks and logos are the property of their respective owners. CST: 2029030-50 <br><br>Expedia iscommittedto creating an inclusive workenvironmentwith a diverse workforce. All qualified applicants will receive consideration for employment without regard to race, color, religion, gender, gender identity or expression, sexual orientation, national origin, genetics, disability, age, or veteran status. This employer participates in E-Verify. The employer will provide the Social Security Administration (SSA) and, if necessary, the Department of Homeland Security (DHS) with information from each new employee's I-9 to confirm work authorization.</p>",
                    "name": "Reporting & Analytics Senior Analyst",
                    "type": "external",
                    "publication_date": "2021-04-27T11:43:30Z",
                    "short_name": "reporting-analytics-senior-analyst-9afc0c",
                    "model_type": "jobs",
                    "id": 5711632,
                    "locations": [
                      {
                        "name": "Austin, TX"
                      }
                    ],
                    "categories": [],
                    "levels": [
                      {
                        "name": "Senior Level",
                        "short_name": "senior"
                      }
                    ],
                    "tags": [],
                    "refs": {
                      "landing_page": "https://www.themuse.com/jobs/vrbo/reporting-analytics-senior-analyst-9afc0c"
                    },
                    "company": {
                      "id": 185,
                      "short_name": "vrbo",
                      "name": "Vrbo"
                    }
                  },
            ]
            setJobsList(result);
            setjobSearchPage(jobSearchPageNumber + 1)
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