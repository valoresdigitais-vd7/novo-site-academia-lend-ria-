import React from 'react';

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

const PrivacyPage: React.FC = () => {
    return (
        <LegalPageLayout title="Política de Privacidade" lastUpdated="1 de Janeiro de 2024">
            <p>Bem-vindo à <strong>Academia Lendár[IA]</strong>. Esta Política de Privacidade tem como objetivo informar como coletamos, utilizamos, armazenamos e protegemos os seus dados pessoais ao acessar nosso site ou adquirir nossos produtos e serviços.</p>

            <h2>1. Coleta de Dados</h2>
            <p>Coletamos dados pessoais fornecidos diretamente por você quando se cadastra, realiza uma compra, assina nossa newsletter ou interage com o conteúdo da plataforma. Entre as informações coletadas podem estar: nome completo, e-mail, telefone, CPF, informações de pagamento e preferências de navegação.</p>
            <p>Também podemos coletar informações automaticamente através de cookies e tecnologias semelhantes, como endereço IP, tipo de navegador e páginas acessadas. Essas informações são utilizadas para melhorar sua experiência de navegação e personalizar conteúdos.</p>

            <h2>2. Uso das Informações</h2>
            <p>Os dados coletados têm as seguintes finalidades:</p>
            <ul>
                <li>Permitir o cadastro e acesso à plataforma da Comunidade Lendár[IA];</li>
                <li>Processar pagamentos e emitir notas fiscais;</li>
                <li>Enviar comunicações relacionadas à sua conta, serviços e atualizações;</li>
                <li>Fornecer suporte técnico e atendimento ao cliente;</li>
                <li>Personalizar ofertas e conteúdos de acordo com seu perfil;</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2>3. Compartilhamento de Dados</h2>
            <p>Não vendemos ou comercializamos seus dados pessoais. No entanto, poderemos compartilhar suas informações com parceiros e prestadores de serviço essenciais para a operação do site, como gateways de pagamento, plataformas de e-mail marketing e hospedagem. Todos os terceiros envolvidos seguem padrões de segurança e confidencialidade equivalentes aos nossos.</p>

            <h2>4. Armazenamento e Segurança</h2>
            <p>Os seus dados são armazenados em servidores seguros e acessíveis apenas por profissionais autorizados. Utilizamos tecnologias de criptografia, autenticação e monitoramento contínuo para proteger as informações contra acessos não autorizados, vazamentos ou alterações indevidas.</p>

            <h2>5. Seus Direitos</h2>
            <p>Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem direito de:</p>
            <ul>
                <li>Acessar os dados que temos sobre você;</li>
                <li>Solicitar correção ou exclusão das suas informações;</li>
                <li>Revogar consentimentos previamente concedidos;</li>
                <li>Solicitar a portabilidade dos dados a outro fornecedor.</li>
            </ul>
            <p>Para exercer qualquer um desses direitos, entre em contato conosco pelo e-mail: <a href="mailto:suporte@academialendaria.com">suporte@academialendaria.com</a>.</p>

            <h2>6. Retenção de Dados</h2>
            <p>Os dados pessoais serão mantidos durante todo o período em que você possuir vínculo ativo conosco e pelo tempo necessário para cumprir obrigações legais e contratuais. Após esse prazo, serão eliminados de forma segura.</p>

            <h2>7. Cookies</h2>
            <p>Utilizamos cookies para garantir o bom funcionamento do site, analisar métricas de uso e oferecer anúncios personalizados. Você pode gerenciar suas preferências de cookies diretamente no seu navegador, podendo desativá-los a qualquer momento.</p>

            <h2>8. Links Externos</h2>
            <p>Nosso site pode conter links para outros domínios. Não somos responsáveis pelas políticas de privacidade ou conteúdos de sites de terceiros, sendo recomendável que você leia as políticas de cada site acessado.</p>

            <h2>9. Alterações nesta Política</h2>
            <p>Poderemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas, exigências legais ou tecnológicas. A data da última atualização será sempre indicada no início deste documento.</p>

            <h2>10. Contato</h2>
            <p>Se você tiver dúvidas ou solicitações relacionadas a esta Política de Privacidade, entre em contato conosco por e-mail: <a href="mailto:suporte@academialendaria.com">suporte@academialendaria.com</a>.</p>

            <p>Ao utilizar nosso site e serviços, você declara estar ciente e concordar com os termos desta Política de Privacidade.</p>
        </LegalPageLayout>
    );
};

export default PrivacyPage;
