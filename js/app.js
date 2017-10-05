$(document).ready(function() {
  $(function() {
    var API = 'https://greads-back-end.herokuapp.com/book'
    $.get(API).then(function(data) {
      for (var i = 0; i < data.length; i++) {
        var imgUrl = data[i].bookURL
        var title = data[i].title
        var description = data[i].description
        var genre = data[i].genre
        $(".bookPic").append(`
          <div class="row">
          <div class="col s14 m4 l4">
            <div class="card ">
            <div class="card-image">
              <img src=${imgUrl} class="maxHeight366">
            </div>
            <div class="card-action">
              <a href="#" class="black-text">View Books</a>
          </div>
          </div>
        </div>
        <div class="col s8 m8 l8">
          <div class="card ">
            <div class="card-content ">
            <span class="card-title">${title}</span>
              <p>${description}</p>
            </div>
            <div class="card-action">
              <a href="#">Edit</a>
              <a href="#">Delete</a>
            </div>
            </div>
          </div>
            </div>
        `)
      }
    });
  })
  $(function() {
    var API = 'https://greads-back-end.herokuapp.com/author'
    $.get(API).then(function(data) {
      for (var i = 0; i < data.length; i++) {
        var name = data[i].name
        var biography = data[i].biography
        var portrait = data[i].portrait
        $(".authorInfo").append(`
          <div class="row">
          <div class="col s14 m4 l4">
            <div class="card ">
            <div class="card-image">
              <img src=${portrait} class="maxHeight366">
            </div>
            <div class="card-action">
              <a href="#" class="black-text">View Books</a>
          </div>
          </div>
        </div>
        <div class="col s8 m8 l8">
          <div class="card ">
            <div class="card-content ">
            <span class="card-title">${name}</span>
              <p>${biography}</p>
            </div>
            <div class="card-action">
              <a href="#">Edit</a>
              <a href="#">Delete</a>
            </div>
            </div>
          </div>
            </div>
        `)
      }
    });
  })
})
