var arr=[];

var themSo=function(){
    const n= document.getElementById('txt-number').value*1;
arr.push(n);
document.querySelector("#result").innerHTML=`<h2 class="mt-5 text-danger text-center">
Mảng gồm:
${arr} </h>`
}  

//Câu 1
function tongSoDuong(){
    n=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
            n+=arr[i];
        }
    }
  
    document.querySelector("#tongDuong").innerHTML=`<h2 class="mt-5 text-danger text-center">
  Tổng số dương là
    ${n} </h>`
}

//Câu 2
function demSoDuong(){
    n=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
            n++;;
        }
    }
  
    document.querySelector("#countSoDuong").innerHTML=`<h2 class="mt-5 text-danger text-center">
  Số dương là: 
    ${n} </h>`

}
//Câu 3
function soMin(){
    n=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]<n){
            n=arr[i];
        }
    }
    document.querySelector("#soNhoNhat").innerHTML=`<h2 class="mt-5 text-danger text-center">
    Số nhỏ nhất là: 
      ${n} </h>`
}
//Câu 4
function soDuongMin(){
    n=-1;
    for(var i=0;i<arr.length;i++){
        if((n==-1||n>arr[i])&&arr[i]>0){
            n=arr[i];
        }
    }
    document.querySelector("#soDuongNhoNhat").innerHTML=`<h2 class="mt-5 text-danger text-center">
    Số dương nhỏ nhất là: 
      ${n} </h>`
    
}

//Câu 5
function soChanCuoi(){
    n=-1;
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            n=arr[i];
        }
    }
    document.querySelector("#soChanCuoiCung").innerHTML=`<h2 class="mt-5 text-danger text-center">
    Số chẵn cuối cùng trong mảng là: 
      ${n} </h>`

}
//Câu 6
function swap(){
    var x= document.getElementById("num1").value*1;
    var y= document.getElementById("num2").value*1;
    
    var temp = arr[x];
    arr[x]=arr[y];
    arr[y]=temp;
    document.querySelector("#swap").innerHTML=`<h2 class="mt-5 text-danger text-center">
    Vị trí sau khi thay đổi là: 
      ${arr} </h>`

}
//Câu 7

function sapXepTangDan(){
    for(var n=0;n<arr.length;n++){
        for(var i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                var temp=arr[i];
                    arr[i]=arr[i+1];
                    arr[i+1]=temp;

            }
        }
    }

  
    
    document.querySelector("#sapXepTang").innerHTML=`<h2 class="mt-5 text-danger text-center">
    Vị trí sau khi sắp xếp là: 
      ${arr} </h>`

}
//Câu 8
function checkSNT(n){
    if(n<2){
        return false;
    }
    else if(n>2){
        if(n%2==0){
            return false;
        }
        for(var i=3;i<Math.sqrt(n);i++){
            if(n%i==0){
                return false;
            }
        
          
        }
    }
    
   

return true;

}

function firstSNT(){
    n=-1;
    for(var i=0;i<arr.length;i++){
        if(checkSNT(arr[i])){
            n=arr[i];
            break;
        }
    }
    document.querySelector("#soNguyenToDauTien").innerHTML=`<h2 class="mt-5 text-danger text-center">
Số nguyên tố đầu tiên là: 
  ${n} </h>`
    
}
//Câu 9
var arrFloat=[];

var nhapSo=function(){
    const a= document.getElementById('soThuc').value*1;
arrFloat.push(a);
document.querySelector("#resultAdd").innerHTML=`<h2 class="mt-5 text-danger text-center">
Mảng gồm:
${arrFloat} </h>`
}  

function countFloat(){
     a=0;
     for(i=0;i<arrFloat.length;i++){
        if(Number.isInteger(arrFloat[i])){
            a++;
        }
     }
     document.querySelector("#dem").innerHTML=`<h2 class="mt-5 text-danger text-center">
  Tổng số thực là
    ${a} </h>`

}
//Câu 10 
function soSanh(){
    var countDuong=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
            countDuong++;
        }
    }
    var countAm=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            countAm++;
        }
    }
    if (countDuong > countAm) {
        document.querySelector("#soSanhNumber").innerHTML =` <h2 class="mt-5 text-danger text-center">
        Số dương > Số âm </h>`;
      } else if (countDuong < countAm) {
        document.querySelector("#soSanhNumber").innerHTML =` <h2 class="mt-5 text-danger text-center">
        Số dương < Số âm </h>`;
      } else {
        document.querySelector("#soSanhNumber").innerHTML =` <h2 class="mt-5 text-danger text-center">
        Số dương = Số âm </h>`;
      }
    }
  





