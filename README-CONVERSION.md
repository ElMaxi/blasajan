Conversión automática de TypeScript -> JavaScript (JSX) para Vite + React.

Hechos:
- Todos los archivos .ts/.tsx fueron convertidos heurísticamente a .js/.jsx (reemplazando los originales).
- Se removieron anotaciones de tipo, interfaces, enums, 'as' assertions y 'import type' cuando fue posible.
- Actualicé import paths que apuntaban a .ts/.tsx para que apunten a .js/.jsx cuando fue detectado.

Qué revisar manualmente:
- Tipos complejos usados en tiempo de ejecución (por ejemplo guards, discriminated unions).
- Imports con alias o barrels que requieran extensión explícita.
- Cualquier uso avanzado de generics o decoradores.

Para usar:
1. Instalar dependencias: `npm install`
2. Ejecutar: `npm run dev`
