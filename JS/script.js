
 // Your List Navbar Button
 document.getElementById("yourListBtn").addEventListener("click",function(){
    // Hide other items
    document.querySelectorAll(".hideCons").forEach(item=>{
      item.classList.add('hide');
    })
    //Display only selected one
    document.getElementById("yourList").classList.remove("hide");
    //Remove active class from all navbar items
    document.querySelectorAll(".nav-item").forEach(item=>{
      item.classList.remove('active');
    })
    //Add active class to the clicked navbar item
    this.parentElement.classList.add("active");
  });

  // New List Navbar Button
  document.getElementById("newListBtn").addEventListener("click",function(){
    // Hide other items
    document.querySelectorAll(".hideCons").forEach(item=>{
      item.classList.add('hide');
    })
    //Display only selected one
    document.getElementById("newList").classList.remove("hide");
    //Remove active class from all navbar items
    document.querySelectorAll(".nav-item").forEach(item=>{
      item.classList.remove('active');
    })
    //Add active class to the clicked navbar item
    this.parentElement.classList.add("active");
  });

  //Add event listener for list view buttons
  document.querySelectorAll(".viewBtn").forEach(item=>{
    item.addEventListener("click", function(){
      // Hide other items
      document.querySelectorAll(".hideCons").forEach(item=>{
        item.classList.add('hide');
      })
      //Display only selected one
      document.getElementById("editList").classList.remove("hide");
      //Remove active class from all navbar items
      document.querySelectorAll(".nav-item").forEach(item=>{
        item.classList.remove('active');
      })
    })
  })