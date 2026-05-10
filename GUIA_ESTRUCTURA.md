# Guía de Arquitectura: Meraky Proyectos

¡Hola! Esta guía está diseñada para que entiendas rápidamente cómo está construido este proyecto, dónde encontrar cada cosa y cómo se comunican todas las partes. Piensa en esto como el mapa de tu nueva casa.

---

## 1. El Flujo General: ¿Cómo funciona todo?

El proyecto está dividido en dos grandes "cerebros" que hablan entre sí:
1. **Frontend (Next.js/React):** Es la cara visible. Todo lo que el usuario ve, hace clic y lee. Se ejecuta en el navegador.
2. **Backend (FastAPI/Python):** Es el cerebro oculto. Guarda datos (como los servicios y proyectos), aplica reglas de negocio y consulta la base de datos PostgreSQL.

### El ciclo de vida de una petición (El viaje de los datos)
Imagina que un usuario entra a tu página y la página necesita mostrar los servicios disponibles.
1. **El Usuario:** Entra a `localhost:3000`.
2. **El Frontend (React):** Carga la página principal. En ese momento, ejecuta una función interna (ubicada en `frontend/services/serviceApi.ts`) que hace un `fetch` (una llamada por internet) preguntando: *"Oye Backend, dame la lista de servicios"*.
3. **El Backend (FastAPI):** Recibe esa petición en el puerto `8000`. Busca en `main.py` si existe una ruta para `/servicios/`. ¡Y la hay!
4. **La Base de Datos:** FastAPI usa SQLAlchemy para traducir la petición a lenguaje SQL y le dice a PostgreSQL: *"SELECT * FROM servicios"*.
5. **El Retorno:** La base de datos entrega la info, FastAPI la empaca en un formato fácil de leer (JSON) y se la devuelve al Frontend.
6. **La Pantalla:** React recibe el JSON, recorre la lista y dibuja las tarjetas bonitas en la pantalla.

---

## 2. Mapa de Carpetas: ¿Dónde va cada cosa?

Aquí tienes el desglose de para qué sirve cada carpeta y qué archivos NO deberías poner allí.

### 📂 Carpeta `backend/` (FastAPI)
Todo lo relacionado con datos, reglas de negocio y servidores.
*   **`main.py`:** El corazón. Aquí defines las URLs de tu API (los `endpoints` como `/servicios`). **Regla:** No pongas lógica súper compleja aquí, mantenlo como un índice.
*   **`database.py`:** El puente. Aquí configuras cómo conectarte a PostgreSQL.
*   **`models.py`:** La estructura en la base de datos. Si quieres agregar una tabla nueva (ej. `Usuarios`), creas una clase aquí.
*   **`schemas.py`:** El filtro de seguridad (Pydantic). Define qué datos esperas recibir del Frontend y qué datos le vas a devolver. Evita que te manden basura.
*   **`requirements.txt`:** La lista de compras de Python. Todos los paquetes que necesita el backend para funcionar.

### 📂 Carpeta `frontend/` (Next.js App Router)
Todo lo visual, animaciones y estructura web.
*   **`app/`:** El enrutador. Cada carpeta aquí representa una URL (ej. si creas `app/contacto/page.tsx`, crearás la ruta `/contacto`). 
    *   **`layout.tsx`:** La plantilla global (donde cargas fuentes y configuraciones que afectan a TODA la web).
    *   **`page.tsx`:** La página de inicio. Fíjate que casi no tiene código HTML puro, solo llama a "Widgets".
*   **`src/`:** Tu código fuente real.
    *   **`src/widgets/`:** Componentes grandes y autónomos. Por ejemplo, `HeroSection` o `Navigation`. Son bloques completos de la página. **Regla:** Aquí solo van secciones grandes, no botoncitos sueltos.
    *   **`src/shared/ui/`:** Componentes pequeños y reutilizables. Aquí sí van los botones (`GlassButton`), textos (`Heading`), tarjetas (`GlassCard`). **Regla:** Estos componentes no deben saber nada de bases de datos o lógica compleja, solo deben verse bonitos.
*   **`services/`:** Los traductores. Aquí (como en `serviceApi.ts`) escribes las funciones que hacen `fetch` al backend. **Regla:** Nunca hagas un `fetch` directamente dentro de un componente de React, siempre usa un servicio de esta carpeta.
*   **`types/`:** El diccionario. Archivos `.ts` donde defines cómo lucen los objetos de datos en TypeScript (ej. interface `Servicio`).

---

## 3. Conexiones Clave: ¿Dónde se "tocan" las piezas?

Si necesitas modificar cómo se comunican las partes, busca en estos 3 puntos de conexión:

### A. CORS (Cross-Origin Resource Sharing)
Ubicación: `backend/main.py`.
¿Por qué importa? Por seguridad, los navegadores bloquean peticiones entre puertos distintos (3000 vs 8000). El bloque `CORSMiddleware` en FastAPI es la lista VIP que dice "Sí, deja entrar al puerto 3000".

### B. El Fetch de la API
Ubicación: `frontend/services/serviceApi.ts`
Aquí está la URL `http://192.168.7.139:8000`. Si despliegas (subes a internet) el proyecto, tendrás que cambiar esta IP por tu dominio real (ej. `https://api.meraky.com`).

### C. La Conexión a la Base de Datos
Ubicación: El archivo `.env` en el backend (y `database.py`).
Aquí se guarda el usuario, contraseña y puerto de PostgreSQL. **Regla de oro:** Nunca, jamás, subas el archivo `.env` a GitHub.

---

> **💡 Consejo de Mentor:** Si quieres agregar una nueva funcionalidad (ejemplo: un catálogo de productos de aluminio), sigue siempre este orden:
> 1. Piensa qué datos necesitas guardar (Backend: `models.py`).
> 2. Crea el endpoint para pedir o guardar esos datos (Backend: `main.py` y `schemas.py`).
> 3. Crea la función para conectarse a ese endpoint (Frontend: `services/serviceApi.ts`).
> 4. Por último, crea la interfaz visual para mostrarlos (Frontend: `src/widgets/...`).
