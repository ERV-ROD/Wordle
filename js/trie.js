class Trie{
    constructor(key,isFinal){
        this.key = key;
        this.isFinal = isFinal;
        this.childrenCount = 0;
        this.children = [];
    }

    getKey(){
        return this.key;
    }

    getIsFinal(){
        return this.isFinal;
    }

    getRandomWord(){
        let newWord = [];
        let level = this;
        for(let i = 0; i < 5;i++){
            let randomPos = getRandomInt(0,level.childrenCount);
            level = level.children[randomPos];
            newWord.push(level.getKey());
        }
        return newWord; 
    }

    containsLetter(letter){
        for(let i = 0; i < this.childrenCount;i++){
            if(this.children[i].getKey() == letter)
                return i;
        }
        return -1;
    }

    insertWord(string){
        let Node = this;
        if(this.childrenCount == 0){
            for(let i = 0; i < string.length;i++){
                Node.children.push(new Trie(string[i],i+1 == string.length));
                Node.childrenCount+=1;
                Node = Node.children[0];
            }
        }else{
            for(let i = 0; i < string.length;i++){
                let nodePosition = Node.containsLetter(string[i]);
                if(nodePosition == -1){
                    let newNode = new Trie(string[i],i == string.length-1);
                    Node.children.push(newNode);
                    Node.childrenCount+=1;
                    Node = newNode;
                }else
                    Node = Node.children[nodePosition];
            }
        }
    }

    searchWord(string){
        let level = this;
        for(let i = 0; i < string.length;i++){
            let nodePosition = level.containsLetter(string[i]);
            if(nodePosition != -1){
                if(level.children[nodePosition].getIsFinal())
                    return true;
                level = level.children[nodePosition];
            }
            else
                return false;
        }
    }
}