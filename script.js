const apiKey = 'd065093196caa7289f02e0f28d11a406'; 

       
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=${apiKey}`;

        
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            
            document.getElementById('temperature').textContent = ` ${data.main.temp} Kelvin`;
            document.getElementById('description').textContent = ` ${data.weather[0].description}`;
          })
          .catch(error => {
           
            console.error('Error fetching data:', error);
          });
  
