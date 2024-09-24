document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    const dataContent = document.getElementById('data-content');
    const reloadBtn = document.getElementById('reload-btn');

    function simulateLoading() {
        // Show loader
        loader.classList.remove('hidden');
        content.classList.add('hidden');

        // Simulate data fetching
        setTimeout(function() {
            // Hide loader
            loader.classList.add('hidden');
            
            // Show content with fade-in effect
            content.classList.remove('hidden');
            content.classList.add('fade-in');
            
            // Update content
            dataContent.textContent = "Data has been loaded successfully!";
        }, 3000); // 3 seconds delay
    }

    // Initial load
    simulateLoading();

    // Reload button functionality
    reloadBtn.addEventListener('click', function() {
        content.classList.remove('fade-in');
        simulateLoading();
    });
});