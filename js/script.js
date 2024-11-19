document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#menu-bars');
    const header = document.querySelector('header');
    const cursor1 = document.querySelector('.cursor-1');
    const cursor2 = document.querySelector('.cursor-2');
    const toggleSwitch = document.querySelector('.toggle-switch');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        header.classList.toggle('active');
    };

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        header.classList.remove('active');
    };

    window.onmousemove = (e) => {
        const { pageX, pageY } = e;
        cursor1.style.top = `${pageY}px`;
        cursor1.style.left = `${pageX}px`;
        cursor2.style.top = `${pageY}px`;
        cursor2.style.left = `${pageX}px`;
    };

    document.querySelectorAll('a').forEach(link => {
        link.onmouseenter = () => {
            cursor1.classList.add('active');
            cursor2.classList.add('active');
        };

        link.onmouseleave = () => {
            cursor1.classList.remove('active');
            cursor2.classList.remove('active');
        };
    });

    toggleSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', toggleSwitch.checked);
    });
});


document.getElementById('dark-light-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
