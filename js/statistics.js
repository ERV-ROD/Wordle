function addRecord(ColorRecord){
    let space = document.getElementById("gameRegister");
    let row = document.createElement("div");
    row.classList.add("row");
    for(let i = 0; i < ColorRecord.length;i++){
        let space = document.createElement("div");
        space.classList.add("littleBox");
        space.style.backgroundColor = ColorRecord[i];
        row.appendChild(space);
    }
    space.appendChild(row);
}