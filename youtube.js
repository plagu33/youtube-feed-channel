//youtube feed 

var uri = '//gdata.youtube.com/feeds/api/users/mallplaza/uploads?v=2&alt=jsonc';
$.getJSON( uri , function( data ) {
	
	$.each( data.data.items , function( k, datos ) {
			
			var out = '<li style="background-image: url('+datos.thumbnail.hqDefault+');"><a class="play" href="//www.youtube.com/embed/'+datos.id+'?rel=0&controls=0&showinfo=0&autoplay=1"></a></li>';
			//$("#vidlist").append(out); //mostrar datos
			

	});
});