import React from 'react';
const About = ({ image , about }) => {
    return (
        <div> 
            <aside>
                <img src={image? image: "https://via.placeholder.com/215"} alt="blog logo"/>
            </aside>
            <p>{about}</p>
        </div>
    );
}

export default About;
