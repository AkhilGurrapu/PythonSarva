document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const leftColumn = document.querySelector('.left-column');
    const rightColumn = document.querySelector('.right-column');
    const resizer = document.getElementById('resizer');

    let isResizing = false;

    // Set initial widths
    setColumnWidths(60);

    resizer.addEventListener('mousedown', function(e) {
        isResizing = true;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', stopResizing);
    });

    function handleMouseMove(e) {
        if (!isResizing) return;

        const containerRect = container.getBoundingClientRect();
        let newLeftWidth = e.clientX - containerRect.left;
        let leftPercentage = (newLeftWidth / containerRect.width) * 100;

        // Ensure minimum width for both columns
        if (leftPercentage < 20) leftPercentage = 20;
        if (leftPercentage > 80) leftPercentage = 80;

        setColumnWidths(leftPercentage);
    }

    function stopResizing() {
        isResizing = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', stopResizing);
    }

    function setColumnWidths(leftPercentage) {
        leftColumn.style.width = `${leftPercentage}%`;
        rightColumn.style.width = `${100 - leftPercentage}%`;
    }
});