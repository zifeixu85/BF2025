
import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Tag, Info } from 'lucide-react';
import { Tool, ViewMode } from '../types';

interface ToolCardProps {
  tool: Tool;
  viewMode: ViewMode;
  onSelect: (tool: Tool) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, viewMode, onSelect }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (tool.discountCode) {
      navigator.clipboard.writeText(tool.discountCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isGrid = viewMode === 'GRID';

  return (
    <div 
      className={`group relative bg-bf-card rounded-xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-bf-gold/50 hover:shadow-[0_0_20px_rgba(184,134,11,0.1)] flex ${
        isGrid ? 'flex-col h-full' : 'flex-col sm:flex-row'
      }`}
    >
      {/* Discount Badge */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-bf-gold text-black shadow-lg">
          {tool.discount}
        </span>
      </div>

      {/* Image Section - Clickable */}
      <div 
        className={`relative overflow-hidden cursor-pointer ${isGrid ? 'aspect-[16/10] w-full' : 'h-48 sm:h-auto sm:w-64 shrink-0'}`}
        onClick={() => onSelect(tool)}
      >
        <img 
          src={tool.imageUrl} 
          alt={tool.name} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bf-card via-transparent to-transparent opacity-60 sm:opacity-0" />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div 
              className="flex items-center gap-3 cursor-pointer group-hover:text-bf-gold transition-colors"
              onClick={() => onSelect(tool)}
            >
              {tool.icon && (
                <img 
                  src={tool.icon} 
                  alt={`${tool.name} logo`} 
                  className="w-6 h-6 rounded-md bg-white/10" 
                />
              )}
              <h3 className="text-xl font-bold text-white">
                {tool.name}
              </h3>
            </div>
            {!isGrid && (
              <span className="hidden sm:inline-flex items-center px-2 py-1 rounded text-xs bg-white/5 text-gray-400">
                <Tag size={12} className="mr-1" />
                {tool.category}
              </span>
            )}
          </div>
          
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {tool.description}
          </p>
        </div>

        {/* Footer / Action Area */}
        <div className="mt-auto space-y-3">
          {/* Code Section */}
          {tool.discountCode && (
            <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 border border-white/5">
              <span className="text-xs text-gray-400 font-mono">CODE:</span>
              <div className="flex items-center gap-2">
                <code className="text-sm font-bold text-bf-gold font-mono tracking-wider">
                  {tool.discountCode}
                </code>
                <button 
                  onClick={handleCopy}
                  className="p-1 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white"
                  title="Copy Code"
                >
                  {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <button
               onClick={() => onSelect(tool)}
               className="flex-1 py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white flex items-center justify-center"
            >
              <Info size={14} className="mr-2" />
              详情
            </button>
            <a 
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center py-2.5 px-4 bg-white/5 hover:bg-bf-gold hover:text-black border border-white/10 hover:border-bf-gold rounded-lg text-sm font-medium transition-all duration-300 group/btn"
            >
              <span>直达</span>
              <ExternalLink size={14} className="ml-2 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
