
<button id="toggleProjectsBtn">Show Projects</button>

<div class="projects-container">
    <div class="project project-hidden">
        <div class="project-image">
            <img src="{{ asset('images/prj1.jpeg') }}" alt="Project Image" class="project-image">
        </div>
        <div class="project-details">
            <h3>AI</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas
                fermentum. Nullam nec nunc nec nunc.
            </p>
            <a href="" target="_blank"><i class='bx bx-link-alt'></i></a>
        </div>

        <div class="additional-images">

            <img src="{{ asset('images/prj1_1.jpeg') }}" alt="Additional Image" class="additional-image">

        </div>

    </div>

</div>

<script>
    var button = document.getElementById('toggleProjectsBtn');
    var projects = document.querySelectorAll('.project');

    button.addEventListener('click', function() {
        projects.forEach(function(project) {
            project.classList.toggle('project-hidden');
            if (project.classList.contains('project-hidden')) {
                project.style.display = 'none';
            } else {
                project.style.display = 'block';
            }
        });

        var buttonText = button.innerText.trim().toLowerCase();
        button.innerText = buttonText === 'show projects' ? 'Hide Projects' : 'Show Projects';
    });
</script>
