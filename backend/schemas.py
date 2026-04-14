from pydantic import BaseModel
from typing import Optional

# Lo que el Frontend envía al crear un servicio
class ServicioCreate(BaseModel):
    nombre: str
    descripcion: Optional[str] = None
    precio_base_m2: float
    disponible: bool = True

# Lo que el Backend devuelve (incluye el ID de la DB)
class Servicio(ServicioCreate):
    id: int

    class Config:
        from_attributes = True