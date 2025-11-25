import React, { useState } from 'react';
import { 
  CheckCircle, 
  Zap, 
  Shield, 
  ChevronDown, 
  Users, 
  Target, 
  Heart, 
  Play, 
  Star, 
  Brain, 
  Lock 
} from 'lucide-react';

// --- CORES & TEMA (Hardcoded para garantir o visual Gold/Black) ---
const THEME = {
  bg: 'bg-black',
  bgSecondary: 'bg-[#0A0A0A]',
  bgTertiary: 'bg-[#111111]',
  textPrimary: 'text-[#FFD65D]', // Dourado Principal
  textSecondary: 'text-[#E7C66C]', // Dourado Secundário
  textMuted: 'text-neutral-400',
  textWhite: 'text-white',
  border: 'border-[#FFD65D]',
  borderMuted: 'border-[#333]',
  button: 'bg-[#FFD65D] hover:bg-[#E7C66C] text-black',
};

// --- DADOS MOCKADOS (Baseados no seu texto "Lendária") ---
const TESTIMONIALS = [
  {
    quote: "A comunidade mudou meu jogo. Implementei automações que me economizam 20h por semana.",
    author: "Ricardo M.",
    role: "Empresário",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    quote: "O conteúdo sobre 'Segundo Cérebro' vale mais que muito MBA por aí. ROI infinito.",
    author: "Ana Souza",
    role: "Consultora de Marketing",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    quote: "Já faturei 5x o valor do curso apenas aplicando o módulo de prospecção com IA.",
    author: "Felipe Costa",
    role: "Freelancer",
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"
  }
];

const FAQ_DATA = [
  {
    question: "O acesso é realmente vitalício?",
    answer: "Sim! Ao garantir sua vaga hoje, você recebe acesso eterno à Comunidade Lendár[IA], a todos os 25 cursos atuais e a todas as atualizações futuras sem pagar nada a mais."
  },
  {
    question: "Serve para quem não sabe nada de programação?",
    answer: "Com certeza. O foco da Academia é a aplicação prática de IA para negócios e produtividade (No-Code). Ensinamos do zero ao avançado."
  },
  {
    question: "Como funciona a garantia?",
    answer: "Você tem 7 dias para testar tudo. Se não gostar da comunidade, das aulas ou da metodologia, devolvemos 100% do seu dinheiro. O risco é todo nosso."
  },
  {
    question: "Quais ferramentas vou aprender?",
    answer: "Abordamos as principais IAs do mercado: ChatGPT, Midjourney, Claude, automações com Zapier/Make e muito mais."
  }
];

// --- COMPONENTES ---

// InlineCheckoutForm Component
const InlineCheckoutForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        // Simulação de API
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
    };

    return (
        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    required
                    className="flex-grow px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#333] text-white focus:ring-2 focus:ring-[#FFD65D] focus:outline-none focus:border-transparent transition-all"
                    disabled={status === 'loading' || status === 'success'}
                />
                <button
                    type="submit"
                    className={`${THEME.button} font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed`}
                    disabled={status === 'loading' || status === 'success'}
                >
                    {status === 'loading' ? 'Processando...' : status === 'success' ? 'Vaga Garantida!' : 'Entrar na Lista'}
                </button>
            </div>
            {status === 'success' && (
                <p className="mt-3 text-sm text-green-400 font-medium">
                    Sucesso! Verifique seu e-mail para os próximos passos.
                </p>
            )}
        </form>
    );
};

// --- BLOCO 1: HERO (ATENÇÃO) ---
const HeroSection: React.FC = () => (
    <section className={`relative py-24 md:py-32 ${THEME.bg} overflow-hidden`}>
        {/* Background Radial Effect */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(255,214,93,0.15),_rgba(0,0,0,0)_70%)]"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10 items-center text-center">
                <div className="max-w-4xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#FFD65D]/10 border border-[#FFD65D]/20 text-[#FFD65D] text-sm font-semibold mb-6 tracking-wide uppercase">
                        Oferta Exclusiva • Acesso Vitalício
                    </span>
                    <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight ${THEME.textPrimary} drop-shadow-lg`}>
                        Última Compra de IA <br />
                        <span className="text-white">da Sua Vida</span>
                    </h1>
                    <p className={`mt-6 text-lg md:text-xl ${THEME.textSecondary} max-w-2xl mx-auto leading-relaxed`}>
                        Pare de comprar cursos soltos. Garanta acesso vitalício à <strong>Comunidade Lendár[IA]</strong> + 25 cursos completos e domine o futuro dos negócios.
                    </p>
                    
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className={`${THEME.button} px-8 py-4 rounded-lg text-lg font-bold shadow-[0_0_20px_rgba(255,214,93,0.3)] transition-all hover:shadow-[0_0_30px_rgba(255,214,93,0.5)]`}>
                            Garantir Acesso Eterno
                        </button>
                        <p className="text-sm text-neutral-500 mt-2 sm:mt-0">
                            A partir de 12x R$138,80
                        </p>
                    </div>
                </div>

                {/* Video Placeholder */}
                <div className="w-full max-w-4xl mt-8">
                    <div className="aspect-video rounded-xl border border-[#333] bg-[#111] shadow-2xl overflow-hidden relative group cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-[#FFD65D]/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play className="w-8 h-8 text-black fill-black ml-1" />
                            </div>
                        </div>
                        {/* Imagem de Capa Simulada */}
                        <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-black opacity-50"></div>
                        <p className="absolute bottom-6 left-6 text-white font-bold text-xl">Veja como a plataforma funciona</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- BLOCO 2: PROBLEMA & SOLUÇÃO (INTERESSE) ---
const ProblemSolutionSection: React.FC = () => (
    <section className={`py-20 ${THEME.bgSecondary}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                
                {/* O Problema */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white">
                        Você sente que está <span className="text-red-500">ficando para trás?</span>
                    </h2>
                    <p className={`${THEME.textMuted} text-lg leading-relaxed`}>
                        O mercado evolui numa velocidade assustadora. Enquanto alguns usam IA para trabalhar 10x mais rápido, a maioria continua travada, perdendo tempo com tarefas manuais e comprando cursos desatualizados.
                    </p>
                    <ul className="space-y-4 mt-4">
                        {[
                            "Excesso de informações desconexas",
                            "Ferramentas complexas sem guia prático",
                            "Medo de se tornar irrelevante no mercado"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center text-neutral-300">
                                <span className="text-red-500 mr-3">✕</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* A Solução */}
                <div className={`p-8 rounded-2xl border border-[#FFD65D]/30 bg-[#151515] relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#FFD65D] opacity-10 blur-3xl rounded-full"></div>
                    
                    <h2 className={`text-3xl font-bold ${THEME.textPrimary}`}>
                        A Academia Lendár[IA]
                    </h2>
                    <p className={`${THEME.textSecondary} mt-4 text-lg`}>
                        Não é apenas um curso. É um ecossistema completo para você dominar a Inteligência Artificial e aplicá-la no seu negócio.
                    </p>
                    
                    <div className="mt-8 grid grid-cols-1 gap-4">
                        <div className="flex items-start bg-black/40 p-4 rounded-lg border border-[#333]">
                            <Brain className="text-[#FFD65D] w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <h4 className="text-white font-bold">Método Segundo Cérebro</h4>
                                <p className="text-neutral-400 text-sm">Organize sua vida digital e nunca mais esqueça uma ideia.</p>
                            </div>
                        </div>
                        <div className="flex items-start bg-black/40 p-4 rounded-lg border border-[#333]">
                            <Users className="text-[#FFD65D] w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <h4 className="text-white font-bold">Comunidade de Elite</h4>
                                <p className="text-neutral-400 text-sm">Networking com profissionais que estão no campo de batalha.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

// --- BLOCO 3: BENEFÍCIOS (DESEJO) ---
const BenefitsSection: React.FC = () => (
    <section className={`py-24 ${THEME.bg}`}>
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
                O que você recebe no <span className={THEME.textPrimary}>Acesso Vitalício</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: <Target className="w-10 h-10" />, title: "25+ Cursos Completos", desc: "Do básico ao avançado em IA, Automação, Design e Copywriting." },
                    { icon: <Shield className="w-10 h-10" />, title: "Certificados Oficiais", desc: "Validação profissional para cada trilha de conhecimento concluída." },
                    { icon: <Zap className="w-10 h-10" />, title: "Atualizações Semanais", desc: "O mercado muda rápido. Nós mantemos você sempre à frente." },
                    { icon: <Users className="w-10 h-10" />, title: "Networking Premium", desc: "Conecte-se com empresários e especialistas de 40 países." },
                    { icon: <Lock className="w-10 h-10" />, title: "Materiais Exclusivos", desc: "Prompts prontos, templates de Notion e scripts de automação." },
                    { icon: <Star className="w-10 h-10" />, title: "Suporte Prioritário", desc: "Equipe dedicada para tirar suas dúvidas técnicas e estratégicas." }
                ].map((item, idx) => (
                    <div key={idx} className="group p-8 bg-[#111] rounded-xl border border-[#222] hover:border-[#FFD65D] transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFD65D]/10 text-[#FFD65D] group-hover:bg-[#FFD65D] group-hover:text-black transition-colors">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-neutral-400">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// --- BLOCO 4: PROVA SOCIAL ---
const StatsSection: React.FC = () => (
    <section className="py-12 border-y border-[#222] bg-[#050505]">
        <div className="container mx-auto px-4 flex flex-wrap justify-around items-center gap-8 text-center">
            <div>
                <p className={`text-4xl font-extrabold ${THEME.textPrimary}`}>10.000+</p>
                <p className="text-neutral-400 text-sm uppercase tracking-widest mt-2">Alunos Ativos</p>
            </div>
            <div>
                <p className={`text-4xl font-extrabold ${THEME.textPrimary}`}>40</p>
                <p className="text-neutral-400 text-sm uppercase tracking-widest mt-2">Países</p>
            </div>
            <div>
                <p className={`text-4xl font-extrabold ${THEME.textPrimary}`}>R$ 127 Mi</p>
                <p className="text-neutral-400 text-sm uppercase tracking-widest mt-2">Gerados (Estimado)</p>
            </div>
        </div>
    </section>
);

const TestimonialsSection: React.FC = () => (
    <section className={`py-24 ${THEME.bgSecondary}`}>
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Quem aplica, <span className={THEME.textPrimary}>tem resultado</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="bg-[#111] p-8 rounded-xl border border-[#222] relative">
                        <div className="flex text-[#FFD65D] mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD65D" />)}
                        </div>
                        <p className="text-neutral-300 italic mb-6">"{t.quote}"</p>
                        <div className="flex items-center gap-4">
                            <img src={t.avatarUrl} alt={t.author} className="w-12 h-12 rounded-full border-2 border-[#FFD65D]" />
                            <div>
                                <p className="text-white font-bold text-sm">{t.author}</p>
                                <p className="text-neutral-500 text-xs">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// --- BLOCO 5: OFERTA (AÇÃO) ---
const PricingSection: React.FC = () => (
    <section id="pricing" className={`py-24 ${THEME.bg} relative`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,214,93,0.1),_rgba(0,0,0,0)_60%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto bg-[#111] border border-[#FFD65D] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,214,93,0.15)]">
                <div className="bg-[#FFD65D] py-3 text-center">
                    <p className="text-black font-extrabold text-sm uppercase tracking-widest">Oferta por Tempo Limitado</p>
                </div>
                
                <div className="p-8 md:p-12 text-center">
                    <h3 className="text-3xl font-bold text-white">Plano Vitalício Lendár[IA]</h3>
                    <p className="text-neutral-400 mt-2">Pague uma vez, tenha acesso para sempre.</p>
                    
                    <div className="my-8">
                        <p className="text-neutral-500 line-through text-lg">De R$ 2.997,00</p>
                        <div className="flex justify-center items-end gap-2 text-[#FFD65D]">
                            <span className="text-2xl font-bold mb-2">12x de</span>
                            <span className="text-6xl font-extrabold">R$ 138,80</span>
                        </div>
                        <p className="text-white mt-2">ou R$ 1.397,00 à vista</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 text-left max-w-lg mx-auto mb-8">
                        {[
                            "Acesso Vitalício a TUDO", 
                            "25+ Cursos Completos", 
                            "Comunidade Premium", 
                            "Lives Semanais",
                            "Certificados Oficiais",
                            "Garantia de 7 Dias"
                        ].map((feat, i) => (
                            <div key={i} className="flex items-center text-neutral-300">
                                <CheckCircle className="text-[#FFD65D] w-5 h-5 mr-2 flex-shrink-0" />
                                <span>{feat}</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full md:w-auto bg-[#FFD65D] hover:bg-[#E7C66C] text-black font-bold text-xl py-4 px-12 rounded-xl transition-transform hover:scale-105 shadow-lg">
                        Quero Meu Acesso Agora
                    </button>
                    
                    <div className="mt-6 flex justify-center items-center gap-2 text-sm text-neutral-500">
                        <Shield className="w-4 h-4" />
                        <span>Pagamento 100% Seguro • Acesso Imediato</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- BLOCO 6: FAQ & FOOTER ---
const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className={`py-20 ${THEME.bgSecondary}`}>
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center text-white mb-10">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    {FAQ_DATA.map((item, index) => (
                        <div key={index} className="bg-[#111] border border-[#333] rounded-lg overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-5 text-left text-white hover:bg-[#1A1A1A] transition-colors"
                            >
                                <span className="font-medium">{item.question}</span>
                                <ChevronDown className={`w-5 h-5 text-[#FFD65D] transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            {openIndex === index && (
                                <div className="p-5 pt-0 text-neutral-400 border-t border-[#333] mt-2">
                                    <p className="mt-4">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer: React.FC = () => (
    <footer className="py-10 bg-black border-t border-[#222] text-center">
        <div className="container mx-auto px-4">
            <p className="text-[#FFD65D] font-bold text-xl mb-4">LENDÁR[IA]</p>
            <p className="text-neutral-600 text-sm">
                &copy; {new Date().getFullYear()} Academia Lendária. Todos os direitos reservados.
            </p>
            <div className="flex justify-center gap-6 mt-6 text-neutral-500 text-sm">
                <a href="#" className="hover:text-white">Termos de Uso</a>
                <a href="#" className="hover:text-white">Políticas de Privacidade</a>
            </div>
        </div>
    </footer>
);

// --- COMPONENTE PRINCIPAL ---
const LandingPage: React.FC = () => {
  return (
    <div className="font-sans antialiased selection:bg-[#FFD65D] selection:text-black">
      <HeroSection />
      <StatsSection />
      <ProblemSolutionSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      
      {/* Seção CTA Final (Recuperação) */}
      <section className="py-20 bg-[#FFD65D]">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
                  Pronto para transformar seu futuro?
              </h2>
              <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
                  Junte-se a milhares de profissionais que estão liderando a revolução da IA.
              </p>
              <InlineCheckoutForm />
          </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
