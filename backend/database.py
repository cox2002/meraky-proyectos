from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

# Carga las variables de entorno desde el archivo .env (como credenciales y URLs)
load_dotenv()

# Obtenemos la URL de conexión a PostgreSQL desde el archivo .env
URL_DATABASE = os.getenv("DATABASE_URL")

# --- Creación del Engine ---
# El "engine" es el punto de inicio para cualquier aplicación de SQLAlchemy.
# Es la fábrica de conexiones hacia la base de datos real.
engine = create_engine(URL_DATABASE)

# --- Creación de Sesiones ---
# sessionmaker genera una "clase" preconfigurada de la cual podemos instanciar 
# nuevas sesiones (SessionLocal). Cada petición a la API creará una instancia 
# temporal para hablar con la base de datos.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base es una clase padre. Todos nuestros modelos en models.py heredarán de ella,
# lo que permite a SQLAlchemy reconocerlos y crear las tablas mágicamente.
Base = declarative_base()

# --- Función Dependencia ---
# Esta función es un generador (por eso usa 'yield').
# Abre una conexión (db) a la base de datos, la "presta" a la función que la necesite (ej: crear_servicio),
# y en el bloque 'finally' se asegura de cerrarla SIEMPRE al terminar, aunque haya un error.
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()