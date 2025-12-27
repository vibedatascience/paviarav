const SITE_DATA = {
  name: "Pavithra Aravindan",
  email: "pavithra.aravindan@gmail.com",

  bio: "I am an AI/UX designer based in New York City. I manage a team of 4 junior to senior UX Designers at Amazon. I design AI-powered complex systems and generative AI tools that help millions of Amazon sellers, brands and customer service work smarter.",

  nav: [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "Contact", href: "contact.html" }
  ],

  projects: [
    {
      id: 1,
      title: "Transforming Amazon Operations Efficiency with AI, Data and Guided Workspace",
      subtitle: "Reimagined support issue resolution tool",
      href: "project-1.html",
      role: "Lead Product Designer",
      timeline: "9 months - October 2024 to June 2025"
    },
    {
      id: 2,
      title: "AI-powered Amazon Seller Support",
      subtitle: "Unified Support experience and connecting with Customer Support through Selling Assistant",
      href: "project-2.html",
      role: "Lead UX Designer",
      tools: "Figma, Builder.io",
      team: "2 UX designers, 1 UX researcher, 3 product managers, 2 developers",
      timeline: "January - September 2025"
    }
  ],

  amazonWork: [
    "Building complex AI service tools at Amazon Support",
    "Customer Experience Outcomes (CXO) and strategy for Amazon Support",
    "Global research in India, Costa Rica and US"
  ],

  media: [
    "Published a product design paper to HCI, ACM, Google Scholar, 2016",
    "Speaker at O'Reilly Design Conference, 2016",
    "Buzzfeed interview, 2021",
    "Voyage Austin interview, 2022",
    "Migrationology podcast, 2022",
    "Keynote Speaker at UX+BA Istanbul Conference, 2024",
    "Speaker at Amazon Design Conference, 2024",
    "Published 50+ articles for Design+Sketch, UX collective, UX planet and more"
  ],

  awards: [
    "Amazon Day One Award, 2024",
    "Da Vinci Award, Amazon Design Summit, 2024",
    "Unconventional Genius Award, Amazon Design Summit, 2024",
    "Exemplar Award, Amazon Design Summit, 2024"
  ],

  about: {
    intro: "My passion for art started when I was 5 years old. I have been on the drawing board ever since. Coming from a family of Doctors and Engineers in India, I did not have enough support to pursue my hobby as a career. But, during my undergrad, I worked with many student organizations to create poster designs and websites. They made good pieces for my portfolio so I could apply for higher studies in design. And thus, my journey in design began!",
    hobby: {
      title: "What I do when I'm not working",
      text: "I'm cooking and creating videos for my food blog, pavsandpepper.",
      highlights: [
        "I have made dishes from more than 60 different countries",
        "I share stories about my culture and food"
      ]
    }
  },

  project1: {
    title: "Transforming Amazon Operations Efficiency with AI, Data and Guided Workspace",
    subtitle: "Reimagined support issue resolution tool",
    role: "Lead Product Designer",
    timeline: "9 months - October 2024 to June 2025",

    overview: "Amazon support associates handle millions of seller and brand inquiries daily. The existing tools were fragmented, requiring associates to navigate multiple systems, leading to longer resolution times and inconsistent experiences.",

    before: [
      "Multiple disconnected tools",
      "Manual data lookup across systems",
      "Inconsistent resolution paths",
      "High cognitive load on associates"
    ],

    after: [
      "Unified AI-powered workspace",
      "Automated data surfacing",
      "Guided resolution workflows",
      "Reduced cognitive load"
    ],

    impact: [
      { value: "22%", label: "Reduction in average handle time" },
      { value: "78%", label: "Associate satisfaction with new tools" },
      { value: "18%", label: "Improvement in first contact resolution" }
    ],

    users: [
      { value: "40K+", label: "Support associates globally" },
      { value: "2M+", label: "Seller contacts handled monthly" },
      { value: "5K+", label: "Brand contacts handled monthly" }
    ],

    challenges: [
      "Associates used 7+ different tools to resolve a single issue",
      "Critical information was buried in multiple databases",
      "No standardized workflow for common issue types",
      "Training new associates took months due to tool complexity"
    ],

    solution: [
      {
        title: "Unified Dashboard",
        description: "Single interface combining all necessary tools and data sources"
      },
      {
        title: "AI-Powered Insights",
        description: "Proactive surfacing of relevant information based on issue context"
      },
      {
        title: "Guided Workflows",
        description: "Step-by-step resolution paths tailored to specific issue types"
      }
    ],

    goals: [
      "Reduce average handle time by 20%",
      "Improve first contact resolution rate",
      "Decrease associate training time by 50%"
    ],

    research: {
      methods: [
        "Contextual inquiry with 50+ associates across 3 regions",
        "Task analysis of common issue resolution flows",
        "Stakeholder interviews with team leads and managers",
        "Competitive analysis of internal and external support tools"
      ],
      insights: [
        "Associates developed personal workarounds to compensate for tool limitations",
        "Information hierarchy didn't match mental models",
        "Most time was spent searching, not solving"
      ]
    },

    journey: "Mapped the end-to-end associate experience from issue receipt to resolution, identifying 12 key pain points and opportunities for AI assistance.",

    requirements: [
      "Must integrate with existing backend systems",
      "Real-time data synchronization",
      "Configurable workflows for different issue types",
      "Accessibility compliance (WCAG 2.1 AA)"
    ],

    visualDesign: "Developed a clean, focused design system prioritizing scannability and reducing visual noise. Used progressive disclosure to manage complexity.",

    usabilityTesting: {
      sessions: 25,
      participants: "Associates from US, India, and Costa Rica",
      findings: [
        "Initial layout caused confusion with priority ranking",
        "AI suggestions needed clearer confidence indicators",
        "Keyboard shortcuts significantly improved power user efficiency"
      ]
    },

    problemSolution: [
      {
        problem: "Associates couldn't quickly identify issue priority",
        solution: "Added visual priority indicators and sorting options"
      },
      {
        problem: "AI recommendations felt like black boxes",
        solution: "Added transparency layer showing reasoning behind suggestions"
      }
    ],

    learnings: [
      "Early and continuous user involvement prevented costly pivots",
      "AI features need transparency to build trust",
      "Regional differences in workflow preferences require flexibility"
    ],

    nextSteps: [
      "Expand AI capabilities to handle more complex issue types",
      "Develop mobile companion app for supervisors",
      "Integrate predictive analytics for workload management"
    ],

    businessImpact: [
      "Projected annual savings of $15M in operational costs",
      "Reduced associate turnover by 12%",
      "Improved seller satisfaction scores by 8 points"
    ],

    additionalUseCases: [
      "Customer service quality monitoring",
      "Training simulation environment",
      "Performance analytics dashboard"
    ]
  },

  project2: {
    title: "AI-powered Amazon Seller Support",
    subtitle: "Unified Support experience and connecting with Customer Support through Selling Assistant",
    role: "Lead UX Designer",
    tools: "Figma, Builder.io",
    team: "2 UX designers, 1 UX researcher, 3 product managers, 2 developers",
    timeline: "January - September 2025",

    impact: [
      { value: "10M", label: "Issue creation elimination" },
      { value: "$50M", label: "Cost savings" },
      { value: "-50%", label: "Negative Response Rate" }
    ],

    overview: "Designed a unified support experience that combines AI-powered self-service with seamless escalation to human support when needed.",

    scenario1: {
      title: "Issue resolved through self-service",
      description: "Sellers interact with an AI assistant that understands their context, pulls relevant account data, and provides personalized solutions without needing to create a support ticket.",
      steps: [
        "Seller describes issue in natural language",
        "AI identifies issue type and pulls relevant data",
        "Personalized solution presented with step-by-step guidance",
        "Seller confirms resolution"
      ]
    },

    scenario2: {
      title: "Issue resolved through human support",
      description: "When AI cannot resolve the issue, it seamlessly transitions to human support with full context, eliminating the need for sellers to repeat information.",
      steps: [
        "AI determines issue requires human intervention",
        "Full context and attempted solutions passed to associate",
        "Associate resolves issue with complete background",
        "Resolution logged for AI learning"
      ]
    },

    usabilityTesting: {
      sessions: 10,
      findings: [
        "Sellers appreciated not having to repeat information",
        "Trust in AI increased when it acknowledged limitations",
        "Clear escalation path reduced frustration"
      ]
    }
  }
};

function renderHeader() {
  return `
    <header class="site-header">
      <nav class="nav-container">
        <a href="index.html" class="logo">${SITE_DATA.name}</a>
        <button class="mobile-menu-btn" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links">
          ${SITE_DATA.nav.map(item => `<li><a href="${item.href}">${item.label}</a></li>`).join('')}
        </ul>
      </nav>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-content">
        <a href="mailto:${SITE_DATA.email}" class="footer-email">${SITE_DATA.email}</a>
        <nav class="footer-nav">
          ${SITE_DATA.nav.map(item => `<a href="${item.href}">${item.label}</a>`).join('')}
        </nav>
      </div>
    </footer>
  `;
}

function renderPlaceholderImage(aspectRatio = "16/9", text = "Screenshot") {
  return `<div class="placeholder-image" style="aspect-ratio: ${aspectRatio};">${text}</div>`;
}

function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav-links');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
      btn.classList.toggle('open');
    });
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSmoothScroll();
});
