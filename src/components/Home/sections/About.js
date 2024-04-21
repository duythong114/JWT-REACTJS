import './About.scss'
import React from 'react';

const About = (props) => {
    return (
        <div className='about-section-container'>
            <div className='section-container'>
                <div className='section-title-footer section-header'>
                    <div className='header-title'>VIDEO ABOUT</div>
                </div>
                <div className='section-content-footer'>
                    <div className='content-video'>
                        <iframe
                            width="1250"
                            height="703"
                            src="https://www.youtube.com/embed/AI7dOlAp-iE"
                            title="2024 Ferrari SF90 Spider Assetto Fiorano - Interior and Exterior Walkaround"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About