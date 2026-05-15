
Array.prototype.last = function() {
    if(this.length){
        return this.at(-1)
    }else{
        return -1
    }
    
};
let  arr = [1, 2, 3];
console.log(arr.last());
let arr2 = [ ];
console.log(arr2.last());

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */