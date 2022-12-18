

<p id="data"></p>

<script type = "text/javascript">

  fetch ('./ToDo.json')
  .then (function (response)
  {
    return response.json();
  })
  .then (function (data)
  { 
    for(var i=0; i<data.length; i++)
    {
      document.getElementById("data").innerHTML +=
      data [i].erstellung.tag + "." + data [i].erstellung.monat + ": " +data[i].toDo + " " + data[i].frist.tag + "." + data[i].frist.tag + data[i].zustandErledigt + "<br/>" ;
    }
  })
  </script>
