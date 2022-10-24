function isPangram(string){
    let strTmp = string.toLowerCase();
    let alp = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alp.length; i++) {
        if(strTmp.indexOf(alp[i]) < 0){
          return false;
        }
      }
      return true;
  }
  
