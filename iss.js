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

const fetchCoordsByIP = function(ip, done){

}

module.exports = { fetchMyIP, fetchCoordsByIP };
