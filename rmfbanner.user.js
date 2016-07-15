// ==UserScript==
// @name         rmfbanner
// @namespace    https://github.com/ThePhantomGamer/rmfbanner/
// @version      0.4.2
// @description  Removes the "Join Facebook" Banner
// @author       Yaseen S./ThePhantomGamer
// @match        https://www.facebook.com/*
// @match        http://www.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    console.log('rmfbanner: removing banners');
    // This is the element that has the banner
    var banner1 = document.getElementById('pagelet_growth_expanding_cta');
    var banner2 = document.getElementById('u_0_3');

    // This just deletes any content inside
    banner1.innerHTML = '';
    banner2.innerHTML = '';
    console.log('rmfbanner: finished');
    
    }
)();
