const request = require('request');

const geocode = (address, callback) => {
  const url = `http://api.positionstack.com/v1/forward?access_key=de06c5ab2bf9c4125d81672caf8acb4e&query=${address}`;
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to location services !", undefined);
    } else {
      callback(undefined, {
        longitude: body.data[0].longitude,
        latitude: body.data[0].latitude,
        location: body.data[0].label,
      });
    }
  });
};

module.exports= geocode