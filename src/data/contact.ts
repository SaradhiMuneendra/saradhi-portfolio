export interface ContactItem {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export const contactHeading = {
  eyebrow: 'GET IN TOUCH',
  title: "Let's Work Together",
  description: "I'm open to discussing new opportunities and interesting projects.",
};

export const contactInfo = {
  title: "Let's connect",
  description:
    'Looking for an experienced developer for your team? Feel free to reach out.',
};

export const contactItems: ContactItem[] = [
  {
    label: 'Phone',
    value: '+91 9701470975',
    href: 'tel:+919701470975',
  },
  {
    label: 'Email',
    value: 'saradhi975@gmail.com',
    href: 'mailto:saradhi975@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'Visit LinkedIn Profile',
    href: 'https://www.linkedin.com/in/saradhimuneendra/',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'Visit GitHub Profile',
    href: 'https://github.com/SaradhiMuneendra',
    external: true,
  },
];

export const resumeLink = {
  href: '/Senior-Angular-Developer.pdf',
  label: 'Download My Resume',
};

export const contactHighlights: string[] = [
  '9.6+ years of professional software development experience.',
  '8.5+ years of hands-on Angular development experience.',
  '3+ years of professional React development experience.',
  'Expertise in building scalable enterprise frontend applications.',
  'Strong experience in reusable components, state management and frontend architecture.',
  'Focused on responsive UI development, application performance and code quality.',
  'Experience developing AI-powered chatbot interfaces using React.',
];