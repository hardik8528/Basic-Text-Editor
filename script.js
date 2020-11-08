updateText = () => {
    let text = document.getElementById("text-input").value;
    document.getElementById("text-output").innerHTML = text
}

makeBold = (elem) => {
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold')
}

makeItalic = (elem) => {
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic')
}

makeUnderline = (elem) => {
    elem.classList.toggle('active');
    let output = document.getElementById('text-output')
    if (output.classList.contains('underline')) {
        output.classList.remove('underline')
    }else{
        output.classList.add('underline')
    }
}

alignText = (elem,alignType) => {
    document.getElementById('text-output').style.textAlign = alignType
    let button = document.getElementsByClassName('align')
    for(let btn of button){
        btn.classList.remove('active')
    }
    elem.classList.add('active')
}