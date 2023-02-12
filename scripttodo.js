let list = document.getElementById("list");
const text = document.querySelector('#task');
function newElement() {
    // DOM DEF//

    let listDOM = document.createElement('li');
    let inputDOM = document.createElement('input');
    inputDOM.type = 'checkbox';
    say = Math.floor(Math.random() * 1010);
    inputDOM.id = say;
    inputDOM.setAttribute('hidden', "");
    let labelDOM = document.createElement('label');
    labelDOM.htmlFor = inputDOM.id;
    let buttonDOM = document.createElement('button');
    buttonDOM.className = "button-close";
    let spanDOM = document.createElement('span');
    spanDOM.className = 'material-symbols-outlined';
    spanDOM.innerText = 'close';


    // VALID ENTRY ALERT
    if (text.value) {
        var xlist = document.getElementById("liveToast1");
        xlist.classList.remove("hide");
        xlist.classList.add("show");
        setTimeout(function () {
            xlist.classList.add("hide");
            xlist.classList.remove("show");

        }, 2500);
    }

    // EMPTY ENTRY ALERT

    else {
        var ylist = document.getElementById("liveToast2");
        ylist.classList.remove("hide");
        ylist.classList.add("show");

        setTimeout(function () {
            ylist.classList.add("hide");
            ylist.classList.remove("show");

        }, 2500);
        return false;
    }
    // DOM INSERT //
    labelDOM.innerText = text.value;
    list.append(listDOM);
    listDOM.append(inputDOM);
    listDOM.append(labelDOM);
    labelDOM.append(buttonDOM);
    buttonDOM.append(spanDOM);
    text.value = '';

    // DELETE BUTTON //

    let listerase = document.querySelectorAll(".button-close");
    listerase.forEach(btn => {
        btn.addEventListener('click', function () {
            var li = this.parentNode
            li.parentNode.remove()
        })
    });

}

