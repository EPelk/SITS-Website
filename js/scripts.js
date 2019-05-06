function init() {
    initSubmenus();
}

function initSubmenus() {
    var submenus = document.getElementsByClassName('submenu');
    for(var i = 0; i < submenus.length; ++i) {
        var element = submenus[i];
        console.log(element.childNodes);
        element.setAttribute('style', 'width: ' + element.childNodes[1].offsetWidth + 'px !important;');
        var children = element.childNodes;
        var maxlength = 0;
        var maxIndex = 0;
        for(var j = 0; j < children.length; ++j) {
            var child = children[j];
            if(child.offsetWidth > maxlength && child.nodeName == 'A') {
                maxlength = child.offsetWidth;
                maxIndex = j;
            }
        }
        //Account for 15px padding
        //TODO Figure out why this if block is necessary
        if(maxIndex == 1) {
            maxlength -= 30;
        }
        else {
            maxlength -= 15;
        }
        for (var j = 3; j < children.length; ++j) {
            if(children[j].nodeName == 'A') {
                children[j].setAttribute('style', 'width: '+ maxlength + 'px;');
            }
        }
    }
}