$(document).ready(function(){
  // var Handlebars
  var source = $("#dischiMusicali").html();
  var template = Handlebars.compile(source);

  $.ajax({
    url:"https://flynn.boolean.careers/exercises/api/array/music",
    method:"GET",
    success:function (data,stato) {
      console.log(data);
      var rispostaAjax = data.response
      for (var i = 0; i < rispostaAjax.length; i++) {
        
        var context = {
          poster:rispostaAjax[i].poster,
          title:rispostaAjax[i].title.toUpperCase(),
          author:rispostaAjax[i].author,
          year:rispostaAjax[i].year
        }
        var html = template(context)
        $(".libreria").append(html)
      }
    },
    error:function (richiesta,stato,errore) {
      alert("Chiamata fallita!")
    }
  })
})
