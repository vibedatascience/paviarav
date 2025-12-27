# Project: Pavithra Aravindan - UX Designer Portfolio

## Context
Build 5 visually distinct portfolio websites for a Senior UX Designer at Amazon. Same content, different aesthetics. Frontend only.

## Tech Stack
- Plain HTML, CSS, JavaScript
- No frameworks, no build tools
- Single CSS file per site
- Minimal JS (only for interactions like mobile menu)

## File Structure
```
/site-1-minimal/
  index.html
  about.html
  contact.html
  project-1.html
  project-2.html
  styles.css
  /images/ (placeholder images)

/site-2-dark/
  [same structure]

/site-3-editorial/
  [same structure]

/site-4-warm/
  [same structure]

/site-5-geometric/
  [same structure]
```

## Design Direction for Each Site

### Site 1: Clean White Minimal
- Lots of whitespace, refined typography
- Light grey accents, subtle shadows
- Font pairing: serif headings + clean sans body
- Restrained, Apple-like elegance
- No decorative elements

### Site 2: Dark Mode Elegant
- Deep charcoal/near-black background
- Warm accent color (gold or coral)
- Sophisticated, luxury feel
- Subtle gradients, refined shadows
- Font: elegant sans-serif

### Site 3: Editorial/Magazine
- Asymmetric layouts, overlapping elements
- Bold display typography
- Mix of large/small text sizes
- Grid-breaking compositions
- Black + one accent color
- Newspaper/editorial inspiration

### Site 4: Warm/Organic
- Soft cream/warm white background
- Earthy tones (terracotta, sage, warm browns)
- Rounded corners, soft shadows
- Approachable, human feel
- Handwritten or humanist fonts

### Site 5: Bold Geometric
- High contrast (black/white + bright accent)
- Sharp geometric shapes
- Strong grid, angular elements
- Brutalist-adjacent
- Striking, memorable

## Pages & Content

### Home (index.html)
Header: Name, Nav (Home, About, Contact)

Hero:
- Name: Pavithra Aravindan
- Bio: "I am an AI/UX designer based in New York City. I manage a team of 4 junior to senior UX Designers at Amazon. I design AI-powered complex systems and generative AI tools that help millions of Amazon sellers, brands and customer service work smarter."

Project Cards (2):
1. "Transforming Amazon Operations Efficiency with AI, Data and Guided Workspace"
   - Subtitle: "Reimagined support issue resolution tool"
   - Link to project-1.html
   - Placeholder image

2. "AI-powered Amazon Seller Support"
   - Subtitle: "Unified Support experience and connecting with Customer Support through Selling Assistant"
   - Link to project-2.html
   - Placeholder image

Section: UX/AI at Amazon
- Building complex AI service tools at Amazon Support
- Customer Experience Outcomes (CXO) and strategy for Amazon Support
- Global research in India, Costa Rica and US

Section: Media
- Published a product design paper to HCI, ACM, Google Scholar, 2016
- Speaker at O'Reilly Design Conference, 2016
- Buzzfeed interview, 2021
- Voyage Austin interview, 2022
- Migrationology podcast, 2022
- Keynote Speaker at UX+BA Istanbul Conference, 2024
- Speaker at Amazon Design Conference, 2024
- Published 50+ articles for Design+Sketch, UX collective, UX planet and more

Section: Awards
- Amazon Day One Award, 2024
- Da Vinci Award, Amazon Design Summit, 2024
- Unconventional Genius Award, Amazon Design Summit, 2024
- Exemplar Award, Amazon Design Summit, 2024

Footer:
- Email: pavithra.aravindan@gmail.com
- Nav links

### About (about.html)
Header + Nav

Content:
"My passion for art started when I was 5 years old. I have been on the drawing board ever since. Coming from a family of Doctors and Engineers in India, I did not have enough support to pursue my hobby as a career. But, during my undergrad, I worked with many student organizations to create poster designs and websites. They made good pieces for my portfolio so I could apply for higher studies in design. And thus, my journey in design began!"

Section: What I do when I'm not working
"I'm cooking and creating videos for my food blog, pavsandpepper."
- I have made dishes from more than 60 different countries
- I share stories about my culture and food
- Placeholder image for Fiji ceviche

Footer

### Contact (contact.html)
Simple page with:
- Email: pavithra.aravindan@gmail.com
- Optional: simple contact form (non-functional, just HTML)

### Project 1 (project-1.html)
Title: Transforming Amazon Operations Efficiency with AI, Data and Guided Workspace
Subtitle: Reimagined support issue resolution tool

Meta:
- Role: Lead Product Designer
- Timeline: 9 months - October 2024 to June 2025

Sections (preserve all content from provided text):
- Use case overview
- Before/After comparison
- Impact metrics (22%, 78%, 18%)
- Users (40K+, 2M+, 5K+)
- Challenges
- Solution (3 panels)
- Goals (3 goals)
- Research section
- Customer Journey
- Requirements setting
- Visual design
- UI Design (placeholder images for mockups)
- Usability Testing
- Problem/Solution
- Learnings
- Next Steps
- Business Impact
- Additional use cases

Include placeholder divs for all images with grey background and text "Screenshot placeholder"

### Project 2 (project-2.html)
Title: AI-powered Amazon Seller Support
Subtitle: Unified Support experience and connecting with Customer Support through Selling Assistant

Meta:
- Role: Lead UX Designer
- Tools: Figma, Builder.io
- Team: 2 UX designers, 1 UX researcher, 3 product managers, 2 developers
- Timeline: January - September 2025

Impact metrics:
- 10M issue creation elimination
- $50M cost savings
- -50% Negative Response Rate

Sections:
- Scenario 1: Issue resolved through self-service
- Scenario 2: Issue resolved through human support
- Usability testing (10 sessions)

Placeholder images for scenarios

## Design Rules

### Typography
- NEVER use: Inter, Roboto, Arial, system-ui
- Each site uses a DIFFERENT font pairing
- Use Google Fonts
- Large, readable fonts
- Clear hierarchy

### Colors
- Each site has a distinct palette
- Use CSS variables for colors
- Strong contrast for readability

### Layout
- Mobile-first responsive
- Clean navigation
- Generous whitespace
- Project cards should be visually prominent
- Case study pages: clear sections, good reading rhythm

### Images
- All images are placeholders
- Use grey boxes with aspect ratios appropriate for mockups
- Format: `<div class="placeholder-image" style="aspect-ratio: 16/9;">Screenshot</div>`
- Style placeholders with light grey background (#E5E5E5), centered text

### Interactions
- Smooth scroll
- Subtle hover states on links and cards
- Mobile menu (hamburger) with JS toggle
- No heavy animations unless specified by site style

## Code Style
- No comments in code
- Clean, readable structure
- CSS organized by component/section
- Semantic HTML
- Accessibility: proper heading hierarchy, alt text placeholders, focus states

## Process
1. Build Site 1 first, get approval
2. Then create Sites 2-5, varying only CSS and minor HTML structure adjustments
3. Each site should feel like a completely different designer made it

## Questions to Ask
- Confirm before starting each new site variant
- Ask if any content needs updating
- Clarify if specific fonts or colors are preferred