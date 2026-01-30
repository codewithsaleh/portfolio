document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const lightIcon = document.getElementById('light-icon');
  const darkIcon = document.getElementById('dark-icon');

  // Initial setup: Cek localStorage atau default dark
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  } else {
    html.setAttribute('data-theme', 'dark'); // Default dark kalo gak ada saved
    localStorage.setItem('theme', 'dark');
  }

  // Set icon berdasarkan theme awal
  if (html.getAttribute('data-theme') === 'dark') {
    lightIcon.classList.add('hidden');
    darkIcon.classList.remove('hidden');
  } else {
    lightIcon.classList.remove('hidden');
    darkIcon.classList.add('hidden');
  }

  // Toggle event
  toggleBtn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Toggle icon
    if (newTheme === 'dark') {
      lightIcon.classList.add('hidden');
      darkIcon.classList.remove('hidden');
    } else {
      lightIcon.classList.remove('hidden');
      darkIcon.classList.add('hidden');
    }
  });
});

// Tambahkan script ini sebelum closing </body>

// skill
document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  function switchTab(tabName) {
    // Update buttons - iOS Style
    tabButtons.forEach(btn => {
      if (btn.dataset.tab === tabName) {
        // Active state
        btn.classList.add('gradient-bg', 'text-white', 'shadow-lg', 'shadow-fuchsia-500/25');
        btn.classList.remove('text-gray-300', 'hover:text-white', 'bg-gray-800');
      } else {
        // Inactive state
        btn.classList.remove('gradient-bg', 'text-white', 'shadow-lg', 'shadow-fuchsia-500/25');
        btn.classList.add('text-gray-300', 'hover:text-white');
      }
    });

    // Update panels
    tabPanels.forEach(panel => {
      if (panel.id === tabName) {
        panel.classList.remove('hidden');
        panel.classList.add('active');
      } else {
        panel.classList.add('hidden');
        panel.classList.remove('active');
      }
    });
  }

  // Add click event to tabs
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  // Initialize first tab
  switchTab('web-dev');
});

// Experience
document.addEventListener('DOMContentLoaded', function () {
  const leadershipCarousel = document.getElementById('leadershipCarousel');
  const leadershipIndicators = document.getElementById('carouselIndicators').children;

  let leadershipCurrentIndex = 0;
  const leadershipTotalSlides = 5;

  function updateLeadershipCarousel() {
    // Dapatkan lebar card + gap secara dinamis
    const firstCard = leadershipCarousel.children[0];
    const cardWidth = firstCard.offsetWidth + 16; // 16 = gap-4

    leadershipCarousel.scrollTo({
      left: leadershipCurrentIndex * cardWidth,
      behavior: 'smooth'
    });

    // Update indicators
    Array.from(leadershipIndicators).forEach((indicator, index) => {
      indicator.classList.toggle('bg-fuchsia-500', index === leadershipCurrentIndex);
      indicator.classList.toggle('bg-gray-600', index !== leadershipCurrentIndex);
    });
  }

  // Touch/Swipe functionality
  let leadershipStartX;
  let leadershipScrollLeft;

  leadershipCarousel.addEventListener('touchstart', (e) => {
    leadershipStartX = e.touches[0].clientX;
    leadershipScrollLeft = leadershipCarousel.scrollLeft;
  });

  leadershipCarousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = leadershipStartX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && leadershipCurrentIndex < leadershipTotalSlides - 1) {
        leadershipCurrentIndex++;
      } else if (diff < 0 && leadershipCurrentIndex > 0) {
        leadershipCurrentIndex--;
      }
      updateLeadershipCarousel();
    }
  });

  // Tambahkan event listener untuk scroll manual
  leadershipCarousel.addEventListener('scroll', function () {
    const scrollPos = leadershipCarousel.scrollLeft;
    const firstCard = leadershipCarousel.children[0];
    const cardWidth = firstCard.offsetWidth + 16;

    // Update current index berdasarkan scroll position
    leadershipCurrentIndex = Math.round(scrollPos / cardWidth);

    // Update indicators
    Array.from(leadershipIndicators).forEach((indicator, index) => {
      indicator.classList.toggle('bg-fuchsia-500', index === leadershipCurrentIndex);
      indicator.classList.toggle('bg-gray-600', index !== leadershipCurrentIndex);
    });
  });

  // Initialize
  updateLeadershipCarousel();
});

document.addEventListener('DOMContentLoaded', function () {
  // Experience Tabs (Main Tabs - Excluding sub-tabs to avoid conflict)
  const experienceTabButtons = document.querySelectorAll('.experience-tab-btn:not(#courses .experience-tab-btn)');
  const experienceTabPanels = document.querySelectorAll('.experience-tab-panel:not(#courses .experience-tab-panel)');
  const tabsContainer = document.querySelector('.flex.gradient-bg.rounded-lg');
  function switchExperienceTab(tabName) {
    // Update buttons
    experienceTabButtons.forEach(btn => {
      if (btn.dataset.tab === tabName) {
        // Active state
        btn.classList.add('gradient-bg', 'text-white', 'shadow-lg', 'shadow-fuchsia-500/25');
        btn.classList.remove('text-gray-300', 'hover:text-white');
        // Auto-scroll active tab into view
        btn.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      } else {
        // Inactive state
        btn.classList.remove('gradient-bg', 'text-white', 'shadow-lg', 'shadow-fuchsia-500/25');
        btn.classList.add('text-gray-300', 'hover:text-white');
      }
    });
    // Update panels
    experienceTabPanels.forEach(panel => {
      if (panel.id === tabName) {
        panel.classList.remove('hidden');
        panel.classList.add('active');
      } else {
        panel.classList.add('hidden');
        panel.classList.remove('active');
      }
    });
  }
  // Add click event to experience tabs
  experienceTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchExperienceTab(btn.dataset.tab);
    });
  });
  // Initialize first tab
  switchExperienceTab('academic');
});

// Experience >> Academic Accordions
document.addEventListener('DOMContentLoaded', function () {
  const academicAccordionItems = document.querySelectorAll('#academic .accordion-item');
  academicAccordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const icon = header.querySelector('i');
    
    header.addEventListener('click', function () {
      // Close all other accordions in academic tab
      academicAccordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherContent = otherItem.querySelector('.accordion-content');
          const otherIcon = otherItem.querySelector('i');
          otherContent.classList.add('hidden');
          otherIcon.classList.remove('rotate-180');
        }
      });
      
      // Toggle current accordion
      content.classList.toggle('hidden');
      icon.classList.toggle('rotate-180');
    });
  });
});

// Experience >> Organization Accordions
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('#organization .accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const icon = header.querySelector('i');
    header.addEventListener('click', function () {
      // Close all other accordions
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherContent = otherItem.querySelector('.accordion-content');
          const otherIcon = otherItem.querySelector('i');
          otherContent.classList.add('hidden');
          otherIcon.classList.remove('rotate-180');
        }
      });
      // Toggle current accordion
      content.classList.toggle('hidden');
      icon.classList.toggle('rotate-180');
    });
  });
});

// Experience >> Courses Sub-Tabs
document.addEventListener('DOMContentLoaded', function () {
  const coursesTabButtons = document.querySelectorAll('#courses .experience-tab-btn');
  const coursesTabPanels = document.querySelectorAll('#courses .experience-tab-panel');
  function switchCoursesSubTab(tabName) {
    // Update buttons
    coursesTabButtons.forEach(btn => {
      if (btn.dataset.tab === tabName) {
        // Active state
        btn.classList.add('gradient-bg', 'text-white', 'shadow-lg', 'shadow-fuchsia-500/25');
        btn.classList.remove('text-gray-300', 'hover:text-white');
        // Auto-scroll active tab into view
        btn.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      } else {
        // Inactive state
        btn.classList.remove('gradient-bg', 'text-white', 'shadow-lg', 'shadow-fuchsia-500/25');
        btn.classList.add('text-gray-300', 'hover:text-white');
      }
    });
    // Update panels
    coursesTabPanels.forEach(panel => {
      if (panel.id === tabName) {
        panel.classList.remove('hidden');
        panel.classList.add('active');
      } else {
        panel.classList.add('hidden');
        panel.classList.remove('active');
      }
    });
  }
  // Add click event to courses sub-tabs
  coursesTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchCoursesSubTab(btn.dataset.tab);
    });
  });
  // Initialize first sub-tab
  switchCoursesSubTab('dicoding');
});

// Experience >> Courses Accordions
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('#courses .accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const icon = header.querySelector('i');
    header.addEventListener('click', function () {
      // Close all other accordions in courses
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherContent = otherItem.querySelector('.accordion-content');
          const otherIcon = otherItem.querySelector('i');
          otherContent.classList.add('hidden');
          otherIcon.classList.remove('rotate-180');
        }
      });
      // Toggle current accordion
      content.classList.toggle('hidden');
      icon.classList.toggle('rotate-180');
    });
  });
});

//Experience >> Other 
// JavaScript untuk Other Carousel (Sertifikat)
document.addEventListener('DOMContentLoaded', function () {
  const otherCarousel = document.getElementById('otherCarousel');
  const otherIndicators = document.querySelectorAll('.other-indicator');

  let otherCurrentIndex = 0;
  const otherTotalSlides = 4; // 3 slides untuk 12 sertifikat
  let isScrolling = false;

  // Update carousel position
  function updateOtherCarousel(instant = false) {
    if (isScrolling) return;

    isScrolling = true;

    const containerWidth = otherCarousel.offsetWidth;

    otherCarousel.scrollTo({
      left: otherCurrentIndex * containerWidth,
      behavior: instant ? 'auto' : 'smooth'
    });

    // Update indicators
    updateIndicators();

    setTimeout(() => {
      isScrolling = false;
    }, 300);
  }

  // Update indicators
  function updateIndicators() {
    otherIndicators.forEach((indicator, index) => {
      if (index === otherCurrentIndex) {
        indicator.classList.remove('bg-gray-600', 'hover:bg-fuchsia-400');
        indicator.classList.add('bg-fuchsia-500');
        indicator.classList.remove('w-2', 'h-2');
        indicator.classList.add('w-8', 'h-2');
      } else {
        indicator.classList.remove('bg-fuchsia-500', 'w-8', 'h-2');
        indicator.classList.add('bg-gray-600', 'hover:bg-fuchsia-400', 'w-2', 'h-2');
      }
    });
  }

  // Click indicators untuk navigasi
  otherIndicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
      const index = parseInt(indicator.getAttribute('data-index'));
      if (index !== otherCurrentIndex) {
        otherCurrentIndex = index;
        updateOtherCarousel();
      }
    });
  });

  // Touch/Swipe functionality
  let otherStartX;
  let otherStartTime;
  let otherScrollLeft;

  otherCarousel.addEventListener('touchstart', (e) => {
    otherStartX = e.touches[0].clientX;
    otherStartTime = Date.now();
    otherScrollLeft = otherCarousel.scrollLeft;
  });

  otherCarousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const endTime = Date.now();
    const diffX = otherStartX - endX;
    const diffTime = endTime - otherStartTime;

    // Determine if it's a swipe (fast and significant movement)
    const isSwipe = diffTime < 300 && Math.abs(diffX) > 50;

    if (isSwipe) {
      if (diffX > 0 && otherCurrentIndex < otherTotalSlides - 1) {
        otherCurrentIndex++;
      } else if (diffX < 0 && otherCurrentIndex > 0) {
        otherCurrentIndex--;
      }
      updateOtherCarousel();
    }
  });

  // Auto-update indicators saat scroll manual
  let scrollTimeout;
  otherCarousel.addEventListener('scroll', function () {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      if (isScrolling) return;

      const scrollPos = otherCarousel.scrollLeft;
      const containerWidth = otherCarousel.offsetWidth;
      const tolerance = 10; // Tolerance dalam pixels

      // Hitung index berdasarkan scroll position
      const calculatedIndex = Math.round((scrollPos + tolerance) / containerWidth);

      // Pastikan index dalam range yang valid
      const newIndex = Math.max(0, Math.min(calculatedIndex, otherTotalSlides - 1));

      if (newIndex !== otherCurrentIndex) {
        otherCurrentIndex = newIndex;
        updateIndicators();
      }
    }, 100);
  });

  // Resize observer untuk responsive behavior
  const resizeObserver = new ResizeObserver(() => {
    if (!isScrolling) {
      updateOtherCarousel(true);
    }
  });

  if (otherCarousel) {
    resizeObserver.observe(otherCarousel);
  }

  // Mouse wheel horizontal scroll
  otherCarousel.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
      e.preventDefault();
      otherCarousel.scrollLeft += e.deltaY;
    }
  });

  // Initialize dengan instant scroll
  setTimeout(() => {
    updateOtherCarousel(true);
  }, 100);
});

// Work
document.addEventListener('DOMContentLoaded', function () {
  const workCarousel = document.getElementById('workCarousel');
  const workIndicators = document.getElementById('workCarouselIndicators').children;

  let workCurrentIndex = 0;
  const workTotalSlides = 4;

  function updateWorkCarousel() {
    // Dapatkan lebar card + gap secara dinamis
    const firstCard = workCarousel.children[0];
    const cardWidth = firstCard.offsetWidth + 16; // 16 = gap-4

    workCarousel.scrollTo({
      left: workCurrentIndex * cardWidth,
      behavior: 'smooth'
    });

    // Update indicators
    Array.from(workIndicators).forEach((indicator, index) => {
      indicator.classList.toggle('bg-fuchsia-500', index === workCurrentIndex);
      indicator.classList.toggle('bg-gray-600', index !== workCurrentIndex);
    });
  }

  // Touch/Swipe functionality
  let workStartX;
  let workScrollLeft;

  workCarousel.addEventListener('touchstart', (e) => {
    workStartX = e.touches[0].clientX;
    workScrollLeft = workCarousel.scrollLeft;
  });

  workCarousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = workStartX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && workCurrentIndex < workTotalSlides - 1) {
        workCurrentIndex++;
      } else if (diff < 0 && workCurrentIndex > 0) {
        workCurrentIndex--;
      }
      updateWorkCarousel();
    }
  });

  // Tambahkan event listener untuk scroll manual
  workCarousel.addEventListener('scroll', function () {
    const scrollPos = workCarousel.scrollLeft;
    const firstCard = workCarousel.children[0];
    const cardWidth = firstCard.offsetWidth + 16;

    // Update current index berdasarkan scroll position
    workCurrentIndex = Math.round(scrollPos / cardWidth);

    // Update indicators
    Array.from(workIndicators).forEach((indicator, index) => {
      indicator.classList.toggle('bg-fuchsia-500', index === workCurrentIndex);
      indicator.classList.toggle('bg-gray-600', index !== workCurrentIndex);
    });
  });

  // Initialize
  updateWorkCarousel();
});

// Project
document.addEventListener('DOMContentLoaded', function () {
  const projectCarousel = document.getElementById('projectCarousel');
  const projectIndicators = document.getElementById('projectCarouselIndicators').children;

  let projectCurrentIndex = 0;
  const projectTotalSlides = 6;

  function updateProjectCarousel() {
    // Dapatkan lebar card + gap secara dinamis
    const firstCard = projectCarousel.children[0];
    const cardWidth = firstCard.offsetWidth + 16; // 16 = gap-4

    projectCarousel.scrollTo({
      left: projectCurrentIndex * cardWidth,
      behavior: 'smooth'
    });

    // Update indicators
    Array.from(projectIndicators).forEach((indicator, index) => {
      indicator.classList.toggle('bg-fuchsia-500', index === projectCurrentIndex);
      indicator.classList.toggle('bg-gray-600', index !== projectCurrentIndex);
    });
  }

  // Touch/Swipe functionality
  let projectStartX;
  let projectScrollLeft;

  projectCarousel.addEventListener('touchstart', (e) => {
    projectStartX = e.touches[0].clientX;
    projectScrollLeft = projectCarousel.scrollLeft;
  });

  projectCarousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = projectStartX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && projectCurrentIndex < projectTotalSlides - 1) {
        projectCurrentIndex++;
      } else if (diff < 0 && projectCurrentIndex > 0) {
        projectCurrentIndex--;
      }
      updateProjectCarousel();
    }
  });

  // Tambahkan event listener untuk scroll manual
  projectCarousel.addEventListener('scroll', function () {
    const scrollPos = projectCarousel.scrollLeft;
    const firstCard = projectCarousel.children[0];
    const cardWidth = firstCard.offsetWidth + 16;

    // Update current index berdasarkan scroll position
    projectCurrentIndex = Math.round(scrollPos / cardWidth);

    // Update indicators
    Array.from(projectIndicators).forEach((indicator, index) => {
      indicator.classList.toggle('bg-fuchsia-500', index === projectCurrentIndex);
      indicator.classList.toggle('bg-gray-600', index !== projectCurrentIndex);
    });
  });

  // Initialize
  updateProjectCarousel();
});