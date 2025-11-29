import React from 'react';
import { ShoppingBag, Sparkles, Clock, Globe, Twitter, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-visible bg-gradient-to-b from-bf-black via-bf-dark to-bf-black border-b border-bf-card pt-16 pb-12 md:pt-24 md:pb-20 px-4 sm:px-6 lg:px-8">
      {/* Top Right Navigation */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 flex items-center space-x-4 sm:space-x-6 z-20">
        <a 
          href="https://ameng.blog/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium"
        >
          <Globe size={16} />
          <span className="hidden sm:inline">博客</span>
        </a>
        
        <a 
          href="https://x.com/zifeixu85" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium"
        >
          <Twitter size={16} />
          <span className="hidden sm:inline">关注推特</span>
        </a>

        {/* WeChat Hover */}
        <div className="relative group cursor-pointer text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium">
          <MessageCircle size={16} />
          <span className="hidden sm:inline">关注公众号</span>
          
          {/* QR Code Popup */}
          <div className="absolute right-0 top-full mt-3 w-48 p-2 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right z-50">
            <div className="relative">
              <div className="absolute -top-3 right-4 w-4 h-4 bg-white transform rotate-45"></div>
              <img 
                src="https://ameng.blog/_next/image?url=%2Fqrcode_amengjinhualun.jpg&w=384&q=75" 
                alt="WeChat QR Code" 
                className="w-full rounded-lg"
              />
              <p className="text-center text-xs text-gray-800 mt-2 font-medium pb-1">扫码关注 A梦</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-bf-gold rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-900 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-bf-gold/10 border border-bf-gold/20 text-bf-gold text-sm font-medium mb-4">
          <Sparkles size={14} />
          <span>Black Friday 2025 Toolkit</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          <span className="block mb-2">设计师 & 独立开发</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-bf-gold via-yellow-200 to-bf-gold">
            黑五折扣精选清单
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
          我是 A梦。每年黑五都是囤工具的好时机，我整理了自己长期使用或熟悉的 
          <span className="text-white font-semibold"> 17 个工具</span>，
          覆盖从信息处理、内容创作到产品开发的全链路。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 text-sm text-gray-500">
          <div className="flex items-center gap-2 bg-bf-card/50 px-4 py-2 rounded-lg border border-white/5">
            <Clock size={16} className="text-bf-accent" />
            <span>限时折扣尽早下单</span>
          </div>
          <div className="flex items-center gap-2 bg-bf-card/50 px-4 py-2 rounded-lg border border-white/5">
            <ShoppingBag size={16} className="text-blue-400" />
            <span>精选实战工具，拒绝盲目囤积</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;