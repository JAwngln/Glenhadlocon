<script setup>
import { ref, onMounted } from 'vue'

const mobileMenuOpen = ref(false)
const navBackground = ref('rgba(13, 13, 13, 0.95)')
const formData = ref({
  name: '',
  email: '',
  message: ''
})

const modalOpen = ref(false)
const modalTitle = ref('')
const modalPhotos = ref([])
const lightboxOpen = ref(false)
const lightboxSrc = ref('')

const skillPhotos = {
  'Graphic Design': {
    title: 'Graphic Design Works',
    photos: [
      '/achivements/graphic designer/whats poppin.jpg',
      '/achivements/graphic designer/stars.jpg',
      '/achivements/graphic designer/thsirt.jpg',
      '/achivements/graphic designer/41.jpg',
      '/achivements/graphic designer/graps.jpg',
      '/achivements/graphic designer/grap.jpg'
    ]
  },
  'Videography': {
    title: 'Videography Projects',
    photos: [
      '/achivements/videography/oslow.png',
      '/achivements/videography/buga.png',
      '/achivements/videography/behi.png',
      '/achivements/videography/vid.png'
    ]
  },
  'Photography': {
    title: 'Photography Portfolio',
    photos: [
      '/achivements/photography/tools.png',
      '/achivements/photography/photooo.png',
      '/achivements/photography/phoo.png',
      '/achivements/photography/photo.png'
    ]
  },
  'PC Assembly & Disassembly': {
    title: 'PC Assembly Works',
    photos: [
      '/achivements/pc assemble/gpu.jpg',
      '/achivements/pc assemble/cpu.jpg',
      '/achivements/pc assemble/pc.jpg'
    ]
  },
  '2D Game Development (Educational/Tutorial)': {
    title: '2D Game Development Projects',
    photos: [
      '/achivements/2d game/Screenshot 2026-05-28 043709.png',
      '/achivements/2d game/Screenshot 2026-05-28 042527.png'
    ]
  }
}

const handleEsc = (e) => {
  if (e.key === 'Escape') closeGallery()
}

const openGallery = (skillName) => {
  const data = skillPhotos[skillName]
  if (!data) return
  modalTitle.value = data.title
  modalPhotos.value = data.photos
  modalOpen.value = true
  document.body.style.overflow = 'hidden'
  document.addEventListener('keydown', handleEsc)
}

const closeGallery = () => {
  modalOpen.value = false
  modalTitle.value = ''
  modalPhotos.value = []
  lightboxOpen.value = false
  lightboxSrc.value = ''
  document.body.style.overflow = ''
  document.removeEventListener('keydown', handleEsc)
  document.removeEventListener('keydown', handleLightboxEsc)
}

const handleLightboxEsc = (e) => {
  if (e.key === 'Escape') closeLightbox()
}

const openLightbox = (src) => {
  lightboxSrc.value = src
  lightboxOpen.value = true
  document.addEventListener('keydown', handleLightboxEsc)
}

const closeLightbox = () => {
  lightboxOpen.value = false
  lightboxSrc.value = ''
  document.removeEventListener('keydown', handleLightboxEsc)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const smoothScroll = (event, targetId) => {
  event.preventDefault()
  const target = document.querySelector(targetId)
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const handleFormSubmit = (event) => {
  event.preventDefault()
  alert('Thank you for your message! We will get back to you soon.')
  formData.value = { name: '', email: '', message: '' }
}

const handleScroll = () => {
  navBackground.value = window.scrollY > 100 
    ? 'rgba(13, 13, 13, 0.98)' 
    : 'rgba(13, 13, 13, 0.95)'
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- Navigation -->
  <nav :style="{ background: navBackground }">
    <div class="nav-container">
      <div class="nav-logo">TRINITY CREATORS</div>
      <ul class="nav-links" :style="{ display: mobileMenuOpen ? 'flex' : '', position: mobileMenuOpen ? 'absolute' : '', top: mobileMenuOpen ? '100%' : '', left: mobileMenuOpen ? '0' : '', right: mobileMenuOpen ? '0' : '', background: mobileMenuOpen ? 'white' : '', flexDirection: mobileMenuOpen ? 'column' : '', padding: mobileMenuOpen ? '1rem' : '', boxShadow: mobileMenuOpen ? '0 2px 10px rgba(0, 0, 0, 0.1)' : '' }">
        <li><a href="#home" @click="smoothScroll($event, '#home')">Home</a></li>
        <li><a href="#about" @click="smoothScroll($event, '#about')">About Us</a></li>
        <li><a href="#contact" @click="smoothScroll($event, '#contact')">Contact</a></li>
      </ul>
      <button class="cta-button">HIRE THE TEAM</button>
      <div class="mobile-menu" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="hero">
    <div class="hero-content">
      <div class="hero-subtitle">THE COLLECTIVE PORTFOLIO</div>
      <h1>Trinity Creators</h1>
      <p>A team of three individuals, each bringing a unique skill—filmmaking, gaming, and sports. United by creativity and passion, we collaborate to produce content that is dynamic, engaging, and meaningful.</p>
    </div>
  </section>

  <!-- About Section -->
  <section id="about">
    <div class="container">
      <h2 class="section-title">ABOUT US</h2>
      <div class="about-cards-container">
        <a href="#mark-john-dimapilis" class="about-card-link">
          <div class="about-card">
            <h3>Mark John Dimapilis</h3>
            <p class="role">Main Programmer</p>
            <img src="/pictures/mj.jpg" alt="Mark John Dimapilis">
            <p class="bio">My name is <strong>MARK JOHN DIMAPILIS</strong>, the lead developer and primary coder for our thesis system. With a background in multimedia production, I bring both technical precision and creative vision to every line of code.</p>
          </div>
        </a>
        <a href="#john-glen-hadlocon" class="about-card-link">
          <div class="about-card">
            <h3>John Glen Hadlocon</h3>
            <p class="role">Team Facilitator</p>
            <img src="/pictures/glen.jpg" alt="John Glen Hadlocon">
            <p class="bio">My name is <strong>JOHN GLEN HADLOCON</strong>, the project manager and facilitator of our team. I ensure smooth workflow, clear communication, and that every milestone is met on time.</p>
          </div>
        </a>
        <a href="#james-jordan" class="about-card-link">
          <div class="about-card">
            <h3>James Jordan Juegos</h3>
            <p class="role">Lead Documentarian</p>
            <img src="/pictures/james.jpg" alt="James Jordan Juegos">
            <p class="bio">My name is <strong>JAMES JORDAN JUEGOS</strong>, the lead documentarian responsible for organizing and producing our thesis documentation. I ensure every technical report, manual, and portfolio is clear, complete, and professional.</p>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- Mark John Dimapilis Section -->
  <section id="mark-john-dimapilis">
    <div class="container">
      <p class="section-subtitle">Main Programmer</p>
      <h2 class="section-title">MARK JOHN DIMAPILIS</h2>

      <div class="member-card">
        <div class="member-header">
          <img src="/pictures/mj.jpg" alt="Mark John Dimapilis">
          <div>
            <h3>Mark John Dimapilis</h3>
            <p class="thesis-role"><strong>Thesis Role:</strong> Lead developer for the system and primary coder.</p>
          </div>
        </div>

        <div class="skills-block">
          <h3><i class="fas fa-laptop-code"></i> Technical Skills</h3>
          <div class="skills-tags">
            <span class="skill-tag" @click="openGallery('Graphic Design')"><i class="fas fa-paint-brush"></i> Graphic Design</span>
            <span class="skill-tag" @click="openGallery('Videography')"><i class="fas fa-video"></i> Videography</span>
            <span class="skill-tag" @click="openGallery('Photography')"><i class="fas fa-camera"></i> Photography</span>
          </div>
        </div>

        <div class="achievements-block">
          <h3><i class="fas fa-award"></i> Academic Achievements</h3>
          <ul class="achievements-list-new">
            <li><i class="fas fa-check-circle"></i> Dean's Lister (3rd Year, 1st Semester)</li>
            <li><i class="fas fa-check-circle"></i> NCII Certified in TVL Animation</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- John Glen Hadlocon Section -->
  <section id="john-glen-hadlocon">
    <div class="container">
      <p class="section-subtitle">Team Facilitator</p>
      <h2 class="section-title">JOHN GLEN HADLOCON</h2>

      <div class="member-card">
        <div class="member-header">
          <img src="/pictures/glen.jpg" alt="John Glen Hadlocon">
          <div>
            <h3>John Glen Hadlocon</h3>
            <p class="thesis-role"><strong>Thesis Role:</strong> Project Manager/Facilitator; responsible for team guidance and workflow.</p>
          </div>
        </div>

        <div class="skills-block">
          <h3><i class="fas fa-laptop-code"></i> Technical Skills</h3>
          <div class="skills-tags">
            <span class="skill-tag" @click="openGallery('PC Assembly & Disassembly')"><i class="fas fa-desktop"></i> PC Assembly & Disassembly</span>
            <span class="skill-tag" @click="openGallery('2D Game Development (Educational/Tutorial)')"><i class="fas fa-gamepad"></i> 2D Game Development (Educational/Tutorial)</span>
          </div>
        </div>

        <div class="achievements-block">
          <h3><i class="fas fa-award"></i> Academic Achievements</h3>
          <ul class="achievements-list-new">
            <li><i class="fas fa-check-circle"></i> NCII Certified in Computer System Servicing (CSS)</li>
            <li><i class="fas fa-check-circle"></i> Published first project website for "Introduction to Computing"</li>
          </ul>
          <p class="project-link">Website: <a href="https://jglen.netlify.app/frontpanels/framework" target="_blank">jglen.netlify.app</a></p>
        </div>
      </div>
    </div>
  </section>

  <!-- James Jordan Juegos Section -->
  <section id="james-jordan">
    <div class="container">
      <p class="section-subtitle">Lead Documentarian</p>
      <h2 class="section-title">JAMES JORDAN JUEGOS</h2>

      <div class="member-card">
        <div class="member-header">
          <img src="/pictures/james.jpg" alt="James Jordan Juegos">
          <div>
            <h3>James Jordan Juegos</h3>
            <p class="thesis-role"><strong>Thesis Role:</strong> Responsible for organizing and producing the final documentation package, including technical reports, manuals, and portfolios.</p>
          </div>
        </div>

        <div class="skills-block">
          <h3><i class="fas fa-laptop-code"></i> Technical Skills</h3>
          <div class="skills-tags">
            <span class="skill-tag"><i class="fas fa-microphone"></i> Performing Arts (Singing)</span>
            <span class="skill-tag"><i class="fas fa-music"></i> Performing Arts (Dancing)</span>
          </div>
        </div>

        <div class="achievements-block">
          <h3><i class="fas fa-award"></i> Academic Achievements</h3>
          <ul class="achievements-list-new">
            <li><i class="fas fa-check-circle"></i> NCII Certified in Computer System Servicing (CSS)</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <div class="container contact-container">
      <div class="contact-info">
        <div class="contact-group">
          <h2>CALL US</h2>
          <p>MARK PHONE: 09358993783</p>
          <p>GLEN PHONE: 09984923767</p>
          <p>JAMES PHONE: 09674253478</p>
        </div>
        <div class="contact-group">
          <h2>EMAIL US</h2>
          <p>SAMPLE705@GMAIL.COM</p>
        </div>
        <div class="contact-group">
          <h2>FOLLOW US</h2>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <div class="contact-form-section">
        <h2>GET IN TOUCH</h2>
        <p class="tagline">LET'S CREATE, COLLABORATE, AND INNOVATE.</p>
        <form @submit="handleFormSubmit">
          <div class="form-group">
            <input type="text" id="name" name="name" v-model="formData.name" placeholder="YOUR NAME" required>
          </div>
          <div class="form-group">
            <input type="email" id="email" name="email" v-model="formData.email" placeholder="YOUR EMAIL" required>
          </div>
          <div class="form-group">
            <textarea id="message" name="message" rows="7" v-model="formData.message" placeholder="YOUR MESSAGE" required></textarea>
          </div>
          <button type="submit" class="btn-send">SEND</button>
        </form>
      </div>
    </div>
  </section>

  <!-- Photo Gallery Modal -->
  <div v-if="modalOpen" class="gallery-overlay" @click.self="closeGallery" @keydown.escape="closeGallery">
    <div class="gallery-modal">
      <div class="gallery-header">
        <h2>{{ modalTitle }}</h2>
        <button class="gallery-close" @click="closeGallery">&times;</button>
      </div>
      <div class="gallery-grid">
        <div v-for="(photo, index) in modalPhotos" :key="index" class="gallery-item">
          <img :src="photo" :alt="modalTitle + ' ' + (index + 1)" loading="lazy" @click="openLightbox(photo)">
        </div>
      </div>
    </div>
  </div>

  <!-- Lightbox for full-size view -->
  <div v-if="lightboxOpen" class="lightbox-overlay" @click.self="closeLightbox">
    <button class="lightbox-close" @click="closeLightbox">&times;</button>
    <img :src="lightboxSrc" class="lightbox-image" alt="Full size preview">
  </div>

  <!-- Footer -->
  <footer>
    <div class="container">
      <p>&copy; 2024 Our Portfolio. All rights reserved.</p>
    </div>
  </footer>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #ffffff;
    background: #0d0d0d;
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header Section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
    overflow: hidden;
    background: #0d0d0d;
}

.hero::before {
    display: none;
}

.hero-content {
    position: relative;
    z-index: 2;
}

.hero-subtitle {
    font-size: 0.9rem;
    color: #888888;
    margin-bottom: 1.5rem;
    letter-spacing: 4px;
    font-weight: 400;
    animation: fadeInUp 1s ease-out;
    text-transform: uppercase;
}

.hero h1 {
    font-size: 4.5rem;
    margin-bottom: 1.5rem;
    animation: fadeInUp 1s ease-out;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1.1;
}

.hero p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease-out 0.3s both;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.8;
    color: #aaaaaa;
    font-weight: 300;
}

.cta-button {
    display: inline-block;
    padding: 14px 32px;
    background: #ffffff;
    color: #0d0d0d;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    transition: all 0.3s ease;
    animation: fadeInUp 1s ease-out 0.6s both;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    letter-spacing: 1px;
}

.cta-button:hover {
    background: #e0e0e0;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
}

/* Section Styles */
section {
    padding: 80px 0;
    background: #0d0d0d;
    margin: 2px 0;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #ffffff;
    position: relative;
    font-weight: 700;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: #ff6b6b;
}

/* About Section */
.about-cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.about-card-link {
    text-decoration: none;
    color: inherit;
}

.about-card {
    background: #1a1a1a;
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-card-link:hover .about-card {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.about-card h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #ffffff;
    font-weight: 700;
}

.about-card .role {
    font-size: 0.9rem;
    color: #888888;
    margin-bottom: 1.5rem;
    font-weight: 500;
}

.about-card img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 1.5rem;
    border: 3px solid #333333;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.about-card .bio {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #aaaaaa;
}

.about-card .bio strong {
    color: #ffffff;
    font-weight: 600;
}

/* Section Subtitle */
.section-subtitle {
    text-align: center;
    font-size: 0.9rem;
    color: #888888;
    margin-bottom: 0.5rem;
    letter-spacing: 3px;
    text-transform: uppercase;
}

/* Member Card */
.member-card {
    background: #1a1a1a;
    border-radius: 15px;
    padding: 2.5rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    max-width: 800px;
    margin: 0 auto;
}

.member-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #333;
}

.member-header img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #ff6b6b;
    flex-shrink: 0;
}

.member-header h3 {
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.thesis-role {
    font-size: 0.95rem;
    color: #aaaaaa;
    line-height: 1.6;
}

.thesis-role strong {
    color: #ff6b6b;
}

.skills-block {
    margin-bottom: 2rem;
}

.skills-block h3,
.achievements-block h3 {
    font-size: 1.2rem;
    color: #ffffff;
    margin-bottom: 1rem;
    font-weight: 600;
}

.skills-block h3 i,
.achievements-block h3 i {
    margin-right: 0.5rem;
    color: #ff6b6b;
}

.skills-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.skill-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #2a2a2a;
    color: #ffffff;
    padding: 8px 18px;
    border-radius: 25px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: background 0.3s ease, transform 0.2s ease;
    border: 1px solid #444;
}

.skill-tag:hover {
    background: #ff6b6b;
    color: #ffffff;
    transform: translateY(-2px);
    border-color: #ff6b6b;
}

.skill-tag i {
    font-size: 1rem;
}

.achievements-block {
    margin-bottom: 0;
}

.achievements-list-new {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.achievements-list-new li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.95rem;
    color: #cccccc;
    line-height: 1.5;
    padding: 0.75rem 1rem;
    background: #2a2a2a;
    border-radius: 10px;
    border-left: 3px solid #ff6b6b;
}

.achievements-list-new li i {
    color: #ff6b6b;
    font-size: 1.1rem;
    margin-top: 0.1rem;
    flex-shrink: 0;
}

.project-link {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #aaaaaa;
}

.project-link a {
    color: #ff6b6b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.project-link a:hover {
    color: #ff5252;
    text-decoration: underline;
}

/* Contact */
.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 3rem;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.contact-group h2 {
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 1rem;
    font-weight: 700;
}

.contact-group p {
    font-size: 1rem;
    color: #aaaaaa;
    line-height: 1.6;
    margin-bottom: 0.5rem;
}

.social-icons {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
}

.social-icons a {
    font-size: 1.5rem;
    color: #ffffff;
    transition: color 0.3s ease;
}

.social-icons a:hover {
    color: #ff6b6b;
}

.contact-form-section {
    background: #1a1a1a;
    border-radius: 15px;
    padding: 3rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.contact-form-section h2 {
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.tagline {
    font-size: 1rem;
    color: #ff6b6b;
    margin-bottom: 2rem;
    letter-spacing: 1px;
    font-weight: 500;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 15px;
    border: 2px solid #333333;
    border-radius: 10px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    background: #0d0d0d;
    color: #ffffff;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #ff6b6b;
}

.btn-send {
    width: 100%;
    padding: 15px;
    background: #ff6b6b;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
}

.btn-send:hover {
    background: #ff5252;
}

/* Skill Tag Clickable */
.skill-tag {
    cursor: pointer;
}

/* Photo Gallery Modal */
.gallery-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: fadeIn 0.2s ease-out;
}

.gallery-modal {
    background: #1a1a1a;
    border-radius: 15px;
    width: 100%;
    max-width: 1000px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 2rem;
    position: relative;
    animation: scaleIn 0.2s ease-out;
}

.gallery-modal::-webkit-scrollbar {
    width: 6px;
}

.gallery-modal::-webkit-scrollbar-track {
    background: #1a1a1a;
}

.gallery-modal::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 3px;
}

.gallery-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #333;
}

.gallery-header h2 {
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: 700;
}

.gallery-close {
    background: none;
    border: none;
    color: #888;
    font-size: 2rem;
    cursor: pointer;
    transition: color 0.3s ease;
    line-height: 1;
    padding: 0 0.25rem;
}

.gallery-close:hover {
    color: #ff6b6b;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
}

.gallery-item {
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease;
    aspect-ratio: 4 / 3;
    background: #2a2a2a;
}

.gallery-item:hover {
    transform: scale(1.03);
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Lightbox */
.lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    z-index: 3000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    cursor: zoom-out;
    animation: fadeIn 0.2s ease-out;
}

.lightbox-image {
    max-width: 95%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 10px;
    animation: scaleIn 0.2s ease-out;
}

.lightbox-close {
    position: absolute;
    top: 20px;
    right: 30px;
    background: none;
    border: none;
    color: #ffffff;
    font-size: 3rem;
    cursor: pointer;
    transition: color 0.3s ease;
    line-height: 1;
    z-index: 3001;
}

.lightbox-close:hover {
    color: #ff6b6b;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* Footer */
footer {
    background: #1a1a1a;
    color: #888888;
    text-align: center;
    padding: 2rem 0;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Navigation */
nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(13, 13, 13, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 1.2rem 0;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-size: 1.4rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 2px;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: #cccccc;
    font-weight: 400;
    transition: color 0.3s ease;
    font-size: 0.95rem;
}

.nav-links a:hover {
    color: #ffffff;
}

/* Mobile Menu */
.mobile-menu {
    display: none;
    flex-direction: column;
    gap: 0.5rem;
    cursor: pointer;
}

.mobile-menu span {
    width: 25px;
    height: 3px;
    background: #ffffff;
    transition: 0.3s;
}

/* Responsive Design - Comprehensive Breakpoints */

/* Large devices (desktops, 992px and up) */
@media (max-width: 1199px) {
    .hero h1 {
        font-size: 3.5rem;
    }
}

/* Medium devices (tablets, 768px to 991px) */
@media (max-width: 991px) {
    .hero h1 {
        font-size: 3rem;
    }

    .hero p {
        font-size: 1rem;
    }

    .about-cards-container {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
    }

    .contact-container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .contact-info {
        order: 1;
    }

    .contact-form-section {
        order: 0;
    }

    section {
        padding: 60px 0;
    }
}

/* Small devices (landscape phones, 576px to 767px) */
@media (max-width: 767px) {
    .nav-links {
        display: none;
    }

    .nav-links.active {
        display: flex;
    }

    .mobile-menu {
        display: flex;
    }

    .cta-button {
        display: none;
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .hero p {
        font-size: 0.95rem;
    }

    .section-title {
        font-size: 1.8rem;
        margin-bottom: 2rem;
    }

    .about-cards-container {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .about-card {
        padding: 1.5rem;
    }

    .about-card img {
        width: 100px;
        height: 100px;
    }

    .member-card {
        padding: 1.5rem;
    }

    .member-header {
        flex-direction: column;
        text-align: center;
    }

    .member-header img {
        width: 80px;
        height: 80px;
    }

    .member-header h3 {
        font-size: 1.3rem;
    }

    .skills-tags {
        justify-content: center;
    }

    .skill-tag {
        font-size: 0.85rem;
        padding: 6px 14px;
    }

    .contact-form-section {
        padding: 2rem;
    }

    .contact-group h2 {
        font-size: 1.3rem;
    }

    section {
        padding: 40px 0;
    }

    footer {
        padding: 1.5rem 0;
        font-size: 0.85rem;
    }
}

/* Extra small devices (phones, up to 575px) */
@media (max-width: 575px) {
    .hero {
        height: 90vh;
        padding: 0 20px;
    }

    .hero h1 {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 0.75rem;
        letter-spacing: 2px;
    }

    .section-title {
        font-size: 1.5rem;
    }

    .section-title::after {
        width: 40px;
        height: 3px;
        bottom: -8px;
    }

    .section-subtitle {
        font-size: 0.75rem;
        letter-spacing: 2px;
    }

    .member-card {
        padding: 1.25rem;
        border-radius: 12px;
    }

    .member-header {
        margin-bottom: 1.25rem;
        padding-bottom: 1.25rem;
    }

    .skills-block h3,
    .achievements-block h3 {
        font-size: 1rem;
    }

    .achievements-list-new li {
        font-size: 0.85rem;
        padding: 0.6rem 0.8rem;
    }

    .contact-form-section h2 {
        font-size: 1.5rem;
    }

    .form-group input,
    .form-group textarea {
        padding: 12px;
        font-size: 0.9rem;
    }

    .btn-send {
        padding: 12px;
        font-size: 1rem;
    }

    .social-icons a {
        font-size: 1.3rem;
    }

    section {
        padding: 30px 0;
    }
}

@media (max-width: 360px) {
    .hero h1 {
        font-size: 1.6rem;
    }

    .nav-logo {
        font-size: 1.1rem;
    }

    .member-card {
        padding: 1rem;
    }
}

/* Gallery responsive */
@media (max-width: 767px) {
    .gallery-modal {
        padding: 1.5rem;
        max-height: 85vh;
    }

    .gallery-header h2 {
        font-size: 1.2rem;
    }

    .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 0.75rem;
    }

    .lightbox-overlay {
        padding: 20px;
    }
}

@media (max-width: 575px) {
    .gallery-modal {
        padding: 1rem;
    }

    .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 0.5rem;
    }

    .gallery-close {
        font-size: 1.5rem;
    }
}
</style>
