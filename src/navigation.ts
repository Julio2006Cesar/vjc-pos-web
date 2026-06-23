import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Inicio', href: '/' },
    { text: 'Beneficios', href: '/#features' },
    { text: 'Instalación', href: '/#steps' },
    { text: 'Preguntas', href: '/#faqs' },
  ],
  actions: [{ text: 'Pedir Demo por WA', href: 'https://wa.me/527298619743', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Soluciones VJC',
      links: [
        { text: 'Punto de Venta (POS)', href: '/#features' },
        { text: 'Control para Gimnasios', href: '/#features' },
        { text: 'Software a la Medida', href: '/#features' },
      ],
    },
    {
      title: 'Contacto Directo',
      links: [
        { text: 'WhatsApp: 729 861 9743', href: 'https://wa.me/527298619743' },
        { text: 'Ciudad Sahagún, Hidalgo', href: 'https://wa.me/527298619743' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Aviso de Privacidad', href: '/privacy' },
    { text: 'Términos de Servicio', href: '/terms' },
    { text: 'Acceso a Métricas', href: 'https://analytics.google.com/' }, // <-- Aquí quedó tu link oculto
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/527298619743' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/' },
  ],
  footNote: `© 2026 VJC S.A. de C.V. — Tecnología de uso rudo para negocios en Hidalgo.`,
};
