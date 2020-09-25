console.log("connected");

//import { jquery } from "jquery";
import jquery from "jquery";

//const { JSDOM } = require( "jsdom" );
var jsdom = require("jsdom").jsdom;
global.$ = require('jquery/dist/jquery')(jsdom().createWindow());
const jquery = require( "jquery" );

//jjj
$("p").style.color("red");

//export const jquery;
//export default jquery;

modules.export = jquery;