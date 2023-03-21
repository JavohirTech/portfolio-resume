import profile from './media/profile.jpg'
import './style.css';
const Main = ()=>{
    return(
        <>
            <div className="asosiy">
                <div className="left_side">
                    <img src={profile} width="100%" alt="" />
                    <div className="main_head_center">
                        <span className="name_pro">Javohir</span>
                        <span className="surname_pro">G'ulomjonov</span>
                    </div>
                    <div className="left_text">
                    <h3>About myself</h3>
                    <p>
                        I am a Frontend developer with 2 years of experience, who is interested in new knowledge, happy to learn new things, and loves to share his knowledge with others.
                        <br /><br />
                        <b>Always use your maximum strength.</b>
                    </p>
                    <hr />

                    <h3>Address</h3>
                    <p>160501 <br />
                        From <a href="https://en.wikipedia.org/wiki/Uzbekistan">Uzbekistan</a> | <br />
                        Namangan region |
                        Pop district
                    </p>
                    <hr />

                    <h3>Contact</h3>
                    <span>Phone</span>
                    <a href="tel:+998943067661">+99894 306 76 61</a><br /> <br />
                    <span>Email</span>
                    <a href="mailto:starkcoders@gmail.com">starkcoders@gmail.com</a>
                    <hr />

                    <h3>Skills</h3>
                    <div className="skills">
                        <div className="skill_name">
                            <label for="html">HTML</label>
                            <progress id="html" value="100" max="100"> 100% </progress>
                        </div>
                        <div className="skill_name">
                            <label for="css">CSS</label>
                            <progress id="css" value="100" max="100"> 100% </progress>
                        </div>
                        <div className="skill_name">
                            <label for="js">JavaScript</label>
                            <progress id="js" value="100" max="100"> 100% </progress>
                        </div>
                        <div className="skill_name">
                            <label for="reactjs">ReactJS</label>
                            <progress id="reactjs" value="100" max="100"> 100% </progress>
                        </div>
                        <div className="skill_name">
                            <label for="figma">Figma</label>
                            <progress id="figma" value="100" max="100"> 100% </progress>
                        </div>
                    </div>

                    <h3>Language</h3>
                    <div className="skills">
                        <div className="skill_name">
                            <label for="eng">English</label>
                            <progress id="eng" value="60" max="100"> 60% </progress>
                        </div>
                        <div className="skill_name">
                            <label for="uzb">Uzbek | Native |</label>
                            <progress id="uzb" value="100" max="100"> 100% </progress>
                        </div>
                    </div>


                    </div>
                </div>


                <div className="main_side">
                    <div className="main_head">
                        <span className="name_pro">Javohir</span>
                        <span className="surname_pro">G'ulomjonov</span>
                    </div>
                    <hr className='head_line' />

                    <h2 className='main_title'>Education</h2>
                    <div className="main_skills">
                        <span>2017 - 2020</span>
                        <div className="main_skill_left">
                            <h2>Direction of fine and applied arts</h2>
                            <p>
                                <i>School of Music and Art for Children and Teenagers No. 8. Pop district, Namangan region</i> <br />
                                There I studied fine art and applied art, working with modern technologies in art.</p>
                        </div>
                    </div>

                    <div className="main_skills">
                        <span>2016 - 2020</span>
                        <div className="main_skill_left">
                            <h2>Mathematics and exact sciences</h2>
                            <p>
                                <i>State specialized boarding school No. 16, Pop district, Namangan region</i><br />
                                I graduated from high school with excellent grades
                            </p>
                        </div>
                    </div>
                    <div className="main_skills">
                        <span>2020 - Now</span>
                        <div className="main_skill_left">
                            <h2>Bachelor of Management</h2>
                            <p><i>Namangan Institute of Engineering and Technology </i>Correspondence Education I have been studying at the Faculty of Management since 2020</p>
                        </div> 
                    </div>
                    
                    

                    <hr />  
                    <h2 className='main_title'>Experience</h2>

                    <div className="main_skills">
                        <span>2021 - 2023</span>
                        <div className="main_skill_left">
                            <h2>Front-End Instructor | Full-Time</h2>
                            <p>
                                <i style={{color: 'grey'}}>IT-PARK UZBEKISTAN</i> <br /><br />
                                <ul>
                                    <li>Upgrade CSS skills</li>
                                    <li>RWD</li>
                                    <li>JavaScript</li>
                                    <li>PHP <sup><small>Beginner</small></sup></li>
                                    <li>MySQL <sup><small>Beginner</small></sup></li>
                                </ul>
                                </p>
                        </div>
                    </div>

                    <div className="main_skills">
                        <span>2021 - Now</span>
                        <div className="main_skill_left">
                            <h2>Front-End Developer | Freelancer</h2>
                            <p>
                                <i style={{color: 'grey'}}>Virtual Group</i> <br /><br />
                                <ul>
                                    <li>ReactJS</li>
                                    <li>JavaScript</li>
                                    <li>Figma</li>
                                    <li>Git</li>
                                </ul>
                                </p>
                        </div>
                    </div>

                    <hr />  
                    <h2 className='main_title'>Other skills</h2>

                    <div className="main_skills">
                        <span>2021 - Now</span>
                        <div className="main_skill_left">
                            <h2>I studied in my spare time</h2>
                            <p><i>Namangan region, Pop district</i><br /> <br />
                            <ul>
                                    <li>Learning & Teaching</li>
                                    <li>Hardware Computer Master</li>
                                    <li>Management</li>
                                    <li>Problem Solving</li>
                                    <li>Team Work</li>
                                </ul>
                            </p>
                        </div> 
                    </div>


                    <h2 className='main_title'>Interests</h2>
                    <div className="main_interests">
                        <div className="interest">
                        <i class="fa-solid fa-fish-fins"></i>
                            <span>Fishing</span>
                        </div>
                        <div className="interest">
                        <i class="fa-solid fa-location-dot"></i>
                            <span>Traveling</span>
                        </div>
                        <div className="interest">
                        <i class="fa-solid fa-circle-play"></i>
                            <span>Watching film</span>
                        </div>
                        <div className="interest">
                        <i class="fa-brands fa-youtube"></i>
                            <span>Blogging</span>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Main