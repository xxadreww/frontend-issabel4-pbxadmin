# Issabel PBX Configuration (`pbxadmin`)

Rediseño moderno y compacto del módulo **Configuración PBX (`pbxadmin`)** de Issabel, optimizado para pantallas pequeñas (1366×768, 1280×768 y menores) sin modificar los archivos internos de `admin/modules/`.

## Características principales

- **Sin tocar `admin/modules/`:** Todo el estilo y comportamiento se aplica desde la plantilla y assets de `modules/pbxadmin/themes/default/`, evitando conflictos con los módulos internos de IssabelPBX.
- **Sidebar izquierdo mejorado:**
  - Diseño tipo tarjeta con bordes morados, categorías colapsables con memoria en `localStorage` y filtro rápido de menú.
  - Resaltado persistente del apartado activo por parámetro.
- **Listado derecho:**
  - Integrado en layout flexible de 2 columnas junto al formulario para aprovechar mejor el ancho y evitar cortes en el borde derecho.
  - Buscador automático en tiempo real cuando la lista supera los 6 elementos (ideal para muchas extensiones, troncales o rutas).
- **Cabeceras y formularios compactos:**
  - Cabecera superior morada automática con el nombre del apartado activo en todas las vistas.
  - Eliminación visual de filas vacías generadas por `<input type="hidden">` (sin afectar el envío de formularios).
  - Filas con separadores suaves, rayado alterno, botones segmentados (`.ui-buttonset`) unidos en una sola línea y cabeceras oscuras en tablas multicolumna (ej. *Códigos de funcionalidad*).
- **Botones e iconos modernos:**
  - Agrupación en barra horizontal de acciones superiores (*Eliminar extensión*, *Follow Me*, *Gabcast*, etc.).
  - Botones sólidos con codificación de colores (morado, verde oscuro, azul petróleo, naranja, rojo y gris) e iconos SVG rellenos integrados (sin dependencia de CDN externo).
- **Responsive:** Adaptado automáticamente para resoluciones `<= 1366px` y `<= 960px`.

## Archivos modificados

```text
modules/pbxadmin/themes/default/
├── main.tpl
├── css/
│   └── mainstyle.css
└── js/
    └── current.js
```

## Instalación en Issabel

1. **Haz respaldo de los archivos originales** en tu servidor:
   ```bash
   cp -a /var/www/html/modules/pbxadmin/themes/default /var/www/html/modules/pbxadmin/themes/default.bak
   ```

2. **Copia los 3 archivos** al directorio del tema de `pbxadmin`:
   - `main.tpl` → `/var/www/html/modules/pbxadmin/themes/default/main.tpl`
   - `css/mainstyle.css` → `/var/www/html/modules/pbxadmin/themes/default/css/mainstyle.css`
   - `js/current.js` → `/var/www/html/modules/pbxadmin/themes/default/js/current.js`

3. **Ajusta permisos y limpia la caché de Smarty:**
   ```bash
   chown -R asterisk:asterisk /var/www/html/modules/pbxadmin/themes/default
   rm -rf /var/www/html/var/templates_c/*
   ```

4. **Recarga el navegador** con `Ctrl + F5` en **PBX → Configuración PBX**.

## 📝 Notas

- Si actualizas Issabel con `yum update issabel-pbx`, el paquete oficial puede sobreescribir estos archivos; conserva este repositorio para volver a aplicarlos fácilmente.
- Los textos que aparezcan en inglés dentro de algunos submódulos provienen de los diccionarios `.mo` propios de cada módulo en `admin/modules/<modulo>/i18n/` y no se alteran desde este tema.
