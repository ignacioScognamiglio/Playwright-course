# Playwright Course

Este repositorio contiene los tests automatizados realizados con Playwright como parte del curso de LambdaTest.

## Estructura del proyecto

- **tests/**: Carpeta donde se encuentran todos los archivos de pruebas automatizadas. Ejemplos de tests incluidos:
  - `dropdown.test.ts`
  - `frames.test.ts`
  - `login.test.ts`
  - `recorder.test.ts`
  - `window.test.ts`

- **playwright-report/**: Aquí se genera un reporte HTML después de ejecutar los tests. Puedes abrir el archivo `index.html` en tu navegador para ver los resultados detallados.

- **jsonReports/**: Contiene reportes en formato JSON generados automáticamente tras la ejecución de los tests.

## Cómo ejecutar los tests

1. Instala las dependencias:
   bash
   npm install
   
2. Instala los navegadores de Playwright:
   bash
   npx playwright install
   
3. Ejecuta los tests:
   bash
   npx playwright test

## Acceso a los reportes

- **Reporte HTML**: Después de correr los tests, abre `playwright-report/index.html` para ver un resumen visual de los resultados.
- **Reporte JSON**: El archivo `jsonReports/jsonReport.json` contiene los resultados en formato JSON, útil para integraciones o análisis automatizados.

## Integración continua

Este proyecto incluye una configuración de GitHub Actions (`.github/workflows/playwright.yml`) que ejecuta los tests automáticamente en cada push o pull request a la rama `main`.

---

Si tienes dudas o sugerencias, puedes abrir un issue o un pull request.
