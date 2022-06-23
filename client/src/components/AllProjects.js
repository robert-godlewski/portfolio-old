// JS Libraries
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
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
                    return (
                        <div key={index}>
                            {/*console.log(project)*/}
                            {console.log(project._id)}
                            <h3>
                                {/*<Link to={`/${project._id}`}>*/}
                                    {project.name}
                                {/*</Link>*/}
                            </h3>
                            <p>{project.projectType}</p>
                            {project.streamingLink ? <iframe src={project.streamingLink} width="70%" height="280" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> : null}
                            <p>{project.info}</p>
                            {project.link ? <Link to={project.link}>LINK</Link> : null}
                        </div>
                    )
                })
            }
        </div>
    );
};


export default AllProjects;
