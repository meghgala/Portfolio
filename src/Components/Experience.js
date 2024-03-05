import React from 'react';

const Projects = () => {
  return (
    <div>
    <h1 className='projectHeading'>My <b>Experiences</b></h1>
    <div className='experience'>
        <div className='experienceBox'>
            <img className='photo' src="https://www.alstom.com/sites/alstom.com/files/styles/large_media_cover/public/2022/01/07/NT_EXTER_Double_Train_Norway.png?h=16a6ccf5&itok=-UPRbwyQ" alt="Project display" />
            <div class="experienceText">
                <b><h3>Alstom Rail Sweden</h3></b>
                <h4>Software Engineer, Master Thesis (Feb 2023 - October 2023)</h4><br />
                <ul>
                    <li>This <b> <a href='https://uu.diva-portal.org/smash/record.jsf?pid=diva2:1809096'>thesis</a></b> aimed to expedite UML and SysML diagram generation from natural language requirements, enhancing requirements engineering speed and accuracy.</li>
                    <li>Automated software accelerated basic UML use case diagram creation time by 87% compared to manual efforts.</li>
                    <b><li>Technologies: Python (Flask, Spacy, Scikit, Matplotlib)</li></b>
                </ul>
            </div>
        </div>
        <div className='experienceBox'>
            <img className='photo' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg" alt="Project display" />
            <div class="experienceText">
                <b><h3>Huber.AI</h3></b>
                <h4>Software Developer Intern (December 2021 - Jan 2022)</h4><br />
                <ul>
                <li>Was responsible for scraping data efficiently from websites and storing it in a NoSQL database using Python (Beautifp Soup library)</li>
                <li>This made it possible for the business to acquire more trustworthy and beneficial data and boost the efficiency of its internal
                    resume parser.</li>
                </ul>
            </div>
        </div>
        <div className='experienceBox'>
            <img className='photo' src="https://viestories.com/wp-content/uploads/2022/05/f-72.jpg" alt="Project display" />
            <div class="experienceText">
            <b><h3>CampK12</h3></b>
                <h4>Coding Tutor (April 2021 - July 2021)</h4><br /><ul>
                <li>Taught coding and object-oriented programming to students aged 12-18, enabling them to build fundamental programming skills and basic data structure algorithms.</li>
                <li>Conducted webinars with more than 100 participants.</li>
                <b><li>Technologies: Javascript, Python, C.</li></b></ul>
            </div>
        </div>
        <div className='experienceBox'>
            <img className='photo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoSBlbaXYDpTEiMCoUKvaNLUozfVW1pvXkw&usqp=CAU" alt="Project display" />
            <div class="experienceText">
            <b><h3>Happy Bubbles (LIVE YOUR DREAM FOUNDATION)</h3></b>
                <h4>Web Developer Internship (June 2019 - December 2019)</h4><br /><ul>
                <li>Redesigned the website "Happy Bubbles" by enhancing its functionality, using PHP and SQL, and incorporating a user-friendly control panel for administrators.</li>
                <li>Decreased the page load times by 20%, improving user engagement.</li>
                <li>Technologies: Frontend(Bootstrap, JavaScript), Backend(PHP, SQL)</li></ul>
            </div>
        </div>
        <div className='experienceBox'>
            <div class="experienceText">
            <b><h3>M-INTELLECT GLOBAL</h3></b>
                <h4>Intern (June 2019 - July 2019)</h4><br /><ul>
                <li>In order to give insightful information that supports business decisions, the internship involved project development using Python GUI, machine learning algorithms and data analysis.</li>
                <li>The client firms were able to conduct a market analysis before releasing an application on the Google Playstore thanks to the results obtained utilizing time series analysis, trend prediction, and data visualization.</li> </ul>
            </div>
        </div>
    </div>
</div>

  )
}

export default Projects