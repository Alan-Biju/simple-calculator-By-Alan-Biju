var output=document.querySelector(".output");

function display(num){
    output.value+=num;
    console.log(num);

}
function remove(){
    output.value=null;
}
function task(){
    var sum=eval(output.value);
 
    output.value = null;
    output.value=sum;
}

