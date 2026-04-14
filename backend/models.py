from database import Base
from sqlalchemy import Column, Integer, String, Float, Boolean

class Servicio(Base):
    __tablename__ = "servicios"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    descripcion = Column(String)
    precio_base_m2 = Column(Float, nullable=False) # Precio por metro cuadrado
    disponible = Column(Boolean, default=True)