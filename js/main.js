$(function() {
    "use strict";

    
	
	
	if ($('html').hasClass('desktop')) {
			new WOW().init();
		  } 
	
	/* ==========================================================================
   Flex menu
   ========================================================================== */
	$(".flexy-menu").flexymenu({speed: 400, indicator: true});
	


   /* ==========================================================================
   Preload
   ========================================================================== */
    
    $(window).load(function() {
        
        $("#status").fadeOut();
        
        $("#preloader").delay(1000).fadeOut("slow");
    });

	
	/* ==========================================================================
     Textrotator
     ========================================================================== */   

    $(".rotate").textrotator({
        animation: "dissolve",
        separator: ",",
        speed: 2500
    });



    /* ==========================================================================
     For anchor smooth scroll
     ========================================================================== */  
    $('a[href*=#]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
 
    
});

 
       /* ==========================================================================
     For Insta feed
     ========================================================================== */ 

    //  $(document).ready(function() {
 
    //     // The Url from your Authorisations list  
    //     var instantTokenApiUrl = 'https://ig.instant-tokens.com/users/fca1c692-1c4e-49fd-b365-1ea6dd8b0240/instagram/17841400516870478/token?userSecret=inwlwy8uu96vztiywejx4'
        
    //       $.ajax({
    //             url: instantTokenApiUrl,
    //         dataType: 'json'
    //           })
    //            .done(function( response ) {
                
    //             if (!response.Token) {
    //               console.log('Error :: ', response);
    //             } else {
    //                 let feed = new Instafeed({
    //                            accessToken: response.Token
    //                           });
    //                 feed.run();
    //               }
    //     });
       
    //   });

    // $(document).ready(function() {
    //     var feed = new Instafeed({
    //       accessToken: InstagramToken
    //     });
    //     feed.run();
    //   });
  
   