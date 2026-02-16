 // ---------- MOCK DATA ----------
        const mockData = {
            featuredProperties: [
                { id: 1, title: "Luxury Penthouse Suite", location: "Mumbai, Maharashtra", price: "₹2.85 Cr", beds: 4, baths: 3, sqft: "3,200", image: "assets/re1.webp", type: "For Sale" },
                { id: 2, title: "Modern Villa Residence", location: "Bangalore, Karnataka", price: "₹4.20 Cr", beds: 5, baths: 4, sqft: "4,500", image: "assets/re2.webp", type: "For Sale" },
                { id: 3, title: "Coastal Dream Home", location: "Goa, India", price: "₹5.60 Cr", beds: 6, baths: 5, sqft: "5,800", image: "assets/re4.webp", type: "For Sale" },
                { id: 4, title: "downtown Apartment", location: "Delhi, NCR", price: "₹1.20 Cr", beds: 3, baths: 2, sqft: "2,100", image: "assets/re5.webp", type: "For Rent" },
                { id: 5, title: "Suburban Family Home", location: "Pune, Maharashtra", price: "₹89 Lakhs", beds: 4, baths: 3, sqft: "3,000", image: "assets/re6.webp", type: "For Sale" },
                { id: 6, title: "Elegant Townhouse", location: "Chennai, Tamil Nadu", price: "₹1.45 Cr", beds: 3, baths: 2, sqft: "2,400", image: "assets/re1.webp", type: "For Sale" }
            ],
            trendingLocations: [
                { id: 1, city: "Mumbai", state: "Maharashtra", properties: 2450, avgPrice: "₹65 Lakhs", image: "assets/loc1.webp" },
                { id: 2, city: "Bangalore", state: "Karnataka", properties: 3150, avgPrice: "₹89 Lakhs", image: "assets/loc2.webp" },
                { id: 3, city: "Delhi", state: "NCR", properties: 2980, avgPrice: "₹72 Lakhs", image: "assets/loc4.webp" },
                { id: 4, city: "Pune", state: "Maharashtra", properties: 2580, avgPrice: "₹58 Lakhs", image: "assets/loc1.webp" }
            ],
            services: [
                { id: 1, title: "Buy Property", description: "Find your dream home from our extensive collection of premium properties across prime Indian locations.", icon: "home" },
                { id: 2, title: "Sell Property", description: "List your property with us and reach thousands of verified buyers looking for their next home in India.", icon: "tag" },
                { id: 3, title: "Property Management", description: "Professional property management services to maximize your investment returns in Indian real estate.", icon: "briefcase" },
                { id: 4, title: "Virtual Tours", description: "Experience properties from anywhere with our immersive 3D virtual tour technology.", icon: "video" },
                { id: 5, title: "Investment Advisory", description: "Expert guidance on Indian real estate investments to help you make informed decisions.", icon: "trending-up" },
                { id: 6, title: "Legal Assistance", description: "Complete legal support for all your property transactions and documentation in India.", icon: "file-text" }
            ],
            stats: [
                { id: 1, value: "15000K", label: "Properties Sold" },
                { id: 2, value: "8000K", label: "Happy Clients" },
                { id: 3, value: "₹2500 Cr+", label: "Total Value" },
                { id: 4, value: "98%", label: "Success Rate" }
            ],
            testimonials: [
                { id: 1, name: "Priya Sharma", role: "Property Buyer", image: "assets/team1.webp", rating: 5, text: "Stackly made finding our dream home in Bangalore effortless. Their team was professional, responsive, and truly understood our needs. Highly recommend!" },
                { id: 2, name: "Rajesh Kumar", role: "Real Estate Investor", image: "assets/team2.webp", rating: 5, text: "Outstanding service! The virtual tours saved me countless hours, and their market insights helped me make a profitable investment in Mumbai." },
                { id: 3, name: "Anjali Desai", role: "Home Seller", image: "assets/team1.webp", rating: 5, text: "Sold my property in Delhi in just 3 weeks! The marketing strategy and professional photography made all the difference." }
            ],
            team: [
                { id: 1, name: "Amit Patel", role: "CEO & Founder", image: "assets/team1.webp", social: { linkedin: "#", twitter: "#" } },
                { id: 2, name: "Neha Singh", role: "Head of Sales", image: "assets/team2.webp", social: { linkedin: "#", twitter: "#" } },
                { id: 3, name: "Vikram Reddy", role: "Property Consultant", image: "assets/team1.webp", social: { linkedin: "#", twitter: "#" } },
                { id: 4, name: "Divya Malhotra", role: "Marketing Director", image: "assets/team2.webp", social: { linkedin: "#", twitter: "#" } }
            ],
            faqs: [
                { id: 1, question: "How do I start buying a property through Stackly?", answer: "Simply browse our Indian property listings, schedule a viewing, and our expert agents will guide you through the entire process from offer to closing." },
                { id: 2, question: "What documents do I need to sell my property in India?", answer: "You'll need property deed, recent tax statements, and any relevant NOC documents. Our team will help you compile everything needed for Indian real estate transactions." },
                { id: 3, question: "Do you offer property financing assistance?", answer: "Yes! We partner with leading Indian financial institutions to help you secure the best home loan rates and financing options." },
                { id: 4, question: "How long does the typical sale process take?", answer: "On average, properties sell within 30-60 days in India. However, premium properties often receive offers within the first week of listing." },
                { id: 5, question: "Are virtual tours available for all properties?", answer: "Yes, we provide immersive 3D virtual tours for all our listed properties in India, allowing you to explore homes from anywhere." }
            ]
        };

        // ---------- ICON INIT ----------
        lucide.createIcons();

        // ---------- NAVBAR SCROLL ----------
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // ---------- MOBILE MENU ----------
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('open');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('open')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.mobile-menu-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                mobileMenuBtn.querySelector('i').setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        });

        // ---------- RENDER PROPERTIES ----------
        function renderProperties() {
            const grid = document.getElementById('propertiesGrid');
            grid.innerHTML = mockData.featuredProperties.map((prop, index) => `
                <div class="property-card" style="animation: slideUp 0.6s cubic-bezier(0.4,0,0.2,1) ${index * 0.1}s backwards;">
                    <div class="property-image-wrapper">
                        <img src="${prop.image}" alt="${prop.title}" class="property-image">
                        <div class="property-badge">${prop.type}</div>
                        <button class="property-favorite" onclick="event.stopPropagation(); alert('Added to favorites: ${prop.title}')">
                            <i data-lucide="heart" size="20"></i>
                        </button>
                        <div class="property-overlay">
                            <button class="btn-view-property" onclick="event.stopPropagation(); window.location.href='404.html'">
                                <i data-lucide="eye" size="18"></i> View Details
                            </button>
                        </div>
                    </div>
                    <div class="property-content">
                        <div class="property-price">${prop.price}</div>
                        <h3 class="property-title">${prop.title}</h3>
                        <div class="property-location">
                            <i data-lucide="map-pin" size="16"></i>
                            <span>${prop.location}</span>
                        </div>
                        <div class="property-divider"></div>
                        <div class="property-features">
                            <div class="feature-item"><i data-lucide="bed" size="18"></i><span>${prop.beds} Beds</span></div>
                            <div class="feature-item"><i data-lucide="bath" size="18"></i><span>${prop.baths} Baths</span></div>
                            <div class="feature-item"><i data-lucide="maximize" size="18"></i><span>${prop.sqft} sqft</span></div>
                        </div>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }

        // ---------- RENDER TRENDING ----------
        function renderTrending() {
            const grid = document.getElementById('trendingGrid');
            grid.innerHTML = mockData.trendingLocations.map((loc, index) => `
                <div class="trending-card" style="animation: scaleIn 0.6s cubic-bezier(0.4,0,0.2,1) ${index * 0.15}s backwards;">
                    <div class="trending-image-container">
                        <img src="${loc.image}" alt="${loc.city}" class="trending-image">
                        <div class="trending-overlay"></div>
                    </div>
                    <div class="trending-content">
                        <div>
                            <h3 class="trending-city">${loc.city}</h3>
                            <p class="trending-state">${loc.state}</p>
                        </div>
                        <div class="trending-stats">
                            <div class="trending-stat">
                                <span class="stat-number">${loc.properties}</span>
                                <span class="stat-text">Properties</span>
                            </div>
                            <div class="trending-stat">
                                <span class="stat-number">${loc.avgPrice}</span>
                                <span class="stat-text">Avg Price</span>
                            </div>
                        </div>
                        <button class="trending-btn" onclick="window.location.href='404.html'">
                            Explore <i data-lucide="arrow-right" size="18"></i>
                        </button>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }

        // ---------- RENDER SERVICES ----------
        function renderServices() {
            const grid = document.getElementById('servicesGrid');
            const iconMap = {
                home: 'home', tag: 'tag', briefcase: 'briefcase', video: 'video', 'trending-up': 'trending-up', 'file-text': 'file-text'
            };
            grid.innerHTML = mockData.services.map((service, index) => `
                <div class="service-card" style="animation: slideUp 0.6s cubic-bezier(0.4,0,0.2,1) ${index * 0.1}s backwards;">
                    <div class="service-icon-wrapper">
                        <div class="service-icon">
                            <i data-lucide="${iconMap[service.icon] || 'home'}" size="28"></i>
                        </div>
                        <div class="service-icon-bg"></div>
                    </div>
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-description">${service.description}</p>
                    <button class="service-link" onclick="window.location.href='404.html'">
                        Learn More <span class="service-arrow">→</span>
                    </button>
                </div>
            `).join('');
            lucide.createIcons();
        }

        // ---------- RENDER STATISTICS ----------
        function renderStats() {
            const grid = document.getElementById('statsGrid');
            grid.innerHTML = mockData.stats.map((stat, index) => `
                <div class="stat-card" id="statCard${index}">
                    <div class="stat-value-large" id="statValue${index}">0</div>
                    <div class="stat-label-large">${stat.label}</div>
                    <div class="stat-bar"><div class="stat-bar-fill" style="width: 0%;"></div></div>
                </div>
            `).join('');
        }

        // Animate stats when in view
        function animateStats() {
            const statCards = document.querySelectorAll('.stat-card');
            statCards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 0;
                if (isVisible && !card.classList.contains('animated')) {
                    card.classList.add('animated');
                    const valueEl = document.getElementById(`statValue${index}`);
                    const stat = mockData.stats[index];
                    const target = parseInt(stat.value.replace(/[^0-9]/g, ''));
                    let current = 0;
                    const interval = setInterval(() => {
                        current += Math.ceil(target / 60);
                        if (current >= target) {
                            current = target;
                            clearInterval(interval);
                        }
                        if (stat.value.includes('K')) valueEl.textContent = `${Math.floor(current/1000)}K+`;
                        else if (stat.value.includes('B')) valueEl.textContent = `$${Math.floor(current/1000)}B+`;
                        else if (stat.value.includes('%')) valueEl.textContent = `${current}%`;
                        else valueEl.textContent = current;
                    }, 30);
                }
            });
        }

        // ---------- RENDER TESTIMONIALS ----------
        function renderTestimonials() {
            const grid = document.getElementById('testimonialsGrid');
            grid.innerHTML = mockData.testimonials.map((test, index) => `
                <div class="testimonial-card" style="animation: slideUp 0.6s cubic-bezier(0.4,0,0.2,1) ${index * 0.15}s backwards;">
                    <div class="testimonial-quote-icon"><i data-lucide="quote" size="40"></i></div>
                    <div class="testimonial-rating">
                        ${Array(test.rating).fill('<i data-lucide="star" size="18" fill="currentColor"></i>').join('')}
                    </div>
                    <p class="testimonial-text">${test.text}</p>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar-wrapper">
                            <img src="${test.image}" alt="${test.name}" class="testimonial-avatar">
                            <div class="testimonial-media-icons">
                                <a href="404.html" class="media-icon" onclick="event.stopPropagation()"><i data-lucide="facebook" size="16"></i></a>
                                <a href="404.html" class="media-icon" onclick="event.stopPropagation()"><i data-lucide="twitter" size="16"></i></a>
                                <a href="404.html" class="media-icon" onclick="event.stopPropagation()"><i data-lucide="linkedin" size="16"></i></a>
                            </div>
                        </div>
                        <div>
                            <div class="testimonial-name">${test.name}</div>
                            <div class="testimonial-role">${test.role}</div>
                        </div>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }

        // ---------- RENDER TEAM ----------
        function renderTeam() {
            const grid = document.getElementById('teamGrid');
            grid.innerHTML = mockData.team.map((member, index) => `
                <div class="team-card" style="animation: scaleIn 0.6s cubic-bezier(0.4,0,0.2,1) ${index * 0.1}s backwards;">
                    <div class="team-image-wrapper">
                        <img src="${member.image}" alt="${member.name}" class="team-image">
                        <div class="team-overlay">
                            <div class="team-social">
                                <a href="${member.social.linkedin}" class="social-icon"><i data-lucide="linkedin" size="18"></i></a>
                                <a href="${member.social.twitter}" class="social-icon"><i data-lucide="twitter" size="18"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="team-info">
                        <h3 class="team-name">${member.name}</h3>
                        <p class="team-role">${member.role}</p>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }

        // ---------- RENDER FAQ ----------
        function renderFaq() {
            const list = document.getElementById('faqList');
            list.innerHTML = mockData.faqs.map((faq, index) => `
                <div class="faq-item" id="faqItem${index}">
                    <button class="faq-question" onclick="toggleFaq(${index})">
                        <span>${faq.question}</span>
                        <i data-lucide="chevron-down" class="faq-icon" size="20"></i>
                    </button>
                    <div class="faq-answer">
                        <p>${faq.answer}</p>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }

        // Toggle FAQ
        window.toggleFaq = function(index) {
            const item = document.getElementById(`faqItem${index}`);
            item.classList.toggle('open');
        };

        // ---------- SCROLL REVEAL ----------
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(el => {
                const windowHeight = window.innerHeight;
                const revealTop = el.getBoundingClientRect().top;
                const revealPoint = 100;
                if (revealTop < windowHeight - revealPoint) {
                    el.classList.add('active');
                }
            });
            animateStats(); // Check stats visibility
        }

        // ---------- INITIAL RENDER ----------
        renderProperties();
        renderTrending();
        renderServices();
        renderStats();
        renderTestimonials();
        renderTeam();
        renderFaq();

        // ---------- EVENT LISTENERS ----------
        window.addEventListener('scroll', revealOnScroll);
        window.addEventListener('load', function() {
            revealOnScroll();
            // Initial navbar check
            if (window.scrollY > 50) document.getElementById('navbar').classList.add('scrolled');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });