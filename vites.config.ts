import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node', // Para pruebas en Node.js
    globals: true, // Habilita APIs globales como describe, it, expect
    coverage: {
      provider: 'v8', // Usa V8 para cobertura
      reporter: ['text', 'json', 'html'], // Formatos de reporte de cobertura
    },
  },
});