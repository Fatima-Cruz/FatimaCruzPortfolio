import React, { Component } from "react";
import "../ProjectsPage/ProjectsPage.css";
import back from "../../assets/back.svg";
import projectsData from './projects.json';



// export default class ProjectsPage extends React.Component {
//   render() {
//     return (
//       <div>
//            <div class="goBack">
//       <a href="/">
//         <img src={back} alt="back arrow" />
//         <p>Go back to Home Page</p></a>
//     </div>

const projectsList = projectsData.projects;

export default class Projects extends React.Component {
constructor() {
    super()
    this.state =
        { Projects: projectsList, click: false }
}

projectsSort = (category) => {
    if (category === '') {
        this.setState({ Projects: projectsList })
        return;
    }

    const projects = projectsList.filter((item) => {
        return String(item.category) === category
    })

    const filteredProjects = [...projects];
    this.setState({ Projects: filteredProjects })
};
render() { 
    return(
        <div>
        <div class="goBack">
      <a href="/">
        <img src={back} alt="back arrow" />
        <p>Go back to Home Page</p></a>
    </div>
    <h1> <bold>&#10085;</bold> My Projects</h1>
        <br />
        <div className="flexbox_container">

{/* <div className="filtering">
<h3>Filter By: </h3>

    <p onClick={ () => 
        this.projectsSort("Sale")}> Sale
        </p>
        <p onClick={() => 
        this.projectsSort("Limited")}> Limited Edition
        </p>
    <p onClick={() => 
        this.projectsSort("Charity")}> Charity
        </p>
       
</div> */}


{this.state.Projects.map((item, id) => {
    return (
        <section className="flexbox_item" key={id}>
         
        
            <h2 className="project_header">{item.name}</h2>

            <a href={item.link}>
                <img className="projectImg" 
                    src={item.image} 
                    alt="project" />
                    </a>

            <p className="project_description">{item.description} 
            
            <div className="buttons">
            <a href={item.github}>
            <button class="viewButton"> Github</button>
            </a>

            <a href={item.website}>
            <button class="viewButton"> Website</button>
            </a>
            </div>

            </p>
        </section>
    )

})
}
</div>
</div>

    )}};