import React from 'react'
import './Header.css'

function Home() {

  const mySkills = ["HTML", "CSS", "JavaScript", "React.js", 
                    "Tailwind CSS", "Python", "Photoshop", "AWS"
  ]

  return (
    <div className='p-3 flex overflow-x-scroll break-words contentBox'>
      <img src="./src/assets/logo9.jpg" alt="home page image" className='w-1/2 mr-4' />
      <div>
        <h1 className='text-5xl text-wrap pb-3 text-orange-200'>
          Greetings! I'm Rose
        </h1>
        <p className='text-lg'>
        I'm thrilled to share a little about myself as a fellow student with big dreams of becoming a front-end developer. At 26 years young, I'm fueled with determination and a passion for creating captivating user experiences through web development.
        </p>
        <br />

        <p className='text-lg'>
          Front-end development is an ever-evolving field, and I am committed to staying up-to-date with the latest trends and technologies. My current skill sets include {mySkills.join(",  ")}. Yet, I fully understand the importance of continuous learning and strive to expand my knowledge base through online resources, courses, and hands-on projects.
        </p>

        <br />
        <p className='text-lg'>
          Currently, I embark on this exhilarating journey to find my first front-end internship, I am fueled by an unyielding motivation to learn, grow, and seize every opportunity that comes my way. Welcome to any further contact and connect to know more about me!
        </p>

      </div>
      
    </div>

  )
}

export default Home