var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_gabunglot_1 = new ol.format.GeoJSON();
var features_gabunglot_1 = format_gabunglot_1.readFeatures(json_gabunglot_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gabunglot_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gabunglot_1.addFeatures(features_gabunglot_1);
var lyr_gabunglot_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gabunglot_1, 
                style: style_gabunglot_1,
                popuplayertitle: 'gabung lot',
                interactive: true,
                title: '<img src="styles/legend/gabunglot_1.png" /> gabung lot'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_gabunglot_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_gabunglot_1];
lyr_gabunglot_1.set('fieldAliases', {'fid': 'fid', 'LUAS': 'LUAS', 'NO_LOT': 'NO_LOT', 'tsp — pemi': 'tsp — pemi', 'tsp — hakm': 'tsp — hakm', 'tsp — ha_1': 'tsp — ha_1', 'layer': 'layer', 'path': 'path', });
lyr_gabunglot_1.set('fieldImages', {'fid': '', 'LUAS': '', 'NO_LOT': '', 'tsp — pemi': '', 'tsp — hakm': '', 'tsp — ha_1': '', 'layer': '', 'path': '', });
lyr_gabunglot_1.set('fieldLabels', {'fid': 'no label', 'LUAS': 'header label - visible with data', 'NO_LOT': 'header label - visible with data', 'tsp — pemi': 'header label - visible with data', 'tsp — hakm': 'header label - visible with data', 'tsp — ha_1': 'header label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_gabunglot_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});