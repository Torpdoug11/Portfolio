import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const designModes = [
  { id: 'neo-cyber', name: 'Neo-Cyber', emoji: '🖥️' },
  { id: 'modern-website', name: 'Modern', emoji: '🌐' },
  { id: 'minimal-luxury', name: 'Luxury', emoji: '✨' },
];

export const DesignModeSelector = () => {
  const { designMode, setDesignMode } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-1 shadow-lg">
        {designModes.map((mode) => (
          <motion.button
            key={mode.id}
            onClick={() => setDesignMode(mode.id as any)}
            className={`p-2 rounded-full transition-colors ${
              designMode === mode.id 
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`${mode.name} Theme`}
            aria-label={`Switch to ${mode.name} theme`}
          >
            <span className="text-lg">{mode.emoji}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
