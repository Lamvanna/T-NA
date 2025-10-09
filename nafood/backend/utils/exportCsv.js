const { Parser } = require('json2csv');
module.exports = function exportCsv(arr){
  const parser = new Parser();
  return parser.parse(arr);
};