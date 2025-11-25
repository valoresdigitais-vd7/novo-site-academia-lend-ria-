import React from 'react';
import { Link } from 'react-router-dom';

// NOTE: A real cookie banner would have state management and logic to set cookies.
// This is a visual placeholder.
const CookieConsentBanner: React.FC = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center z-50">
        <p className="text-sm">Nós usamos cookies para melhorar sua experiência. Ao continuar a navegar, você concorda com nosso uso de cookies.</p>
        <div className="flex gap-2 mt-2 sm:mt-0">
            <button className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold">Aceitar</button>
            <Link to="/politica-de-cookies" className="px-4 py-2 rounded text-sm hover:bg-neutral-700">Saber mais</Link>
        </div>
    </div>
);

const LegalPageLayout: React.FC<{ title: string; lastUpdated: string; children: React.ReactNode }> = ({ title, lastUpdated, children }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-sm text-neutral-500 mb-6">Última atualização: {lastUpdated}</p>
            <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300">
                {children}
            </div>
        </div>
    </div>
);

const CookiesPage: React.FC = () => {
    return (
        <>
            <LegalPageLayout title="Política de Cookies – Academia Lendár[IA]" lastUpdated="1 de Novembro de 2024">
                <h2>1. Introdução</h2>
                <p>
                    A <strong>Academia Lendár[IA]</strong>, disponível em <a href="https://academia-lendas.valoresdigitais.com" target="_blank" rel="noopener noreferrer">academia-lendas.valoresdigitais.com</a>,
                    utiliza cookies e tecnologias semelhantes para melhorar o desempenho do site, personalizar sua experiência e compreender o comportamento de navegação dos visitantes.
                </p>

                <h2>2. O que são Cookies?</h2>
                <p>
                    Cookies são pequenos arquivos de texto armazenados no dispositivo do usuário quando ele visita o site. Estes arquivos contêm informações que ajudam a identificar o visitante e suas preferências, facilitando a navegação e tornando a interação mais eficiente.
                </p>

                <h2>3. Tipos de Cookies Utilizados</h2>
                <ul>
                    <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site e para permitir o acesso seguro a áreas restritas.</li>
                    <li><strong>Cookies de Desempenho:</strong> Coletam dados sobre como os visitantes usam o site, ajudando-nos a melhorar conteúdo e funcionalidade.</li>
                    <li><strong>Cookies de Funcionalidade:</strong> Permitem lembrar suas preferências, como idioma e região, proporcionando uma navegação personalizada.</li>
                    <li><strong>Cookies de Marketing:</strong> Utilizados para exibir anúncios relevantes e medir a eficácia das nossas campanhas, inclusive durante promoções como a <em>Black Friday Lendária</em>.</li>
                </ul>

                <h2>4. Finalidade dos Cookies</h2>
                <p>
                    Os cookies são utilizados para:
                </p>
                <ul>
                    <li>Garantir o correto funcionamento da plataforma e das áreas de membros da Comunidade Lendár[IA];</li>
                    <li>Personalizar o conteúdo de acordo com seus interesses em IA, negócios e ofertas de cursos;</li>
                    <li>Analisar métricas de navegação para aprimorar a experiência do usuário;</li>
                    <li>Exibir mensagens e descontos personalizados durante as campanhas promocionais.</li>
                </ul>

                <h2>5. Como Gerenciar ou Desativar Cookies</h2>
                <p>
                    Você pode gerenciar ou desativar os cookies diretamente nas configurações do seu navegador. No entanto, ao bloquear alguns tipos de cookies, determinadas funcionalidades do site podem ser comprometidas.
                </p>
                <p>
                    Consulte o suporte do seu navegador (Chrome, Firefox, Safari, Edge, etc.) para instruções específicas sobre o gerenciamento de cookies.
                </p>

                <h2>6. Cookies de Terceiros</h2>
                <p>
                    Poderemos permitir o uso de cookies de terceiros (como ferramentas do Google, Meta Ads e análise de tráfego) para fins de medição e publicidade, sempre respeitando as regras da <strong>Lei Geral de Proteção de Dados – LGPD</strong>.
                </p>

                <h2>7. Consentimento</h2>
                <p>
                    Ao clicar em “Aceitar” em nosso banner de cookies, você autoriza o uso de todas as categorias de cookies descritas nesta política. Caso queira alterar suas preferências, pode fazê-lo a qualquer momento, revisitando esta página ou as configurações do seu navegador.
                </p>

                <h2>8. Alterações nesta Política</h2>
                <p>
                    A <strong>Academia Lendár[IA]</strong> reserva-se o direito de atualizar esta Política de Cookies periodicamente, conforme evoluírem nossas práticas e tecnologias. Recomendamos verificar esta página regularmente para se manter informado.
                </p>

                <h2>9. Contato</h2>
                <p>
                    Em caso de dúvidas sobre esta política ou sobre o uso de cookies, entre em contato pelo e-mail: <a href="mailto:contato@valoresdigitais.com">contato@valoresdigitais.com</a>.
                </p>

                <p className="mt-6 text-sm italic">
                    Esta política faz parte do compromisso da Academia Lendár[IA] com a transparência e a segurança digital dos seus usuários.
                </p>
            </LegalPageLayout>
            <CookieConsentBanner />
        </>
    );
};

export default CookiesPage;
