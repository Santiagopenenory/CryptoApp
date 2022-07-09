# CryptoFinder App

## Tecnologías
---
- FrontEnd
  - SvelteJs
  - Bootstrap Framework 
- BackEnd
    - ExpressJs
    - NodeJs
    - Mongo DB
- Autenticación de usuarios
    - Auth0
- Contenedores
    - Docker & Docker - Compose

## Funcionalidad de la aplicación
---
### FrontEnd 
- Utilizacion de [CoinGecko API](https://www.coingecko.com/en/api/documentation) para obtención de información relacionada a las criptomonedas. 
- El usuario podrá :
    - Listar todas las monedas junto con su informacion 
    - Tener su conjunto de monedas de preferencia
    - Posibilidad de realizar gráficos de velas con distintas configuraciones sobre moneda elegida, temporalidad que se quiere analizar  y moneda contra la cual comparar.
    - Listado de monedas que son tendencia cada dia.  
### Autenticacion de usuarios
- Se provee una  autenticación de manera rápida y simple mediante [Auth0](https://auth0.com/docs/)
### BackEnd
- Generacion de API mediante express y nodejs con un conjunto de endpoints para realizar operaciones CRUD usando mongo DB para la persistencia de datos.

 
### Contenedores
 - Composición de contenedores mediante Docker-compose para dockerizar la aplicación FrontEnd, BackEnd y la respectiva base de datos MongoDB para facilitar el rápido envío y despliegue de toda la aplicación.


 
 ## Instalación
 ---

**Requisitos previos:**
 
> Tener instalado [Docker](https://docs.docker.com/get-docker/) y [Docker-Compose](https://docs.docker.com/compose/install/)


## Descargar el proyecto
    
    - git clone https://github.com/Santiagopenenory/CryptoApp.git 
    
    - cd CryptoApp
    
    - docker-compose up

### Luego abrir el navegador con la direccion http://localhost:3001/
