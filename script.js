// MODAL CONTROLS
function openModal(id) {
    document.getElementById(id).style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto";
}

// TOGGLE LOGIN VS SIGNUP
function toggleAuth(type) {
    const login = document.getElementById('loginForm');
    const signup = document.getElementById('signupForm');
    if(type === 'signup') {
        login.style.display = 'none';
        signup.style.display = 'block';
    } else {
        login.style.display = 'block';
        signup.style.display = 'none';
    }
}

// FAKE PROCEED LOGIC
function fakeAuth(mode) {
    if(mode === 'signup') {
        const name = document.getElementById('signName').value;
        const phone = document.getElementById('signPhone').value;
        
        if(!name || !phone) {
            alert("Please fill in your name and mobile number!");
        } else {
            alert("Welcome to the Family, " + name + "! Account created successfully.");
            closeModal('authModal');
            // Reset fields
            document.querySelectorAll('.auth-input').forEach(i => i.value = "");
        }
    } else {
        const user = document.getElementById('loginUser').value;
        if(!user) {
            alert("Please enter your Email or Mobile!");
        } else {
            alert("Login Successful! Welcome back.");
            closeModal('authModal');
            document.querySelectorAll('.auth-input').forEach(i => i.value = "");
        }
    }
}

// EVENT LISTENERS
document.getElementById('historyTrigger').onclick = () => openModal('historyModal');
document.getElementById('profileTrigger').onclick = () => openModal('authModal');
document.getElementById('readMoreTrigger').onclick = () => openModal('historyModal'); // Changed to open Liked products as a demo

window.onclick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

// VIDEO HOVER
document.querySelectorAll('.card-v3').forEach(card => {
    const video = card.querySelector('video');
    if(video) {
        card.onmouseenter = () => video.play();
        card.onmouseleave = () => { video.pause(); video.currentTime = 0; };
    }
});

// REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.15 });
document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));