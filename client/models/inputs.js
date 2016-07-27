import fetch from 'isomorphic-fetch'

export function fetchMoon(date, location) {
  return fetch('http://api.usno.navy.mil/rstt/oneday?date=' + date + '&loc=' + location)
    .then(function(data){
      return data.json();
    })
}


