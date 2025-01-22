 // Boilerplate Code for Virtual Assistant API
 const express = require('express');
 const app = express();
 
 /*
 Task:
 You need to build an API for a virtual assistant that provides customized responses.
 
 Requirements:
 1. Create a GET endpoint at "/assistant/greet".
 2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
 3. The API should return a JSON response with:
    a. A personalized greeting using the name provided.
    b. A cheerful message based on the current day of the week.
 
 Example Responses:
 - For Monday:
   {
     "welcomeMessage": "Hello, xyz! Welcome to our assistant app!",
     "dayMessage": "Happy Monday! Start your week with energy!"
   }
 - For Friday:
   {
     "welcomeMessage": "Hello, John! Welcome to our assistant app!",
     "dayMessage": "It's Friday! The weekend is near!"
   }
 - For other days:
   {
     "welcomeMessage": "Hello, John! Welcome to our assistant app!",
     "dayMessage": "Have a wonderful day!"
   }
 
 Add the required logic below to complete the API.
 */
 
 // console.log(app);
 
 // 1. API - GET /assistant/greet
 // 2. name as query
 // 3. return personalized messages
 
 app.get('/assistant/greet', (request, response) => {
   let name = request.query.name;
   let day = new Date().getDay();
 
   if (day == 1) {
     let obj = {
       welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
       dayMessage: 'Happy Monday! Start your week with energy!',
     };
     return response.send(obj); //json data stringified
   } else if (day == 5) {
     // friday
     let obj = {
       welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
       dayMessage: "It's Friday! The weekend is near!",
     };
     return response.send(obj); //json data stringified
   } else {
     // all other days
     let obj = {
       welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
       dayMessage: 'Have a wonderful day!',
     };
     return response.send(obj); //json data stringified
   }
   response.send('hi');
 });
 
 app.get('/', function (request, response) {
   return response.send('<p>Hello World</p>'); // html page as normal HTML page
 });
 
 const PORT = 3000;
 app.listen(PORT, () => {
   console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
 }); 