let arr=[5,3,1,2,7,4,56,23]
for(let i=0;i<arr.length;i++){
  for(let index=1;index<arr.length;index++){
     if(arr[index-1]>arr[index]){
        let temp=arr[index-1];
        arr[index-1]=arr[index];
        arr[index]=temp;

     }
  }
}
console.log(arr)