/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.game.top;

import java.util.HashMap;
import java.util.Map;

import android.os.Bundle;
import android.util.Log;

import org.apache.cordova.*;

import com.appsflyer.AFInAppEventParameterName;
import com.appsflyer.AFInAppEventType;
import com.appsflyer.AppsFlyerConversionListener;
import com.appsflyer.AppsFlyerLib;


public class MainActivity extends CordovaActivity
{
	String btag = "";
	String url = "";
	
    @Override                                                                                                                                             
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        loadActivity();
    }
    
    public void loadActivity(){
    	getAppsflyerData();
        	System.out.println("outside------------- "+btag);
        	url = launchUrl + "?btag=" + btag;
        	loadUrl(url); 
    }
    
    public void loadAct(){
        	System.out.println("loadAct outside------------- "+btag);
        	url = launchUrl + "?btag=" + btag;
        	loadUrl(url); 
    }

    public void getAppsflyerData(){
       AppsFlyerLib.setCurrencyCode("GBP");

        AppsFlyerLib.setAppsFlyerKey("HvumGtF3q6XNazYVJNwJaS");
        AppsFlyerLib.sendTracking(getApplicationContext());
        
        Map<String, Object> eventValue = new HashMap<String, Object>();
        eventValue.put(AFInAppEventParameterName.LEVEL,9);
        eventValue.put(AFInAppEventParameterName.SCORE,100);
        AppsFlyerLib.trackEvent(this ,AFInAppEventType.LEVEL_ACHIEVED,eventValue);
        
        String appsFlyerId = AppsFlyerLib.getAppsFlyerUID(this);
        
        AppsFlyerLib.setCustomerUserId(appsFlyerId);
          
        AppsFlyerLib.registerConversionListener(getApplicationContext(), new AppsFlyerConversionListener() {
            @Override
            public void onInstallConversionDataLoaded(final Map<String, String> map) {
            	
//            	final String medium = map.get("media_source");
                final String campaign = map.get("campaign");
//                final String af_sub1 = map.get("af_sub1");
//                final String af_sub2 = map.get("af_sub2");
//                final String af_sub3 = map.get("af_sub3");
                
                Log.d("AppsFlyerTest","-------------------------getProperty: "+campaign);
//                Log.d("AppsFlyerTest","-------------------------getProperty: "+medium);
//                Log.d("AppsFlyerTest","-------------------------af_sub1: "+af_sub1);
//                Log.d("AppsFlyerTest","-------------------------af_sub2: "+af_sub2);
//                Log.d("AppsFlyerTest","-------------------------af_sub3: "+af_sub3);
                
                btag = campaign;
                System.out.println("inside------------- "+btag);

                loadAct();

            }
            @Override
            public void onInstallConversionFailure(String s) {
            }
            @Override
            public void onAppOpenAttribution(Map<String, String> map) {
            }
            @Override
            public void onAttributionFailure(String s) {
            }
        });
 
    }

}
