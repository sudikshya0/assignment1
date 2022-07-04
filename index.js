let primarySum=0,secondarySum = 0,matrix=[[1,1,1],[1,2,3],[10,2,3]];
calc = (type)=>{
 
    for (let i=0;i<matrix.length;i++){
       primarySum += matrix[i][i];
       secondarySum+= matrix[i][matrix.length-i-1];
    }
    if(type =='primary'){
        return(primarySum);
    }
    else if(type == 'secondary' ){
        return(secondarySum);
    }
    else{
        return 'invalid';
    }
}
 
result = calc('primary');
