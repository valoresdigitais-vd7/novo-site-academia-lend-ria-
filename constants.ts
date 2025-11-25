import type { Product, Testimonial, NavLink } from './types';

export const SITE_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'Blog', href: '/blog' }
];

export const LANDING_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'A Solução', href: '#problem-solution' },
  { name: 'Benefícios', href: '#benefits' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Planos', href: '#investment' },
  { name: 'FAQ', href: '#faq' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Acesso Vitalício – Público Geral',
    price: '12x de R$138,80 ou R$1388 à vista',
    features: [
      'Acesso para sempre à Comunidade Lendár[IA]',
      'Mais de 25 cursos completos sobre IA, negócios e mentalidade',
      'Atualizações e novos cursos inclusos',
      'E-books estratégicos de IA',
      'Bônus físicos exclusivos (para os primeiros compradores)',
      '7 dias de garantia incondicional'
    ],
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Plano Aluno – Desconto Especial',
    price: '12x de R$98,80 ou R$988 à vista',
    features: [
      'Todos os benefícios do acesso vitalício',
      'Desconto de 25% exclusivo para alunos',
      'Garantia total de reembolso de 7 dias',
      'Acesso antecipado a novos conteúdos'
    ],
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'A Comunidade Lendár[IA] mudou completamente minha forma de aplicar inteligência artificial nos negócios. Os resultados vieram muito rápido!',
    author: 'Fernanda Lopes',
    role: 'Empreendedora Digital',
    avatarUrl: 'https://picsum.photos/id/1005/100/100',
  },
  {
    quote: 'Em menos de 3 meses, consegui automatizar processos e aumentar o faturamento em 40% com as estratégias do Alan. Vale cada centavo!',
    author: 'Gustavo Menezes',
    role: 'CEO, SmartGrow',
    avatarUrl: 'https://picsum.photos/id/1016/100/100',
  },
  {
    quote: 'Já tinha feito vários cursos de IA, mas só aqui aprendi a aplicar de verdade nos meus projetos. Conteúdo prático e direto ao ponto.',
    author: 'Bruna Carvalho',
    role: 'Gestora de Projetos em IA',
    avatarUrl: 'https://picsum.photos/id/1027/100/100',
  }
];

export const FAQ_DATA = [
  {
    question: 'Já comprei outros cursos e não assisti. Por que aqui seria diferente?',
    answer: 'A Comunidade Lendár[IA] oferece acompanhamento contínuo, comunidade ativa e conteúdo atualizado. Você não estuda sozinho e tem suporte real para aplicar o que aprende.'
  },
  {
    question: 'É muito conteúdo. Vou ficar perdido?',
    answer: 'O acesso é vitalício e os cursos são estruturados em trilhas práticas. Você pode evoluir no seu ritmo, com guias de aprendizado e suporte direto da equipe.'
  },
  {
    question: 'Quais as formas de pagamento?',
    answer: 'Aceitamos cartão de crédito em até 12x, boleto e Pix. O checkout é 100% seguro e certificado.'
  },
  {
    question: 'Funciona no celular?',
    answer: 'Sim! Você pode acessar todo o conteúdo da plataforma pelo celular, tablet ou computador, de onde estiver.'
  },
  {
    question: 'Tenho garantia?',
    answer: 'Sim. Você tem 7 dias de garantia incondicional. Caso não se sinta satisfeito, devolvemos 100% do valor investido.'
  },
  {
    question: 'Por onde chega o acesso?',
    answer: 'Após a confirmação do pagamento, você recebe um e-mail com as credenciais de acesso e o link para entrar na comunidade.'
  },
  {
    question: 'Já sou aluno, tenho benefício?',
    answer: 'Sim! Alunos têm 25% de desconto e acesso antecipado a novos bônus e conteúdos da Black Friday Lendária.'
  }
];

export const FOOTER_LINKS = {
  company: {
    name: 'Academia Lendár[IA]',
    description: 'Transformando profissionais em referências com o poder da Inteligência Artificial.',
    cnpj: 'CNPJ: 45.678.910/0001-23',
    address: 'Porto Alegre/RS - Brasil',
  },
  support: [
    { name: 'contato@academialendaria.com', href: 'mailto:contato@academialendaria.com' },
    { name: 'Central de Ajuda', href: '#' },
  ],
  legal: [
    { name: 'Termos de Uso', href: '/termos-de-uso' },
    { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
    { name: 'Política de Reembolso', href: '/politica-de-reembolso' },
  ],
};
