from pydantic import BaseModel
from typing import Optional

# --- Esquemas (Schemas) Pydantic ---
# Mientras 'models.py' define cómo se guardan los datos en la Base de Datos,
# 'schemas.py' define cómo se ven los datos que el usuario nos ENVÍA o que nosotros le DEVOLVEMOS.
# Pydantic se encarga de validar que los datos sean correctos automáticamente.

class ServicioCreate(BaseModel):
    """
    Este esquema define lo que el Frontend debe enviar para CREAR un servicio.
    Fíjate que NO incluye el 'id', porque eso lo genera la base de datos sola.
    """
    nombre: str
    descripcion: Optional[str] = None # Optional significa que puede ser nulo o no enviarse
    precio_base_m2: float
    disponible: bool = True

class Servicio(ServicioCreate):
    """
    Este esquema define lo que el Backend DEVUELVE al Frontend.
    Hereda todo de 'ServicioCreate' (nombre, descripcion, etc.) pero le AGREGA el 'id'.
    """
    id: int

    class Config:
        # Esta configuración es clave: Le dice a Pydantic que sea capaz de leer
        # datos desde un modelo de SQLAlchemy (ORM) directamente.
        # Sin esto, FastAPI no sabría cómo convertir nuestro modelo de DB a JSON.
        from_attributes = True