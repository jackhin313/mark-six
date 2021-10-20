function random(){
    var arr = [];
    while(arr.length < 6){
        var r = Math.floor(Math.random() * 49) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
        }
        sort(arr);
        document.getElementById("number").innerHTML = arr.join(' ');
}

function sort(arr){
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            
        }
        
    }
}