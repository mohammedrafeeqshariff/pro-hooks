import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base:"/pro-hooks/",
    plugins: [react()],
});