import profile from './media/profile.jpg'
import './style.css';
const Main = ()=>{
    return(
        <>
            <div className="asosiy">
                <div className="left_side">
                    <img src={profile} width="100%" alt="" />
                    <div className="left_text">
                    <h3>Profile</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nesciunt dolore qui dolores eius officiis necessitatibus tempore alias po dolorum quos minus quod mollitia saepe aut? Aspernatur et, quasi laudantium aperiam ullam, aut laboriosam id omnis beatae, voluptas provident quidem. Deserunt eligendi asperiores esse rem enim non ea totam maxime voluptatum numquam omnis corporis voluptates reiciendis reprehenderit magni provident, ab animi.</p>
                    <hr />

                    <h3>Address</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio rerum quia impedit! Beatae, perspiciatis sint tempore tempora, ipsa aspernatur, dolore asperiores dicta molestias eum nemo at quidem illo libero!</p>
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
                            <progress id="html" value="32" max="100"> 32% </progress>
                        </div>
                        <div className="skill_name">
                            <label for="css">CSS</label>
                            <progress id="css" value="32" max="100"> 32% </progress>
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
                        <span>2011-2016</span>
                        <div className="main_skill_left">
                            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolores cumque fuga! Recusandae accusantium distinctio tenetur ea, alias aliquam architecto culpa facilis voluptatibus exercitationem sequi, cupiditate perspiciatis. Adipisci, iure sequi?</p>
                        </div>
                    </div>
                    <div className="main_skills">
                        <span>2011-2016</span>
                        <div className="main_skill_left">
                            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolores cumque fuga! Recusandae accusantium distinctio tenetur ea, alias aliquam architecto culpa facilis voluptatibus exercitationem sequi, cupiditate perspiciatis. Adipisci, iure sequi?</p>
                        </div>
                    </div>
                    <div className="main_skills">
                        <span>2011-2016</span>
                        <div className="main_skill_left">
                            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolores cumque fuga! Recusandae accusantium distinctio tenetur ea, alias aliquam architecto culpa facilis voluptatibus exercitationem sequi, cupiditate perspiciatis. Adipisci, iure sequi?</p>
                        </div>
                    </div>

                    <hr />  
                    <h2 className='main_title'>Experience</h2>

                    <div className="main_skills">
                        <span>2011-2016</span>
                        <div className="main_skill_left">
                            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolores cumque fuga! Recusandae accusantium distinctio tenetur ea, alias aliquam architecto culpa facilis voluptatibus exercitationem sequi, cupiditate perspiciatis. Adipisci, iure sequi?</p>
                        </div>
                    </div>

                    <hr />  
                    <h2 className='main_title'>Other skills</h2>

                    <div className="main_skills">
                        <span>2011-2016</span>
                        <div className="main_skill_left">
                            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolores cumque fuga! Recusandae accusantium distinctio tenetur ea, alias aliquam architecto culpa facilis voluptatibus exercitationem sequi, cupiditate perspiciatis. Adipisci, iure sequi?</p>
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