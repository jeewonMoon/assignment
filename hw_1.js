var imgTimeOut;

var imgArray=new Array();
imgArrary[0]="hw_1_2.jpg";
imgArrary[1]="hw_1_3.jpg";
imgArrary[2]="hw_1_4.jpg";
imgArrary[3]="hw_1_5.jpg";
imgArrary[4]="hw_1_6.jpg";

var imgCnt = 0;

function showImage(){
    var objImg=document.getElementById("imgs");
    objImg.src=imgArray[imgNum];
    if(imgNum < imgArray.length - 1)
        imgNum++;
    else
        imgNum=0;
    setTimeout(showImage, 2000);
}