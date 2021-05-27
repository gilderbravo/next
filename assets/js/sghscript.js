function keyenterinput(){
$("body").on("keydown", "input, select, textarea,button", function(e) {
    var self = $(this),
      form = self.parents("form:eq(0)"),
      focusable,
      next;
    
    // si presiono el enter
    if (e.keyCode == 13) {
      // busco el siguiente elemento
      focusable = form.find("input,a,select,button,textarea").filter(":visible");
      next = focusable.eq(focusable.index(this) + 1);
      
      // si existe siguiente elemento, hago foco
      if (next.length) {
        next.focus();
      } else {
        // si no existe otro elemento, hago submit
        // esto lo podrías quitar pero creo que puede
        // ser bastante útil
       // form.submit();
      }
      return false;
    }
  });
}