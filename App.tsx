import React, { useState, useMemo } from 'react';
import { ExternalLink, Zap } from 'lucide-react';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ToolCard from './components/ToolCard';
import ToolModal from './components/ToolModal';
import { TOOLS } from './data';
import { Category, Tool, ViewMode } from './types';

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.ALL);
  const [viewMode, setViewMode] = useState<ViewMode>('GRID');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const filteredTools = useMemo(() => {
    if (activeCategory === Category.ALL) return TOOLS;
    return TOOLS.filter(tool => tool.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-bf-black text-white font-sans selection:bg-bf-gold selection:text-black">
      <Hero />
      
      <FilterBar 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Title for context */}
        <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-8 bg-bf-gold rounded-sm block"></span>
            {activeCategory === Category.ALL ? '全部工具' : 
             activeCategory === Category.INFO ? '信息输入与处理' :
             activeCategory === Category.CREATOR ? '创作者工具' :
             activeCategory === Category.EFFICIENCY ? '效率工具' : '产品开发'}
            <span className="text-sm font-normal text-gray-500 ml-4 self-center pt-1">
              共 {filteredTools.length} 个
            </span>
          </h2>
        </div>

        {/* Grid/List Container */}
        <div 
          className={`
            ${viewMode === 'GRID' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8' 
              : 'flex flex-col gap-4 max-w-4xl mx-auto'
            }
          `}
        >
          {filteredTools.map((tool) => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              viewMode={viewMode} 
              onSelect={setSelectedTool}
            />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            没有找到该分类下的工具。
          </div>
        )}

        {/* Other Recommendations Section */}
        <div className="mt-20">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Zap className="text-bf-gold" size={20} />
            其他优质黑五清单推荐
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://dex.notion.site/Black-Friday-2025-for-designers-2b6fcc338e8b80e0aa12dd4fc1a127e9"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-bf-card border border-white/5 hover:border-bf-gold/30 rounded-xl p-5 transition-all duration-300 hover:bg-white/5"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-bf-gold transition-colors mb-2">
                    给设计师的黑五清单
                  </h4>
                  <p className="text-gray-400 text-sm">
                    由 dingyi 整理，专注于设计师工具的深度折扣汇总，包含大量设计素材与插件优惠。
                  </p>
                </div>
                <ExternalLink size={18} className="text-gray-500 group-hover:text-bf-gold transition-colors shrink-0 ml-4" />
              </div>
            </a>

            <a 
              href="https://github.com/trungdq88/Awesome-Black-Friday-Cyber-Monday"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-bf-card border border-white/5 hover:border-bf-gold/30 rounded-xl p-5 transition-all duration-300 hover:bg-white/5"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-bf-gold transition-colors mb-2">
                    Awesome Black Friday
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Github 上非常全面的黑五折扣清单，涵盖开发者工具、SaaS 服务及各类极客软件。
                  </p>
                </div>
                <ExternalLink size={18} className="text-gray-500 group-hover:text-bf-gold transition-colors shrink-0 ml-4" />
              </div>
            </a>
          </div>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 pb-12 text-center text-gray-600 text-sm">
          <p className="mb-2">⚠️ 注意：折扣信息仅供参考，具体价格以官方页面为准。</p>
          <p>© 2025 A梦独立开发. Generated by AI.</p>
        </footer>
      </main>

      {/* Detail Modal */}
      <ToolModal 
        tool={selectedTool} 
        onClose={() => setSelectedTool(null)} 
      />
    </div>
  );
}

export default App;