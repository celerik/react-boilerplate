export default () => ({
    map: {
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        '& .mapboxgl-ctrl-bottom-left': {
            display: 'none'
        },
        '& .mapboxgl-ctrl-bottom-right': {
            display: 'none'
        }
    }
});
