let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Slide functionality
next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

// Modal functionality for images
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeButton = document.getElementsByClassName("close")[0];

document.querySelectorAll('.see-more[data-image]').forEach(button => {
    button.addEventListener('click', function () {
        const imgSrc = this.getAttribute('data-image');
        modal.style.display = "block";
        modalImage.src = imgSrc;
        captionText.innerHTML = this.previousElementSibling.previousElementSibling.innerHTML;
    });
});

closeButton.addEventListener('click', function () {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Video overlay functionality
const videoOverlay = document.getElementById('videoOverlay');
const bgVideo = document.getElementById('bgVideo');
const closeVideoButton = document.getElementById('closeVideo');

// Handle "View" button for videos
document.querySelectorAll('.see-more[data-video]').forEach(button => {
    button.addEventListener('click', function () {
        const videoSrc = this.getAttribute('data-video');
        videoOverlay.style.display = 'block';
        bgVideo.src = videoSrc;
        bgVideo.play(); // Auto-play video when overlay is shown
    });
});

// Close the video overlay
closeVideoButton.addEventListener('click', function () {
    videoOverlay.style.display = 'none';
    bgVideo.pause(); // Pause video when closing overlay
    bgVideo.currentTime = 0; // Reset video to the beginning
});

// Close video overlay when clicking outside the video content
window.addEventListener('click', function (event) {
    if (event.target === videoOverlay) {
        videoOverlay.style.display = 'none';
        bgVideo.pause();
        bgVideo.currentTime = 0;
    }
});
