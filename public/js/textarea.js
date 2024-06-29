const textareas = document.querySelectorAll('textarea');

textareas.forEach(textarea => {
    // Initial adjustment to height
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';

    // Adjust height dynamically on input
    textarea.addEventListener('input', e => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    });
});
