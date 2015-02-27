'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here

  $(".version_a").click(function(){
    //add your Woopra tracking code for version A's like button click event
  	woopra.track("a_version_like_click");
  })

  $(".version_b").click(function(){
    //add your Woopra tracking code for version A's like button click event
 	woopra.track("b_version_like_click"); 
  })

}