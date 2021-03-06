
mapboxgl.accessToken = 'pk.eyJ1IjoianVzdGdpbmdlcjg4OCIsImEiOiJjazYzcDY5bHIwOHZyM2VwYWdvdGJlaDF1In0.ZmNto6y6i31WnRnwKotQIw';



var json = [
  {
    "id": "ne-Afghanistan",
    "total": 2
  },
  {
    "id": "ne-Algeria",
    "total": 1
  },
  {
    "id": "ne-Australia",
    "total": 2
  },
  {
    "id": "ne-Austria",
    "total": 1
  },
  {
    "id": "ne-Bahrain",
    "total": 3
  },
  {
    "id": "ne-Bangladesh",
    "total": 12
  },
  {
    "id": "ne-Barbados",
    "total": 2
  },
  {
    "id": "ne-Belgium",
    "total": 2
  },
  {
    "id": "ne-Bulgaria",
    "total": 5
  },
  {
    "id": "ne-Cameroon",
    "total": 2
  },
  {
    "id": "ne-China",
    "total": 4
  },
  {
    "id": "ne-Colombia",
    "total": 2
  },
  {
    "id": "ne-Croatia",
    "total": 2
  },
  {
    "id": "ne-Cuba",
    "total": 3
  },
  {
    "id": "ne-Czechia",
    "total": 16
  },
  {
    "id": "ne-Dominica",
    "total": 1
  },
  {
    "id": "ne-Ecuador",
    "total": 1
  },
  {
    "id": "ne-Egypt",
    "total": 18
  },
  {
    "id": "ne-Germany",
    "total": 10
  },
  {
    "id": "ne-Ghana",
    "total": 4
  },
  {
    "id": "ne-Greece",
    "total": 18
  },
  {
    "id": "ne-Hungary",
    "total": 7
  },
  {
    "id": "ne-India",
    "total": 71
  },
  {
    "id": "ne_Iran",
    "total": 4
  },
  {
    "id": "ne-Iraq",
    "total": 16
  },
  {
    "id": "ne-Ireland",
    "total": 20
  },
  {
    "id": "ne-Italy",
    "total": 12
  },
  {
    "id": "ne-Jamaica",
    "total": 1
  },
  {
    "id": "ne-Jordan",
    "total": 8
  },
  {
    "id": "ne-Kenya",
    "total": 3
  },
  {
    "id": "ne-Kuwait",
    "total": 2
  },
  {
    "id": "ne-Latvia",
    "total": 6
  },
  {
    "id": "ne-Lithuania",
    "total": 3
  },
  {
    "id": "ne-Malaysia",
    "total": 3
  },
  {
    "id": "ne-Malta",
    "total": 13
  },
  {
    "id": "ne-Myanmar",
    "total": 10
  },
  {
    "id": "ne-Nepal",
    "total": 12
  },
  {
    "id": "ne-Nicaragua",
    "total": 4
  },
  {
    "id": "ne-Nigeria",
    "total": 35
  },
  {
    "id": "ne-Pakistan",
    "total": 80
  },
  {
    "id": "ne-Peru",
    "total": 1
  },
  {
    "id": "ne-Philippines",
    "total": 3
  },
  {
    "id": "ne-Poland",
    "total": 35
  },
  {
    "id": "ne-Portugal",
    "total": 4
  },
  {
    "id": "ne-Romania",
    "total": 15
  },
  {
    "id": "ne-Russia",
    "total": 9
  },
  {
    "id": "ne-Saint Lucia",
    "total": 1
  },
  {
    "id": "ne-Slovakia",
    "total": 1
  },
  {
    "id": "ne-Slovenia",
    "total": 1
  },
  {
    "id": "ne-Solomon Islands",
    "total": 4
  },
  {
    "id": "ne-Sri Lanka",
    "total": 5
  },
  {
    "id": "ne-Sudan",
    "total": 12
  },
  {
    "id": "ne-Sweden",
    "total": 2
  },
  {
    "id": "ne-Syria",
    "total": 4
  },
  {
    "id": "ne-Uganda",
    "total": 2
  },
  {
    "id": "ne-Ukraine",
    "total": 6
  },
  {
    "id": "ne-United Arab Emirates",
    "total": 2
  },
  {
    "id": "ne_UK",
    "total": 100
  },
  {
    "id": "ne-USA",
    "total": 1
  },
  {
    "id": "ne-Uzbekistan",
    "total": 4
  }
 ]

var layers = ['0-10', '10-20', '20-50', '50-100', '100-200', '200-500', '500-1000', '1000+'];
var colors = ['#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'];

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/justginger888/ck6wz2a231h671io8uasib1si',
    interactive: true,
    
  });  

  map.on('load', () => {
    for(var i = 0; i < json.length; i++) {
      var obj = json[i];
  
      console.log(obj.id);
      map.setPaintProperty(obj.id,'fill-color', '#FF0000')
      map.setPaintProperty(obj.id,'fill-opacity', parseInt(obj.total *5)/100);
    }

    for (i = 0; i < layers.length; i++) {
      var layer = layers[i];
      var color = colors[i];
      var item = document.createElement('div');
      var key = document.createElement('span');
      key.className = 'legend-key';
      key.style.backgroundColor = color;
    
      var value = document.createElement('span');
      value.innerHTML = layer;
      item.appendChild(key);
      item.appendChild(value);
      legend.appendChild(item);
    }

  });

  map.getCanvas().style.cursor = 'default';

  map.on('mousemove', function(e) {
    var states = map.queryRenderedFeatures(e.point, {
      layers: ['statedata']
    });
  
    if (states.length > 0) {
      document.getElementById('pd').innerHTML = '<h3><strong>' + states[0].properties.name + '</strong></h3><p><strong><em>' + states[0].properties.density + '</strong> people per square mile</em></p>';
    } else {
      document.getElementById('pd').innerHTML = '<p>Hover over a state!</p>';
    }
  });

  map.addControl(new mapboxgl.NavigationControl());