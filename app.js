/**
 * Created by Arkkienkeli on 14.08.2014.
 */
function  addElement(text) {
    var list = document.getElementById('list');
    var li = document.createElement('LI');
    li.innerHTML = text;
    list.appendChild(li)
}
