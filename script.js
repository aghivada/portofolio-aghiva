document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // 1. Fitur: Buka/Tutup Menu Hamburger di HP
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('is-active');
        navMenu.classList.toggle('show');
    });

    // Otomatis tutup menu setelah link diklik (khusus mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('is-active');
            navMenu.classList.remove('show');
        });
    });

    // 2. Fitur: Active Link Highlighting saat scroll halaman
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 160) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

// ==========================================
// FUNGSI MODAL DETAIL PROJECT (FIXED BUG SCROLL)
// ==========================================
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');

    // Sembunyikan semua detail proyek terlebih dahulu
    const allDetails = document.querySelectorAll('.modal-project-detail');
    allDetails.forEach(detail => detail.style.display = 'none');

    // Tampilkan detail proyek yang diklik
    const activeDetail = document.getElementById(projectId);
    if (activeDetail) {
        activeDetail.style.display = 'block';
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Mengunci scroll latar belakang
    }
}

// Fungsi tunggal untuk menutup modal dan mengembalikan scroll bar
function closeModalAction() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Mengembalikan scroll bar halaman utama ke normal
}

function closeProjectModal(event) {
    const modal = document.getElementById('projectModal');
    // Menutup modal HANYA jika area overlay luar yang di-klik
    if (event.target === modal) {
        closeModalAction();
    }
}