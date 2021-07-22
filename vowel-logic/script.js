function add(){
    var word = document.getElementById('word');
    var wordval = document.getElementById('word').value;
    if (word.value !== ' ') {
        word.value = ' ';
    }

    var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (var i = 0; i < wordval.length; i++) {
        if (vowel.includes(wordval[i])) {
            var word = document.getElementById('word');
            var list = document.getElementById('list');
            var li = document.createElement('li');
            var newli = list.appendChild(li);
            newli.textContent = wordval;
            break;
        } 
    }
}

function removeItem(){
    document.getElementById('list').innerHTML = '';
}
