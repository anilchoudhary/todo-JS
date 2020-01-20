var ul = document.getElementById('list');

var addBtn = document.getElementById('add')
addBtn.addEventListener('click', addItem);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        addItem();
    }
})

var delBtn = document.getElementById('remove')
delBtn.addEventListener('click', delItem)

function addItem() {
    var input = document.getElementById('input');
    var item = input.value.trim();
    var textnode = document.createTextNode(item);

    if (!item.length) {
            alert('Please, Write some task...')
    } else {
        var li = document.createElement('li');
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('class', 'check');

        var label = document.createElement('label');

        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        // ul.appendChild(li);


        setTimeout(() => {
            li.className = 'visual';
        }, 1);

        input.value = '';
    }
}

function delItem() {
    li = ul.children
    for (let i = 0; i < li.length; i++) {
        while ( li[i] && li[i].children[0].checked) {
            // setTimeout(() => {
            //     li.className = 'novisual';
            // }, 3);
            ul.removeChild(li[i]);
            
        }
    }
}