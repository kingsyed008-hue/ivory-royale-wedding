<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Syed & Suhail - Wedding Invitation</title>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Great+Vibes&family=Montserrat:wght@300;400&display=swap" rel="stylesheet">
    <style>
        :root {
            --ivory-light: #FFFFF0;
            --ivory: #F5F5DC;
            --ivory-dark: #E8E0C8;
            --ivory-darker: #D4C9A8;
            --gold: #C9A96E;
            --gold-dark: #B8944F;
            --text-dark: #4A3728;
            --text-medium: #6B5D4F;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Cormorant Garamond', serif;
            background: linear-gradient(135deg, #F5F5DC 0%, #FFFFF0 25%, #F5F5DC 50%, #FFFFF0 75%, #F5F5DC 100%);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
            min-height: 100vh;
            overflow-x: hidden;
            color: var(--text-dark);
        }

        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            25% { background-position: 100% 0%; }
            50% { background-position: 100% 100%; }
            75% { background-position: 0% 100%; }
            100% { background-position: 0% 50%; }
        }

        /* Floating particles */
        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        }

        .particle {
            position: absolute;
            background: radial-gradient(circle, rgba(201, 169, 110, 0.4) 0%, transparent 70%);
            border-radius: 50%;
            animation: floatUp linear infinite;
        }

        @keyframes floatUp {
            0% {
                transform: translateY(100vh) scale(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) scale(1.5) rotate(360deg);
                opacity: 0;
            }
        }

        .container {
            max-width: 650px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
        }

        .invitation-card {
            background: rgba(255, 255, 240, 0.85);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 2px solid var(--ivory-darker);
            border-radius: 24px;
            padding: 40px 30px;
            margin: 30px 0;
            box-shadow: 
                0 20px 60px rgba(180, 160, 120, 0.15),
                0 0 0 1px rgba(201, 169, 110, 0.2) inset,
                0 0 80px rgba(201, 169, 110, 0.08);
            position: relative;
            overflow: hidden;
            animation: cardEntry 1.2s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
            transition: all 0.4s ease;
        }

        .invitation-card:hover {
            transform: translateY(-5px);
            box-shadow: 
                0 30px 70px rgba(180, 160, 120, 0.25),
                0 0 0 1px rgba(201, 169, 110, 0.3) inset,
                0 0 100px rgba(201, 169, 110, 0.12);
        }

        @keyframes cardEntry {
            from {
                opacity: 0;
                transform: translateY(40px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        /* Ornamental border pattern */
        .invitation-card::before {
            content: '';
            position: absolute;
            top: 15px;
            left: 15px;
            right: 15px;
            bottom: 15px;
            border: 1px solid rgba(201, 169, 110, 0.3);
            border-radius: 16px;
            pointer-events: none;
        }

        /* Corner ornaments */
        .corner-ornament {
            position: absolute;
            width: 40px;
            height: 40px;
            opacity: 0.6;
            transition: all 0.3s ease;
        }
        .corner-ornament:hover {
            opacity: 1;
            transform: scale(1.2);
        }
        .corner-ornament.top-left { top: 10px; left: 10px; }
        .corner-ornament.top-right { top: 10px; right: 10px; }
        .corner-ornament.bottom-left { bottom: 10px; left: 10px; }
        .corner-ornament.bottom-right { bottom: 10px; right: 10px; }

        .bismillah {
            text-align: center;
            font-family: 'Cormorant Garamond', serif;
            font-size: 2.2rem;
            font-weight: 600;
            color: var(--gold);
            margin-bottom: 10px;
            letter-spacing: 4px;
            animation: glowPulse 3s ease-in-out infinite;
        }

        @keyframes glowPulse {
            0%, 100% { text-shadow: 0 0 20px rgba(201, 169, 110, 0.3); }
            50% { text-shadow: 0 0 40px rgba(201, 169, 110, 0.6); }
        }

        .divider {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin: 15px 0;
        }
        .divider-line {
            width: 80px;
            height: 1px;
            background: linear-gradient(to right, transparent, var(--gold), transparent);
        }
        .divider-diamond {
            width: 8px;
            height: 8px;
            background: var(--gold);
            transform: rotate(45deg);
            animation: diamondSparkle 2s ease-in-out infinite;
        }
        @keyframes diamondSparkle {
            0%, 100% { opacity: 0.5; transform: rotate(45deg) scale(1); }
            50% { opacity: 1; transform: rotate(45deg) scale(1.5); }
        }

        .couple-names {
            text-align: center;
            margin: 20px 0;
        }
        .couple-names .and {
            font-family: 'Great Vibes', cursive;
            font-size: 2rem;
            color: var(--gold);
            display: block;
            animation: fadeInUp 0.8s ease forwards;
        }
        .name {
            font-family: 'Great Vibes', cursive;
            font-size: 3.5rem;
            color: var(--text-dark);
            display: inline-block;
            transition: all 0.3s ease;
            cursor: default;
            animation: nameReveal 1s ease forwards;
        }
        .name:hover {
            color: var(--gold-dark);
            transform: scale(1.05);
            text-shadow: 0 10px 30px rgba(201, 169, 110, 0.3);
        }
        @keyframes nameReveal {
            from {
                opacity: 0;
                transform: translateY(20px);
                filter: blur(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
                filter: blur(0);
            }
        }

        .details-section {
            text-align: center;
            margin: 25px 0;
        }
        .detail-item {
            margin: 12px 0;
            padding: 10px;
            border-radius: 12px;
            transition: all 0.3s ease;
            animation: fadeInUp 0.6s ease forwards;
            opacity: 0;
        }
        .detail-item:nth-child(1) { animation-delay: 0.3s; }
        .detail-item:nth-child(2) { animation-delay: 0.5s; }
        .detail-item:nth-child(3) { animation-delay: 0.7s; }
        .detail-item:nth-child(4) { animation-delay: 0.9s; }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .detail-item:hover {
            background: rgba(201, 169, 110, 0.08);
            transform: translateX(5px);
        }
        .detail-label {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 4px;
            color: var(--gold-dark);
            margin-bottom: 5px;
        }
        .detail-value {
            font-size: 1.3rem;
            font-weight: 500;
            color: var(--text-dark);
        }

        .highlight-box {
            background: linear-gradient(135deg, rgba(201, 169, 110, 0.1), rgba(201, 169, 110, 0.05));
            border: 1px solid rgba(201, 169, 110, 0.3);
            border-radius: 16px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
            transition: all 0.3s ease;
            animation: fadeInUp 0.6s ease forwards;
            animation-delay: 1.1s;
            opacity: 0;
        }
        .highlight-box:hover {
            background: linear-gradient(135deg, rgba(201, 169, 110, 0.18), rgba(201, 169, 110, 0.1));
            box-shadow: 0 10px 40px rgba(201, 169, 110, 0.15);
            transform: scale(1.02);
        }

        .rsvp-button {
            display: inline-block;
            padding: 14px 40px;
            background: linear-gradient(135deg, var(--gold), var(--gold-dark));
            color: var(--ivory-light);
            border: none;
            border-radius: 50px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.85rem;
            letter-spacing: 3px;
            text-transform: uppercase;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.4s ease;
            box-shadow: 0 8px 25px rgba(201, 169, 110, 0.3);
            animation: fadeInUp 0.6s ease forwards;
            animation-delay: 1.3s;
            opacity: 0;
        }
        .rsvp-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(201, 169, 110, 0.4);
            letter-spacing: 5px;
        }

        .footer-text {
            text-align: center;
            font-family: 'Great Vibes', cursive;
            font-size: 1.5rem;
            color: var(--text-medium);
            margin-top: 20px;
            animation: fadeInUp 0.6s ease forwards;
            animation-delay: 1.5s;
            opacity: 0;
        }

        /* Sparkle effect on click */
        .sparkle {
            position: absolute;
            pointer-events: none;
            animation: sparkleBurst 0.8s ease-out forwards;
        }
        @keyframes sparkleBurst {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: scale(1.5) rotate(180deg);
                opacity: 0;
            }
        }

        /* Music toggle */
        .music-toggle {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(255, 255, 240, 0.8);
            backdrop-filter: blur(10px);
            border: 2px solid var(--ivory-darker);
            cursor: pointer;
            font-size: 1.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;
            transition: all 0.3s ease;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        .music-toggle:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }

        @media (max-width: 600px) {
            .invitation-card {
                padding: 25px 18px;
                margin: 15px 0;
            }
            .name {
                font-size: 2.5rem;
            }
            .bismillah {
                font-size: 1.6rem;
            }
            .detail-value {
                font-size: 1.1rem;
            }
        }
    </style>
</head>
<body>

    <!-- Floating particles -->
    <div class="particles" id="particles"></div>

    <!-- Music toggle -->
    <button class="music-toggle" id="musicToggle" title="Toggle Music">🎵</button>

    <!-- Hidden audio -->
    <audio id="bgMusic" loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
    </audio>

    <div class="container">
        <div class="invitation-card" id="invitationCard">

            <!-- Corner ornaments -->
            <svg class="corner-ornament top-left" viewBox="0 0 40 40">
                <path d="M5,5 L35,5 M5,5 L5,35" stroke="#C9A96E" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                <circle cx="15" cy="15" r="2" fill="#C9A96E" opacity="0.6"/>
            </svg>
            <svg class="corner-ornament top-right" viewBox="0 0 40 40">
                <path d="M35,5 L5,5 M35,5 L35,35" stroke="#C9A96E" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                <circle cx="25" cy="15" r="2" fill="#C9A96E" opacity="0.6"/>
            </svg>
            <svg class="corner-ornament bottom-left" viewBox="0 0 40 40">
                <path d="M5,35 L35,35 M5,35 L5,5" stroke="#C9A96E" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                <circle cx="15" cy="25" r="2" fill="#C9A96E" opacity="0.6"/>
            </svg>
            <svg class="corner-ornament bottom-right" viewBox="0 0 40 40">
                <path d="M35,35 L5,35 M35,35 L35,5" stroke="#C9A96E" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                <circle cx="25" cy="25" r="2" fill="#C9A96E" opacity="0.6"/>
            </svg>

            <!-- Bismillah -->
            <div class="bismillah">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
            
            <div class="divider">
                <div class="divider-line"></div>
                <div class="divider-diamond"></div>
                <div class="divider-line"></div>
            </div>

            <!-- Couple Names -->
            <div class="couple-names">
                <span class="name" style="animation-delay: 0.2s;">Syed</span>
                <span class="and">&</span>
                <span class="name" style="animation-delay: 0.4s;">Suhail</span>
            </div>

            <div class="divider">
                <div class="divider-line"></div>
                <div class="divider-diamond"></div>
                <div class="divider-line"></div>
            </div>

            <!-- Wedding Details -->
            <div class="details-section">
                <div class="detail-item">
                    <div class="detail-label">Request the honor of your presence at their</div>
                    <div class="detail-value" style="font-family: 'Great Vibes', cursive; font-size: 2rem; color: var(--gold);">Wedding Celebration</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">📅 Date</div>
                    <div class="detail-value">Sunday, the Fourteenth of July</div>
                    <div class="detail-value" style="font-size: 1rem; color: var(--text-medium);">2026</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">📍 Venue</div>
                    <div class="detail-value">Grand Ivory Hall</div>
                    <div class="detail-value" style="font-size: 1rem; color: var(--text-medium);">123 Elegance Avenue, City</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">🕰️ Time</div>
                    <div class="detail-value">6:00 PM onwards</div>
                </div>
            </div>

            <!-- Reception Info -->
            <div class="highlight-box">
                <div class="detail-label" style="margin-bottom: 8px;">🥂 Reception to Follow</div>
                <div style="font-size: 1rem; color: var(--text-medium);">Dinner & Celebrations at the same venue</div>
            </div>

            <!-- RSVP Button -->
            <div style="text-align: center; margin: 25px 0;">
                <a href="#" class="rsvp-button" id="rsvpBtn">✨ RSVP ✨</a>
            </div>

            <!-- Footer -->
            <div class="footer-text">
                "And among His signs is that He created for you mates from among yourselves,<br>that you may dwell in tranquillity with them"
                <br><span style="font-size: 0.8rem; font-family: 'Montserrat', sans-serif; letter-spacing: 2px;">— Quran 30:21</span>
            </div>

        </div>
    </div>

    <script>
        // Create floating particles
        function createParticles() {
            const container = document.getElementById('particles');
            for (let i = 0; i < 40; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                const size = Math.random() * 8 + 3;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particle.style.animationDelay = Math.random() * 10 + 's';
                container.appendChild(particle);
            }
        }

        // Sparkle effect on card click
        function createSparkle(e, card) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            sparkle.innerHTML = '✦';
            sparkle.style.fontSize = (Math.random() * 10 + 10) + 'px';
            sparkle.style.color = '#C9A96E';
            card.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 800);
        }

        // Music toggle
        let isMusicPlaying = false;
        const musicToggle = document.getElementById('musicToggle');
        const bgMusic = document.getElementById('bgMusic');

        musicToggle.addEventListener('click', () => {
            if (isMusicPlaying) {
                bgMusic.pause();
                musicToggle.textContent = '🎵';
                musicToggle.style.opacity = '0.7';
            } else {
                bgMusic.play().catch(() => {});
                musicToggle.textContent = '🎶';
                musicToggle.style.opacity = '1';
            }
            isMusicPlaying = !isMusicPlaying;
        });

        // RSVP button
        document.getElementById('rsvpBtn').addEventListener('click', function(e) {
            e.preventDefault();
            this.textContent = '💌 Thank You! 💌';
            this.style.background = 'linear-gradient(135deg, #B8944F, #A0783A)';
            setTimeout(() => {
                this.textContent = '✨ RSVP ✨';
                this.style.background = 'linear-gradient(135deg, #C9A96E, #B8944F)';
            }, 3000);
        });

        // Card sparkle
        const card = document.getElementById('invitationCard');
        card.addEventListener('click', function(e) {
            createSparkle(e, this);
        });

        // Initialize
        createParticles();

        // Hover sound effect (subtle)
        const hoverElements = document.querySelectorAll('.detail-item, .highlight-box, .name, .corner-ornament');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                el.style.transition = 'all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)';
            });
        });
    </script>
</body>
</html>
