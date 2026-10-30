const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '/portfolio' : '');

export const siteConfig = {
  name: 'Md Razib Ahmed Razu',
  fullName: 'Md Razib Ahmed Razu',
  title: 'WordPress & Laravel Developer | Software Engineer',
  tagline: 'High-performing WordPress architectures, scalable Laravel applications, and intelligent automation systems.',
  description:
    'Md Razib Ahmed Razu is a professional WordPress and Laravel developer with 3+ years of production experience engineering custom themes, plugins, high-speed WooCommerce platforms, and robust web applications for international clients.',
  url: 'https://razu21698.github.io/portfolio',
  email: 'md.razib.ahmed.razu5337@gmail.com',
  phone: '+880 1302-221426',
  whatsapp: '+880 1302-221426',
  whatsappUrl: 'https://wa.me/8801302221426',
  location: 'Bangladesh',
  timezone: 'GMT+6 (Flexible overlap with US, UK & European business hours)',
  availability: 'Available for contract roles & select client projects',
  cvUrl: `${basePath}/documents/Razib-Ahmed-Razu-CV.pdf`,
  social: {
    github: 'https://github.com/razu21698',
    linkedin: 'https://linkedin.com/in/ahmed-razu',
  },
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  stats: [
    { label: 'Production Years', value: '3+' },
    { label: 'Client Platforms Delivered', value: '15+' },
    { label: 'Core Specialities', value: 'WP & Laravel' },
    { label: 'Average LCP Target', value: '< 1.2s' },
  ],
};

