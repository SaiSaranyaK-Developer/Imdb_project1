let navbar=document.getElementById('navba');
let watchlist=document.getElementById('watchlistid');
let darklight=document.getElementById('darklight');
let comesoon=document.getElementById('comsoon');
let comsoonheading=document.getElementById('comsoonheading');
let topnews=document.getElementById("news");
let topnewsheading=document.getElementById("newstop");
let newarrivals=document.getElementById("newarrivals");
let intheatre=document.getElementById("intheatres3");
let whattowatch=document.getElementById("whattawatch");
let toppicks=document.getElementById("toppicking");
let fanfav=document.getElementById("fanfav");
let top10heading=document.getElementById("top10heading");
let ott=document.getElementById("ott");
let explore=document.getElementById("explore");
let ottlisting=document.getElementById("ottlisting");
let recent=document.getElementById("recent");
let recentwatch=document.getElementById("recentwatch");
let recentrow=document.getElementById("recentrow");
let foot=document.getElementById("foot");
let foot1=document.getElementById("foot1");
let foot11=document.getElementById("foot11");

let darklightfun=()=>{
    navbar.classList.toggle("navba");
    comesoon.classList.toggle("navba");
    comsoonheading.classList.toggle("comshead");
    topnews.classList.toggle("news");
    topnewsheading.classList.toggle("intheatresduplicate");
    newarrivals.classList.toggle("news");
    intheatre.classList.toggle("intheatre3");
    whattowatch.classList.toggle("whattowa");
    toppicks.classList.toggle("toppic");
    fanfav.classList.toggle("fanfavourites");
    top10heading.classList.toggle("top10head");
    ott.classList.toggle("ottplatform");
    explore.classList.toggle("exploring");
    ottlisting.classList.toggle("ottlisted");
    recent.classList.toggle("recent");
    recentwatch.classList.toggle("recentwatch");
    recentrow.classList.toggle("recentwatch");
    foot.classList.toggle("recent");
    foot1.classList.toggle("recentwatch");
    foot11.classList.toggle("recentwatch");
}

function opencoupon(){
    document.getElementById("coupon").style.visibility='visible';
    document.getElementById("container").style.opacity='0.3';
}

function couponclose(){
    document.getElementById("coupon").style.visibility='hidden';
    document.getElementById("container").style.opacity='1';
}
