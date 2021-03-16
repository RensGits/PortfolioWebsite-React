import React from 'react';
import '../ProjectItem/ProjectItem.css';

function ProjectItem () {
    return (
        <div className = 'projectItem'>
            <div className = 'projectBlockLeft'>
                <p className = 'projectTitle'></p>
                <p className = 'projectDescription'></p>
                <p className = 'projectCategory'></p>
            </div>
            <div className = 'projectBlockRight'></div>

        </div>


    );
}

export default ProjectItem;