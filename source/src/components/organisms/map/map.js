// @packages
import { Map } from 'mapbox-gl';
import { globalUI } from '../../../core';

class CustomMap extends Map {
    constructor(mapContainer, theme) {
        super({
            accessToken: config.settings.mapBox.token,
            center: [
                -0.04212516311508214,
                51.52249290538935
            ],
            container: mapContainer,
            style: 'mapbox://styles/mapbox/light-v10',
            zoom: 15
        });

        this.routes = [];

        this.on('load', this.initializeMapTheme.bind(this, theme));
    }

    initializeMapTheme(theme) {
        this.setPaintProperty('building', 'fill-color', [
            'interpolate',
            ['linear'],
            ['zoom'],
            2,
            theme.palette.background.default
        ]);
    }

    paintRoute(geojson, {
        color,
        name
    }) {
        if (!this.loaded()) {
            globalUI.showAlertNotificationInfo('Map', 'Map is still loading');
            setTimeout(() => this.paintRoute(geojson, {
                color,
                name
            }), 3000);
            return;
        }

        this.routes.forEach(routeId => {
            try {
                if (this.getLayer(routeId)) this.removeLayer(routeId);
                if (this.getSource(routeId)) this.removeSource(routeId);
            } catch (error) {
                globalUI.showAlertNotificationInfo('Map', 'Map is still loading');
            }
        });

        const routeId = `route-${name}`;

        this.addSource(routeId, {
            data: geojson,
            maxzoom: 24,
            type: 'geojson',
            tolerance: 1
        });

        this.addLayer({
            id: routeId,
            minzoom: 0,
            maxzoom: 24,
            type: 'line',
            source: routeId,
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': color,
                'line-width': 5
            }
        });

        this.routes.push(routeId);
    }
}

export default CustomMap;
