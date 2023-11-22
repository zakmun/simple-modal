// Get elements from the HTML
let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// Event listener for the "Open" button
openBtn.addEventListener("click", function(){
    // Display the modal by setting its style to "block"
    modalContainer.style.display = "block";
});

// Event listener for the "Close" button
closeBtn.addEventListener("click", function(){
    // Hide the modal by setting its style to "none"
    modalContainer.style.display = "none";
});

// Event listener for clicks outside the modal
window.addEventListener("click", function(e){
    // Check if the click occurred outside the modal
    if (e.target === modalContainer) {
        // Hide the modal if the click was outside
        modalContainer.style.display = "none";
    }
});
