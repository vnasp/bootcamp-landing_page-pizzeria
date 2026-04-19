# Pizzería Mamma Mia

Proyecto desarrollado como desafío del **Bootcamp Full Stack Developer JS de DesafioLATAM**. Sitio web interactivo de una pizzería que permite explorar el menú, agregar productos al carrito, aplicar cupones de descuento y acumular puntos de recompensa.

> **Nota:** Este es un proyecto académico de maquetación, no un e-commerce funcional.

## Vista previa

[Ver en GitHub Pages](https://vnasp.github.io/bootcamp-landing_page-pizzeria/)

## Tecnologías

- React 18 con React Router
- Context API para estado global
- Vite como bundler
- Bootstrap 5 + React Bootstrap
- Leaflet para mapa de locales
- SweetAlert2 para modales interactivos
- Datos de menú en archivos JSON

## Estructura del proyecto

```
src/
├── components/   → Navigation, FoodMenu*, Cart*, Addons*, Footer
├── context/      → DataContext (estado global)
├── views/        → HomePage, MenuPage, CartPage, PizzaPage, etc.
├── App.jsx       → Rutas y layout principal
└── main.jsx      → Punto de entrada
```

## Desarrollo local

```bash
npm install
npm run dev
```
