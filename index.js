function logDriverNames(arr){
  arr.forEach(
    function(obj){console.log(obj.name)}
  );
}

function logDriversByHometown(arr, loc){
  arr.forEach(
    function(obj){
      if (obj.hometown === loc){console.log(obj.name)}
    }
  );
}

function driversByRevenue(arr){
  const arrCopy = arr.slice();
  arrCopy.sort(
    function(a, b){
      a.revenue 
    });
}

function driversByName(){
}

function totalRevenue(){
}

function averageRevenue(){
}