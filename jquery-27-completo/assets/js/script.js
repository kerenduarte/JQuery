/// <reference path="../../typings/globals/jquery/index.d.ts" />

$("#btn-salvar").click(function() {
   let nome = $("#nome").val()

   if ($.trim(nome) === '') {
      $("#nome").addClass("is-invalid")
      return
   }

   $("#nome").removeClass("is-invalid")
   $("#nome").val("")

   $("#tab1 tbody").append(
      `<tr style="display: none">
          <td width="78%">${nome}</td>
          <td width="22%" class="text-center">
             <a href="#" class="btn btn-primary btn-sm lista1">
                Mover
             </a>
          </td>
       </tr>`)
   $("#tab1 tr:hidden").fadeIn("slow")
})

$("#tab1").on("click", ".lista1", function() {
   let nome = $(this).parent().prev().text()
   let tr = $(this).parent().parent()
   $(tr).fadeTo("slow", 0.3, function() { $(tr).remove() })

   $("#tab2 tbody").append(
      `<tr style="display: none">
         <td width="78%">${nome}</td>
         <td width="22%" class="text-center">
            <a href="#" class="btn btn-primary btn-sm lista2">
               Remover
            </a>
         </td>
      </tr>`
   )
   $("#tab2 tr:hidden").fadeIn("slow")
})

$("#tab2").on("click", ".lista2", function() {
   let tr = $(this).parent().parent()
   $(tr).fadeTo(1000, 0.3, function() {
      $(this).remove()
   })
})