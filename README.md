# Ferentreperros

Sitio web profesional para el servicio de etología y bienestar canino **@Ferentreperros**.

## Stack

- [Vite](https://vitejs.dev/) + TypeScript
- TailwindCSS vía CDN para estilos utilitarios
- CSS modular en `src/styles`

## Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilación a producción
npm run preview  # Previsualización del build
npm start        # (Re)compila y sirve el build con scripts/start-preview.cjs
```

## Estructura

```
├── index.html          # Página principal (copia migrada de web.html)
├── web.html            # Referencia original exportada desde Aura Build
├── src
│   ├── main.ts         # Punto de entrada TS
│   └── styles
│       ├── main.css
│       ├── components.css
│       └── fonts.css
```

## Desarrollo

1. Instala dependencias con `npm install`.
2. Ejecuta `npm run dev` para iniciar el entorno local (abre el navegador automáticamente).
3. Haz tus cambios en `src/main.ts` o en los estilos de `src/styles`.

## Producción

1. Ejecuta `npm run build`; el resultado se genera en la carpeta `dist`.
2. Para despliegues con Cloud Run usando buildpacks, el runtime invoca `npm start`, que primero ejecuta `npm run build` (script `prestart`) y luego corre `scripts/start-preview.cjs` para lanzar `vite preview` ligado a `0.0.0.0:$PORT`.

