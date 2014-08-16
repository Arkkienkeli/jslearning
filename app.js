/**
 * Created by Arkkienkeli on 14.08.2014.
 */
function  addTask(text) {

    var list = document.getElementById('list');
    var li = document.createElement('LI');
    li.innerHTML = text;

    var delBtn = document.createElement('input');
    delBtn.type = "button";
    delBtn.value = "Удалить элемент";
    delBtn.onclick = function() { delTask(this.parentNode); };

    var checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.className = "unchecked";
    checkBox.onclick = function() { checkTask(this) ; };

    list.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(checkBox);
}

function delTask(node) {
    node.parentNode.removeChild(node);
}

function delAllChecked() {
    var checkboxes = document.getElementsByClassName('checked');
    for (var i = 0; i < checkboxes.length; i++) {
        delTask(checkboxes[i]);
    }
}

function checkTask(checkbox) {
    if (checkbox.checked) {
        checkbox.parentNode.className = 'checked';
    }
    else {
        checkbox.parentNode.className = 'unchecked';
    }
}
