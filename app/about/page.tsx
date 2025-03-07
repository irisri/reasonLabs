const data = [
  "1. I added the env file as mentioned in the README file.",
  "2. I added a gitignore file",
  "3. I added a API route to get the city from route: '/api/location/search', this will get the city name if there is one",
  "4. I added a API route to get the weather route: '/api/weather/[city]', this will get  the city information and the wether information ",
  "5. updaed the types to fit the responses from the openweathermap API and added the missing information according to the design - (missing feels like in WeatherData)",
  "6. added a util function to convert the response from the openweathermap API to the weather type that is expected - WeatherData",
  "7. added A/B testing - added a variant that will display the components dynamically  per the A/B testing",
  "8. added presistent variant with useing session storage",
  "9. added a util functuin to get and set from session storage",
  "10. added a nav bar to navigat to home page and about",
  "11. fixed the duplicate cities issue and make sure that it's perssistent",
  "12. added redux",
];

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-700 to-gray-800 p-4">
      <div className="flex justify-between mb-3 flex-col gap-2">
        <div>
          {data.map((text) => (
            <p key={text} className="text-sm text-gray-300">
              {text}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
