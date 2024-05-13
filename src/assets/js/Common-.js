$(document).ready(function () {
    console.log("ready!");
    var type = localStorage.getItem('type');
    
    // var cssbootsrap = document.getElementById("linkbootstarpid");
    //var style = document.getElementById("linkstyleid");
    
    
    //if (type == null) {
    // debugger;
    // document.getElementById("linkbootstarpid").setAttribute('href', 'css/style.css');
    // document.getElementById("linkstyleid").setAttribute('href', 'css/bootstrap.min.css');
    // document.getElementById("linkmediaId").setAttribute('href', 'css/media.css');
    // }
    // else {
    
    // if (type == 2) {
    
    
    // document.getElementById("linkbootstarpid").setAttribute('href', 'rtl/css/bootstrap.min.css');
    // document.getElementById("linkstyleid").setAttribute('href', 'rtl/css/rtl_style.css');
    // document.getElementById("linkmediaId").setAttribute('href', 'rtl/css/media.css');
    
    // }
    
    // if (type == 1) {
    // document.getElementById("linkbootstarpid").setAttribute('href', 'css/style.css');
    // document.getElementById("linkstyleid").setAttribute('href', 'css/bootstrap.min.css');
    // document.getElementById("linkmediaId").setAttribute('href', 'css/media.css');
    // }
    // $(".custom-select").val(type);
    
    // }
    
    });
    
    function ChangeLanguage(type) {
    localStorage.setItem('type', type);
    window.location.reload();
    
    
    }