// JS Libraries
import React, {useEffect} from 'react';
//import {Link} from 'react-router-dom';
import axios from 'axios';


const AllProjects = (props) => {
    const {projectList, setProjectList} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/projects")
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setProjectList(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {
                projectList.map((project, index) => {
                    <div key={index}>
                        {/* For some reason this is not working? */}
                        {/*console.log(project)*/}
                        {console.log(project._id)}
                        {console.log(project.name)}
                        <h3>
                            {/*<Link to={`/${project._id}`}>*/}
                                {project.name}
                            {/*</Link>*/}
                        </h3>
                        {console.log(project.projectType)}
                        <p>{project.projectType}</p>
                        {console.log(project.info)}
                        <p>{project.info}</p>
                        {/*<Link to={project.link}>LINK</Link>*/}
                    </div>
                })
            }
        </div>
    );
};


export default AllProjects;
