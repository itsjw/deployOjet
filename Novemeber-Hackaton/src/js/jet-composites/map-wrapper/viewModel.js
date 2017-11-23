/**
  Copyright (c) 2015, 2017, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
  api url and key = https://maps.googleapis.com/maps/api/js?key=AIzaSyA07vX9UwwikBu3pOhvXgpXJiWCBF9XpVI
*/
define(
    ['ojs/ojcore', 'knockout', 'jquery','gmaps'], function (oj, ko, $) {
    'use strict';
    
    function ExampleComponentModel(context) {
        var self = this;
        self.composite = context.element;
        //Example observable
        self.long = ko.observable();
        self.lat = ko.observable();
        self.width = ko.observable("400px");
        self.height = ko.observable("400px");
        self.composite.drawMap = function(){
            console.log("long == "+ self.long())
            console.log("lat == "+ self.lat())
            var map;
            var mapProp = {
                  center: new google.maps.LatLng(self.lat(), self.long()),
                  zoom: 14,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                 };
              
                    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(self.lat(), self.long()),
                        map: map
                      });
       
            
        }
        context.props.then(function (propertyMap) {
            //Store a reference to the properties for any later use
            self.properties = propertyMap;
            if(self.properties.longitude && self.properties.latitude){
                self.long(self.properties.longitude);
                self.lat(self.properties.latitude);
                self.width(self.properties.width);
                self.height(self.properties.height);
            }
            //Parse your component properties here 

        });
    };
    
    //Lifecycle methods - uncomment and implement if necessary 
    //ExampleComponentModel.prototype.activated = function(context){
    //};

    ExampleComponentModel.prototype.attached = function(context){
    
        
            
    
    };

    ExampleComponentModel.prototype.bindingsApplied = function(context){
        context.element.drawMap();
        
             
    };

    //ExampleComponentModel.prototype.detached = function(context){
    //};

    return ExampleComponentModel;
});