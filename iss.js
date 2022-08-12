/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');
const fetchMyIP = function(done) {
  // use request to fetch IP address from JSON API
  request('https://geo.ipify.org/api/v2/country,city?apiKey=at_DHVTAqaliKcStNAxoYdktX08t1Pnt&ipAddress=8.8.8.8', (error, response, body) => {
    if (error) {
      done(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      done(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    done(null, data.ip);
  });

}

const fetchCoordsByIP = function(ip, done) {
  request('http://ipwho.is/' + ip, (error, response, body) => {
    if (error) {
      done(error,null);
      return;
    }
    const data = JSON.parse(body);
    let result = {};
    if (!data.success) {
      const message = `Sussess status was ${data.success}. Server message says: ${data.message} when fetching for IP ${data.ip}`;
      done(Error(message), null);
      return;
    } 
    const {latitude, longitude} = data;
    done(null, {latitude, longitude});
  })
}

const fetchISSFlyOverTimes = function(coords, done){
  request(`https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`,(error,response,body)=>{
    if(error){
      done(error, null);
      return;
    }
    let data  = JSON.parse(body);

    if(response.statusCode!==200){
      const message = `Error. Invalid ip`;
      done(Error(message));
    }
    done(null, data.response);
  });
}

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
