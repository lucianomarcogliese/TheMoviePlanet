window.addEventListener("load",  function(){
    // guardo el arrayDePelisFavoritas que esta en sessionStorage
    var arrayDePelisFavoritas = JSON.parse(window.sessionStorage.getItem("favorita"));
    console.log(arrayDePelisFavoritas);
    // checkeo que el array tenga por lo menos una peli favorita (un item)
    if (arrayDePelisFavoritas.length>0) {
      // como arrayDePelisFavoritas es un array, necesito recorrerlo
      for (var i = 0; i < arrayDePelisFavoritas.length; i++) {
        // recorro el array para obtener cada ID y hago un fetch (AJAX) para obtener la data de cada peli
        var url = "https://api.themoviedb.org/3/movie/"+arrayDePelisFavoritas[i]+"?api_key=d72b8119ca0d802447ebd91bded10750&language=en"
        var urlImg = "https://image.tmdb.org/t/p/original"
        fetch(url)
            .then(function(respuesta) {
             return respuesta.json()
           })
            .then(function(pelicula) {
              // guardo en pelicula el objeto literal que recibo como respuesta
             console.log(pelicula)
             // capturo el UL para insertar dentro de el, cada peli como LI
             var ul = document.querySelector("ul.paQueAnde")
             // genero el LI
             var li;
             li = "<li>"
             li +=    "<a href=''></a>"
             li +=    "<img src='"+urlImg + pelicula.poster_path +"'>"
              li +=    '<div class="uk-position-center uk-panel divPelis"><h1 class="headersFav">' + pelicula.title + '</h1></div>'
              li +=    "</a>"
              li += "</li>"
             // modifico el HTML del UL
             ul.innerHTML += li
    
            })
            .catch(function(error) {
            console.log("error "+ error)
            })
    
      }
    
    }
    
    
    })
    