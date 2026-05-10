from database import Base
from sqlalchemy import Column, Integer, String, Float, Boolean

# --- Modelos ORM (Object-Relational Mapping) ---
# Aquí definimos cómo se verán nuestras tablas en PostgreSQL, 
# pero usando clases y objetos de Python en lugar de código SQL puro.

class Servicio(Base):
    """
    Representa la tabla 'servicios' en la base de datos.
    Cada atributo de la clase se convertirá en una columna.
    """
    # Nombre real de la tabla en PostgreSQL
    __tablename__ = "servicios"

    # Columnas de la tabla:
    # primary_key=True indica que este es el identificador único (ID)
    # index=True ayuda a que las búsquedas por ID sean más rápidas
    id = Column(Integer, primary_key=True, index=True)
    
    # String mapea a VARCHAR en SQL. nullable=False significa que NO puede estar vacío (NOT NULL).
    nombre = Column(String, nullable=False)
    
    # Puede ser nulo por defecto
    descripcion = Column(String)
    
    # Float mapea a números con decimales (DOUBLE PRECISION en PostgreSQL)
    precio_base_m2 = Column(Float, nullable=False) 
    
    # Boolean mapea a TRUE/FALSE. Por defecto un nuevo servicio estará disponible.
    disponible = Column(Boolean, default=True)