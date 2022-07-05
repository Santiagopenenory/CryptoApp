# Proyecto SO/Taller de Web

## Tecnologias
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
    - Docker

## Funcionalidad de la aplicacion
---
### FrontEnd 
- Utilizacion de [CoinGecko API](https://www.coingecko.com/en/api/documentation)
    - HTTP Request:
        - Listar todas las monedas junto con su informacion 
        - Listar informacion historica de precios de una moneda especifica
        -  Listar informacion sobre la moneda, informacion respectiva a creacion, links utiles, texto explicativo de la moneda 
        - Valores para graficar estilo BTC/USD, con los datos de los n-anteriores dias y con un respectivo intervalo 
        - Listado de exchanges
        - Listado de 7 trending coins.  
### Autenticacion de usuarios mediante 
- Posibilidad de proveer una autenticacion de manera rapida y simple mediante [Auth0](https://auth0.com/docs/) o herramientas similares.
### BackEnd
- Generacion de API mediante express y nodejs con un conjunto de endpoints para realizar operaciones CRUD usando mongo DB para la persistencia de datos.


- Tanto backend como frontend estaran dockerizados mediante composiciones de contenedores (docker-compose)
 
### Contenedores
 - Uso de contenedores compuestos para dockerizar la aplicacion completa tanto FrontEnd como BackEnd.