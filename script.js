
async function weathernow(){
    var drink="https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={644d753552358df50aac1e817634148e}";

    let data =  await fetch(drink)
      .then(response => response.json());
      
      console.log(data);
      
};