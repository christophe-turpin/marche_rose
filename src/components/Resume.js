import React, { Component } from 'react';
import HTML5 from '../images/HTML5.png';
import CSS3 from '../images/CSS3.png';
import WordPress from '../images/WordPress.png';
import JavaScript from '../images/JavaScript.png'
import Reactl from '../images/React.png'
import Node from '../images/Node.png'
import MySQL from '../images/MySQL.png'
import Python from '../images/Python.png'
import Swift from '../images/Swift.png'
import Scrum from '../images/Scrum.png'
import MAP from '../images/map.png'

export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let stateId = ""
    const mappi = MAP
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Le parcours</span></h1>
            </div>
      <br/>
            <div className="nine columns main-col">
              <div className="row item">
                  <div className="five columns">
                    <img id='map' src={mappi} alt='mapParcours'/>
                  </div>
              <div className="four columns">
                {resumeData.parcours && resumeData.parcours.map(item =>
                    <p className="info">{item}</p>
                    )}
                  </div>
              </div>
                  <h3>Les différentes étapes :</h3>
                  <ul>
                    {resumeData.arrets.map(item =>
                      <li>{item}</li>
                      )}
                  </ul>  
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Expériences</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


        <div id={stateId} className="row skill">
          
            <div className="three columns header-col">
               <h1><span>Compétences</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

            
   				<div className="skillsList">

                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    const img = item.skillname === 'HTML5' ? HTML5 : item.skillname === 'CSS3' ? CSS3 : item.skillname === 'WordPress' ? WordPress : item.skillname === 'JavaScript' ? JavaScript : item.skillname === 'React' ? Reactl : item.skillname === 'Node' ? Node : item.skillname === 'MySQL' ? MySQL : item.skillname === 'Python' ? Python : item.skillname === 'Swift' ? Swift : item.skillname === 'Scrum' ? Scrum : ""
                    return(
                      <div className="skillItem">
                        <img className='skilllogo' src={img} alt={item.skillname} />
                        <p align='center'>{item.skillname}</p>
                      </div>
                    )
                  })
                }
            

   				</div>

   			</div>
         </div>

      </section>
    );
  }
}