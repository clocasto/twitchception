/* globals document */
const jsdom = require('jsdom'); //eslint-disable-line

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = { userAgent: 'node.js' };
