import React, { useState } from 'react';
import { ShoppingCart, Menu, Search, User, ChevronRight, Star } from 'lucide-react';

// Mock Data
const products = [
  { id: 1, name: "Smartphone X Pro", price: 2999.00, rating: 4.5, image: "/api/placeholder/300/300" },
  { id: 2, name: "Notebook Ultra Slim", price: 4500.00, rating: 4.8, image: "/api/placeholder/300/300" },
  { id: 3, name: "Fone Bluetooth Noise Cancelling", price: 899.00, rating: 4.2, image: "/api/placeholder/300/300" },
  { id: 4, name: "Smartwatch Fitness", price: 650.00, rating: 4.6, image: "/api/placeholder/300/300" },
];

const categories = ["Eletrônicos", "Casa", "Moda", "Esportes", "Ofertas"];

export default function OriginalStore() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header Padrão */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">TechStore</div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6">
              {categories.map((cat) => (
                <a key={cat} href="#" className="text-gray-600 hover:text-blue-600 transition">
                  {cat}
                </a>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </button>
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-2">
            {categories.map((cat) => (
              <a key={cat} href="#" className="block py-2 text-gray-600 hover:text-blue-600">
                {cat}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section Simples */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tecnologia para o seu dia a dia
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Encontre os melhores gadgets e acessórios com preços justos e entrega rápida para todo o Brasil.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
              Comprar Agora
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-64 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">
              [Imagem Hero]
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-bold text-lg">Frete Grátis</h3>
            <p className="text-sm text-gray-500">Em compras acima de R$ 200</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Pagamento Seguro</h3>
            <p className="text-sm text-gray-500">Cartão de crédito ou PIX</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Garantia de 30 dias</h3>
            <p className="text-sm text-gray-500">Reembolso garantido</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Destaques da Semana</h2>
          <a href="#" className="text-blue-600 flex items-center hover:underline">
            Ver tudo <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gray-200 w-full flex items-center justify-center text-gray-400">
                [Imagem Produto]
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 truncate">{product.name}</h3>
                <p className="text-xl font-bold text-gray-900">
                  R$ {product.price.toFixed(2)}
                </p>
                <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded text-sm hover:bg-gray-800 transition">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Receba nossas ofertas</h2>
          <p className="mb-8 text-blue-100">Cadastre-se para receber descontos exclusivos no seu e-mail.</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-1 px-4 py-3 rounded text-gray-900 focus:outline-none"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition">
              Assinar
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold text-lg mb-4">TechStore</h4>
              <p className="text-sm">Sua loja favorita de tecnologia com os melhores preços do mercado.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Ajuda</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Meus Pedidos</a></li>
                <li><a href="#" className="hover:text-white">Trocas e Devoluções</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                {/* Social Placeholders */}
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            &copy; 2023 TechStore. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
