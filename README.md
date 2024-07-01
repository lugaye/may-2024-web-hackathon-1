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

Happy hacking and we look forward to seeing your amazing portfolio websites!

**Solution**

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Francis Ennin">
    <title>Francis Ennin Profile</title>
</head>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background: repeating-linear-gradient(
                45deg,
                pink,
                pink 10px,
                white 10px,
                white 20px
            );
        }
        header, footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1em 0;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            overflow: hidden;
        }
        .profile, .portfolio, .skills, .experience, .education {
            background: rgb(143, 184, 143);
            margin: 20px 0;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            margin-top: 0;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        ul li {
            background: #f4f4f4;
            margin: 5px 0;
            padding: 10px;
            border-left: 5px solid #333;
        }
        a {
            color: #333;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }

        
    </style>
</head>
<body>

<header>
    <h1>FRANCIS ENNIN</h1>
</header>

<div class="container">
    <section class="profile">
        <h2>About Me</h2>
        <p>My name is Francis Ennin, born and bread in Ghana, West Africa. 
            A proud young African in my early thirties. I hold a bachelors 
            and Masters in Mathematics Education from the University of 
            Education, Winneba and currently a third year PhD Student from 
            the Maharaja Sayajirao University of Baroda in India. Though a 
            Mathematics Educator, my interest in programming stems from the 
            ability to utilize programming languages for data analyses. 
            This has led me to the journey of diving deep into software 
            enginering and I am enjoying that currently. I enjoy reading, 
            football, researh and programing to come out with solutions.</p>

            <img src="https://s3.fr-par.scw.cloud/files.powerlearnproject.org/lms/production/images/HpYwGBjAtCHTvlrU" alt="Profile Picture" width="400" height="200" align="right">
        </p>
        <p><a href="enninsolve@gmail.com" target="_blank" ><b>email: enninsolve@gmail.com</b></a></p>
        <p><a href="+917698154565" style="font-size:24px ;""><b>Call me!</b></a></p>
        <p><marquee behavior="scroll" direction="left" ><b>I am a call away, let's discuss that GOAL</b></marquee></p>
        <p>
        
        <p>
            <a href="https://www.linkedin.com/in/francis-ennin-1581582b2" target="_blank"><b>LinkedIn</b></a> |
            <a href="https://github.com/serious1989" target="_blank"><b>GitHub</b></a>
        </p>
    </section>

    <section class="portfolio">
        <h2>Portfolio</h2>
        <ul>
            <li>
                <h3>Project Title</h3>
                <p>Here are a couple of completed research projects that have been publihed in reputable journals
                    for your perusal.
                </p>
                <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Francis+Ennin&oq=fra" target="_blank">
                    google scholar(F Ennin) <link rel="stylesheet" href=""></a> | 
                <a href="https://github.com/repository-link" target="_blank">Repository</a>
            </li>
           
        </ul>
    </section>

    <section class="skills">
        <h2>Skills</h2>
        <h3>Technical Skills</h3>
        <ul>
            <li>An IB Mathematics Educator</li>
            <li>A researcher</li>
            <li>A data analist</li>
            <li>A bigginer level software engineer</li>
            <li><p>I am trained and certified IB Mathematics Educators with over seven (7) years
                experience in the teaching of Mathematics at all levels of education 
                (primary,secondary and tertiary). I am as well a researcher and can assist you in
                all research related activities from conceptualization, drafting, data collection,
                analyses to conclusion of any research project.
            </p></li>
        </ul>
        <h3>Non-Technical Skills</h3>
        <ul>
            <li>Communication: The ability to convey information clearly and effectively, both verbally and in writing.</li>
            <li>Teamwork: The ability to work collaboratively with others to achieve common goals.</li>
            <li>Problem-solving: The capacity to identify issues, analyze problems, and find effective solutions.</li>
            <li>Time Management: The skill to manage one's time efficiently to meet deadlines and prioritize tasks.</li>
            <li>Adaptability: The ability to adjust to new conditions, changes, and challenges.</li>
            <li> Critical Thinking: The ability to think clearly and rationally, understanding the logical connection between ideas.</li>
        </ul>
    </section>

    <section class="experience">
        <h2>Experience</h2>
        <ul>
            <li>
                <h3>Mathematics Teacher</h3>
                <p>A subject teacher, teaching Mathematics and responsible for evaluating students
                    and monitoring their progess.
                </p>
            </li>
           
        </ul>
    </section>

    <section class="education">
        <h2>Education</h2>
        <ul>
            <li>
                <h3>Degree at Institution Name</h3>
                <p>University of Education, Winneba: Bachelors and Masters degree in Mathematics Education.</p>
                <p>IB Professional Training: Diploma in IB Mathematics Education</p>   
                <p>University of London: Online Certificate in Data Science:K Means Clustering</p>
                <p>The Maharaja Sayajirao University of Baroda: PhD in Education (Ongoing)</p>
                <p>Power Learn Project Academy: Training in Software engineering</p>
            </li>
            
        </ul>
    </section>
</div>

<footer>
    <p>&copy; 2024 Francis Ennin. All rights reserved.</p>
</footer>

</body>
</html>




