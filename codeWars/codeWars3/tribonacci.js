function tribonacci(signature,n){
    if(signature.length==3 && signature.length <= n){
        for(let i =0 ; i < n-3 ; i++){
            const tmpVal = signature[i] + signature[i+1] + signature[i+2];
            signature.push(tmpVal);
        }
    }
    else if(signature.length==3 && signature.length > n) {
        signature.length=n;
    }
    return signature
  }