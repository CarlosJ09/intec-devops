# Proyecto HTTP Servers con Docker

Este proyecto contiene dos servidores HTTP containerizados:

1. **Servidor Python** - Usando solo librerías estándar de Python (puerto 5000)
2. **Servidor Node.js** - Usando Express (puerto 3000)

## Estructura del Proyecto

```
├── python/
│   ├── main.py          # Servidor HTTP con Python estándar
│   ├── requirements.txt # Sin dependencias externas
│   └── Dockerfile       # Container Python
├── node/
│   ├── index.js         # Servidor HTTP con Express
│   ├── package.json     # Dependencias Node.js
│   └── Dockerfile       # Container Node.js
└── docker-compose.yml   # Configuración para ambos servicios
```

## Instrucciones de Uso

### Levantar ambos servidores
```bash
docker-compose up --build
```

### Levantar solo el servidor Python
```bash
docker-compose up python-http --build
```

### Levantar solo el servidor Node.js
```bash
docker-compose up node-http --build
```

## Endpoints Disponibles

### Servidor Python (http://localhost:5000)
- `GET /` - Mensaje de bienvenida
- `GET /health` - Estado del servicio
- `GET /info` - Información del servidor

### Servidor Node.js (http://localhost:3000)
- `GET /` - Mensaje de bienvenida
- `GET /health` - Estado del servicio
- `GET /info` - Información del servidor

## Pruebas

```bash
# Probar servidor Python
curl http://localhost:5000
curl http://localhost:5000/health
curl http://localhost:5000/info

# Probar servidor Node.js
curl http://localhost:3000
curl http://localhost:3000/health
curl http://localhost:3000/info
```

## Parar los servicios

```bash
docker-compose down
```




