import React, { useState, useEffect } from 'react';
import '../css/Project.css';
import { motion, useInView } from 'framer-motion';
import { FaLink, FaGithub } from 'react-icons/fa';


const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://profileanbackend-f2gyccbpdabpbha8.eastus2-01.azurewebsites.net/api/project');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);


  return (
    <div className='projectsContainer'>
      <div className='projects'>
        {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className={`project ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='picProject'>
                <img src={`${process.env.PUBLIC_URL}/img/projectImg1.jpg`} alt="Project Image" />
              </div>
              <div className='descProject'>
                <div className='descProjectContainer'>
                  <h3 className='projectName'>{project.name}</h3>
                  <p className='projectDescription'>{project.description}</p>
                  <div className='projectLinks'>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <FaLink />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Projects;