
import React, { useEffect, useState, useCallback } from 'react';
import { X, ExternalLink, Copy, Check, Tag, Quote, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Tool, Category } from '../types';

interface ToolModalProps {
  tool: Tool | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

const CATEGORY_MAP: Record<string, string> = {
  [Category.INFO]: '信息输入与处理',
  [Category.CREATOR]: '创作者工具',
  [Category.EFFICIENCY]: '效率工具',
  [Category.DEV]: '产品开发',
  [Category.ALL]: '全部'
};

const ToolModal: React.FC<ToolModalProps> = ({ 
  tool, 
  onClose, 
  onPrev, 
  onNext, 
  hasPrev = false, 
  hasNext = false 
}) => {
  const [copied, setCopied] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (previewImage) {
      if (e.key === 'Escape') {
        setPreviewImage(null);
      }
      return;
    }
    if (e.key === 'ArrowLeft' && hasPrev && onPrev) {
      onPrev();
    } else if (e.key === 'ArrowRight' && hasNext && onNext) {
      onNext();
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [hasPrev, hasNext, onPrev, onNext, onClose, previewImage]);

  useEffect(() => {
    if (tool) {
      // 更强的滚动锁定，防止移动端滚动穿透
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [tool, handleKeyDown]);

  // Reset image preview when tool changes
  useEffect(() => {
    setPreviewImage(null);
  }, [tool?.id]);

  if (!tool) return null;

  const handleCopy = () => {
    if (tool.discountCode) {
      navigator.clipboard.writeText(tool.discountCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Image Preview Modal
  if (previewImage) {
    return (
      <div 
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
        onClick={() => setPreviewImage(null)}
      >
        <button 
          onClick={() => setPreviewImage(null)}
          className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
        >
          <X size={24} />
        </button>
        <img 
          src={previewImage} 
          alt={tool.name} 
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overscroll-contain"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" />
      
      {/* Modal with arrows container */}
      <div className="relative z-10 flex items-center gap-4 max-w-[95vw]">
        {/* Left Arrow - Hidden on mobile */}
        <button
          onClick={(e) => { e.stopPropagation(); hasPrev && onPrev && onPrev(); }}
          className={`hidden sm:flex shrink-0 p-3 rounded-full transition-all shadow-lg backdrop-blur-sm border ${
            hasPrev 
              ? 'bg-black/60 hover:bg-bf-gold text-white/70 hover:text-black border-white/10 hover:border-bf-gold cursor-pointer' 
              : 'bg-black/30 text-white/20 border-white/5 cursor-not-allowed'
          }`}
          title="上一个 (←)"
          disabled={!hasPrev}
        >
          <ChevronLeft size={24} />
        </button>
        
        {/* Modal Content */}
        <div 
          className="relative bg-bf-card w-full max-w-2xl max-h-[85vh] overflow-y-auto overscroll-contain rounded-2xl border border-white/10 shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Image Header - Clickable for preview */}
        <div 
          className="relative aspect-video w-full shrink-0 cursor-pointer group/img"
          onClick={() => setPreviewImage(tool.imageUrl)}
        >
          <img 
            src={tool.imageUrl} 
            alt={tool.name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bf-card via-transparent to-transparent opacity-80" />
          
          {/* Zoom hint */}
          <div className="absolute top-4 left-4 p-2 bg-black/50 rounded-full text-white/70 opacity-0 group-hover/img:opacity-100 transition-opacity">
            <ZoomIn size={18} />
          </div>
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-2 py-1 mb-2 rounded text-xs font-bold bg-bf-gold text-black shadow-lg">
              {tool.discount}
            </span>
            <div className="flex items-center gap-3">
              {tool.icon && (
                <img 
                  src={tool.icon} 
                  alt={`${tool.name} logo`} 
                  className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm shadow-sm" 
                />
              )}
              <h2 className="text-3xl font-bold text-white shadow-sm">{tool.name}</h2>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Main Description */}
          <div className="text-gray-300 leading-relaxed text-base space-y-4">
            {(tool.longDescription || tool.description).split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Additional Images Gallery */}
          {tool.images && tool.images.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-400">更多截图</h3>
              <div className="grid grid-cols-2 gap-3">
                {tool.images.map((img, index) => (
                  <div 
                    key={index}
                    className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group/thumb border border-white/10 hover:border-bf-gold/50 transition-colors"
                    onClick={() => setPreviewImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${tool.name} 截图 ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/20 transition-colors flex items-center justify-center">
                      <ZoomIn size={20} className="text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* A-Meng's Note */}
          {tool.note && (
            <div className="bg-black/30 rounded-xl p-4 border-l-4 border-bf-gold">
              <div className="flex items-center gap-2 mb-2 text-bf-gold font-medium">
                <Quote size={16} />
                <span>A梦备注</span>
              </div>
              <p className="text-sm text-gray-400 italic">
                {tool.note}
              </p>
            </div>
          )}

          {/* Discount & Link Section */}
          <div className="bg-white/5 rounded-xl p-5 border border-white/5 space-y-4">
            <div className="flex items-center justify-between">
               <span className="text-sm text-gray-400">当前分类</span>
               <span className="flex items-center px-2 py-1 rounded text-xs bg-white/5 text-gray-300 border border-white/5">
                <Tag size={12} className="mr-1" />
                {CATEGORY_MAP[tool.category] || tool.category}
              </span>
            </div>

            {tool.price && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">价格信息</span>
                <span className="text-white font-medium">{tool.price}</span>
              </div>
            )}

            {tool.discountCode && (
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-sm text-gray-400">折扣代码</span>
                <div className="flex items-center gap-2">
                  <code className="text-base font-bold text-bf-gold font-mono tracking-wider bg-black/50 px-2 py-1 rounded">
                    {tool.discountCode}
                  </code>
                  <button 
                    onClick={handleCopy}
                    className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white"
                    title="复制"
                  >
                    {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            )}
            
            <a 
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 mt-4 text-center bg-bf-gold text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
            >
              立即访问
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
        </div>
        
        {/* Right Arrow - Hidden on mobile */}
        <button
          onClick={(e) => { e.stopPropagation(); hasNext && onNext && onNext(); }}
          className={`hidden sm:flex shrink-0 p-3 rounded-full transition-all shadow-lg backdrop-blur-sm border ${
            hasNext 
              ? 'bg-black/60 hover:bg-bf-gold text-white/70 hover:text-black border-white/10 hover:border-bf-gold cursor-pointer' 
              : 'bg-black/30 text-white/20 border-white/5 cursor-not-allowed'
          }`}
          title="下一个 (→)"
          disabled={!hasNext}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ToolModal;
