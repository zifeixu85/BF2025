import React from 'react';
import { LayoutGrid, List as ListIcon } from 'lucide-react';
import { Category, ViewMode } from '../types';

interface FilterBarProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

const CATEGORIES = [
  // Removed 'ALL' since we are scrolling sections now
  { id: Category.INFO, label: '📥 信息处理' },
  { id: Category.CREATOR, label: '🎨 创作者' },
  { id: Category.EFFICIENCY, label: '⚡ 效率' },
  { id: Category.DEV, label: '💻 开发' },
];

const FilterBar: React.FC<FilterBarProps> = ({ 
  activeCategory, 
  onCategoryChange,
  viewMode,
  onViewModeChange
}) => {
  return (
    <div className="sticky top-0 z-40 bg-bf-black/80 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between py-3 sm:py-4 gap-2 sm:gap-3">
          
          {/* Categories - Horizontal Scroll on Mobile */}
          <div className="flex-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
            <div className="flex items-center space-x-2 min-w-max px-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                    activeCategory === cat.id
                      ? 'bg-bf-gold text-black border-bf-gold shadow-[0_0_15px_rgba(255,215,0,0.4)] scale-105'
                      : 'bg-bf-card text-gray-400 border-white/5 hover:border-white/20 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* View Toggle - Visible on all screens */}
          <div className="flex items-center bg-bf-card p-1 rounded-lg border border-white/10 shrink-0">
            <button
              onClick={() => onViewModeChange('GRID')}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === 'GRID' 
                  ? 'bg-white/10 text-bf-gold shadow-sm' 
                  : 'text-gray-500 hover:text-white'
              }`}
              title="网格视图"
            >
              <LayoutGrid size={18} />
            </button>
            <button
              onClick={() => onViewModeChange('LIST')}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === 'LIST' 
                  ? 'bg-white/10 text-bf-gold shadow-sm' 
                  : 'text-gray-500 hover:text-white'
              }`}
              title="列表视图"
            >
              <ListIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;