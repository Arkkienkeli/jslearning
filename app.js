/**
 * Created by Arkkienkeli on 14.08.2014.
 */
function  addTask(text) {

    var list = document.getElementById('list');
    var li = document.createElement('LI');
    //li.innerHTML = text;


    var delBtn = document.createElement('input');
    delBtn.type = "button";
    delBtn.value = "Удалить элемент";
    delBtn.onclick = function() { delTask(this.parentNode); };

    var checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.className = "unchecked";
    checkBox.onclick = function() { checkTask(this) ; };

    list.appendChild(li);
    li.appendChild(checkBox);
    li.appendChild(document.createTextNode(text));
    li.appendChild(delBtn);

}

function delTask(node) {
    node.parentNode.removeChild(node);
}

function delAllChecked() {
    var checkboxes = document.getElementsByClassName('checked');
    var parent = checkboxes[0].parentNode;
    while(checkboxes.length > 0){
        parent.removeChild(checkboxes[0]);
    }
}

function checkTask(checkbox) {
    checkbox.parentNode.className = checkbox.checked ? 'checked' : 'unchecked';
}
