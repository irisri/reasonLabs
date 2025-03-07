const data = [
  "1. I added the env file as mentioned in the README file.",
  "2. I added a gitignore file",
  "3. I added a API route to the app to get the right information",
  "- get the city from route: '/api/location/search', this will get the city name if there is one",
  "- get the wether information frim the route: '/api/weather/[city]', this will get  the city information and the wether information ",
  "4. updaed the types to fit the responses from the openweathermap API and added the missing information according to the design - (missing feels like in WeatherData)",
  "5. added a util function to convert the response from the openweathermap API to the weather type that is expected - WeatherData",
];

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-700 to-gray-800 p-4">
      <div className="flex justify-between mb-3 flex-col gap-2">
        <h2 className="text-xl font-semibold mb-4 text-gray-300">About</h2>
        <div>
          {data.map((text) => (
            <p key={text} className="text-gray-300">
              {text}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
