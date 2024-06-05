var wms_layers = [];

var lyr_OpenStreetMapWMSbyterrestris_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ows.terrestris.de/osm/service",
    attributions: ' ',
                              params: {
                                "LAYERS": "OSM-WMS",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "OpenStreetMap WMS - by terrestris",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OpenStreetMapWMSbyterrestris_0, 0]);
var format___1 = new ol.format.GeoJSON();
var features___1 = format___1.readFeatures(json___1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1.addFeatures(features___1);
var lyr___1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___1, 
                style: style___1,
                popuplayertitle: "ΠΕΡΙΦΕΡΕΙΑΚΕΣ_ΕΝΟΤΗΤΕΣ",
                interactive: true,
                    title: '<img src="styles/legend/__1.png" /> ΠΕΡΙΦΕΡΕΙΑΚΕΣ_ΕΝΟΤΗΤΕΣ'
                });
var format_AerodromiaAERODROMIA_2 = new ol.format.GeoJSON();
var features_AerodromiaAERODROMIA_2 = format_AerodromiaAERODROMIA_2.readFeatures(json_AerodromiaAERODROMIA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AerodromiaAERODROMIA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AerodromiaAERODROMIA_2.addFeatures(features_AerodromiaAERODROMIA_2);
var lyr_AerodromiaAERODROMIA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AerodromiaAERODROMIA_2, 
                style: style_AerodromiaAERODROMIA_2,
                popuplayertitle: "Aerodromia — AERODROMIA",
                interactive: true,
                    title: '<img src="styles/legend/AerodromiaAERODROMIA_2.png" /> Aerodromia — AERODROMIA'
                });
var format_sidhrodromiko_diktyo_3 = new ol.format.GeoJSON();
var features_sidhrodromiko_diktyo_3 = format_sidhrodromiko_diktyo_3.readFeatures(json_sidhrodromiko_diktyo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sidhrodromiko_diktyo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sidhrodromiko_diktyo_3.addFeatures(features_sidhrodromiko_diktyo_3);
var lyr_sidhrodromiko_diktyo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sidhrodromiko_diktyo_3, 
                style: style_sidhrodromiko_diktyo_3,
                popuplayertitle: "sidhrodromiko_diktyo",
                interactive: true,
                    title: '<img src="styles/legend/sidhrodromiko_diktyo_3.png" /> sidhrodromiko_diktyo'
                });

lyr_OpenStreetMapWMSbyterrestris_0.setVisible(true);lyr___1.setVisible(true);lyr_AerodromiaAERODROMIA_2.setVisible(true);lyr_sidhrodromiko_diktyo_3.setVisible(true);
var layersList = [lyr_OpenStreetMapWMSbyterrestris_0,lyr___1,lyr_AerodromiaAERODROMIA_2,lyr_sidhrodromiko_diktyo_3];
lyr___1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KALCODE': 'KALCODE', 'LEKTIKO': 'LEKTIKO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AerodromiaAERODROMIA_2.set('fieldAliases', {'id': 'id', 'onoma': 'onoma', });
lyr_sidhrodromiko_diktyo_3.set('fieldAliases', {'SHAPE_LEN': 'SHAPE_LEN', });
lyr___1.set('fieldImages', {'OBJECTID': 'Range', 'KALCODE': 'TextEdit', 'LEKTIKO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AerodromiaAERODROMIA_2.set('fieldImages', {'id': 'TextEdit', 'onoma': 'TextEdit', });
lyr_sidhrodromiko_diktyo_3.set('fieldImages', {'SHAPE_LEN': 'TextEdit', });
lyr___1.set('fieldLabels', {'OBJECTID': 'no label', 'KALCODE': 'no label', 'LEKTIKO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AerodromiaAERODROMIA_2.set('fieldLabels', {'id': 'no label', 'onoma': 'no label', });
lyr_sidhrodromiko_diktyo_3.set('fieldLabels', {'SHAPE_LEN': 'no label', });
lyr_sidhrodromiko_diktyo_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});