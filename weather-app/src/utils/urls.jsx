const apiKey = "d3855f74ff7df3c088db301ff3a359cb";
const application = "https://api.openweathermap.org/data/2.5/";
export const getWeatherUrl = ({ city, countryCode }) => `${application}weather?q=${city},${countryCode}&appid=${apiKey}`;
export const getForecastUrl = ({ city, countryCode }) => `${application}forecast?q=${city}&appid=${apiKey}`;