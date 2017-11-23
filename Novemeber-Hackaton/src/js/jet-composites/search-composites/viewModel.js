define(['knockout'],
      function (ko) {
        'use strict';
        function model(context) {
            var self = this;
            self.searchSuburb = ko.observable("Cape Town");
            self.allEvents = ko.observableArray([]);
            self.allArtCat = ko.observableArray([]);
            self.allMusicCat = ko.observableArray([]);
            var eventHolder = [];
            var artCatHolder = [];
            var musicCatHolder = [];
            self.searchName = ko.observable();
            self.searchDate = ko.observable();
            self.searchSuburb = ko.observable();
            self.searchWeather = ko.observable("cape+town");
            self.searchInformation = ko.observable();
            self.searchMap = ko.observable();
            self.long = ko.observable();
            self.lat = ko.observable();
            self.allInfo = ko.observableArray([]);
            self.allWeather = ko.observableArray([]);
            var holder1 = [];
            var holder2 = [];

            self.eventName = ko.observable("Cinderella the cat");

            self.searchBtn = function () {
                $.ajax({url: 'https://www.eventbriteapi.com/v3/events/search/?location.address=' + self.searchSuburb() + '&token=5LZXCGDQFEZREXX25CG7',
                    type: 'get'
                    }).then(
                function (result) {
                    for (var i=0; i < result.events.length; i++){
                        eventHolder.push({
                            name:result.events[i].name.text
                        });
                    }
                    self.allEvents(eventHolder);
//                    console.log(JSON.stringify(self.allEvents()));
                })
            }

            self.artCat = function () {
                $.ajax({url: 'https://www.eventbriteapi.com/v3/events/search/?q=art&location.address=cape+town&token=5LZXCGDQFEZREXX25CG7',
                    type: 'get'
                    }).then(
                function (result) {
                    for (var i=0; i < result.events.length; i++){
                        artCatHolder.push({
                            category:result.events[i].name.text
                        });
                    }
                    self.allArtCat(artCatHolder);
                    // console.log(JSON.stringify(self.allArtCat()));
                })
            }

            self.musicCat = function () {
                $.ajax({url: 'https://www.eventbriteapi.com/v3/events/search/?q=music&location.address=cape+town&token=5LZXCGDQFEZREXX25CG7',
                    type: 'get'
                    }).then(
                function (result) {
                    for (var i=0; i < result.events.length; i++){
                        musicCatHolder.push({
                            category:result.events[i].name.text
                        });
                    }
                    self.allMusicCat(musicCatHolder);
                    console.log(JSON.stringify(self.allMusicCat()));
                })
            }


            self.nameClick = function (evt) {
                // console.log(evt);
                $.ajax({
                    url: 'https://www.eventbriteapi.com/v3/events/search/?q=' + evt.category.toLowerCase().split(" ").join("+") + '&token=5LZXCGDQFEZREXX25CG7',
                    type: 'get'
                }).then(
                    function (result) {
                        for (var i = 0; i < result.events.length; i++) {
                            holder1.push({
                                //Name
                                name: result.events[i].name.text,
                                //Date
                                date: result.events[i].start.local,
                                //Suburb
                                suburb: result.events[i].end.timezone,
                                //Information
                                information: result.events[i].description.text
                            });
                        }
                        self.allInfo(holder1);
                        console.log(JSON.stringify(self.allInfo()));
                    })

                //Weather
                $.ajax({
                    url: 'http://api.openweathermap.org/data/2.5/weather?q=cape+town&units=metric&appid=280906c819ca502ccfcf2d5bd117ad46',
                    type: 'get'
                }).then(
                    function (result) {
                        // for (var i = 0; i < result.length; i++) {
                            holder2.push({
                                // Weather description
                                description: result.weather[0].main,
                                // Weather temperature
                                temp: result.main.temp_max
                            });
                        // }
                        self.allWeather(holder2);
                        console.log(JSON.stringify(self.allWeather()));
                    })

        }
    }
    return model;
});
