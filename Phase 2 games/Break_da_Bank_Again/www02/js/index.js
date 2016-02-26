/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    
	    // Application Constructor
	initialize: function() {
	console.log("initialize");
	    this.bindEvents();
	},
	    // Bind Event Listeners
	    //
	    // Bind any events that are required on startup. Common events are:
	    // 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
	    return document.addEventListener('deviceready', this.onDeviceReady, false);
	    
	},
	    
	    
	    // deviceready Event Handler
	    //
	    // The scope of 'this' is the event. In order to call the 'receivedEvent'
	    // function, we must explicitly call 'app.receivedEvent(...);'
	    
	    /*
	     * This is for ios devices
	     */
	    /*  url : '',
	     onDeviceReady: function() {
	     
	    	app.url = "http://mobile2.gameassists.co.uk/mobileweblobby/?lobbyname=goldenriviera&languagecode=en&bannerTag1=affiliate1&bannertag2=&bannertag3=&bannertag4=&bannertag5";
	    	var ref = window.open(app.url, '_self', 'location=no');
	     
	     navigator.splashscreen.hide();
	     
	     }, */
	    
	    url : '',
	    ref : '',
	onDeviceReady: function() {
//		
             console.log("onDeviceReady");
//		app.receivedEvent('deviceready');
        
        // IOS banner tag
//        app.url = "https://mobile2.gameassists.co.uk/Lobby/en/goldenriviera/Login/registration?lobbyname=Goldenriviera&languagecode=en&bannerTag1=w31345c1603p001&bannertag2=4&bannertag3=&bannertag4=&bannertag5";
//        app.addToCal();
				   
	    app.url = "https://mobile2.gameassists.co.uk/Lobby/en/goldenriviera/Login/registration?lobbyname=Goldenriviera&languagecode=en&bannerTag1=w31424c1603p001&bannertag2=4&bannertag3=&bannertag4=&bannertag5";
	    
	    app.ref = window.open(app.url, '_blank', 'location=no,hidden=yes,toolbar=no');
	    //    	ref.addEventListener('exit', function(event){  navigator.app.exitApp(); });
	    //    	ref.addEventListener('loadstart', function(event) { alert("url started to load") });
	    
	    //    	document.addEventListener("backbutton", onBackKeyDown, false);
	    
	      setTimeout(app.loadUrl,5000);
	            // app.loadUrl
	           //  navigator.splashscreen.hide();
	},
	    
	loadUrl: function(){
	    app.ref.show();
	    app.ref.addEventListener('exit', function(event){ 
	     navigator.app.exitApp(); });
	},
	    
    
};
