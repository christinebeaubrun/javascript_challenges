function toggleEmail (self) {
  if(self.is(':checked')){
    document.getElementById('emailpara').style.display = "block";
  } else{
    document.getElementById('emailpara').style.display = "none";
  }
}

$(document).on("click","#subscribepara :checkbox",function() {
  var self = $(this);
  toggleEmail(self);
});