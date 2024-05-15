import React from 'react'


function About() {
    const usedSkills = ["HTML", "CSS", "JavaScript", "React.js", 
    "Tailwind CSS",
  ]

  return (
  <div className='p-3 flex overflow-x-scroll break-words contentBox'>
    <img src="./src/assets/logo25.gif" alt="home page image" className='w-1/4 mr-4' />
    <div>
    <h1 className='text-7xl text-sky-300'>About Me</h1>
    <p className='text-lg m-auto'>
    Hi! I'm an enthusiastic and dedicated student with a strong passion for front-end development and an unwavering desire to secure my first internship opportunity. As a diligent learner, I am committed to honing my skills in HTML, CSS, and JavaScript to create captivating user experiences. This is my first personal website through {usedSkills.join(", ")} to demostrate my understanding of react router library. I spent two days designing and polishing it. Hopefully, you will love it as I do. Welcome any further connect and comments. <span><img className='w-5 inline-block' src="./src/assets/logo1.png" alt="" /></span>
    </p>
    </div>

  </div>

  )
}

export default About