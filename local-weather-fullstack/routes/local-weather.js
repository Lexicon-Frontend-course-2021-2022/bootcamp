/* ============================================================================
 * Route: /local-weather
 * ========================================================================= */
const route = require('express').Router();

const keys = require('./../config').keys;

const weather = require('weather-js');

/* ============================================================================
 * Array to translate 'skycode' into swedish weather conditions.
 * ========================================================================= */
const skycode = [
  'åskväder',
  'åskväder',
  'åskväder',
  'åskväder',
  'åskväder',
  'snöblandat regn',
  'snöblandat regn',
  'snöblandat regn',
  'isande',
  'isande',
  'snöblandat regn',
  'regnskurar',
  'regnigt',
  'regnbyar',
  'snöfall',
  'snöfall',
  'snöfall',
  'åskväder',
  'regnskurar',
  'dust',
  'dimmigt',
  'dimmigt',
  'dimmigt',
  'blåsigt',
  'blåsigt',
  'isande',
  'molnigt',
  'mestadels molnigt',
  'mestadels molnigt',
  'delvis molnigt',
  'delvis molnigt',
  'soligt',
  'soligt',
  'mestadels soligt',
  'mestadels soligt',
  'åskväder',
  'varmt',
  'risk för åskväder',
  'risk för åskväder',
  'risk för regn',
  'regnskurar',
  'risk för snöfall',
  'snöfall',
  'snöfall',
  'n/a',
  'risk för regn',
  'risk för snöfall',
  'risk för åskväder'
]
/* ============================================================================
 * Endpoints
 * ========================================================================= */

route.get('/:lat/:lon', (req, res) => {

  // Get weather using npm module 'weather-js'
  weather.find({
    search: `${req.params.lat},${req.params.lon}`,
    degreeType: 'C',
    language: 'sv'
  }, (err, result) => {

    /*
     * Handle errors
    */
    if (err) {

      res
        .status(400)
        .json({
          status: 'error'
        });
      return console.log(err);

    } else {

      /*
       * Create forecasts and translate into swedish weekdays
       */
      const forecast = [];
      result[0].forecast.forEach(item => {
        if (item.date >= result[0].current.date && forecast.length < 4) {
          forecast.push({
            icon: `http://blob.weather.microsoft.com/static/weather4/en-us/law/${item.skycodeday}.gif`,
            high: item.high,
            low: item.low,
            weekday: {
              Mon: "Måndag",
              Tue: "Tisdag",
              Wed: "Onsdag",
              Thu: "Torsdag",
              Fri: "Fredag",
              Sat: "Lördag",
              Sun: "Söndag",
            }[item.shortday]
          });
        }
      });

      /*
       * Respond to client
       */
      res
        .status(200)
        .json({
          status: 'success',
          location: result[0].location.name.split(',')[0],
          temperature: result[0].current.temperature,
          feelslike: result[0].current.feelslike,
          unit: result[0].location.degreetype,
          icon: result[0].current.imageUrl,
          skycode: result[0].current.skycode,
          description: skycode[result[0].current.skycode],
          forecast
        });

      return console.log(result[0]);
    }

  })

});

/* ============================================================================
 * Export route
 * ========================================================================= */
module.exports = route;


