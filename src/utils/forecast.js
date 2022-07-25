const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=9db05cab30149643209ef54a704c17a4&query=${latitude},${longitude}`;
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to weather services !", undefined);
    } else if (body.error) {
      callback("unable to find location ", undefined);
    } else {
      callback(
        undefined,
         body.current.weather_descriptions[0] +
          ". It is currently " +
           body.current.temperature +
          " degrees out . It feels like  " +
           body.current.feelslike +
          " degrees out . \n"
      );
    }
  });
};

module.exports = forecast;
