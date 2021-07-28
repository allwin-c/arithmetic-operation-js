var array = Array();
var type;

function add_element_to_array()
{

    type = document.getElementsByName("type");

 array[0] = document.getElementById("text1").value;
 array[1] = document.getElementById("text2").value;
 array[2] = document.getElementById("text3").value;

}

function display_array()
{
   var e;   
    
   
     if(type[0].checked){
  result.innerHTML = (array[0] + "." + array[1] + "@" + array[2] + ".com");
}
else if(type[1].checked){
  result.innerHTML = (array[0] + "." + array[1] + "@gmail.com");
}
     console.log(array.length);
}

function removeItem(){
    document.getElementById("text1").value = "";
    document.getElementById('text2').value = "";
    document.getElementById('text3').value = "";
    document.getElementById('text4').value = "";
    document.getElementById('text5').value = "";

}
