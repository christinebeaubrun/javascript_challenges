function copyPaste(self) {
  var postaladdress = document.getElementById('postaladdress');
  var homeaddress = $("#postaladdress").parents().find("#homeaddress");
  if (self.is(':checked')) {
    homeaddress.val(postaladdress.value);
    homeaddress.prop("disabled",true);
  } else {
    homeaddress.val("");
    homeaddress.prop("disabled",false);
  }
}

$(document).on("click","#homepostalcheckbox",function() {
  var self = $(this);
  copyPaste(self);
});

/* IF YOUR POSTAL ADDRESS IS THE SAME AS YOUR HOME ADDRESS
CLICK THE CHECKBOX SO JAVASCRIPT CAN COPY AND PASTE THE SAME
INFO INTO YOUR HOME ADDRESS.
ELSE TYPE IN A UNIQUE ADDRESS */