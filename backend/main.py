from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware # <-- Permite conexiones desde el frontend
from sqlalchemy.orm import Session

# Importamos nuestros módulos locales
import models, schemas
from database import engine, get_db

# Esta línea le dice a SQLAlchemy que cree las tablas en la base de datos
# si es que aún no existen, basándose en lo que definimos en models.py
models.Base.metadata.create_all(bind=engine)

# Inicializamos la aplicación FastAPI. 'app' es la instancia principal que 
# manejará todas nuestras rutas (endpoints).
app = FastAPI(title="Vidriería Meraky API", description="API para el manejo de servicios y proyectos")

# --- Configuración de CORS (Cross-Origin Resource Sharing) ---
# CORS es una medida de seguridad de los navegadores. Si nuestro frontend está en el puerto 3000
# y el backend en el 8000, el navegador bloqueará las peticiones por ser de "orígenes distintos".
# Aquí configuramos qué orígenes (URLs) tienen permiso para hablar con esta API.
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://192.168.7.139:3000", # IP local para probar desde móviles o en la misma red
    "*", # Asterisco significa "permitir a todos" (útil en desarrollo, peligroso en producción)
]

# Añadimos el middleware (una capa intermedia por la que pasan todas las peticiones)
# para que FastAPI acepte conexiones desde los 'origins' definidos.
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, 
    allow_credentials=True,
    allow_methods=["*"], # Permite todos los métodos HTTP (GET, POST, PUT, DELETE)
    allow_headers=["*"], # Permite todos los encabezados
)

# --- Definición de Rutas (Endpoints) ---
# Usamos decoradores (@app.get) para decirle a FastAPI qué URL ejecutar qué función.

@app.get("/")
def inicio():
    """Ruta raíz de prueba para verificar que la API está viva."""
    return {"mensaje": "Bienvenido a la API de Meraky Proyectos"}

@app.get("/test-db")
def probar_conexion(db: Session = Depends(get_db)):
    """
    Ruta para probar la base de datos.
    'Depends(get_db)' es inyección de dependencias: FastAPI se encarga de abrir
    una sesión de base de datos antes de ejecutar la función, y cerrarla al terminar.
    """
    return {"estado": "Conexión exitosa a meraky_db"}

@app.post("/servicios/", response_model=schemas.Servicio)
def crear_servicio(servicio: schemas.ServicioCreate, db: Session = Depends(get_db)):
    """
    Ruta POST para crear un nuevo servicio.
    - Recibe un JSON que debe cumplir con el formato de 'schemas.ServicioCreate'.
    - Devuelve un JSON que cumple con 'schemas.Servicio' (que incluye el ID generado).
    """
    # 1. Transformamos los datos validados de Pydantic a un modelo SQLAlchemy (ORM)
    nuevo_servicio = models.Servicio(
        nombre=servicio.nombre,
        descripcion=servicio.descripcion,
        precio_base_m2=servicio.precio_base_m2,
        disponible=servicio.disponible
    )
    # 2. Agregamos el objeto a la sesión actual
    db.add(nuevo_servicio)
    # 3. Hacemos "commit" para guardar permanentemente en la base de datos PostgreSQL
    db.commit()
    # 4. Refrescamos el objeto para que obtenga el ID que PostgreSQL le asignó automáticamente
    db.refresh(nuevo_servicio)
    
    return nuevo_servicio

@app.get("/servicios/", response_model=list[schemas.Servicio])
def listar_servicios(db: Session = Depends(get_db)):
    """
    Ruta GET para obtener todos los servicios.
    Hace una consulta 'SELECT * FROM servicios' usando SQLAlchemy.
    """
    servicios = db.query(models.Servicio).all()
    return servicios