import React from 'react';

const Projects = () => {
  return (
    <div>
    <h1 className='projectHeading'>My <b>Education</b></h1>
    <div className='experience'>
        <div className='experienceBox'>
            <a href='https://www.uu.se/'><img className='experiencePhoto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Uppsala_University_2023.jpg/500px-Uppsala_University_2023.jpg" alt="Project display" /></a>
            <div class="experienceText">
              <b>  <h3>Uppsala University (Sweden)</h3> </b>
                <h4>Master's in Computer Science (2021-2024)</h4><br />
                <p>I completed my master's in computer science from Uppsala University in January 2024. Uppsala University (Swedish: Uppsala universitet) is a public research university in Uppsala, Sweden. Founded in 1477, it is the oldest university in Sweden and the Nordic countries. Following are some of the courses that higlight my studies at this university : </p>
                <ul>
                    <li>Advanced Software Design</li>
                    <li>Requirements in Agile Development</li>
                    <li>Data Engineering</li>
                    <li>Complex IT Systems</li>
               </ul>
            </div>
        </div>
        <div className='experienceBox'>
            <a href='https://mu.ac.in/#about'>
            <img className='experiencePhoto' src="https://mum.digitaluniversity.ac/user/pages/images/slides/slide1.jpg" alt="Project display" /> </a>
            <div class="experienceText">
            <b>  <h3>University of Mumbai (India)</h3> </b>
                <h4>Bachelor's in Computer Science (2017-2020)</h4><br />
                <p>The University of Mumbai is a public state university in Mumbai. I had completed my bachelor's in this university in 2020 when the Covid pandameic was active. Following are some of the courses that higlight my studies at this university : </p>
                <ul>   
                    <li>Data Structures</li>
                    <li>Analysis of Algorithms</li>
                    <li>Discrete Structures</li>
                    <li>Software Engineering</li>
                    <li>Data Science</li>
                </ul>
            </div>
        </div>
        <div className='experienceBox'>
            <a href='https://sbmp.ac.in/Vision%20and%20%20Mission/M__71'>
            <img className='experiencePhoto' src="https://sbmp.ac.in/Common/Uploads/MenuTemplate/2_Menu_SBMP.jpg" alt="Project display" /> </a>
            <div class="experienceText">
            <b>    <h3>Undergraduate Diploma from Mumbai University (India)</h3> </b>
                <h4>Diploma in Comuputer Science (2014-2017)</h4> <br />
                <p>I received my undergraduate diploma in computer science from Shri Bhagubhai Mafatlal Polytechnic which is an autonomous institute affiliated with Mumbai university.  </p>
            </div>
        </div>
    </div>
</div>

  )
}

export default Projects