import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import './Avtar/Charcter.css'


function App() 
{
  const [village, setVillage] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isDay, setIsDay] = useState(true);
  const searchInput = useRef(null);

  const uv = weatherData?.current?.uv || 0;
  const { level, message, color } = getUVAdvisory(uv);



  useEffect(() => {
    if (weatherData && weatherData.current) {
      setIsDay(weatherData.current.is_day === 1);
    }
  }, [weatherData]);

  useEffect(() => {
    document.body.classList.remove('day-theme', 'night-theme');
    document.body.classList.add(isDay ? 'day-theme' : 'night-theme');
  }, [isDay]);

 


  function inputSearch(event) {
    setVillage(event.target.value);
  }

  async function handleApi(event)
   {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/empty/weather/${village}`);
      console.log(response.data);
      console.log("Weather condition:", weatherData?.current?.condition?.text);

      if (response.data.error) 
      {
        window.confirm("Village Not Found");
      } else 
      {
        setWeatherData(response.data);
        setIsDay(response.data.current.is_day === 1); 
      }
    } catch (err) 
    {
      window.alert("Error: " + err.message);
    }
  }

  function getIllustration(description) {
    const lower = description.toLowerCase();
    if (lower.includes("clear")) return "☀️";
    if (lower.includes("cloud")) return "☁️";
    if (lower.includes("rain")) return "🌧️";
    if (lower.includes("overcast")) return "☁️☁️";
    if (lower.includes("thunder")) return "⛈️";
    if (lower.includes("snow")) return "❄️";
    return "🌤️";
  }
  function  getUVAdvisory(uv)
  {
    if(uv<=2)
    {
      return { level: "Low", message: "Safe", color: "green" };
    }
    else if(uv<=5)
    {
      return { level: "modaerate", message: "use SPf ", color: "yellow" };
    }
    else if (uv <= 7)
    {
      return { level: "High", message: "Use SPF 30+, stay in shade", color: "orange" };
    }
     else if (uv <= 10)
       {
      return { level: "Very High", message: "Avoid midday sun", color: "red" };
    } 
    else
     {
      return { level: "Extreme", message: "Stay indoors", color: "purple" };
    }
  }

  useEffect(function () {
    function handelclick(event) {
      if (event.key === '/') {
        event.preventDefault(); 
        if (searchInput.current) {
          searchInput.current.focus(); 
        }
      }
    }

    window.addEventListener('keydown', handelclick);
    return function () {
      window.removeEventListener('keydown', handelclick);
    };
  }, []);
  
  return (
    <div className={isDay ? 'day-theme' : 'night-theme'} style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      
      {
      isDay && <div className="sun"></div>
      }
              {
              !isDay && <><div className="moon"></div>
                  <div className="star" style={{ top: "10%", left: "10%" }}></div>
                  <div className="star" style={{ top: "10%", right: "10%" }}></div>
                   <div className="star" style={{ top: "10%", right: "20%" }}></div>
                   <div className='star' style={{top: "47%", right:"30%"}}></div>
                </>
              }
     
  
      <div className="container py-4 position-relative" style={{ zIndex: 2 }}>
        <nav className="navbar justify-content-center mb-4">
          <form className="d-flex" role="search" onSubmit={handleApi}>
            <input className="form-control me-2" type="search"  ref={searchInput} placeholder="Search — press / 🔍" onChange={inputSearch} />
            <button className="btn btn-outline-info"   type="submit">Search</button>
          </form>
        </nav>
  
        {weatherData && weatherData.location && weatherData.current && (
          <div>
            <div className="text-center mb-3" style={{ fontSize: '2rem' }}>
              <h6>{isDay ? "🌞 Day Mode" : "🌙 Night Mode"}</h6>
            </div>
  
            <div className="glass-card text-center py-4 mb-4">
              <h2 className="fw-bold display-6">📍 {weatherData.location.name},{weatherData.location.country}</h2>
              <p>{weatherData.location.localtime} (Local Time)</p>
              <p className="text-secondary mb-0">Live Weather Update</p>
              <h1 className="display-4 mt-3 weather-emoji">
                
                {getIllustration(weatherData.current.condition.text)}
              </h1>
            </div>
            <div className="row g-4 justify-content-center">


                    <div className="col-md-6">
                         <div className="glass-card text-center p-4">
                        <h5>🌡 Temperature</h5>
                          <h3>{weatherData.current.temp_c} °C</h3>
                        <p>Feels like: {weatherData.current.feelslike_c} °C</p>
                    </div>
                </div>


                  <div className="col-md-6">
                    <div className="glass-card text-center p-4">
                      <h5>💧 Humidity & Pressure</h5>
                      <p>Humidity: {weatherData.current.humidity}%</p>
                    <p>Pressure: {weatherData.current.pressure_mb} mb</p>
                   </div>
                </div>


                  <div className="col-md-6">
              <div className="glass-card text-center p-4">
    <h5>💨 Wind & Condition</h5>
    <p>Wind: {weatherData.current.wind_kph} km/h</p>
    <p>Direction: {weatherData.current.wind_dir}</p>
    <p>{weatherData.current.condition.text}</p>
  </div>
</div>


<div className="col-md-3 ">
  <div className="glass-card text-center p-4">
    <h5>🔆 UV Index</h5>
    <p><strong style={{ color }}>{weatherData.current.uv} – {level}</strong></p>
    <small>{message}</small>
  </div>
</div>

</div>

          </div>
        )}
      </div>
      
    </div>
  );
}

export default App;
