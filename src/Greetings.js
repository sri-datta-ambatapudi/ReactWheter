import React, { useState, useEffect } from "react";
import "./Avtar/Charcter.css";
function WeatherFact() {
  const [fact, setFact] = useState("");
  const [fade, setFade] = useState(false);

  useEffect(function () {
    function updateFact() {
      const facts = [
        "The fastest wind speed ever recorded was 253 mph! 🌪️",
        "A single lightning bolt is five times hotter than the sun! ⚡☀️",
        "Rain isn’t shaped like drops—it actually looks like tiny pancakes! ☔🥞",
        "The coldest temperature ever recorded was -128.6°F in Antarctica! ❄️🌨️",
        "The hottest temperature ever recorded was 134°F in Death Valley! 🏜️🔥",
        "Snowflakes aren’t actually white—they are clear! ❄️✨",
        "Sometimes it can rain fish! 🐟🌧️",
        "The Antarctic Desert is the largest and coldest desert. ❄️🏜️",
        "Lightning strikes 300 days a year in Catatumbo, Venezuela! ⚡⛈️",
        "Hurricanes release energy equal to 10,000 nuclear bombs! 🌪️💥",
        "The longest-lasting rainbow lasted for 9 hours in Taiwan! 🌈⏳",
        "The coldest inhabited place on Earth is Oymyakon, Russia, where temperatures drop to -96°F! ❄️🥶",
        "Deserts aren’t always hot—the Gobi Desert can reach -40°F in winter! 🏜️❄️",
        "A single cloud can weigh up to 1 million pounds! ☁️⚖️",
        "The driest place on Earth, Atacama Desert, once went 500 years without rain! 🏜️🚫🌧️",
        "Fire whirls, also called fire tornadoes, can spin flames over 100 feet high! 🔥🌪️",
        "The Sahara Desert was once covered in lush green forests and lakes! 🌿🏜️",
        "There’s a place in Antarctica where snow never melts, even in the summer! ❄️🏔️",
        "Raindrops aren’t tear-shaped—they start round and get flattened like a burger bun! ☔🍔",
        "Tornadoes can throw cars hundreds of feet into the air! 🚗🌪️"
      ];

      setFade(false);

      setTimeout(function () {
        setFact(facts[Math.floor(Math.random() * facts.length)]);
        setFade(true);
      }, 500);
    }

    updateFact();
    const interval = setInterval(updateFact, 10000);

    return function () {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`fact-box ${fade ? "fade-in" : "fade-out"}`}>
      <h5>🌍 Weather Fact</h5>
      <p>{fact}</p>
    </div>
  );
}

export default WeatherFact;
