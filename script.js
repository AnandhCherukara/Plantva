// Sample nursery data
const nurseries = [
    {
        id: 1,
        name: "Green Thumb Nursery",
        location: "Downtown District",
        specialties: ["indoor", "outdoor", "succulents"],
        rating: 4.8,
        reviews: 127,
        description: "Specializing in rare indoor plants and tropical varieties",
        phone: "+1 (555) 123-4567",
        website: "https://greenthumb.com",
        featured: true
    },
    {
        id: 2,
        name: "Sunny Gardens",
        location: "Westside",
        specialties: ["outdoor", "flowers"],
        rating: 4.6,
        reviews: 89,
        description: "Beautiful outdoor plants and seasonal flowers",
        phone: "+1 (555) 234-5678",
        website: "https://sunnygardens.com",
        featured: false
    },
    {
        id: 3,
        name: "Cactus Corner",
        location: "East Valley",
        specialties: ["succulents", "indoor"],
        rating: 4.9,
        reviews: 203,
        description: "The best selection of succulents and cacti in the area",
        phone: "+1 (555) 345-6789",
        website: "https://cactuscorner.com",
        featured: true
    },
    {
        id: 4,
        name: "Blooming Beauty",
        location: "North Hills",
        specialties: ["flowers", "outdoor"],
        rating: 4.7,
        reviews: 156,
        description: "Premium flowering plants and garden accessories",
        phone: "+1 (555) 456-7890",
        website: "https://bloomingbeauty.com",
        featured: false
    },
    {
        id: 5,
        name: "Urban Jungle",
        location: "City Center",
        specialties: ["indoor", "succulents"],
        rating: 4.5,
        reviews: 78,
        description: "Modern indoor plants perfect for urban living",
        phone: "+1 (555) 567-8901",
        website: "https://urbanjungle.com",
        featured: false
    },
    {
        id: 6,
        name: "Garden Paradise",
        location: "South Meadows",
        specialties: ["outdoor", "flowers", "indoor"],
        rating: 4.8,
        reviews: 234,
        description: "Complete garden solutions for every plant lover",
        phone: "+1 (555) 678-9012",
        website: "https://gardenparadise.com",
        featured: true
    }
];

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const locationSearch = document.getElementById('location-search');
const nurseriesGrid = document.getElementById('nurseries-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Filter functionality
let currentFilter = 'all';

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        // Update current filter
        currentFilter = btn.dataset.filter;
        // Filter and display nurseries
        filterNurseries();
    });
});

// Search functionality
function searchNurseries() {
    const searchTerm = locationSearch.value.toLowerCase().trim();
    if (searchTerm === '') {
        displayNurseries(nurseries);
        return;
    }

    const filteredNurseries = nurseries.filter(nursery => 
        nursery.name.toLowerCase().includes(searchTerm) ||
        nursery.location.toLowerCase().includes(searchTerm) ||
        nursery.description.toLowerCase().includes(searchTerm)
    );

    displayNurseries(filteredNurseries);
}

// Filter nurseries based on current filter
function filterNurseries() {
    let filteredNurseries;
    
    if (currentFilter === 'all') {
        filteredNurseries = nurseries;
    } else {
        filteredNurseries = nurseries.filter(nursery => 
            nursery.specialties.includes(currentFilter)
        );
    }
    
    displayNurseries(filteredNurseries);
}

// Display nurseries in the grid
function displayNurseries(nurseriesToShow) {
    if (nurseriesToShow.length === 0) {
        nurseriesGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3 style="color: #666; margin-bottom: 0.5rem;">No nurseries found</h3>
                <p style="color: #999;">Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    nurseriesGrid.innerHTML = nurseriesToShow.map(nursery => `
        <div class="nursery-card fade-in" data-id="${nursery.id}">
            <div class="nursery-image">
                <i class="fas fa-seedling"></i>
                ${nursery.featured ? '<span class="nursery-badge">Featured</span>' : ''}
            </div>
            <div class="nursery-content">
                <h3 class="nursery-name">${nursery.name}</h3>
                <p class="nursery-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${nursery.location}
                </p>
                <div class="nursery-specialties">
                    ${nursery.specialties.map(specialty => 
                        `<span class="specialty-tag">${specialty.charAt(0).toUpperCase() + specialty.slice(1)}</span>`
                    ).join('')}
                </div>
                <div class="nursery-rating">
                    <div class="stars">
                        ${generateStars(nursery.rating)}
                    </div>
                    <span class="rating-text">${nursery.rating} (${nursery.reviews} reviews)</span>
                </div>
                <p style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">${nursery.description}</p>
                <div class="nursery-actions">
                    <button class="action-btn btn-primary" onclick="contactNursery(${nursery.id})">
                        <i class="fas fa-phone"></i> Contact
                    </button>
                    <button class="action-btn btn-secondary" onclick="viewDetails(${nursery.id})">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Contact nursery function
function contactNursery(nurseryId) {
    const nursery = nurseries.find(n => n.id === nurseryId);
    if (nursery) {
        alert(`Contact ${nursery.name}:\nPhone: ${nursery.phone}\nWebsite: ${nursery.website}`);
    }
}

// View nursery details function
function viewDetails(nurseryId) {
    const nursery = nurseries.find(n => n.id === nurseryId);
    if (nursery) {
        const detailsHTML = `
            <div style="background: white; padding: 2rem; border-radius: 15px; max-width: 500px; margin: 2rem auto;">
                <h2 style="color: #2d5a27; margin-bottom: 1rem;">${nursery.name}</h2>
                <p><strong>Location:</strong> ${nursery.location}</p>
                <p><strong>Rating:</strong> ${nursery.rating}/5 (${nursery.reviews} reviews)</p>
                <p><strong>Specialties:</strong> ${nursery.specialties.join(', ')}</p>
                <p><strong>Description:</strong> ${nursery.description}</p>
                <p><strong>Phone:</strong> ${nursery.phone}</p>
                <p><strong>Website:</strong> <a href="${nursery.website}" target="_blank">${nursery.website}</a></p>
                <button onclick="this.parentElement.remove()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #4caf50; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
            </div>
        `;
        
        // Create modal overlay
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;
        modal.innerHTML = detailsHTML;
        document.body.appendChild(modal);
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
}

// Search on Enter key press
locationSearch.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchNurseries();
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Display all nurseries initially
    displayNurseries(nurseries);
    
    // Add smooth scrolling for navigation links
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
    
    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.setProperty('--overlay-opacity', '0.8');
        } else {
            header.style.setProperty('--overlay-opacity', '0.6');
        }
    });
});

// Add loading animation for search
function showLoading() {
    nurseriesGrid.innerHTML = `
        <div class="loading" style="grid-column: 1 / -1;">
            <div class="spinner"></div>
        </div>
    `;
}

// Simulate search delay for better UX
function searchNurseriesWithDelay() {
    showLoading();
    setTimeout(() => {
        searchNurseries();
    }, 500);
}

// Update the search button click handler
document.querySelector('.search-btn').addEventListener('click', searchNurseriesWithDelay);

// Function for footer category links
function filterByCategory(category) {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add active class to corresponding button
    const targetBtn = document.querySelector(`[data-filter="${category}"]`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }
    // Update current filter
    currentFilter = category;
    // Filter and display nurseries
    filterNurseries();
} 