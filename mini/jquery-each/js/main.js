$(document).ready(function(){

  // var i = 1;
  // $(".box").each(function(){
  //   this.innerHTML = i;
  //   i++;
  // });

  // document.getElementsByClassName("box").forEach(function(current,index){
  //   current.innerHTML = index;
  // })

  var someList = ["Jean","Diane","Christian","Kamila","Julieta","Jasmine","Tatsuo"];
  someList.forEach(function(current,index){
    console.log(current,index+1);
  });
});

