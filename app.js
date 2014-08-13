/**
 * Created by Arkkienkeli on 14.08.2014.
 */
function  addElement() {
    var list = document.getElementById('list');
    var text = document.getElementById("listelem").value;
    var li = document.createElement('LI');
    li.innerHTML = text;
    list.appendChild(li)
}