(function() {
    // Particles
    function createParticles() {
        const container = document.createElement('div');
        container.className = 'particles';
        document.body.prepend(container);
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const size = Math.random() * 6 + 2;
            p.style.width = p.style.height = size + 'px';
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDuration = (Math.random() * 8 + 8) + 's';
            p.style.animationDelay = Math.random() * 8 + 's';
            container.appendChild(p);
        }
    }
    createParticles();

    // Door & Music (only on index.html)
    const doorOverlay = document.getElementById('doorOverlay');
    if (doorOverlay) {
        const doorLeft = document.getElementById('doorLeft');
        const doorRight = document.getElementById('doorRight');
        const openBtn = document.getElementById('openBtn');
        const invitationContainer = document.getElementById('invitationContainer');
        const bgMusic = document.getElementById('bgMusic');
        const musicToggle = document.getElementById('musicToggle');
        let musicPlaying = false;

        openBtn.addEventListener('click', () => {
            doorLeft.classList.add('open');
            doorRight.classList.add('open');
            bgMusic.play().then(() => {
                musicPlaying = true;
                musicToggle.textContent = '🔊';
            }).catch(() => {});
            setTimeout(() => {
                doorOverlay.classList.add('hidden');
                invitationContainer.classList.add('visible');
            }, 1000);
        });

        // Music toggle global
        window.toggleMusic = function() {
            if (musicPlaying) {
                bgMusic.pause();
                musicToggle.textContent = '🎵';
            } else {
                bgMusic.play().then(() => {
                    musicToggle.textContent = '🔊';
                }).catch(() => {});
                musicToggle.textContent = '🔊';
            }
            musicPlaying = !musicPlaying;
        };
        musicToggle.addEventListener('click', window.toggleMusic);
    }

    // Countdown (only on countdown page)
    const countdownDays = document.getElementById('days');
    if (countdownDays) {
        const weddingDate = new Date('2026-09-05T20:00:00+05:30').getTime();
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = weddingDate - now;
            if (distance < 0) {
                document.getElementById('days').textContent = '00';
                document.getElementById('hours').textContent = '00';
                document.getElementById('minutes').textContent = '00';
                document.getElementById('seconds').textContent = '00';
                return;
            }
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        }
        setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    // Copy address (only on events page)
    const copyBtn = document.getElementById('copyAddressBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const address = "Classic Banquet Hall, No.831, 4th Block, HBR Layout, Bangalore 560043";
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(address).then(() => {
                    copyBtn.textContent = '✅ Copied!';
                    setTimeout(() => { copyBtn.textContent = '📋 Copy Address'; }, 2000);
                }).catch(() => fallbackCopy(address));
            } else {
                fallbackCopy(address);
            }
        });

        function fallbackCopy(text) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                copyBtn.textContent = '✅ Copied!';
                setTimeout(() => { copyBtn.textContent = '📋 Copy Address'; }, 2000);
            } catch (e) {
                alert('Copy failed. Please copy manually.');
            }
            document.body.removeChild(textarea);
        }
    }

    // Music toggle on inner pages (they don't have bgMusic defined globally, but we can still toggle if music is already playing from index)
    const innerMusicToggle = document.getElementById('musicToggle');
    if (innerMusicToggle && !doorOverlay) {
        // For inner pages, we try to access the parent's music if opened from index, but simpler: just provide a button that attempts to play/pause any existing audio in window? 
        // Since multiple pages, a robust solution: store music state in localStorage.
        // I'll implement a simple cross-page music control using localStorage.
        innerMusicToggle.addEventListener('click', () => {
            const audio = document.querySelector('audio');
            if (audio) {
                if (audio.paused) {
                    audio.play();
                    innerMusicToggle.textContent = '🔊';
                } else {
                    audio.pause();
                    innerMusicToggle.textContent = '🎵';
                }
            } else {
                // fallback
                alert('Music player not available.');
            }
        });
    }
})();
