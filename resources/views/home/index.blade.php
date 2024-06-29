<!DOCTYPE html>
<html lang="en">

<head>
    @include('home.head')

</head>

<body class="darkmode">
    <header>
        <div class="container">
            <button id="darkModeToggle" class="dark-mode-toggle">
                <i class="fas fa-sun"></i>
            </button>
            <div class="profile">
                <img src="{{ asset('images/pic.png') }}" alt="Zoe Miller">
                <h1>Alloys Amasakha</h1>
                <p>Web & Mobile App Developer</p>
                <div class="social-links">
                    <a href="https://www.linkedin.com/in/alloys-amasakha-681886255/" target="_blank"><img src="{{ asset('images/linkedin.png') }}" alt="LinkedIn"></a>
                    <a href="https://github.com/Alloys9" target="_blank"><img src="{{ asset('images/github.png') }}" alt="GitHub"></a>
                    <a href="https://x.com/alloysworld" target="_blank"><img src="{{ asset('images/x.png') }}" alt="Twitter"></a>
                </div>
            </div>
        </div>
    </header>

    <nav class="navbar">
        <div class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul id="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

@include('home.about')

@include('home.services')

@include('home.projects')

@include('home.education')

 @include('home.skills')

 @include('home.contact')

    <footer>
        <div class="container">
            <p>&copy; 2024 Alloys Amasakha. All rights reserved.</p>
        </div>
    </footer>

    <div id="overlay" class="overlay">
        <div class="overlay-content">
            <span class="closebtn" id="closebtn">&times;</span>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>

    <script src="{{ asset('js/index.js') }}"></script>
    <script src="{{ asset('js/textarea.js') }}"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>


    <script>
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('lightmode');
            const icon = darkModeToggle.querySelector('i');
            icon.classList.toggle('fa-sun');
            icon.classList.toggle('fa-moon');
        });
    </script>

</body>

</html>
