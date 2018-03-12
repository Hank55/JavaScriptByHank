function renderMovie(data){
    document.querySelector(".infosection h1").textContent = data.title;
    document.querySelector(".infosection p").textContent = data.review;
    document.querySelector(".poster").setAttribute("src", data.imgUrl);
  
    let actorList = "";
    for(let i=0; i<data.actors.length; i++){
      actorList += "<li>" + data.actors[i] + "</li>";
    }
    document.querySelector(".infosection ul").innerHTML = actorList;
  }
  renderMovie(movieData);