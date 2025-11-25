
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


const TermsPage: React.FC = () => {
    return (
        <LegalPageLayout title="Termos de Uso – Academia Lendár[IA]" lastUpdated="1 de Novembro de 2024">
            <h2>1. Introdução</h2>
            <p>Bem-vindo à <strong>Academia Lendár[IA]</strong>, uma plataforma educacional dedicada à transformação de profissionais e empreendedores por meio da Inteligência Artificial. Ao acessar nosso site <em>academia-lendas.valoresdigitais.com</em> e utilizar nossos serviços, você concorda com os presentes Termos de Uso.</p>

            <h2>2. Aceitação dos Termos</h2>
            <p>Ao realizar sua inscrição, efetuar uma compra ou acessar qualquer parte da plataforma, o usuário declara que leu, entendeu e aceitou integralmente estes Termos de Uso, bem como nossa Política de Privacidade.</p>

            <h2>3. Descrição do Serviço</h2>
            <p>Nossa plataforma oferece acesso vitalício à <strong>Comunidade Lendár[IA]</strong> e a mais de 25 cursos voltados a Inteligência Artificial, negócios e mentalidade empreendedora. O usuário inscrito recebe login e senha para acesso aos conteúdos e atualizações futuras.</p>

            <h2>4. Condições de Compra</h2>
            <p>As ofertas e preços exibidos durante campanhas, como a <strong>Black Friday Lendária</strong>, são válidos por tempo limitado e podem incluir bônus e descontos exclusivos. Ao prosseguir para o checkout, o usuário deve revisar cuidadosamente as informações antes de finalizar o pagamento.</p>

            <h2>5. Contas e Segurança</h2>
            <p>O usuário é responsável por manter a confidencialidade de suas credenciais e por todas as atividades realizadas em sua conta. A Academia Lendár[IA] não se responsabiliza por acessos indevidos que resultem do compartilhamento de login e senha.</p>

            <h2>6. Garantia e Reembolsos</h2>
            <p>Oferecemos <strong>7 dias de garantia incondicional</strong>. Caso o aluno não se sinta satisfeito, o reembolso integral poderá ser solicitado dentro desse prazo, conforme previsto no Código de Defesa do Consumidor.</p>

            <h2>7. Direitos Autorais</h2>
            <p>Todos os conteúdos, textos, vídeos e materiais disponibilizados pela Academia Lendár[IA] são protegidos por direitos autorais. É expressamente proibida sua reprodução, distribuição ou comercialização sem autorização prévia e escrita do autor.</p>

            <h2>8. Responsabilidade do Usuário</h2>
            <p>O usuário compromete-se a utilizar o conteúdo adquirido apenas para fins pessoais e educacionais, abstendo-se de compartilhá-lo com terceiros ou utilizá-lo para fins comerciais sem permissão.</p>

            <h2>9. Modificações dos Termos</h2>
            <p>A Academia Lendár[IA] reserva-se o direito de atualizar ou modificar estes Termos de Uso a qualquer momento. Quaisquer alterações relevantes serão comunicadas por canal oficial ou aviso na plataforma.</p>

            <h2>10. Limitação de Responsabilidade</h2>
            <p>A Academia Lendár[IA] não se responsabiliza por eventuais perdas financeiras, técnicas ou de oportunidade que possam ocorrer em decorrência do uso inadequado dos conteúdos disponibilizados.</p>

            <h2>11. Contato</h2>
            <p>Em caso de dúvidas, suporte ou solicitações relacionadas a estes Termos de Uso, entre em contato conosco pelo e-mail <a href="mailto:suporte@academialendaria.com">suporte@academialendaria.com</a>.</p>

            <p>Ao continuar navegando e utilizando nossos serviços, o usuário reconhece e concorda com os presentes Termos de Uso.</p>
        </LegalPageLayout>
    );
};

export default TermsPage;
