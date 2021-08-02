var type;
var newlist = [];
var list = [];
var text = '';


function add() {
  var name = document.getElementById('text1').value;
  var age = document.getElementById('text2').value;
  var company = document.getElementById('text3').value;
  type = document.getElementsByName("type");
  var newlist = [];
  newlist.push({name, age, company});
  console.log(name);
  console.log(age);
  console.log(company);
  list.push(newlist);
  console.log(newlist);
  if(type[0].checked)
  {
  text += (" "+ name + "." + age + "@" + company + ".com" + "<br />");
  }
  if(type[1].checked)
  {
  text += (name + "." + age + "@gmail.com" + "<br />");
  }
    document.getElementById("text1").value = "";
  document.getElementById('text2').value = "";
  document.getElementById('text3').value = "";
  document.getElementById('text4').value = "";
  document.getElementById('text5').value = "";
}

function removeItem(){
    document.getElementById("text1").value = "";
    document.getElementById('text2').value = "";
    document.getElementById('text3').value = "";
    document.getElementById('text4').value = "";
    document.getElementById('text5').value = "";

}

function display() {
      document.getElementById('display').innerHTML = text;
      console.log(text);
   }
