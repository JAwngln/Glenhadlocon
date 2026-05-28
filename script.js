const { createApp, ref, onMounted } = Vue;

createApp({
    setup() {
        const mobileMenuOpen = ref(false);
        const navBackground = ref('rgba(255, 255, 255, 0.95)');
        const formData = ref({
            name: '',
            email: '',
            message: ''
        });

        const toggleMobileMenu = () => {
            mobileMenuOpen.value = !mobileMenuOpen.value;
        };

        const smoothScroll = (event, targetId) => {
            event.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        };

        const handleFormSubmit = (event) => {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            formData.value = { name: '', email: '', message: '' };
        };

        const handleScroll = () => {
            navBackground.value = window.scrollY > 100 
                ? 'rgba(255, 255, 255, 0.98)' 
                : 'rgba(255, 255, 255, 0.95)';
        };

        const enableDragScroll = (element) => {
            let isDown = false;
            let startX;
            let scrollLeft;

            element.addEventListener('mousedown', (e) => {
                isDown = true;
                element.style.cursor = 'grabbing';
                startX = e.pageX - element.offsetLeft;
                scrollLeft = element.scrollLeft;
            });

            element.addEventListener('mouseleave', () => {
                isDown = false;
                element.style.cursor = 'grab';
            });

            element.addEventListener('mouseup', () => {
                isDown = false;
                element.style.cursor = 'grab';
            });

            element.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - element.offsetLeft;
                const walk = (x - startX) * 2;
                element.scrollLeft = scrollLeft - walk;
            });

            // Touch events for mobile
            element.addEventListener('touchstart', (e) => {
                isDown = true;
                startX = e.touches[0].pageX - element.offsetLeft;
                scrollLeft = element.scrollLeft;
            });

            element.addEventListener('touchend', () => {
                isDown = false;
            });

            element.addEventListener('touchmove', (e) => {
                if (!isDown) return;
                const x = e.touches[0].pageX - element.offsetLeft;
                const walk = (x - startX) * 2;
                element.scrollLeft = scrollLeft - walk;
            });
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
            
            // Enable drag scroll for horizontal containers
            const scrollContainers = document.querySelectorAll('.samples-photos-scroll-container, .videography-samples-scroll, .other-videos-scroll');
            scrollContainers.forEach(container => {
                enableDragScroll(container);
                container.style.cursor = 'grab';
            });
        });

        return {
            mobileMenuOpen,
            navBackground,
            formData,
            toggleMobileMenu,
            smoothScroll,
            handleFormSubmit
        };
    }
}).mount('#app');
