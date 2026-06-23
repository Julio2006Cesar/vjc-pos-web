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
        { text: 'POS: Abarrotes y Retail', href: '/#abarrotes' },
        { text: 'POS: Restaurantes y Bares', href: '/#restaurantes' },
        { text: 'POS: Barberías y Estéticas', href: '/#barberias' },
        { text: 'Sistema GYM (Biométrico)', href: '/#gym' },
        { text: 'Software a la Medida', href: '/#features' },
      ],
    },
    {
      title: 'Contacto Directo',
      links: [
        { text: 'WhatsApp: 729 861 9743', href: 'https://wa.me/527298619743', target: '_blank' },
        { text: 'Ciudad Sahagún, Hidalgo', href: 'javascript:void(0)' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Aviso de Privacidad', href: '/privacy' },
    { text: 'Términos de Servicio', href: '/terms' },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/vjc_company?igsh=MWhydnFubXEwdGprZw==' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/527298619743' },
  ],
  footNote: `© 2026 VJC S.A. de C.V. — Tecnología de uso rudo para negocios en Hidalgo.`,
};