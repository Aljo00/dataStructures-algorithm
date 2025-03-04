//Find the third larget element from an array.

function thirdLargest(arr){
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for(let num of arr){
        if(num > first){
            third = second;
            second = first;
            first = num;
        }else if(num > second && num !== first){
            third = second;
            second = num;
        }else if(num > third && num !== first && num !== second){
            third = num;
        }
    }

    return third === -Infinity ? "No third largest number" : third;
}

console.log(thirdLargest([10,20,30,10,20,30,50]));
