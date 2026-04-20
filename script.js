/* script.js */

const projects = {
    'lunchbox': {
        title: "The Idea Lunch Box",
        subtitle: "3rd year BA in Ideation Design",
        category: "Design Thinking & Rapid Prototyping",
        timeline: "2018",
        focus: "Inscape Education Group",
        description: `
            <p>The idea lunch box started as a concept to go against the grain of traditional design toolkits with the focus of the end user. How could one create a kit that would be of benefit to seasoned designers and workshop facilitators.</p>
            <p>While involving the end user in the design process we were able to create a proof of concept that has been tested by incubators and many test participants ranging in different disciplines and skill levels showing the versatility and how the toolkit adapts to various methods and workstyles.</p>
            <p>Taking inspiration from Bento style lunch boxes, a multi layered box that separates each section by its components, tools and stationary. Visualization tools included: Visual Tokens (dry erase pieces for mapping), Timepieces (puzzle pieces for processes), and Story Dice for ideation exercises.</p>
        `,
        hero: "assets/images/idea-lunch-box/Screenshot 2025-01-24 112934.png",
        images: [
            "assets/images/idea-lunch-box/IMG_0774_edited.jpg",
            "assets/images/idea-lunch-box/IMG_0780.jpg",
            "assets/images/idea-lunch-box/IMG_0781_edited.jpg",
            "assets/images/idea-lunch-box/Screenshot 2025-01-24 115924.png",
            "assets/images/idea-lunch-box/Screenshot 2025-01-24 115942.png",
            "assets/images/idea-lunch-box/Screenshot 2025-01-24 115958.png",
            "assets/images/idea-lunch-box/Screenshot 2025-01-24 120009.png",
            "assets/images/idea-lunch-box/Screenshot 2025-01-24 120023.png",
            "assets/images/idea-lunch-box/Screenshot 2025-01-24 120039.png",
            "assets/images/idea-lunch-box/Screenshot 2025-01-24 120055.png",
            "assets/images/idea-lunch-box/Screenshot 2025-01-24 120228.png",
            "assets/images/idea-lunch-box/Screenshot 2025-01-24 120310.png"
        ]
    },
    'blacksheep': {
        title: "Team Black Sheep: Visual Strategy",
        subtitle: "Comprehensive Branding & Strategy",
        category: "Visual Strategy / 3D Printing",
        timeline: "2017",
        focus: "Visual Identity & Prototyping",
        description: `
            <p>My challenge was to develop a comprehensive visual strategy for a company which manufactures and sells drones to hobbyist drone users as well as professionals. Team Black Sheep was selected for this project.</p>
            <p>I decided to create miniature models of the drones that came with a set of informational cards. The cards provided stats, features, pricing and information about each drone. Each drone and its accompanying cards are packed in a custom box that matches the graphic identity of each specific drone.</p>
            <p>A total of four drones were developed: two for hobbyists and two for professionals. Each drone model was 3D printed and carefully painted to match the assigned persona's color scheme.</p>
        `,
        hero: "assets/images/team-black-sheep/IMG_20180903_182131.jpg",
        images: [
            "assets/images/team-black-sheep/IMG_20180903_182131.jpg",
            "assets/images/team-black-sheep/IMG_20180903_182242.jpg",
            "assets/images/team-black-sheep/IMG_20180903_182625.jpg",
            "assets/images/team-black-sheep/IMG_20180903_182659.jpg",
            "assets/images/team-black-sheep/IMG_20180903_182724.jpg",
            "assets/images/team-black-sheep/IMG_20180903_182809.jpg"
        ]
    },
    'project81': {
        title: "Project 81: Renegade Design",
        subtitle: "Inscape Education Group Initiative",
        category: "Product Design / Sustainability",
        timeline: "2017",
        focus: "Sustainable Innovation",
        description: `
            <p>Project81 is an Inscape Education Group initiative developed to identify and promote 81 products designed by Inscape students annually. Inscape is committing to putting 81 new product ideas and business concepts into the South African market each year.</p>
            <p>Process: We gathered first years around our campus who helped us develop our brand identity and help design and build our prototype.</p>
            <p>Final Product: Our product known as “you shush now” is an acoustic panel which is perfect for any noisy students, young musicians and any audio freaks on a budget. It is made from 100% recycled carpet materials.</p>
        `,
        hero: "assets/images/project-81/20170331_115126-3.jpg",
        images: [
            "assets/images/project-81/20170327_144438.jpg",
            "assets/images/project-81/20170330_213518.jpg",
            "assets/images/project-81/20170330_214238-3.jpg",
            "assets/images/project-81/20170331_115107-3.jpg",
            "assets/images/project-81/20170331_115126-3.jpg"
        ]
    },
    'facebook': {
        title: "Facebook & Big Data",
        subtitle: "Impact of Data on Society",
        category: "Infographic / Design",
        timeline: "2017",
        focus: "Data Visualization",
        description: `
            <p>Facebook’s growth is due in part to big data. It has become a producer of big data and will continue to fuel its growth with big data.</p>
            <p>My challenge was to create a clear and concise printed brochure around the importance and impact of big data on modern society, while explaining what Big Data is, how the subject is evolving over time, and what can be done about it.</p>
            <p>Facebook was a key theme for the brochure as due its relation with big data and the scandal in the summer of 2014 where over 87 million users personal data was obtained by Cambridge Analytica.</p>
            <p>Design: The diagonal shape of the brochure creates a sense of flow and direction for the user to navigate the different topics. The brochure is split into two parts. The first part is about Facebook.</p>
        `,
        hero: "assets/images/facebook/IMG_20180831_153453.jpg",
        images: [
            "assets/images/facebook/IMG_20180831_153509-2.jpg"
        ]
    },
    'child': {
        title: "Hard Facts for Kids",
        subtitle: "Educational Infographic",
        category: "Infographic / Visual Storytelling",
        timeline: "2017",
        focus: "Hard Topics for Children",
        description: `
            <p>My challenge was to create an infographic for children based on hard facts. It must be based on something interesting or complex and the aim is to teach the child in a fun and interesting manner.</p>
            <p>The topic I chose was about children's imaginary friends and their relations. My goal was to educate the viewer that there is nothing wrong with having an imaginary friend and how they can be a great benefit to children and adults.</p>
            <p>Style: The use of pastel colors with hand drawn illustrations create a childish theme to grab the children's attention and make it easy to identify themes and topics with minimum text.</p>
        `,
        hero: "assets/images/child-infographic/info for kid.png",
        images: [
            "assets/images/child-infographic/info for kid.png",
            "assets/images/child-infographic/imaginary photo.jpg",
            "assets/images/child-infographic/kid photo.jpg"
        ]
    },
    'biases': {
        title: "Cognitive Biases",
        subtitle: "Visualizing Psychological Patterns",
        category: "Visual Design",
        timeline: "2019",
        focus: "Psychology & Design",
        description: `
            <p>A detailed visual exploration of cognitive biases. This project translates complex psychological concepts and mental shortcuts into digestible visual narratives.</p>
            <p>The aim was to create a resource that helps designers and non-designers alike understand the subtle influences that shape human decision-making and perception.</p>
        `,
        hero: "assets/images/cognitive-biases/cognitive biases.png",
        images: [
            "assets/images/cognitive-biases/cognitive biases.png"
        ]
    },
    'jasa': {
        title: "Beyond the Solution: JASA Workshop",
        subtitle: "Teaching the Mindset of Design Thinking",
        category: "Facilitation / Design Thinking",
        timeline: "August 2025",
        focus: "JASA High School Students",
        description: `
            <p>In August of 2025, I facilitated a Design Thinking workshop for high school students from Junior Achievement South Africa (JASA) at the iLeadLAB Cape Town. The mission was to introduce students to Design Thinking through the lens of local environmental challenges in a condensed, high-energy timeframe.</p>
            <p>Designing for empathy: I focused on making the content relatable by leaning into the South African context, using local success stories like the Hippo Water Roller and DryBath. The goal was to help students develop a "local lens," observing their own communities on a human level.</p>
            <p>Focusing on fundamentals: With limited time, we prioritized mindset over complex formulas. We focused on reframing solutions to tackle root causes and finding the "Nugget of Gold"—the idea that every thought contains a spark of potential.</p>
            <p>Extending the learning: I designed two comprehensive digital info packets, including 10 real-world South African case studies and a Design Thinking crash course, to ensure the learning continued long after the lab sessions.</p>
        `,
        hero: "assets/images/jasa/9c7aa7d1-2bed-4596-824e-e94ba5d30bf1.JPG",
        images: [
            "assets/images/jasa/9c7aa7d1-2bed-4596-824e-e94ba5d30bf1.JPG",
            "assets/images/jasa/JASA Images (1).png",
            "assets/images/jasa/JASA Images (1)(1).png",
            "assets/images/jasa/JASA Images (2).png",
            "assets/images/jasa/JASA Images (3).png",
            "assets/images/jasa/JASA Images (4).png"
        ]
    },
    'everest': {
        title: "Everest Miniatures",
        subtitle: "Rapid Design & Fabrication",
        category: "Maker / 3D Printing / AI Workflows",
        timeline: "June 2025",
        focus: "Regent Business School",
        description: `
            <p>In June 2025, I contributed to a large-scale diorama of Mount Everest for Regent Business School by designing and fabricating miniature models for the base camp scenes. This project was a crash course in rapid design and problem-solving under a tight deadline.</p>
            <p>The Challenge of Scale: For the base camp dioramas, we settled on a 1:72–1:64 scale (figures roughly 25mm tall). I was responsible for producing a core set of essential models, including human figures, camp equipment (tents, barrels, cooking pots), and the iconic Everest Base Camp rock.</p>
            <p>Innovative Workflow: Balancing lab responsibilities meant I had to experiment with generative model creation. I used a combination of AI image generation and image-to-3D model generators, followed by manual cleanup in Blender to ensure printability.</p>
            <p>Fabrication: Using a Bambu Lab A1 printer, I produced around 85 models over 40 hours of continuous printing, capturing high detail at a 0.08mm layer height. This project demonstrated how generative tools can be combined with traditional skills to meet extreme production demands.</p>
        `,
        hero: "assets/images/everest/EverestLinkImages (5).png",
        images: [
            "assets/images/everest/80051E22-88B3-46EF-93E8-DB40D56089EB.JPG",
            "assets/images/everest/EverestLinkImages (1).png",
            "assets/images/everest/EverestLinkImages (2).png",
            "assets/images/everest/EverestLinkImages (3).png",
            "assets/images/everest/EverestLinkImages (4).png",
            "assets/images/everest/EverestLinkImages (5).png",
            "assets/images/everest/EverestLinkImages.png",
            "assets/images/everest/IMG_4725.jpg"
        ]
    },
    'mba': {
        title: "MBA & DBA Design Thinking",
        subtitle: "Beyond the 'Proper' Research Trap",
        category: "Facilitation / Academic Strategy",
        timeline: "March 2026",
        focus: "Regent Business School (MBA/DBA Students)",
        description: `
            <p>I developed and facilitated a specialized four-hour workshop for Regent Business School’s distance MBA and DBA students. The goal was to complement their traditional academic rigor with a Design Thinking framework that acts as a catalyst for thesis development.</p>
            <p>Mindsets Over Methods: For these high-level thinkers, we moved away from rigid formulas and focused on empathy-driven research. By seeing people as a collection of experiences rather than just data points, students learned to ensure their final research is as resilient as it is insightful.</p>
            <p>Interactive Learning: The session featured high-energy activities like "Product Mash-Ups" to break academic rigidity, and deep dives into iconic case studies like IDEO's toothbrush redesign and GE’s pediatric MRI "Adventure Series."</p>
            <p>The Power of Reframing: We explored how small shifts in problem statements—like moving from "how might we transport water" to "how might we roll water"—can completely change a research trajectory and lead to ground-breaking innovation.</p>
        `,
        hero: "assets/images/mba/IMG_6180.JPG",
        images: [
            "assets/images/mba/IMG_6180.JPG",
            "assets/images/mba/9c54b850-831a-4964-9c3a-25307c01543b.JPG"
        ]
    },
    'gridfinity': {
        title: "Circuit Gridfinity",
        subtitle: "Modular Electronics Organisation",
        category: "Maker / 3D Printing / Education",
        timeline: "2025 - Present",
        focus: "Regent Business School",
        description: `
            <p>Circuit Gridfinity was born out of the need for better organization when teaching electronics. Components would often disconnect or get lost during transport between classes and events, leading to wasted setup time.</p>
            <p>Modular Solution: I adapted the open-source Gridfinity system into a modular Arduino display and storage system. By combining laser-cut base plates with 3D-printed modular holders, I created a secure and flexible ecosystem for electronics prototypes.</p>
            <p>Enhanced Learning: I remixed 3D-printed models, like a traffic light circuit, onto Gridfinity bases to create more engaging and physically structured examples for students. This allows for faster facilitator prep and easier student exploration.</p>
            <p>Practical Impact: This system has dramatically improved classroom management, project storage, and setup time for workshops. It's a perfect example of combining digital fabrication, open-source thinking, and practical educational needs.</p>
        `,
        hero: "assets/images/gridfinity/IMG_2648.JPG",
        images: [
            "assets/images/gridfinity/1771596476072.jpg",
            "assets/images/gridfinity/1771596480379.jpg",
            "assets/images/gridfinity/1771596480966.jpg",
            "assets/images/gridfinity/IMG_2648.JPG"
        ]
    },
    'farmtotable': {
        title: "Farm to Table",
        subtitle: "Environmental Footprint of a Carrot",
        category: "Infographic / Data Visualization",
        timeline: "January 2026",
        focus: "Environmental Impact / LCA",
        noCrop: true,
        description: `
            <p>Data visualization is more than just making numbers look pretty—it’s about making them matter.</p>
            <p>In January 2026, I was tasked with an interesting challenge: illustrating the environmental footprint of one of South Africa’s most common staples—the carrot. The goal was to create a visual education tool that tracked the impact of 1kg of carrots from the farm all the way to the table.</p>
            <p>Because a South Africa-specific Life Cycle Assessment (LCA) didn't exist, I had to build a "best-estimate" model. This required synthesizing international data and scaling it to our local realities, like our coal-intensive energy grid and the unique irrigation needs of our semi-arid climate.</p>
            <p>Raw data can be abstract and cold. To turn these statistics into a narrative, I designed the infographics as a Farm-to-Table Menu. By structuring the information into "courses"—from On-Farm Production and Processing to Transportation and Retail—the complex supply chain became a story anyone could follow. It transformed a technical analysis into "food for thought," allowing viewers to conceptualize the hidden resources behind every bite.</p>
            <p>Knowing how to visualize and present data is a key skill for the modern professional. It’s the ability to take complex, fragmented information and "cook" it into something digestible, transparent, and actionable for students, business leaders, and policymakers alike.</p>
            <p>In a world of data overload, how are you turning your "raw ingredients" into a compelling story?</p>
        `,
        hero: "assets/images/farm-to-table/1.png",
        images: [
            "assets/images/farm-to-table/1.png",
            "assets/images/farm-to-table/2.png",
            "assets/images/farm-to-table/3.png",
            "assets/images/farm-to-table/4.png"
        ]
    }
};

// Navigation switching logic
function switchPage(targetId) {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    
    const activeLink = document.querySelector(`.nav-link[href="#${targetId}"]`);
    if (activeLink) activeLink.classList.add('active');
    
    const targetSection = document.getElementById(targetId);
    if (targetSection) targetSection.classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

let currentGallery = [];
let currentIndex = 0;
let inlineGalleryOffset = 0;

// Project Loading Logic
window.loadProject = function(projectId) {
    const project = projects[projectId];
    if (!project) return;

    currentGallery = project.images;
    inlineGalleryOffset = 0; // Reset inline carousel position
    const detailSection = document.getElementById('project-detail');
    const noCropClass = project.noCrop ? 'no-crop' : '';
    
    // Inject Content
    detailSection.innerHTML = `
        <div class="project-header">
            <a onclick="switchPage('work')" class="back-btn">← Back to Selected Works</a>
            <h1>${project.title}</h1>
            <p class="subtitle">${project.subtitle}</p>
        </div>

        <div class="project-hero-img ${noCropClass}" style="background-image: url('${encodeURI(project.hero)}')"></div>

        <div class="project-content-grid">
            <div class="project-description">
                <h2>The Project</h2>
                ${project.description}
            </div>
            <div class="project-meta">
                <h4>Role / Category</h4>
                <p>${project.category}</p>
                
                <h4>Timeline</h4>
                <p>${project.timeline}</p>
                
                <h4>Focus</h4>
                <p>${project.focus}</p>
            </div>
        </div>

        <div class="project-gallery-container">
            <button class="inline-nav-btn inline-prev" onclick="slideGallery(-1)">←</button>
            <div class="project-gallery-viewport">
                <div class="project-gallery" id="inline-gallery">
                    ${project.images.map((img, index) => `
                        <div class="gallery-item">
                            <img src="${encodeURI(img)}" 
                                 class="gallery-img ${noCropClass}" 
                                 alt="Project image" 
                                 onclick="openLightbox(${index})">
                        </div>
                    `).join('')}
                </div>
            </div>
            <button class="inline-nav-btn inline-next" onclick="slideGallery(1)">→</button>
        </div>
    `;

    // Switch to the project detail section
    switchPage('project-detail');
};

window.slideGallery = function(direction) {
    const gallery = document.getElementById('inline-gallery');
    const items = gallery.querySelectorAll('.gallery-item');
    if (items.length <= 1) return;

    const itemWidth = items[0].offsetWidth + 20; // width + gap
    const visibleCount = window.innerWidth <= 600 ? 1 : (window.innerWidth <= 900 ? 2 : 3);
    const maxOffset = items.length - visibleCount;

    inlineGalleryOffset += direction;

    if (inlineGalleryOffset < 0) inlineGalleryOffset = 0;
    if (inlineGalleryOffset > maxOffset) inlineGalleryOffset = maxOffset;

    gallery.style.transform = `translateX(-${inlineGalleryOffset * itemWidth}px)`;
};

// Lightbox Logic
window.openLightbox = function(index) {
    currentIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = currentGallery[currentIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
};

window.closeLightbox = function() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
};

window.nextImage = function() {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    document.getElementById('lightbox-img').src = currentGallery[currentIndex];
};

window.prevImage = function() {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    document.getElementById('lightbox-img').src = currentGallery[currentIndex];
};

// Global Lightbox Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    
    if (closeBtn) closeBtn.addEventListener('click', window.closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.nextImage();
    });
    if (prevBtn) prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.prevImage();
    });
    
    // Close on click outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
            window.closeLightbox();
        }
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') window.closeLightbox();
        if (e.key === 'ArrowRight') window.nextImage();
        if (e.key === 'ArrowLeft') window.prevImage();
    });
});

// Navigation switching logic

// Handle Nav Clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        switchPage(targetId);
    });
});

// Handle all special CTA links (like "Explore My Work" or "Get in Touch")
document.querySelectorAll('.nav-link-trigger').forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        switchPage(targetId);
    });
});

// Basic Form Handling - Let it submit to Formspree
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
    // We remove preventDefault here so the browser can send the form data to Formspree
});
