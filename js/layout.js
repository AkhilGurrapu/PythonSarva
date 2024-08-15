document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('resizable-container');
    const divider = document.getElementById('divider');
    const conceptsSection = document.getElementById('concepts-section');
    const codeSection = document.getElementById('code-section');

    let isDragging = false;

    divider.addEventListener('mousedown', function(e) {
        isDragging = true;
        e.preventDefault();
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;

        const containerRect = container.getBoundingClientRect();
        const newPosition = e.clientX - containerRect.left;
        
        const minWidth = 200; // Minimum width for each section
        if (newPosition > minWidth && containerRect.width - newPosition > minWidth) {
            conceptsSection.style.flexBasis = `${newPosition}px`;
            codeSection.style.flexBasis = `${containerRect.width - newPosition}px`;
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

    // Sidebar toggle functionality
    const toggleTopicsBtn = document.getElementById('toggle-topics');
    const topicsSidebar = document.getElementById('topics-sidebar');
    const previewSchemaBtn = document.getElementById('preview-schema');
    const schemaSidebar = document.getElementById('schema-sidebar');

    toggleTopicsBtn.addEventListener('click', () => {
        topicsSidebar.classList.toggle('active');
    });

    previewSchemaBtn.addEventListener('click', () => {
        schemaSidebar.classList.toggle('active');
    });
});