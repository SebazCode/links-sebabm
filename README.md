# links-sebabm

Plataforma minimalista y moderna de enlaces personales y profesionales (Link-in-bio), desarrollada con Next.js, React y TypeScript. Incluye soporte para modo oscuro/claro y funcionalidad de copiado rápido al portapapeles.

Link: [links.sebabm.cl](links.sebabm.cl)

---

## Características

- Interfaz moderna con efectos glassmorphism y transiciones suaves.
- Soporte para cambio de tema dinámico (Claro / Oscuro / Sistema) usando `next-themes`.
- Botón interactivo con retroalimentación visual para copiar correo de contacto.
- Diseño responsivo adaptado a dispositivos móviles y de escritorio.
- Tipografía optimizada con `next/font` (Geist Sans y Geist Mono).
- Enrutamiento y arquitectura basados en Next.js App Router.

---

## Tecnologías Utilizadas

- **Framework:** Next.js (App Router)
- **Biblioteca:** React
- **Lenguaje:** TypeScript (Strict Mode)
- **Estilos:** CSS Modules y variables CSS personalizadas
- **Iconos:** Lucide React
- **Gestión de Temas:** next-themes

---

## Estructura del Proyecto

```text
links-sebabm/
├── app/
│   ├── globals.css          # Estilos globales y variables de tema
│   ├── layout.tsx           # Layout raíz con configuración de fuentes y temas
│   ├── not-found.tsx        # Página de error 404 personalizada
│   └── page.tsx             # Vista principal
├── components/
│   ├── css/                 # Módulos de estilos CSS para componentes
│   ├── CardCopy.tsx         # Componente para copiar datos al portapapeles
│   ├── CardLinks.tsx        # Componente para enlaces externos
│   ├── ContainerCards.tsx   # Contenedor principal de tarjetas y enlaces
│   ├── Footer.tsx           # Pie de página
│   ├── ThemeProvider.tsx    # Proveedor de contexto para temas
│   └── ThemeToggle.tsx      # Selector de tema (Light/Dark/System)
├── public/                  # Recursos estáticos (favicons, imágenes)
├── next.config.ts           # Configuración de Next.js
├── package.json             # Dependencias y scripts del proyecto
└── tsconfig.json            # Configuración de TypeScript
```

---

## Instalación y Uso Local

1. Clonar el repositorio:

```bash
git clone https://github.com/SebazCode/links-sebabm.git
```

2. Entrar al directorio del proyecto:

```bash
cd links-sebabm
```

3. Instalar las dependencias:

```bash
npm install
```

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

## Scripts Disponibles

- `npm run dev`: Inicia el entorno de desarrollo local.
- `npm run build`: Genera la compilación optimizada para producción.
- `npm run start`: Ejecuta el servidor en modo producción.
- `npm run lint`: Ejecuta el linter ESLint sobre el código base.

---

## Licencia

Pueden usar este proyecto para fines personales, educativos y de referencia. No pueden usarlo para fines comerciales o malintencionados.
