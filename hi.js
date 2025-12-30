// Animate timeline items when they come into view
        document.addEventListener('DOMContentLoaded', function() {
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1
            });
            
            timelineItems.forEach(item => {
                observer.observe(item);
            });
            
            // Initialize countdown
            updateCountdown();
            setInterval(updateCountdown, 1000);
            
            // Message functionality
            const messageForm = document.getElementById('save-message');
            const messageTitle = document.getElementById('message-title');
            const messageContent = document.getElementById('message-content');
            const displayTitle = document.getElementById('display-title');
            const displayContent = document.getElementById('display-content');
            
            // Load saved message if exists
            const savedMessage = localStorage.getItem('specialMessage');
            if (savedMessage) {
                const messageObj = JSON.parse(savedMessage);
                displayTitle.textContent = messageObj.title;
                displayContent.textContent = messageObj.content;
            }
            
            messageForm.addEventListener('click', function() {
                const messageObj = {
                    title: messageTitle.value,
                    content: messageContent.value
                };
                
                localStorage.setItem('specialMessage', JSON.stringify(messageObj));
                displayTitle.textContent = messageObj.title;
                displayContent.textContent = messageObj.content;
                
                // Show confirmation
                alert('Your special message has been saved!');
            });
        });
        
        // Countdown function - Update with your reunion date
        function updateCountdown() {
            // Set your reunion date here (YYYY, MM-1, DD)
            const reunionDate = new Date(2023, 11, 25);
            const now = new Date();
            
            const diff = reunionDate.getTime() - now.getTime();
            
            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                
                document.getElementById('days').textContent = days.toString().padStart(2, '0');
                document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            } else {
                // Countdown completed
                document.querySelector('.countdown-title').textContent = "We're Together Again!";
                document.querySelector('.countdown-container').innerHTML = `
                    <div style="font-size: 1.5rem; color: rgb(189, 142, 82);">
                        The wait is over - enjoy every precious moment together! 💕
                    </div>
                `;
            }
        }
        
        // Heart animation on click
        document.addEventListener('click', function(e) {
            if (e.target.tagName !== 'BUTTON') {
                const heart = document.createElement('div');
                heart.style.position = 'fixed';
                heart.style.left = e.clientX + 'px';
                heart.style.top = e.clientY + 'px';
                heart.style.width = '20px';
                heart.style.height = '20px';
                heart.style.background = 'var(--accent-color)';
                heart.style.borderRadius = '0 5px 5px 0';
                heart.style.transform = 'rotate(45deg)';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '9999';
                
                // Create pseudo elements for heart shape
                heart.style.setProperty('--before', `
                    content: '';
                    position: absolute;
                    top: -10px;
                    left: 0;
                    width: 20px;
                    height: 20px;
                    background: var(--accent-color);
                    border-radius: 50%;
                `);
                
                heart.style.setProperty('--after', `
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -10px;
                    width: 20px;
                    height: 20px;
                    background: var(--accent-color);
                    border-radius: 50%;
                `);
                
                document.body.appendChild(heart);
                
                // Animation
                const animation = heart.animate([
                    { transform: 'rotate(45deg) scale(1)', opacity: 1 },
                    { transform: 'rotate(45deg) scale(3)', opacity: 0 }
                ], {
                    duration: 1000,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
                });
                
                animation.onfinish = () => heart.remove();
            }
        });

         const mediaItems = document.querySelectorAll(".gallery-item img, .gallery-item video");
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popupContent");
    const popupClose = document.getElementById("popupClose");

    mediaItems.forEach(item => {
      item.addEventListener("click", () => {
        popup.style.display = "flex";

        // Clear old content
        popupContent.innerHTML = "";

        if (item.tagName === "IMG") {
          let img = document.createElement("img");
          img.src = item.src;
          popupContent.appendChild(img);
        } else if (item.tagName === "VIDEO") {
          let video = document.createElement("video");
          video.src = item.src;
          video.controls = true;
          video.autoplay = true;
          popupContent.appendChild(video);
        }
      });
    });

    popupClose.addEventListener("click", () => {
      popup.style.display = "none";
      popupContent.innerHTML = "";
    });

    // Close popup when clicking outside the content
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
        popupContent.innerHTML = "";
      }
    });
    

    