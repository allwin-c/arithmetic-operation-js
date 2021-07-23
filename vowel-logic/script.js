 function add() {
    var word = document.getElementById('word');
    var wordval = document.getElementById('word').value;
    let counts = 0;

    if (word.value !== ' ') {
        word.value = ' ';
    }

    var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (var i = 0; i < wordval.length; i++) {
        console.log(wordval[i]);
        if (vowel.includes(wordval[i])) {
            counts++;
            
        } }
        if(counts>=1)
        {
            var word = document.getElementById('word');
            var list = document.getElementById('list');
            var li = document.createElement('li');
            var newli = list.appendChild(li);
            newli.textContent = wordval +" "+ true;
        } else
        {
            var word = document.getElementById('word');
            var list = document.getElementById('list');
            var li = document.createElement('li');
            var newli = list.appendChild(li);
            newli.textContent = wordval +" "+ false;
        }
        
    
}


function removeItem(){
    document.getElementById('list').innerHTML = '';
}


