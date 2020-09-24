console.log("connected");

const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );


$("p").style.color("red");

modules.export = jquery;