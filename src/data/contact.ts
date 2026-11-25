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
  '9.6 years of software development experience.',
  'Enterprise Angular application expertise.',
  'Frontend and backend development experience.',
  'Experience with scalable application architecture.',
  'Strong focus on maintainable and reusable code.',
];