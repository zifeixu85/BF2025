import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Zap } from 'lucide-react';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ToolCard from './components/ToolCard';
import ToolModal from './components/ToolModal';
import { TOOLS } from './data';
import { Category, Tool, ViewMode } from './types';

// Define the order of categories to display
const DISPLAY_CATEGORIES = [
  Category.INFO,
  Category.CREATOR,
  Category.EFFICIENCY,
  Category.DEV
];

const CATEGORY_TITLES: Record<Category, string> = {
  [Category.ALL]: '全部',
  [Category.INFO]: '信息输入与处理',
  [Category.CREATOR]: '创作者工具',
  [Category.EFFICIENCY]: '效率工具',
  [Category.DEV]: '产品开发'
};

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.INFO);
  const [viewMode, setViewMode] = useState<ViewMode>('GRID');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  
  // Ref to store section offsets for scroll spy
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Flat list of all tools in display order for modal navigation
  const allToolsInOrder = DISPLAY_CATEGORIES.flatMap(
    category => TOOLS.filter(t => t.category === category)
  );

  // Get current tool index and navigation helpers
  const currentToolIndex = selectedTool 
    ? allToolsInOrder.findIndex(t => t.id === selectedTool.id)
    : -1;
  
  const hasPrevTool = currentToolIndex > 0;
  const hasNextTool = currentToolIndex >= 0 && currentToolIndex < allToolsInOrder.length - 1;

  const goToPrevTool = () => {
    if (hasPrevTool) {
      setSelectedTool(allToolsInOrder[currentToolIndex - 1]);
    }
  };

  const goToNextTool = () => {
    if (hasNextTool) {
      setSelectedTool(allToolsInOrder[currentToolIndex + 1]);
    }
  };
  const isScrollingRef = useRef(false);

  // Scroll to specific category
  const scrollToCategory = (category: Category) => {
    if (category === Category.ALL) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = sectionRefs.current[category];
    if (element) {
      isScrollingRef.current = true;
      setActiveCategory(category); // Immediate UI feedback
      
      const offset = 80; // Height of sticky header + padding
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Reset scrolling lock after animation
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  // Scroll Spy: Update active category based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollPosition = window.scrollY + 150; // Offset for trigger point

      // Check sections
      for (const category of DISPLAY_CATEGORIES) {
        const element = sectionRefs.current[category];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveCategory(category);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bf-black text-white font-sans selection:bg-bf-gold selection:text-black">
      <Hero />
      
      <FilterBar 
        activeCategory={activeCategory} 
        onCategoryChange={scrollToCategory}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Render Sections Grouped by Category */}
        <div className="space-y-16 md:space-y-24">
          {DISPLAY_CATEGORIES.map((category) => {
            const categoryTools = TOOLS.filter(t => t.category === category);
            
            return (
              <section 
                key={category} 
                id={category}
                ref={(el) => { sectionRefs.current[category] = el; }}
                className="scroll-mt-24"
              >
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-bf-gold rounded-full shadow-[0_0_10px_#FFD700]"></span>
                    {CATEGORY_TITLES[category]}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                  <span className="text-sm font-medium text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {categoryTools.length}
                  </span>
                </div>

                {/* Tools Grid/List */}
                <div 
                  className={`
                    ${viewMode === 'GRID' 
                      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8' 
                      : 'flex flex-col gap-4'
                    }
                  `}
                >
                  {categoryTools.map((tool) => (
                    <ToolCard 
                      key={tool.id} 
                      tool={tool} 
                      viewMode={viewMode} 
                      onSelect={setSelectedTool}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Other Recommendations Section */}
        <section className="mt-24 pt-12 border-t border-white/10">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="p-2 bg-bf-gold/10 rounded-lg">
              <Zap className="text-bf-gold" size={24} />
            </div>
            其他优质黑五清单推荐
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="https://dex.notion.site/Black-Friday-2025-for-designers-2b6fcc338e8b80e0aa12dd4fc1a127e9"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between bg-bf-card border border-white/5 hover:border-bf-gold/40 rounded-2xl p-6 transition-all duration-300 hover:bg-white/5 hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-bf-gold transition-colors">
                    给设计师的黑五清单
                  </h4>
                  <ExternalLink size={20} className="text-gray-500 group-hover:text-bf-gold transition-colors shrink-0" />
                </div>
                <p className="text-gray-400 leading-relaxed">
                  由 dingyi 整理，专注于设计师工具的深度折扣汇总，包含大量设计素材与插件优惠。
                </p>
              </div>
            </a>

            <a 
              href="https://github.com/trungdq88/Awesome-Black-Friday-Cyber-Monday"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between bg-bf-card border border-white/5 hover:border-bf-gold/40 rounded-2xl p-6 transition-all duration-300 hover:bg-white/5 hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-bf-gold transition-colors">
                    Awesome Black Friday
                  </h4>
                  <ExternalLink size={20} className="text-gray-500 group-hover:text-bf-gold transition-colors shrink-0" />
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Github 上非常全面的黑五折扣清单，涵盖开发者工具、SaaS 服务及各类极客软件。
                </p>
              </div>
            </a>
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 pt-12 pb-12 text-center">
          <p className="text-gray-500 text-sm mb-4">⚠️ 注意：折扣信息仅供参考，具体价格以官方页面为准。</p>
          <div className="text-gray-600 text-sm font-medium">
            © 2025 A梦独立开发 · <span className="opacity-70">Designed & Generated by AI</span>
          </div>
        </footer>
      </main>

      {/* Detail Modal */}
      <ToolModal 
        tool={selectedTool} 
        onClose={() => setSelectedTool(null)}
        onPrev={goToPrevTool}
        onNext={goToNextTool}
        hasPrev={hasPrevTool}
        hasNext={hasNextTool}
      />
    </div>
  );
}

export default App;