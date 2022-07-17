function isValidWalk(walk) {
    if(walk.length== 10){
        const directionCount = new Map([...new Set(walk)].map(
            x => [x, walk.filter(y => y === x).length]
        ));
        if(directionCount.get('n')==directionCount.get('s') && directionCount.get('e')==directionCount.get('w')){
            return true;
        }
        else{
            return false;
        }
        
    }
    else {
        return false;
    }
    
  }

  console.log(isValidWalk(['n','s','n','s','n','s','n','s','w','e']));