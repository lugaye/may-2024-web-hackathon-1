# WEB HACKATHON - 1
Welcome to the Portfolio Website Hackathon! We are excited to have you join us in creating amazing portfolio websites. Below are the guidelines to ensure a smooth and productive hackathon experience.

## Introduction
The goal of this hackathon is to build a one page portfolio website that showcases your skills, projects, and professional experience. This is an excellent opportunity to create or enhance your personal brand and demonstrate your abilities to potential employers or clients.

## Project Requirements
### Personal Information: 
Include sections for your name, a brief bio, contact information, and links to your social media profiles (e.g., LinkedIn, GitHub).

### Portfolio: 
Showcase your projects with descriptions, images, and links to live demos or repositories.

### Skills: 
List your technical and non-technical skills.

### Experience: 
Detail your professional experience, including job titles, companies, and descriptions of your roles.

### Education: 
Include your educational background.

## Submission Guidelines
Repository Setup: Fork this repository and create a new branch for your project.
Commit Messages: Use clear and descriptive commit messages to document your progress.
Pull Request: Submit a pull request to the main branch once you have completed your project. Include a brief description of your website and any additional notes.
Deadline: All submissions must be made by monday 1st July 12pm EAT

## Judging Criteria
Submissions will be judged based on the following criteria:

Design: Visual appeal, creativity, and user interface design.
Functionality: Responsiveness, performance, and interactivity.
Content: Clarity, completeness, and presentation of information.
Originality: Unique features, innovative approaches, and personal touches.
Code Quality: Cleanliness, organization, and use of best practices.

Happy hacking and we look forward to seeing your amazing portfolio websites
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marlyn Ameyo's Portfolio</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <h1>Marlyn Ameyo</h1>
        <p>Aspiring Software Developer</p>
    </header>
    <nav>
        <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <section id="about">
        <h2>About Me</h2>
        <p>Hello! I'm Marlyn Ameyo, an aspiring software developer passionate about technology and eager to learn. I'm currently building my skills in HTML, CSS, and JavaScript, and this portfolio is my first step in showcasing my journey.</p>
    </section>
    <section id="skills">
        <h2>Skills</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Problem-Solving</li>
            <li>Continuous Learning</li>
        </ul>
    </section>
    <section id="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out to me!</p>
        <p>Email: marylynkayla@gmail.com</p>
        <p>Phonenumber:+254759422102</p>
        <p><a href="https://github.com/Marlyn113">github</a></p>
    </section>
    <footer>
        <p>&copy; 2024 Marlyn Ameyo</p>
    </footer>
</body>
</html>

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 2em 0;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
}

nav ul li {
    margin: 0 1em;
}

nav ul li a {
    text-decoration: none;
    color: #4CAF50;
    font-weight: bold;
}

section {
    padding: 2em;
    text-align: center;
}

h2 {
    color: #4CAF50;
}

footer {
    background-color: #f1f1f1;
    text-align: center;
    padding: 1em 0;
    position: fixed;
    width: 100%;
    bottom: 0;
}

