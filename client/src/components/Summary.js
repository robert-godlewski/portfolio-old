import React from 'react';
import {Link} from 'react-router-dom';


const Summary = () => {
    return (
        <div>
            <article>
                {/* details and summary tags is only if I want to use a dropdown menue. */}
                <details>
                    <summary>
                        <h3>ABOUT:</h3>
                    </summary>
                    <p>
                        I came from a non-traditional background in the tech industry. 
                        I am a music producer and received my AAAS degree in Music Technology. 
                        I still on the side do some music work due to high interest in music, especially in classical and rock genres. 
                        I also have about 10 years of experience now working in the civil engineering industry laboratory and support staff.
                    </p>
                    <p>
                        My interest in computer science initially started when Minecraft first came out (Alpha version and Beta 1.0!) and learned an early version of Java (my knowledge in current Java is outdated fyi) to make my own mods with my older brother and buddies.
                        Initially didn't as well and then decided to pivot from and try out a couple of other industries. 
                        While creating my music production (under Comet of Dreams) website using WIX I decided it was a lot of fun and re-sparked my interest in coding. 
                        I wanted to learn the ins and outs of how a website and program works so that I can create and think of new projects to develop. 
                        I then decided that it was time to take online programming courses which scaled my interest in coding.
                    </p>
                    <p>
                        I eventually soon after joined Coding Dojo's bootcamp to learn more and build my network of computer programmers to develop problem-solving code. 
                        I learned 2 stacks in 6 months (Flask/Python and MERN) to build several projects and continued to learn more by solving problems.
                    </p>
                </details>
            </article>
            <article>
                <h3>SKILL SETS:</h3>
                <ul>
                    <li>LANGUAGES: JavaScript, Python3, CSS3, HTML5</li>
                    <li>FRONT END: React.js, AJAX, JSON, RESTful APIs, Bootstrap</li>
                    <li>BACK END: OOP, Flask, Django, Node.js, Express.js</li>
                    <li>DATABASES: SQL (MySQL, SQLite), NoSQL (MongoDB) Mongoose</li>
                </ul>
            </article>
            <article>
                <p>
                    Curios about coding projects that I am a part of?
                    <Link to={"https://github.com/robert-godlewski"}> GITHUB</Link>
                </p>
            </article>
        </div>
    );
};


export default Summary;
