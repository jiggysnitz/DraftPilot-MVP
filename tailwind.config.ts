
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0B0F14',
          surface: '#111827',
          primary: '#12B981',
          accent: '#22D3EE',
          text: '#E5E7EB',
          textMuted: '#9CA3AF',
          warn: '#F59E0B',
          danger: '#EF4444',
        },
      },
    },
  },
  plugins: [],
}
export default config
