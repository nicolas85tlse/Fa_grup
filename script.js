// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Language Selector Dropdown Toggle
function toggleDropdown(event) {
    event.preventDefault();
    const languageSelector = document.querySelector('.language-selector');
    languageSelector.classList.toggle('show');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const languageSelector = document.querySelector('.language-selector');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    
    if (languageSelector && !languageSelector.contains(event.target)) {
        languageSelector.classList.remove('show');
    }
});

// Set Language Function
function setLang(lang) {
    const flagImages = {
        'es': 'images/flag_es.png',
        'ca': 'images/flag_ca.png',
        'fr': 'images/flag_fr.png',
        'en': 'images/flag_en.png'
    };
    
    const langTexts = {
        'es': 'ES',
        'ca': 'CAT',
        'fr': 'FR',
        'en': 'EN'
    };
    
    // Update displayed flag and text
    const currentFlag = document.getElementById('current-flag');
    const currentLangText = document.getElementById('current-lang-text');
    
    if (currentFlag && currentLangText) {
        currentFlag.src = flagImages[lang];
        currentLangText.textContent = langTexts[lang];
    }
    
    // Close dropdown
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.classList.remove('show');
    }
    
    // Change language using existing function
    changeLanguage(lang);
}

// Hero Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function goToSlide(slideIndex) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to selected slide and indicator
    slides[slideIndex].classList.add('active');
    indicators[slideIndex].classList.add('active');
    
    currentSlide = slideIndex;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
}

// Auto-advance carousel every 5 seconds
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.backgroundColor = 'var(--white)';
    }
});

// Form Validation (for contact page)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Simple validation
        if (!nombre || !email || !mensaje) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, introduce un email válido.');
            return;
        }
        
        // If validation passes
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .company-card, .feature-card, .legal-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Translations object
const translations = {
    es: {
        // Navigation
        nav_inicio: "Inicio",
        nav_servicios: "Servicios",
        nav_nosotros: "Sobre Nosotros",
        nav_empresas: "Empresas Asociadas",
        nav_legal: "Departamento Legal",
        nav_contacto: "Contacto",
        
        // Hero Section
        hero_title: "FA GRUP - Inmobiliaria en Barcelona",
        hero_slogan: "Siempre Contigo",
        hero_subtitle: "Tu inmobiliaria de confianza en Barcelona. Acompañamiento profesional y cercano en compra, venta y alquiler",
        btn_contact: "Contáctanos",
        
        // Intro Section
        intro_title: "¿Qué es FA GRUP?",
        intro_text: "FA GRUP es una inmobiliaria de Barcelona fundada en 2019, especializada en ofrecer un servicio integral en el sector inmobiliario. Acompañamos al cliente durante todas las etapas de compra, venta o alquiler con profesionalidad y cercanía. Nos distinguimos por nuestra atención personalizada, conocimiento del mercado local y compromiso con la transparencia.",
        
        // Services
        services_title: "Nuestros Servicios",
        service_inmobiliaria: "Inmobiliaria",
        service_inmobiliaria_desc: "Venta de pisos con asesoramiento profesional. Acompañamos a nuestros clientes en cada paso de la compra de su vivienda.",
        service_seguros: "Seguros",
        service_seguros_desc: "Protección y tranquilidad para tu hogar, vida y negocio. Asesoramiento personalizado y gestión integral de pólizas.",
        service_viajes: "Agencia de Viajes",
        service_viajes_desc: "Experiencias únicas, planificadas para ti. Organizamos tu viaje completo con atención profesional.",
        btn_more_info: "Más información",
        
        // About Brief
        about_title: "Sobre Nosotros",
        about_text: "Somos una asesoría empresarial especializada en ofrecer soluciones integrales en las áreas fiscal, contable, laboral y estratégica. Nuestro objetivo es acompañar a empresas, autónomos y emprendedores en la gestión eficiente de su actividad, aportando claridad y un enfoque orientado a resultados.",
        btn_read_more: "Leer más",
        
        // Companies
        companies_title: "Empresas Asociadas",
        company_fa_asesoria: "FA Asesoría Global",
        company_fa_desc: "Servicios de abogados, asesoría legal y jurídica. Especialistas en derecho penal, laboral, familiar, civil y administrativo.",
        company_cictaec: "CICTAEC",
        company_cictaec_desc: "Empresas, cultura, turismo y negocios. Soluciones integrales para el desarrollo empresarial y cultural.",
        btn_visit_web: "Visitar web",
        
        // Quick Contact
        contact_hero_title: "Especialistas que entienden el arte de Ventas",
        contact_question: "¿Buscas tu hogar ideal en Barcelona? Contáctanos y te acompañaremos en todo el proceso.",
        contact_phone: "Teléfono",
        contact_email: "Email",
        contact_address: "Dirección",
        btn_send_query: "Envíanos tu consulta",
        
        // Contact Page
        contact_hero_subtitle: "Estamos aquí para ayudarte. Contáctanos y te responderemos a la brevedad",
        contact_info_title: "Información de Contacto",
        contact_phone_title: "Teléfono",
        contact_phone_hours: "Lunes a Viernes: 9:00 - 18:00",
        contact_email_title: "Email",
        contact_email_legal: "(Consultas legales)",
        contact_whatsapp_send: "Enviar mensaje",
        contact_whatsapp_desc: "Respuesta rápida y directa",
        contact_address_title: "Dirección",
        contact_form_title: "Envíanos tu Consulta",
        contact_form_name: "Nombre completo",
        contact_form_phone: "Teléfono",
        contact_form_service: "Servicio de interés",
        contact_form_select: "Selecciona un servicio",
        contact_form_message: "Mensaje",
        contact_form_submit: "Enviar consulta",
        contact_map_title: "Nuestra Ubicación",
        
        // Social
        social_title: "Síguenos en Redes Sociales",
        
        // Footer
        footer_slogan: "Soluciones integrales para empresas y particulares",
        footer_services: "Servicios",
        footer_company: "Empresa",
        footer_contact: "Contacto",
        footer_legal: "Aviso Legal",
        footer_privacy: "Política de Privacidad",
        footer_rights: "Todos los derechos reservados",
        
        // Legal Page
        legal_hero_title: "Departamento Legal",
        legal_hero_subtitle: "FA Asesoría Global - Asesoramiento jurídico integral",
        legal_intro_title: "Servicios del Departamento Legal",
        legal_intro_p1: "En FA Asesoría ofrecemos asesoramiento y representación jurídica integral en múltiples áreas del derecho. Nuestro equipo de profesionales especializados garantiza un servicio personalizado, eficaz y orientado a la protección de tus intereses.",
        legal_intro_p2: "Trabajamos con metodologías actualizadas, cumpliendo todas las normativas vigentes y garantizando un acompañamiento seguro, profesional y transparente en cada procedimiento.",
        legal_section1_title: "Derecho Penal, Laboral y de Familia",
        legal_section1_subtitle: "Defensa especializada y acompañamiento en procedimientos legales complejos",
        
        // Privacy Page
        privacy_title: "Política de Privacidad",
        privacy_subtitle: "FA GRUP - Protección de Datos Personales",
        privacy_last_update: "Última actualización: 4 de febrero de 2026",
        privacy_section1_title: "1. Responsable del Tratamiento",
        privacy_section2_title: "2. Datos que Recopilamos",
        privacy_section3_title: "3. Finalidad del Tratamiento",
        privacy_section4_title: "4. Base Jurídica del Tratamiento",
        privacy_section5_title: "5. Destinatarios de los Datos",
        privacy_section6_title: "6. Conservación de los Datos",
        privacy_section7_title: "7. Derechos del Usuario",
        privacy_section8_title: "8. Seguridad de los Datos",
        privacy_section9_title: "9. Cookies",
        privacy_section10_title: "10. Modificaciones",
        privacy_section11_title: "11. Reclamaciones",
        privacy_section12_title: "12. Contacto"
    },
    ca: {
        // Navigation
        nav_inicio: "Inici",
        nav_servicios: "Serveis",
        nav_nosotros: "Sobre Nosaltres",
        nav_empresas: "Empreses Associades",
        nav_legal: "Departament Legal",
        nav_contacto: "Contacte",
        
        // Hero Section
        hero_title: "FA GRUP - Immobiliària a Barcelona",
        hero_slogan: "Sempre amb Tu",
        hero_subtitle: "La teva immobiliària de confiança a Barcelona. Acompanyament professional i proper en compra, venda i lloguer",
        btn_contact: "Contacta'ns",
        
        // Intro Section
        intro_title: "Què és FA GRUP?",
        intro_text: "FA GRUP és una immobiliària de Barcelona fundada el 2019, especialitzada en oferir un servei integral al sector immobiliari. Acompanyem el client durant totes les etapes de compra, venda o lloguer amb professionalitat i proximitat. Ens distingim per la nostra atenció personalitzada, coneixement del mercat local i compromís amb la transparència.",
        
        // Services
        services_title: "Els Nostres Serveis",
        service_inmobiliaria: "Immobiliària",
        service_inmobiliaria_desc: "Venda de pisos amb assessorament professional. Acompanyem els nostres clients en cada pas de la compra del seu habitatge.",
        service_seguros: "Assegurances",
        service_seguros_desc: "Protecció i tranquil·litat per a la teva llar, vida i negoci. Assessorament personalitzat i gestió integral de pòlisses.",
        service_viajes: "Agència de Viatges",
        service_viajes_desc: "Experiències úniques, planificades per a tu. Organitzem el teu viatge complet amb atenció professional.",
        btn_more_info: "Més informació",
        
        // About Brief
        about_title: "Sobre Nosaltres",
        about_text: "Som una assessoria empresarial especialitzada en oferir solucions integrals en les àrees fiscal, comptable, laboral i estratègica. El nostre objectiu és acompanyar empreses, autònoms i emprenedors en la gestió eficient de la seva activitat, aportant claredat i un enfocament orientat a resultats.",
        btn_read_more: "Llegir més",
        
        // Companies
        companies_title: "Empreses Associades",
        company_fa_asesoria: "FA Assessoria Global",
        company_fa_desc: "Serveis d'advocats, assessoria legal i jurídica. Especialistes en dret penal, laboral, familiar, civil i administratiu.",
        company_cictaec: "CICTAEC",
        company_cictaec_desc: "Empreses, cultura, turisme i negocis. Solucions integrals per al desenvolupament empresarial i cultural.",
        btn_visit_web: "Visitar web",
        
        // Quick Contact
        contact_hero_title: "Especialistes que entenen l'art de Vendes",
        contact_question: "Busques la teva llar ideal a Barcelona? Contacta'ns i t'acompanyarem en tot el procés.",
        contact_phone: "Telèfon",
        contact_email: "Correu electrònic",
        contact_address: "Adreça",
        btn_send_query: "Envia'ns la teva consulta",
        
        // Contact Page
        contact_hero_subtitle: "Estem aquí per ajudar-te. Contacta'ns i et respondrem al més aviat possible",
        contact_info_title: "Informació de Contacte",
        contact_phone_title: "Telèfon",
        contact_phone_hours: "Dilluns a Divendres: 9:00 - 18:00",
        contact_email_title: "Correu electrònic",
        contact_email_legal: "(Consultes legals)",
        contact_whatsapp_send: "Enviar missatge",
        contact_whatsapp_desc: "Resposta ràpida i directa",
        contact_address_title: "Adreça",
        contact_form_title: "Envia'ns la teva Consulta",
        contact_form_name: "Nom complet",
        contact_form_phone: "Telèfon",
        contact_form_service: "Servei d'interès",
        contact_form_select: "Selecciona un servei",
        contact_form_message: "Missatge",
        contact_form_submit: "Enviar consulta",
        contact_map_title: "La nostra Ubicació",
        
        // Social
        social_title: "Segueix-nos a les Xarxes Socials",
        
        // Footer
        footer_slogan: "Solucions integrals per a empreses i particulars",
        footer_services: "Serveis",
        footer_company: "Empresa",
        footer_contact: "Contacte",
        footer_legal: "Avís Legal",
        footer_privacy: "Política de Privacitat",
        footer_rights: "Tots els drets reservats",
        
        // Legal Page
        legal_hero_title: "Departament Legal",
        legal_hero_subtitle: "FA Assessoria Global - Assessorament jurídic integral",
        legal_intro_title: "Serveis del Departament Legal",
        legal_intro_p1: "A FA Assessoria oferim assessorament i representació jurídica integral en múltiples àrees del dret. El nostre equip de professionals especialitzats garanteix un servei personalitzat, eficaç i orientat a la protecció dels teus interessos.",
        legal_intro_p2: "Treballem amb metodologies actualitzades, complint totes les normatives vigents i garantint un acompanyament segur, professional i transparent en cada procediment.",
        legal_section1_title: "Dret Penal, Laboral i de Família",
        legal_section1_subtitle: "Defensa especialitzada i acompanyament en procediments legals complexos",
        
        // Privacy Page
        privacy_title: "Política de Privacitat",
        privacy_subtitle: "FA GRUP - Protecció de Dades Personals",
        privacy_last_update: "Última actualització: 4 de febrer de 2026",
        privacy_section1_title: "1. Responsable del Tractament",
        privacy_section2_title: "2. Dades que Recopilem",
        privacy_section3_title: "3. Finalitat del Tractament",
        privacy_section4_title: "4. Base Jurídica del Tractament",
        privacy_section5_title: "5. Destinataris de les Dades",
        privacy_section6_title: "6. Conservació de les Dades",
        privacy_section7_title: "7. Drets de l'Usuari",
        privacy_section8_title: "8. Seguretat de les Dades",
        privacy_section9_title: "9. Cookies",
        privacy_section10_title: "10. Modificacions",
        privacy_section11_title: "11. Reclamacions",
        privacy_section12_title: "12. Contacte"
    },
    fr: {
        // Navigation
        nav_inicio: "Accueil",
        nav_servicios: "Services",
        nav_nosotros: "À Propos",
        nav_empresas: "Entreprises Associées",
        nav_legal: "Département Juridique",
        nav_contacto: "Contact",
        
        // Hero Section
        hero_title: "FA GRUP - Agence Immobilière à Barcelone",
        hero_slogan: "Toujours avec Vous",
        hero_subtitle: "Votre agence immobilière de confiance à Barcelone. Accompagnement professionnel et proche pour l'achat, la vente et la location",
        btn_contact: "Contactez-nous",
        
        // Intro Section
        intro_title: "Qu'est-ce que FA GRUP?",
        intro_text: "FA GRUP est une agence immobilière de Barcelone fondée en 2019, spécialisée dans l'offre d'un service intégral dans le secteur immobilier. Nous accompagnons le client pendant toutes les étapes d'achat, de vente ou de location avec professionnalisme et proximité. Nous nous distinguons par notre attention personnalisée, notre connaissance du marché local et notre engagement envers la transparence.",
        
        // Services
        services_title: "Nos Services",
        service_inmobiliaria: "Immobilier",
        service_inmobiliaria_desc: "Vente d'appartements avec conseil professionnel. Nous accompagnons nos clients à chaque étape de l'achat de leur logement.",
        service_seguros: "Assurances",
        service_seguros_desc: "Protection et tranquillité pour votre maison, vie et entreprise. Conseil personnalisé et gestion intégrale des polices.",
        service_viajes: "Agence de Voyages",
        service_viajes_desc: "Expériences uniques, planifiées pour vous. Nous organisons votre voyage complet avec une attention professionnelle.",
        btn_more_info: "Plus d'informations",
        
        // About Brief
        about_title: "À Propos de Nous",
        about_text: "Nous sommes un cabinet de conseil spécialisé dans l'offre de solutions intégrales dans les domaines fiscal, comptable, du travail et stratégique. Notre objectif est d'accompagner les entreprises, les indépendants et les entrepreneurs dans la gestion efficace de leur activité, en apportant clarté et une approche orientée résultats.",
        btn_read_more: "En savoir plus",
        
        // Companies
        companies_title: "Entreprises Associées",
        company_fa_asesoria: "FA Conseil Global",
        company_fa_desc: "Services d'avocats, conseil juridique. Spécialistes en droit pénal, du travail, de la famille, civil et administratif.",
        company_cictaec: "CICTAEC",
        company_cictaec_desc: "Entreprises, culture, tourisme et affaires. Solutions intégrales pour le développement entrepreneurial et culturel.",
        btn_visit_web: "Visiter le site",
        
        // Quick Contact
        contact_hero_title: "Spécialistes qui comprennent l'art de la Vente",
        contact_question: "Vous cherchez votre logement idéal à Barcelone? Contactez-nous et nous vous accompagnerons tout au long du processus.",
        contact_phone: "Téléphone",
        contact_email: "Email",
        contact_address: "Adresse",
        btn_send_query: "Envoyez-nous votre demande",
        
        // Contact Page
        contact_hero_subtitle: "Nous sommes là pour vous aider. Contactez-nous et nous vous répondrons dans les plus brefs délais",
        contact_info_title: "Informations de Contact",
        contact_phone_title: "Téléphone",
        contact_phone_hours: "Lundi à Vendredi : 9h00 - 18h00",
        contact_email_title: "Email",
        contact_email_legal: "(Consultations juridiques)",
        contact_whatsapp_send: "Envoyer un message",
        contact_whatsapp_desc: "Réponse rapide et directe",
        contact_address_title: "Adresse",
        contact_form_title: "Envoyez-nous votre Demande",
        contact_form_name: "Nom complet",
        contact_form_phone: "Téléphone",
        contact_form_service: "Service d'intérêt",
        contact_form_select: "Sélectionnez un service",
        contact_form_message: "Message",
        contact_form_submit: "Envoyer la demande",
        contact_map_title: "Notre Emplacement",
        
        // Social
        social_title: "Suivez-nous sur les Réseaux Sociaux",
        
        // Footer
        footer_slogan: "Solutions intégrales pour entreprises et particuliers",
        footer_services: "Services",
        footer_company: "Entreprise",
        footer_contact: "Contact",
        footer_legal: "Mentions Légales",
        footer_privacy: "Politique de Confidentialité",
        footer_rights: "Tous droits réservés",
        
        // Legal Page
        legal_hero_title: "Département Juridique",
        legal_hero_subtitle: "FA Conseil Global - Conseil juridique intégral",
        legal_intro_title: "Services du Département Juridique",
        legal_intro_p1: "Chez FA Conseil, nous offrons un conseil et une représentation juridique intégrale dans plusieurs domaines du droit. Notre équipe de professionnels spécialisés garantit un service personnalisé, efficace et orienté vers la protection de vos intérêts.",
        legal_intro_p2: "Nous travaillons avec des méthodologies actualisées, en respectant toutes les réglementations en vigueur et en garantissant un accompagnement sûr, professionnel et transparent à chaque procédure.",
        legal_section1_title: "Droit Pénal, du Travail et de la Famille",
        legal_section1_subtitle: "Défense spécialisée et accompagnement dans les procédures juridiques complexes",
        
        // Privacy Page
        privacy_title: "Politique de Confidentialité",
        privacy_subtitle: "FA GRUP - Protection des Données Personnelles",
        privacy_last_update: "Dernière mise à jour : 4 février 2026",
        privacy_section1_title: "1. Responsable du Traitement",
        privacy_section2_title: "2. Données que Nous Collectons",
        privacy_section3_title: "3. Finalité du Traitement",
        privacy_section4_title: "4. Base Juridique du Traitement",
        privacy_section5_title: "5. Destinataires des Données",
        privacy_section6_title: "6. Conservation des Données",
        privacy_section7_title: "7. Droits de l'Utilisateur",
        privacy_section8_title: "8. Sécurité des Données",
        privacy_section9_title: "9. Cookies",
        privacy_section10_title: "10. Modifications",
        privacy_section11_title: "11. Réclamations",
        privacy_section12_title: "12. Contact"
    },
    en: {
        // Navigation
        nav_inicio: "Home",
        nav_servicios: "Services",
        nav_nosotros: "About Us",
        nav_empresas: "Associated Companies",
        nav_legal: "Legal Department",
        nav_contacto: "Contact",
        
        // Hero Section
        hero_title: "FA GRUP - Real Estate in Barcelona",
        hero_slogan: "Always with You",
        hero_subtitle: "Your trusted real estate agency in Barcelona. Professional and close support in buying, selling and renting",
        btn_contact: "Contact Us",
        
        // Intro Section
        intro_title: "What is FA GRUP?",
        intro_text: "FA GRUP is a Barcelona real estate agency founded in 2019, specialized in offering a comprehensive service in the real estate sector. We accompany clients through all stages of buying, selling or renting with professionalism and proximity. We distinguish ourselves by our personalized attention, knowledge of the local market and commitment to transparency.",
        
        // Services
        services_title: "Our Services",
        service_inmobiliaria: "Real Estate",
        service_inmobiliaria_desc: "Sale of apartments with professional advice. We accompany our clients at every step of purchasing their home.",
        service_seguros: "Insurance",
        service_seguros_desc: "Protection and peace of mind for your home, life and business. Personalized advice and comprehensive policy management.",
        service_viajes: "Travel Agency",
        service_viajes_desc: "Unique experiences, planned for you. We organize your complete trip with professional attention.",
        btn_more_info: "More information",
        
        // About Brief
        about_title: "About Us",
        about_text: "We are a business consultancy specialized in offering comprehensive solutions in the fiscal, accounting, labor and strategic areas. Our goal is to accompany companies, self-employed and entrepreneurs in the efficient management of their activity, providing clarity and a results-oriented approach.",
        btn_read_more: "Read more",
        
        // Companies
        companies_title: "Associated Companies",
        company_fa_asesoria: "FA Global Advisory",
        company_fa_desc: "Lawyers services, legal and juridical advisory. Specialists in criminal, labor, family, civil and administrative law.",
        company_cictaec: "CICTAEC",
        company_cictaec_desc: "Companies, culture, tourism and business. Comprehensive solutions for business and cultural development.",
        btn_visit_web: "Visit website",
        
        // Quick Contact
        contact_hero_title: "Specialists who understand the art of Sales",
        contact_question: "Looking for your ideal home in Barcelona? Contact us and we will accompany you throughout the process.",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_address: "Address",
        btn_send_query: "Send us your inquiry",
        
        // Contact Page
        contact_hero_subtitle: "We are here to help you. Contact us and we will respond as soon as possible",
        contact_info_title: "Contact Information",
        contact_phone_title: "Phone",
        contact_phone_hours: "Monday to Friday: 9:00 AM - 6:00 PM",
        contact_email_title: "Email",
        contact_email_legal: "(Legal inquiries)",
        contact_whatsapp_send: "Send message",
        contact_whatsapp_desc: "Fast and direct response",
        contact_address_title: "Address",
        contact_form_title: "Send us your Inquiry",
        contact_form_name: "Full name",
        contact_form_phone: "Phone",
        contact_form_service: "Service of interest",
        contact_form_select: "Select a service",
        contact_form_message: "Message",
        contact_form_submit: "Submit inquiry",
        contact_map_title: "Our Location",
        
        // Social
        social_title: "Follow us on Social Networks",
        
        // Footer
        footer_slogan: "Comprehensive solutions for companies and individuals",
        footer_services: "Services",
        footer_company: "Company",
        footer_contact: "Contact",
        footer_legal: "Legal Notice",
        footer_privacy: "Privacy Policy",
        footer_rights: "All rights reserved",
        
        // Legal Page
        legal_hero_title: "Legal Department",
        legal_hero_subtitle: "FA Global Advisory - Comprehensive legal counsel",
        legal_intro_title: "Legal Department Services",
        legal_intro_p1: "At FA Advisory we offer comprehensive legal advice and representation in multiple areas of law. Our team of specialized professionals guarantees a personalized, effective service oriented to the protection of your interests.",
        legal_intro_p2: "We work with updated methodologies, complying with all current regulations and guaranteeing safe, professional and transparent support in every procedure.",
        legal_section1_title: "Criminal, Labor and Family Law",
        legal_section1_subtitle: "Specialized defense and support in complex legal procedures",
        
        // Privacy Page
        privacy_title: "Privacy Policy",
        privacy_subtitle: "FA GRUP - Personal Data Protection",
        privacy_last_update: "Last update: February 4, 2026",
        privacy_section1_title: "1. Data Controller",
        privacy_section2_title: "2. Data We Collect",
        privacy_section3_title: "3. Purpose of Processing",
        privacy_section4_title: "4. Legal Basis for Processing",
        privacy_section5_title: "5. Data Recipients",
        privacy_section6_title: "6. Data Retention",
        privacy_section7_title: "7. User Rights",
        privacy_section8_title: "8. Data Security",
        privacy_section9_title: "9. Cookies",
        privacy_section10_title: "10. Modifications",
        privacy_section11_title: "11. Complaints",
        privacy_section12_title: "12. Contact"
    }
};

// Language Change Function
function changeLanguage(lang) {
    // Save language preference
    localStorage.setItem('selectedLanguage', lang);
    
    // Get translations for selected language
    const t = translations[lang];
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
    
    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-menu a:not(.language-selector *)');
    if (navLinks.length >= 5) {
        navLinks[0].textContent = t.nav_inicio;
        navLinks[1].textContent = t.nav_servicios;
        navLinks[2].textContent = t.nav_nosotros;
        navLinks[3].textContent = t.nav_legal;
        navLinks[4].textContent = t.nav_contacto;
    }
    
    // Show notification
    const messages = {
        'es': '🇪🇸 Idioma cambiado a Español',
        'ca': '🇪🇸 Idioma canviat a Català', 
        'fr': '🇫🇷 Langue changée en Français'
    };
    
    showNotification(messages[lang]);
}

// Apply translations on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Load saved language preference and apply translations
    const savedLang = localStorage.getItem('selectedLanguage') || 'es';
    
    // Update flag and text in language selector
    const flagImages = {
        'es': 'images/flag_es.png',
        'ca': 'images/flag_ca.png',
        'fr': 'images/flag_fr.png',
        'en': 'images/flag_en.png'
    };
    
    const langTexts = {
        'es': 'ES',
        'ca': 'CAT',
        'fr': 'FR',
        'en': 'EN'
    };
    
    const currentFlag = document.getElementById('current-flag');
    const currentLangText = document.getElementById('current-lang-text');
    
    if (currentFlag && currentLangText) {
        currentFlag.src = flagImages[savedLang];
        currentLangText.textContent = langTexts[savedLang];
    }
    
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = savedLang;
    }
    
    // Apply translations if not Spanish (default)
    if (savedLang !== 'es') {
        changeLanguage(savedLang);
    }
});

// Notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: var(--gold);
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);
