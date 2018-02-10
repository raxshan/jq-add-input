/*----------------------------------*/
/*      Adding Inputs
/*----------------------------------*/
$('.add-input').click(function(e) {
  var target_div_id = $(this).data('id');
  var source = $('#'+target_div_id).find('.inputs-container > .input:first-child');
  var clone = source.clone();
  // Update the original containing div
  clone.find(':input').val("").each(function(i, el) { 
    let name = el.name;
    let type = el.type;
  });
  // clone.insertBefore(this);
  clone.appendTo('#'+target_div_id+' .inputs-container');
  return false;
});


/*----------------------------------*/
/*      Removing Inputs
/*----------------------------------*/
$('.remove-input').click(function(e) {
  var target_div_id = $(this).data('id');
  if($('#'+target_div_id+' .inputs-container > .input').length > 1){
    $('#'+target_div_id+' .inputs-container > .input:last-child').remove();
  }
  return false;
});