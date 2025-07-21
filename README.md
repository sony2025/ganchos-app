# 🎣 Ganchos App - React Hooks Demo

Una aplicación React que demuestra el uso de hooks de React (useState, useEffect) y hooks personalizados para consumir APIs.

## ✨ Características

- 🔄 **useState**: Manejo de estado para búsqueda y filtrado
- 🎯 **useEffect**: Efectos secundarios para llamadas a API
- 🪝 **Hook personalizado**: `useFetch` para peticiones HTTP reutilizables
- 🎨 **Diseño moderno**: Tarjetas con diseño atractivo y responsive
- 🔍 **Búsqueda en tiempo real**: Filtra usuarios por nombre o email
- 📱 **Responsive**: Adaptado para móviles y escritorio

## 🚀 Tecnologías utilizadas

- **React 18** con hooks
- **Vite** para construcción rápida
- **CSS3** con gradientes y animaciones
- **API REST** (JSONPlaceholder)

## 📁 Estructura del proyecto

```
src/
├── hooks/
│   └── useFetch.js          # Hook personalizado para peticiones HTTP
├── components/
│   ├── UserCard.jsx         # Componente de tarjeta individual
│   ├── UserCard.css         # Estilos de la tarjeta
│   ├── UserCards.jsx        # Contenedor principal
│   └── UserCards.css        # Estilos del contenedor
├── App.jsx                  # Componente principal
└── App.css                  # Estilos globales
```

## 🛠️ Instalación y uso

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🎯 API utilizada

Este proyecto consume la API pública de JSONPlaceholder:
- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Datos**: 10 usuarios con información completa (nombre, email, teléfono, etc.)

## 🪝 Hooks implementados

### useState
- Control de estado de búsqueda
- Filtrado de usuarios en tiempo real

### useEffect
- Llamadas a API al montar el componente
- Limpieza de efectos

### Hook personalizado: useFetch
```javascript
const { data, loading, error } = useFetch(url);
```

## 🎨 Características visuales

- **Gradiente de fondo**: Azul a morado
- **Tarjetas con sombra**: Efecto hover con elevación
- **Avatares personalizados**: Primera letra del nombre
- **Botones interactivos**: Efectos de hover y active
- **Indicadores de carga**: Spinner animado
- **Manejo de errores**: Mensajes informativos
