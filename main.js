/*jshint unused:false */
$('.open-panel').click(function(){
  'use strict';
  $('html').addClass('openNav');
  
});
	
$('.close-panel, #content').click(function(){
 'use strict'; 
$('html').removeClass('openNav');
  
});