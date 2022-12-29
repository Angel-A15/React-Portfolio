import React from 'react';
import PersonalPic from '../../assets/images/profile.jpg';

function About() {
    return(
        <div className='bio' class="mt-5">

            <div className='bio'>
                <img className="photo" src={PersonalPic} alt="latino with long black hair, glasses, and with a moustache and goatee"/>
            </div>
            
            <div className='bio cardo col-9'>

                <h1 className='header'>
                    About Me
                </h1>

                <h3 className='card-body mt-4 mb-3'>
                    <p> Hello, my name is Angel Aguilar and I'm a full stack web developer from central Texas.
                        I've always had an admiration for computer programming and having friends who were already
                        in the field increased my curiosity for the field. So I have them to partially thank 
                        for aspiring me to take the risk and initaite the action to make an interest into my career.
                    </p>

                    <p>    I recieved a strong background, experience, and understanding for this field by attending
                        the University of Texas at San Antonio. I graduated with certification for full stack web development
                        by the end of the year in 2022. Languages and some concepts that I have become proficient include: 
                        Node.Js, MongoDb, React, Express, Restful API's, Progressive Web Applications, GraphQl, and
                        Computer Science.
                    </p>
                    <p>  When away from the computer, I enjoy spending my time by exercising, attending concerts, spending time with friends
                        and family, and relaxing at home.
                    </p>
                </h3>

            </div>

        </div>
    )
}

export default About;