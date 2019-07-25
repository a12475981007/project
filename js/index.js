document.addEventListener("DOMContentLoaded",function(){
    var login_but = document.getElementById('login_but');
    var login_tab = document.getElementById('login_tab');
    var cancel_but = document.getElementById('cancel_but');

    login_but.addEventListener('click',function(){
      login_tab.style.display = "block";
      cancel_but.addEventListener('click',function(){
        login_tab.style.display = "none";
      });
    });



});
