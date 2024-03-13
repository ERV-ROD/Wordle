
//* Board constructor & Locale Storage
(function(){
    document.addEventListener('DOMContentLoaded', function(){
        for(let i = 0; i < 6;i++){
            let row = document.createElement("div");
            row.classList += "row";
            for(let j = 0; j < 5; j++){
                let cell = document.createElement("div");
                cell.classList = "cell";
                row.appendChild(cell);
            }
            document.getElementById("table").appendChild(row);
        }
    }); //DOMContentLoaded
})();

//?Locale Storage
(function(){
    if(localStorage.getItem("count") == undefined){
        let count = 0;
        localStorage.setItem("count", count);
    }
    if(localStorage.getItem("victoryCount") == undefined){
        let victoryCount = 0;
        localStorage.setItem("victoryCount", victoryCount);
    }        
})();

//?KeyBoard constructor
(function(){
    document.addEventListener('DOMContentLoaded', function(){
    let keys = "QWERTYUIOPASDFGHJKLÑ<ZXCVBNM_"; // _ = Delete and < = Enter
    for(let i = 0; i < 3;i++){

        //? ----------Create a Row---------------
        let keyRow = document.createElement("div");
        keyRow.classList = "keyRow";

        //?  -------Create all the keys-----------
        for(let j = 0; j < 10;j++){
            let keyContent = keys[i*10+j];

            if(keyContent != undefined){
                let key = document.createElement("div");
                key.classList = "key";

                // This if checks if the letter isn't a backspace or a enter
                if(keyContent != '_' && keyContent != '<'){
                    key.innerHTML = keyContent;
                    key.id = keyContent;
                    key.addEventListener('click',getKey); 
                }

                // In case the character was not a valid letter
                else{
                    key.classList += " special";

                    // Case backspace
                    if(keyContent == '_'){
                        key.addEventListener('click',erase);
                        key.innerHTML = "<i class=\"fa-solid fa-delete-left\"></i>";
                    }

                    // Case enter
                    else{
                        key.addEventListener('click',enter);
                        key.innerHTML = "Enter"; 
                    }
                }
                if(keyContent == 'Ñ'){
                    keyRow.style.width = "90%";
                    for(let k = 0; k < 9; k++){
                        keyRow.children[k].style.width="10%";
                    }
                }else{
                    keyRow.appendChild(key);
                }
            }
        }
        document.getElementById("keyboard").appendChild(keyRow);
    }
    }); //DOMContentLoaded
})();

(function(){
    document.addEventListener('DOMContentLoaded', function(){
        let count = parseInt(localStorage.getItem("count"));
        let victories = parseInt(localStorage.getItem("victoryCount"));
        if(count != null && victories != null){
            document.getElementById("count").textContent = count;
            if(count == 0){
                count = 1;
            }
            document.getElementById("percentage").textContent = ((100/count)*victories).toFixed(1) + "%";
        }
    }); //DOMContentLoaded
})();

//Window Functions

function showStatistics(){
    document.getElementById("statistics").style.display = "block";
}

function hideStatistics(){
    document.getElementById("statistics").style.display = "none";
}

function showHelp(){
    document.getElementById("help").style.display = "block";
}

function hideHelp(){
    document.getElementById("help").style.display = "none";
}

//statistics

function updatePlayed(){
    let tempCount = parseInt(localStorage.getItem("count"));
    localStorage.setItem("count", tempCount+1);
}

function updateVictories(){
    let auxCount = parseInt(localStorage.getItem("victoryCount"));
    localStorage.setItem("victoryCount", auxCount+1);
}











