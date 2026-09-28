/**
 * K.L.E. Society's College of Bachelor of Computer Applications, Gokak
 * Interactive Frontend JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- Mobile Navigation Menu ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuCloseBtn = document.getElementById('mobileMenuCloseBtn');
  const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileMenuDrawer.classList.remove('translate-x-full');
    document.body.classList.add('overflow-hidden');
  }

  function closeMobileMenu() {
    mobileMenuDrawer.classList.add('translate-x-full');
    document.body.classList.remove('overflow-hidden');
  }

  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }
  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  }
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // --- Sticky Navbar Shadow on Scroll ---
  const navbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('shadow-md', 'bg-white/95');
      navbar.classList.remove('bg-white/80');
    } else {
      navbar.classList.remove('shadow-md', 'bg-white/95');
      navbar.classList.add('bg-white/80');
    }
  });

  // --- Number Counter Animation with Intersection Observer ---
  const statsCounters = document.querySelectorAll('.stat-counter');
  let animated = false;

  const countUp = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 1800; // ms
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        el.textContent = `${prefix}${target}${suffix}`;
      } else {
        el.textContent = `${prefix}${Math.floor(current)}${suffix}`;
      }
    }, stepTime);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statsCounters.forEach(counter => countUp(counter));
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('statsSection');
  if (statsSection) {
    observer.observe(statsSection);
  }

  // --- BCA Curriculum Tabs Data & Switcher ---
  const semesterData = {
    1: {
      title: "Semester I - Foundation & Core Programming",
      badge: "Fundamental Skills",
      desc: "Lay a solid foundation in computer architecture, algorithmic thinking, and primary programming principles.",
      courses: [
        { code: "BCA101", title: "Fundamentals of Computers & IT", type: "Core Theory", credits: "4" },
        { code: "BCA102", title: "Problem Solving Using C Programming", type: "Core Theory", credits: "4" },
        { code: "BCA103", title: "Discrete Mathematical Structures", type: "Allied", credits: "3" },
        { code: "BCA104", title: "Office Automation & Digital Tools", type: "Skill Course", credits: "2" },
        { code: "BCA105P", title: "C Programming Lab (1:1 Hands-on)", type: "Practical", credits: "2" },
        { code: "BCA106P", title: "Digital Office Tools & Linux Lab", type: "Practical", credits: "2" }
      ],
      highlights: ["Strong base in C logic building", "Linux Terminal fundamentals", "Weekly coding challenges"]
    },
    2: {
      title: "Semester II - Object-Oriented Paradigms & Web Basics",
      badge: "Core Object-Oriented Dev",
      desc: "Advance into Object-Oriented design with C++ and master modern client-side web technologies.",
      courses: [
        { code: "BCA201", title: "Object Oriented Programming with C++", type: "Core Theory", credits: "4" },
        { code: "BCA202", title: "Data Structures Using C++", type: "Core Theory", credits: "4" },
        { code: "BCA203", title: "Web Design Essentials (HTML5, CSS3, JS)", type: "Core Theory", credits: "3" },
        { code: "BCA204", title: "Numerical & Statistical Methods", type: "Allied", credits: "3" },
        { code: "BCA205P", title: "Data Structures & C++ Lab", type: "Practical", credits: "2" },
        { code: "BCA206P", title: "Responsive Web Development Lab", type: "Practical", credits: "2" }
      ],
      highlights: ["Building responsive portfolio websites", "Stack, Queues, Trees implementation", "Algorithms benchmarking"]
    },
    3: {
      title: "Semester III - Database Systems & Java Enterprise",
      badge: "Database & Backend Intro",
      desc: "Delve into relational database engineering, SQL queries, and robust multi-threaded Java applications.",
      courses: [
        { code: "BCA301", title: "Database Management Systems (DBMS)", type: "Core Theory", credits: "4" },
        { code: "BCA302", title: "Core & Advanced Java Programming", type: "Core Theory", credits: "4" },
        { code: "BCA303", title: "Computer Networks & Protocols", type: "Core Theory", credits: "3" },
        { code: "BCA304", title: "Software Engineering & Agile Lifecycle", type: "Core Theory", credits: "3" },
        { code: "BCA305P", title: "Oracle SQL & MySQL Practical Lab", type: "Practical", credits: "2" },
        { code: "BCA306P", title: "Java Programming & GUI Lab", type: "Practical", credits: "2" }
      ],
      highlights: ["Relational Database Design with normalization", "JDBC Database connectivity", "Agile sprint simulation"]
    },
    4: {
      title: "Semester IV - Python, Operating Systems & Full Stack",
      badge: "Modern Scripting & Systems",
      desc: "Explore Python for data and web development alongside core Operating Systems concepts.",
      courses: [
        { code: "BCA401", title: "Python Programming & Packages", type: "Core Theory", credits: "4" },
        { code: "BCA402", title: "Operating Systems & Shell Scripting", type: "Core Theory", credits: "4" },
        { code: "BCA403", title: "Full Stack Web Tech (React, Node, Express)", type: "Core Theory", credits: "4" },
        { code: "BCA404", title: "Cloud Fundamentals & AWS", type: "Elective", credits: "3" },
        { code: "BCA405P", title: "Python Data Processing Lab", type: "Practical", credits: "2" },
        { code: "BCA406P", title: "Full Stack Application Project Lab", type: "Practical", credits: "2" }
      ],
      highlights: ["RESTful API development with Express", "Python automation scripts", "AWS Cloud EC2 & S3 deployment"]
    },
    5: {
      title: "Semester V - AI, Machine Learning & Mobile Applications",
      badge: "Emerging Technologies",
      desc: "Master artificial intelligence concepts, mobile app development (Android/Flutter), and advanced software testing.",
      courses: [
        { code: "BCA501", title: "Artificial Intelligence & Machine Learning", type: "Core Theory", credits: "4" },
        { code: "BCA502", title: "Mobile Application Development", type: "Core Theory", credits: "4" },
        { code: "BCA503", title: "Information Security & Cryptography", type: "Core Theory", credits: "3" },
        { code: "BCA504", title: "DevOps & CI/CD Pipeline Practices", type: "Elective", credits: "3" },
        { code: "BCA505P", title: "AI & ML Algorithms Lab with Python", type: "Practical", credits: "2" },
        { code: "BCA506P", title: "Mobile App Development Lab", type: "Practical", credits: "2" }
      ],
      highlights: ["Machine learning models using scikit-learn", "Native & Cross-platform Android Apps", "Industry mini-projects"]
    },
    6: {
      title: "Semester VI - Capstone Project, Cyber Security & Industry Internship",
      badge: "Industry Readiness",
      desc: "Industry immersion semester comprising major capstone projects, cloud architectures, and campus recruitment drills.",
      courses: [
        { code: "BCA601", title: "Cyber Security & Ethical Hacking", type: "Core Theory", credits: "4" },
        { code: "BCA602", title: "Big Data & Business Analytics", type: "Elective", credits: "3" },
        { code: "BCA603", title: "Entrepreneurship & Intellectual Property", type: "Core Theory", credits: "2" },
        { code: "BCA604", title: "Major Capstone Software Project", type: "Project Work", credits: "6" },
        { code: "BCA605", title: "Mandatory Corporate Internship / Viva", type: "Internship", credits: "4" },
        { code: "BCA606", title: "Comprehensive Aptitude & Soft Skills", type: "Certification", credits: "2" }
      ],
      highlights: ["Live industry client project", "Mock HR & Technical interview marathons", "Patent & paper publication mentoring"]
    }
  };

  const curriculumTabs = document.querySelectorAll('.curriculum-tab');
  const curriculumDisplay = document.getElementById('curriculumDisplay');

  function renderSemester(semNumber) {
    const sem = semesterData[semNumber];
    if (!sem || !curriculumDisplay) return;

    let coursesHtml = sem.courses.map(course => `
      <tr class="border-b border-orange-100/60 hover:bg-orange-50/40 transition">
        <td class="py-3 px-4 text-xs font-mono font-bold text-orange-600">${course.code}</td>
        <td class="py-3 px-4 font-medium text-slate-800">${course.title}</td>
        <td class="py-3 px-4">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            course.type.includes('Practical') ? 'bg-orange-100 text-orange-800' : 'bg-slate-100 text-slate-700'
          }">
            ${course.type}
          </span>
        </td>
        <td class="py-3 px-4 text-center font-semibold text-slate-700">${course.credits}</td>
      </tr>
    `).join('');

    let highlightsHtml = sem.highlights.map(item => `
      <li class="flex items-center gap-2 text-sm text-slate-600">
        <span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
        ${item}
      </li>
    `).join('');

    curriculumDisplay.innerHTML = `
      <div class="bg-white rounded-2xl border border-orange-200/80 p-6 md:p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
          <div>
            <div class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 mb-2">
              ${sem.badge}
            </div>
            <h3 class="text-2xl font-bold text-slate-900">${sem.title}</h3>
            <p class="text-slate-500 text-sm mt-1">${sem.desc}</p>
          </div>
          <button onclick="openModal('syllabusModal')" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-orange-600 bg-orange-50 hover:bg-orange-100 border border-orange-200 transition">
            <i data-lucide="file-down" class="w-4 h-4"></i> Download Full Syllabus
          </button>
        </div>

        <div class="overflow-x-auto mt-6">
          <table class="w-full text-left text-sm text-slate-600">
            <thead class="bg-orange-50/70 text-xs uppercase text-slate-700 font-semibold rounded-lg">
              <tr>
                <th class="py-3 px-4 rounded-l-lg">Course Code</th>
                <th class="py-3 px-4">Subject / Course Name</th>
                <th class="py-3 px-4">Type</th>
                <th class="py-3 px-4 rounded-r-lg text-center">Credits</th>
              </tr>
            </thead>
            <tbody>
              ${coursesHtml}
            </tbody>
          </table>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">Key Learning Outcomes:</span>
            <ul class="flex flex-wrap gap-x-6 gap-y-1">
              ${highlightsHtml}
            </ul>
          </div>
          <div class="text-xs text-slate-400">
            *RCUB Belagavi NEP 2020 Model Curriculum
          </div>
        </div>
      </div>
    `;

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  curriculumTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      curriculumTabs.forEach(t => t.classList.remove('active', 'bg-orange-500', 'text-white'));
      tab.classList.add('active');
      const sem = tab.getAttribute('data-sem');
      renderSemester(sem);
    });
  });

  // Render initial semester 1
  renderSemester(1);

  // --- Photo Gallery Filtering ---
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => {
        b.classList.remove('bg-orange-500', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
      });
      btn.classList.add('bg-orange-500', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --- Lightbox Feature for Gallery ---
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  window.openLightbox = function(src, caption) {
    if (!lightboxModal) return;
    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    lightboxModal.classList.add('active');
    document.body.classList.add('overflow-hidden');
  };

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
      document.body.classList.remove('overflow-hidden');
    });
  }

  // --- Notice Board Filter ---
  const noticeFilterBtns = document.querySelectorAll('.notice-filter-btn');
  const noticeItems = document.querySelectorAll('.notice-card');
  const noticeSearchInput = document.getElementById('noticeSearchInput');

  function filterNotices() {
    const activeBtn = document.querySelector('.notice-filter-btn.active');
    const filter = activeBtn ? activeBtn.getAttribute('data-notice-filter') : 'all';
    const query = noticeSearchInput ? noticeSearchInput.value.toLowerCase().trim() : '';

    noticeItems.forEach(card => {
      const cardType = card.getAttribute('data-type');
      const text = card.textContent.toLowerCase();
      const matchesFilter = (filter === 'all' || cardType === filter);
      const matchesQuery = query === '' || text.includes(query);

      if (matchesFilter && matchesQuery) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  noticeFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      noticeFilterBtns.forEach(b => {
        b.classList.remove('active', 'border-orange-500', 'text-orange-600', 'bg-orange-50');
        b.classList.add('text-slate-600', 'border-transparent');
      });
      btn.classList.add('active', 'border-orange-500', 'text-orange-600', 'bg-orange-50');
      btn.classList.remove('text-slate-600', 'border-transparent');
      filterNotices();
    });
  });

  if (noticeSearchInput) {
    noticeSearchInput.addEventListener('input', filterNotices);
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (trigger && answer) {
      trigger.addEventListener('click', () => {
        const isOpen = !answer.classList.contains('hidden');
        
        // Close all other faqs
        faqItems.forEach(other => {
          other.querySelector('.faq-answer').classList.add('hidden');
          const otherIcon = other.querySelector('.faq-icon');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        });

        if (!isOpen) {
          answer.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });

  // --- Admission & Quick Enquiry Form Handling ---
  const admissionForm = document.getElementById('admissionEnquiryForm');
  const modalEnquiryForm = document.getElementById('modalEnquiryForm');

  function handleFormSubmit(form, e) {
    e.preventDefault();
    const formData = new FormData(form);
    const fullName = formData.get('fullName') || 'Student';
    const phone = formData.get('phone') || '';
    const email = formData.get('email') || '';
    const stream = formData.get('stream') || 'Science/Commerce';

    // Generate random application ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const appId = `KLE-BCA-2026-${randomNum}`;

    // Fill in Success Modal
    document.getElementById('receiptApplicantName').textContent = fullName;
    document.getElementById('receiptAppId').textContent = appId;
    document.getElementById('receiptPhone').textContent = phone;
    document.getElementById('receiptEmail').textContent = email;
    document.getElementById('receiptStream').textContent = stream;

    // Reset form
    form.reset();

    // Close any open enquiry modal
    closeModal('applyModal');

    // Open Success Receipt Modal
    openModal('admissionSuccessModal');

    showToast(`Application submitted! Ref ID: ${appId}`);
  }

  if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => handleFormSubmit(admissionForm, e));
  }
  if (modalEnquiryForm) {
    modalEnquiryForm.addEventListener('submit', (e) => handleFormSubmit(modalEnquiryForm, e));
  }

  // --- Toast Notification Helper ---
  window.showToast = function(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMessage');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  };

  // --- Generic Modal Controls ---
  window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.classList.add('overflow-hidden');
    }
  };

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.classList.remove('overflow-hidden');
    }
  };

  // Close modals on Escape key or backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.classList.remove('overflow-hidden');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active').forEach(m => {
        m.classList.remove('active');
      });
      document.body.classList.remove('overflow-hidden');
    }
  });

  // --- Testimonial Slider Controls ---
  const testimonials = [
    {
      name: "Rohit Patil",
      batch: "Class of 2024",
      role: "Associate Software Engineer @ TCS",
      package: "₹4.80 LPA",
      quote: "The hands-on coding labs and mentor support at KLE BCA Gokak gave me the confidence to crack technical rounds in my very first campus interview. Gokak now has world-class tech training right here!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Pooja Kulkarni",
      batch: "Class of 2023",
      role: "Cloud Support Associate @ Wipro",
      package: "₹4.50 LPA",
      quote: "KLE Society's educational standard is unmatched. The value-added certifications in AWS Cloud and Python helped bridge the gap between syllabus and IT industry expectations.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Sagar Shinde",
      batch: "Class of 2025 (Placed)",
      role: "Full Stack Developer @ Capgemini",
      package: "₹5.25 LPA",
      quote: "The 1:1 computer ratio in labs and regular tech fests like TECHSPARK gave us the platform to build real-world web apps. Proud to be a KLE Gokak BCA alumnus!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  ];

  let currentTestimonialIndex = 0;
  const testimonialContainer = document.getElementById('testimonialSlide');
  const prevTestimonialBtn = document.getElementById('prevTestimonial');
  const nextTestimonialBtn = document.getElementById('nextTestimonial');

  function updateTestimonial(index) {
    if (!testimonialContainer) return;
    const t = testimonials[index];
    testimonialContainer.innerHTML = `
      <div class="flex flex-col md:flex-row items-center gap-6 text-center md:text-left transition-all duration-300">
        <div class="relative">
          <img src="${t.avatar}" alt="${t.name}" class="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover border-4 border-orange-200 shadow-md">
          <span class="absolute -bottom-2 -right-2 bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Verified
          </span>
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-center md:justify-start gap-1 text-amber-500 mb-2">
            ${'<i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>'.repeat(5)}
          </div>
          <p class="text-slate-700 text-base md:text-lg italic font-normal mb-4">
            "${t.quote}"
          </p>
          <div>
            <h4 class="text-slate-900 font-bold text-lg">${t.name}</h4>
            <p class="text-orange-600 text-sm font-semibold">${t.role} <span class="text-slate-400 font-normal">| ${t.batch}</span></p>
            <div class="mt-1 inline-block px-2.5 py-0.5 rounded-md text-xs font-bold bg-green-50 text-green-700 border border-green-200">
              Offer Package: ${t.package}
            </div>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  if (prevTestimonialBtn && nextTestimonialBtn) {
    prevTestimonialBtn.addEventListener('click', () => {
      currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    });

    nextTestimonialBtn.addEventListener('click', () => {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    });

    updateTestimonial(0);
  }
});
