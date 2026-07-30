import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  
  const isGitHubPages = process.env.GITHUB_PAGES || false;
  const base = isGitHubPages ? '/joshdesignz/' : '/';
  return {
    plugins: [react()],
    base: base,
  };
});