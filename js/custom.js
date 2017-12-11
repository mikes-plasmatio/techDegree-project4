$("#lightgallery").lightGallery({
	mode: 'lg-fade',
	easing:'ease-in-out',
	download:false,
	counter:false,
	thumbnail:false,
	enableSwipe: true,
	fullScreen:true,
});




$('#mySearch').on('keyup change', function(){
    var input, filter, gal, pix, img, i;
    input = document.getElementById('mySearch');
    filter = input.value.toUpperCase();
    gal = document.getElementById("lightgallery");
    pix = document.getElementsByClassName('gallery__imgs');


for(i=0; i<pix.length; i++){
    img=pix[i].getElementsByTagName("img")[0];
    if (img.alt.toUpperCase().indexOf(filter)> -1) {
        pix[i].style.display="";
    }else{
        pix[i].style.display="none";
    }
 }
});