# 🎛️ Nueva Funcionalidad: Toggle de Activación/Desactivación

## ✨ ¿Qué se agregó?

Ahora puedes **activar y desactivar la extensión** sin necesidad de desinstalarla desde Chrome. 

## 🎯 ¿Cómo funciona?

### Activar/Desactivar la extensión:

1. **Haz clic en el ícono de la extensión** en la barra de herramientas de Chrome
2. Verás un **popup mejorado** con:
   - Un **toggle switch** (interruptor)
   - Un **badge de estado** que muestra si está "Active" o "Inactive"
   - Lista de características de la extensión
   
3. **Haz clic en el toggle** para:
   - ✅ **Activar**: Los botones aparecerán en las páginas de NetSuite
   - ❌ **Desactivar**: Los botones se ocultarán de inmediato (sin necesidad de recargar)

### Estado Persistente:

- El estado de activación se **guarda automáticamente**
- Si desactivas la extensión, permanecerá desactivada hasta que vuelvas a activarla
- El estado persiste incluso si cierras el navegador

## 🔧 Cambios Técnicos Implementados

### Archivos Nuevos:
- ✅ `src/popup.js` - Lógica del popup con toggle

### Archivos Modificados:
- ✅ `index.html` - UI mejorada con toggle switch y estilos
- ✅ `src/content.js` - Verificación del estado antes de inyectar
- ✅ `public/manifest.json` - Agregado permiso `storage`
- ✅ `vite.config.js` - Inclusión de popup.js en el build
- ✅ `README.md` - Documentación actualizada
- ✅ `CHANGELOG.md` - Registro de cambios

### Características del Toggle:

1. **Diseño moderno** con animación smooth
2. **Badge visual** que indica el estado actual
3. **Comunicación en tiempo real** con las pestañas de NetSuite
4. **Remoción inmediata** de botones al desactivar
5. **Recarga automática** al activar para inyectar los scripts

## 🚀 Probarlo

1. Haz build de la extensión:
   ```bash
   npm run build
   ```

2. Recarga la extensión en Chrome:
   - Ve a `chrome://extensions/`
   - Haz clic en el botón de recarga (⟳) de la extensión

3. Haz clic en el ícono de la extensión en la toolbar

4. Prueba el toggle:
   - Desactiva → los botones desaparecen
   - Activa → los botones aparecen (la página se recarga)

## 📸 Vista Previa del Popup

El popup ahora muestra:
- **Logo de la extensión**
- **Título y descripción**
- **Toggle switch** con estado visual
- **Badge** de estado (Active/Inactive)
- **Lista de características** (Delete, View Related, Update Fields, etc.)
- **Link al repositorio**

## 💡 Casos de Uso

**¿Cuándo desactivarla?**
- Cuando estés trabajando en producción y no necesites las acciones rápidas
- Si temporalmente quieres evitar clicks accidentales en botones
- Cuando estés demostrando NetSuite a alguien y no quieras que vea los botones

**¿Cuándo activarla?**
- Durante desarrollo y testing
- Cuando necesites eliminar/actualizar registros rápidamente
- Para acceder a registros relacionados sin navegar por menús

---

¡Disfruta de la nueva funcionalidad! 🎉
