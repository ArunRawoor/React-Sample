  import React from 'react';
   
     function Contact() {

        function jsfun1(){
            alert('Event Got Exicuted!')
        } 
        return(
         <h1 onClick={jsfun1}>Using the Event OnCLick or Button Click  </h1>  
        )
     }

export default Contact;
