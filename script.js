mapboxgl.accessToken = 'pk.eyJ1IjoianVzdGdpbmdlcjg4OCIsImEiOiJjazYzcDY5bHIwOHZyM2VwYWdvdGJlaDF1In0.ZmNto6y6i31WnRnwKotQIw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/justginger888/ck6wz2a231h671io8uasib1si',
    interactive: true,
    
  });  

  map.on('load', function () {
    map.setPaintProperty('ne-Russia','fill-color', 'rgb(0,0,0)')
  });

  map.addControl(new mapboxgl.NavigationControl());