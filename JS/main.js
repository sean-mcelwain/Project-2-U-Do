document.getElementById("signUpPageBtn").addEventListener("click",function(){
    // Hide other items
    document.querySelectorAll(".hideCons").forEach(item=>{
      item.classList.add('hide');
    })
    //Display only selected one
    document.getElementById("signup").classList.remove("hide");
  });


  
  document.getElementById("loginPageBtn").addEventListener("click",function(){
    // Hide other items
    document.querySelectorAll(".hideCons").forEach(item=>{
      item.classList.add('hide');
    })
    //Display only selected one
    document.getElementById("login").classList.remove("hide");
});
