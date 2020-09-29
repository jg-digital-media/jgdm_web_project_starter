console.log("connected");

//import { jquery } from "jquery";
//import jquery from "jquery";

//const { JSDOM } = require( "jsdom" );
var jquery = require("jquery");
var jsdom = require("jsdom").jsdom;
global.$ = require('jquery/dist/jquery')(jsdom().createWindow());

//jjj
$("p").style.color("red");

//export const jquery;
//export default jquery;

modules.export = jquery;