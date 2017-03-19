var app = angular.module('app',[]);
app.controller('myController', ['$scope',function($scope){
  
  var isComma = false;
  var output = [];
  
  $scope.delete = function(){
    output = [];
    if(isComma){
      isComma = false;
    }
    return $scope.output = output.join('');
  }
  $scope.one = function(){
    output.push(1);
    return $scope.output = output.join('');
  }
  $scope.two = function(){
    output.push(2);
    return $scope.output = output.join('');
  }
  $scope.three = function(){
    output.push(3);
    return $scope.output = output.join('');
  }
  $scope.four = function(){
    output.push(4);
    return $scope.output = output.join('');
  }
  $scope.five = function(){
    output.push(5);
    return $scope.output = output.join('');
  }
  $scope.six = function(){
    output.push(6);
    return $scope.output = output.join('');
  }
  $scope.seven = function(){
    output.push(7);
    return $scope.output = output.join('');
  }
  $scope.eight = function(){
    output.push(8);
    return $scope.output = output.join('');
  }
  $scope.nine = function(){
    output.push(9);
    return $scope.output = output.join('');
  }
  $scope.zero = function(){
    output.push(0);
    return $scope.output = output.join('');
  }
  $scope.comma = function(){
    if(isComma===false){
      if(output==''||
         output[output.length-1]=='+'||
         output[output.length-1]=='-'||
         output[output.length-1]=='*'||
         output[output.length-1]=='/'){
        output.push('0');
        output.push('.');
      }else{
        output.push('.');
      }
    isComma=true;
    return $scope.output = output.join('');
    }
  }
  $scope.add = function(){
    isComma=false;
    if(output==''||
       output[output.length-1]=='-'||
       output[output.length-1]=='+'||
       output[output.length-1]=='*'||
       output[output.length-1]=='/'){
      
    }else{
      output.push('+');
    }
    return $scope.output = output.join('');
  }
  $scope.diff = function(){
    isComma=false;
    if(output[output.length-1]=='-'||
       output[output.length-1]=='+'||
       output[output.length-1]=='*'||
       output[output.length-1]=='/'){
      
    }else{
      output.push('-');
    }
    return $scope.output = output.join('');
  }
  $scope.multi = function(){
    isComma=false;
    if(output==''||
       output[output.length-1]=='-'||
       output[output.length-1]=='+'||
       output[output.length-1]=='*'||
       output[output.length-1]=='/'){
      
    }else{
      output.push('*');
    }
    return $scope.output = output.join('');
  }
  $scope.divi = function(){
    isComma=false;
    if(output==''||
       output[output.length-1]=='-'||
       output[output.length-1]=='+'||
       output[output.length-1]=='*'||
       output[output.length-1]=='/'){
      
    }else{
      output.push('/');
    } 
    return $scope.output = output.join('');
  }
  $scope.result = function(){

    return $scope.output = eval(output.join(''));
  }
}]);