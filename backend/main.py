from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware # <-- Nueva importación
from sqlalchemy.orm import Session
import models, schemas
from database import engine, get_db

models.Base.metadata.create_all(bind=engine)

# Configuración de CORS
# backend/main.py

app = FastAPI(title="Vidriería Meraky API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Permite CUALQUIER origen (IP, localhost, etc.)
    allow_credentials=True,
    allow_methods=["*"], # Permite todos los métodos (GET, POST, etc.)
    allow_headers=["*"], # Permite todos los headers
)


@app.get("/")
def inicio():
    return {"mensaje": "Bienvenido a la API de Meraky Proyectos"}

@app.get("/test-db")
def probar_conexion(db: Session = Depends(get_db)):
    return {"estado": "Conexión exitosa a meraky_db"}

# --- NUEVO: Endpoint para crear un servicio ---
@app.post("/servicios/", response_model=schemas.Servicio)
def crear_servicio(servicio: schemas.ServicioCreate, db: Session = Depends(get_db)):
    nuevo_servicio = models.Servicio(
        nombre=servicio.nombre,
        descripcion=servicio.descripcion,
        precio_base_m2=servicio.precio_base_m2,
        disponible=servicio.disponible
    )
    db.add(nuevo_servicio)
    db.commit()
    db.refresh(nuevo_servicio)
    return nuevo_servicio

@app.get("/servicios/", response_model=list[schemas.Servicio])
def listar_servicios(db: Session = Depends(get_db)):
    servicios = db.query(models.Servicio).all()
    return servicios