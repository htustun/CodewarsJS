function narcissistic(value) {
  let arcissisticVal = 0 ;
   for (let i = 0; i < value.length; i++) {
    arcissisticVal=arcissisticVal+Math.pow(value[i],value.length);
   }
   return value==arcissisticVal
  }
  