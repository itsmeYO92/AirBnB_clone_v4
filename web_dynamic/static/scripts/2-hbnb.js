$("document").ready( function () {
  let amenities_ids = [];
  let amenities_names = [];

  $('input[type="checkbox"]').change( function () {
    if(this.checked) {
        amenities_ids.push($(this).data('id'));
        amenities_names.push($(this).data('name'));
        $(".amenities h4").text(amenities_names.toString());
    } else {
        let index = amenities_ids.indexOf($(this).data('id'))
        amenities_ids.splice(index, 1);
        amenities_names.splice(index, 1);
        $(".amenities h4").text(amenities_names.toString());
    }
  })

  $.getJSON("http://0.0.0.0:5001/api/v1/status", function(data) {
    if(data.status === 'OK') {
      $("#api_status").addClass("available"); 
    } else {
      $("#api_status").removeClass("available"); 
    }

  });

})