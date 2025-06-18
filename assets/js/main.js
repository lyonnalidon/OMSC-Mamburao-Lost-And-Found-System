// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const header = document.querySelector('.header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
    header.classList.toggle('expanded');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.classList.toggle('active');
    }
    
    if (sidebarToggle) {
        sidebarToggle.classList.toggle('active');
    }
}

// Toggle user menu
function toggleUserMenu() {
    const userMenu = document.querySelector('.user-menu');
    const userDropdown = document.querySelector('.user-dropdown');
    
    if (userDropdown) {
        userDropdown.classList.toggle('active');
        userMenu.classList.toggle('active');
    }
}

// Close user menu when clicking outside
document.addEventListener('click', function(event) {
    const userMenu = document.querySelector('.user-menu');
    const userDropdown = document.querySelector('.user-dropdown');
    
    if (userMenu && !userMenu.contains(event.target)) {
        userDropdown.classList.remove('active');
        userMenu.classList.remove('active');
    }
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    
    if (window.innerWidth <= 992 && 
        !sidebar.contains(event.target) && 
        !mobileMenuBtn.contains(event.target) &&
        !sidebarToggle.contains(event.target)) {
        sidebar.classList.remove('collapsed');
        mainContent.classList.remove('expanded');
        header.classList.remove('expanded');
        mobileMenuBtn.classList.remove('active');
    }
}); 