import React from 'react';
import PersonalPic from '../../assets/images/profile.jpg';

function About() {
    return(
        <div id="bioSec">

            <div id='photoSec'>
                <img className="photo" src={PersonalPic} alt="latino with long black hair, glasses, and with a moustache and goatee"/>
            </div>
            
            <div className='bio mt-5'>

                <h1 className='header text-center'>
                    About Me
                </h1>

                <h3 className='card-body text-dark mt-3'>
                    <p> 
                        Hello, my name is Angel Aguilar and I'm a full stack web developer from central Texas.
                        I've always had an admiration for computer programming and having friends who were already
                        in the field increased my curiosity for it. I thank them and my family for pushing 
                        me to take the initaitive from turning my interests into a passionate career choice
                        for me.
                    </p>

                    <p> 
                        I gained a strong background and understanding for this field by attending the University 
                        of Texas at San Antonio coding bootcamp. I graduated with certification for full stack web 
                        development in the end of the year of 2022. Training from this boot camp has made me 
                        efficient in skills such as: Node.Js, MongoDb, React, Express, Restful API's, Progressive 
                        Web Applications, GraphQl, Computer Science, and more.
                    </p>
                    <p> 
                        When away from the computer; I enjoy spending time by exercising, attending concerts, 
                        spending time with friends and family, and relaxing at home.
                    </p>
                </h3>

            </div>

        </div>
    )
}

export default About;