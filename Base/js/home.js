$.get("./header.html", function(data, status){
    document.querySelector("header").innerHTML = data
    checkPath()
  })

  function checkPath() {
    const PATH_NAME = window.location.href;
    console.log('HREF', PATH_NAME);
  
    let js = document.querySelectorAll('a')
    let listItemNav = $('a') 
    for (let index = 0; index < listItemNav.length; index++) {
      const element = listItemNav[index];
      if (PATH_NAME === element.href) {
        $(element).addClass( "active text-warning" );
      }
    }
    
  }

