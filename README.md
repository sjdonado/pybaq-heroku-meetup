## How to run?
```
  npm i
  npm run dev
```

### Error response
* http://localhost:3000/search
`Status code 400`
```json
{
  "message": "q param is required"
}
```

### Success response
* http://localhost:3000/search?q=Colombia
`Status code 200`
```json
{
  "data": [
    {
      "title":"Oncocercosis",
      "date":"14 de junio de 2019",
      "description":"confirmaba que Colombia había conseguido eliminar la oncocercosis. Colombia fue el primer país del mundo en",
      "link":"https://www.who.int/es/news-room/fact-sheets/detail/onchocerciasis"
    },
    {
      "title":"Hipertensión",
      "date":"13 de septiembre de 2019",
      "description":"aplicar el paquete técnico HEARTS (Barbados, Bhután, Colombia, Chile, China, Cuba, Etiopía, Filipinas",
      "link":"https://www.who.int/es/news-room/fact-sheets/detail/hypertension"
    },
    {
      "title":"¿Pueden unas bacterias diminutas detener la propagación de enfermedades?",
      "date":"28 de diciembre de 2016",
      "description":"asociados son la Universidad de Antioquia, en Medellín (Colombia), y el profesor Iván Darío Vélez",
      "link":"https://www.who.int/es/news-room/feature-stories/detail/can-tiny-bacteria-help-stop-the-spread-of-disease-"
    },
    {
      "title":"Una solución integral y equitativa para el precio de los medicamentos",
      "date":"5 de julio de 2016",
      "description":"determinados medicamentos, como el reciente plan de Colombia para aprobar un genérico del antineoplásico",
      "link":"https://www.who.int/es/news-room/commentaries/detail/a-comprehensive-and-fair-solution-to-the-price-of-medicines"
    },
    {
      "title":"Reforzar la coordinación de los equipos médicos de emergencia",
      "date":"22 de mayo de 2016",
      "description":"procedentes de Colombia, Alemania, España, el Perú y los Estados Unidos que se encuentran en estos",
      "link":"https://www.who.int/es/news-room/feature-stories/detail/strengthening-the-coordination-of-emergency-medical-teams"
    },
    ...
  ]
}
```