// $("#button").click(
//     function()
//     {            
//         var phone = document.getElementById("phone").value;
//         var text = document.getElementById("texto").value;
//         var url = "https://api.whatsapp.com/send?phone="
//         var texto = "&text="
//         console.log(phone)
//         if(phone.length >= 9 && phone.length <= 11)
//         {
//             // $("#resultado").html("<b>Hello world!</b>");
//             // $("#resultado" ).html( "<label id='resultado'>" + phone+" </label>" );
//             // $( "test1" ).html( "<a href="+url+phone+texto+text+"> Envia tu mensaje </a>" );
//             // $("a").attr("href", "http://www.google.com/")
//            $("#test1").text(" Link : " +url +phone+texto+text);
//            $('#regTitle').html("<a id='test1' href="+url +phone+texto+text +"></a>");
//             // https://api.whatsapp.com/send?phone=56897458745&text=asdasd
//             // alert("Correcto")

//             // $('a[href^="https://"]').each(function(){ 
//             //     // var oldUrl = $(this).attr("href"); // Get current url
//             //     // var newUrl = oldUrl.replace("http://", "https://"); // Create new url
//             //     $(this).attr("href",url+phone+texto+text ); // Set herf value
//             // });
//         }else{
//             alert("incorrecto")
//         }

//     }
// );

// $(document).ready(function() {
//   $("#send-whatsapp").click(function() {
//     var phone = $("#phone").val();
//     var message = $("#message").val();
    
//     // Crea el enlace de Whatsapp
//     var url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    
//     // Abre el enlace en una nueva pestaña
//     window.open(url, "_blank");
//   });
// });

// $(document).ready(function() {
//     $("#create-link").click(function() {
//       var phone = $("#phone").val();
//       var message = $("#message").val();
      
//       // Crea el enlace de Whatsapp
//       var url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
      
//       // Agrega el enlace al div
//       $("#whatsapp-link").html('<a href="' + url + '">Enviar mensaje de Whatsapp</a>');
//     });
//   });
  


$(document).ready(function(){
  $('#generator-form').submit(
    function(event){
      var isValid = true;
      event.preventDefault();
      var phone = encodeURIComponent($('#phone').val());
      var message = encodeURIComponent($('#message').val());
      var whatsappUrl = 'https://wa.me/'+phone;
      $('.required').each(function(){
        if($.trim($(this).val()) == ''){
          $(this).css('border-color', 'red');
          isValid = false;
        }else{
          $(this).css('border-color', '');
        }
      });
      if(isValid == false){
        alert("complete los datos requeridos")
        return false;
      }else{
        if(phone.length >= 9 && phone.length <= 11){
          if (message){
            whatsappUrl +='?text=' +message;
          }
          $('#whatsapp-link').attr('href', whatsappUrl).text(whatsappUrl);
          $('#result').show();
        }else{
          alert('Numero '+phone+' No Valido')
        }
      }
    }
  )
}
);