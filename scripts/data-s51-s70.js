// Combined exporter for Base Days 51–70 (Stage 5 B1+ Days 51–60 & Stage 6 B2 Days 61–70)
'use strict';

const days51to60 = require('./data-s51-s60.js');
const days61to70 = require('./data-s61-s70.js');

module.exports = [...days51to60, ...days61to70];
