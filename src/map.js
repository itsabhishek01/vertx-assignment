const getMapJSON = require('dotted-map').getMapJSON;

export const mapJsonString = getMapJSON({ height: 60, grid: 'diagonal' });
console.log(mapJsonString);
