function mapdata() {

  let nodes = [];
  let edges = [];
  let k=0;
  let l=0;
  let matrix=4;
  // Write your logic here...
  // for(i=0;i<matrix;i++){
  //   for(j=0;j<matrix;j++){
  //     nodes[k]={"data":{"id":"N"+i+"-"+j}};
  //     console.log(nodes);
  //     k++;
  //   }
  // }
  // for(i=0;i<matrix;i++){
  //   for(j=0;j<matrix;j++){

  //     if(i<matrix-1 && j<matrix-1){
      
  //      edges[l]={"data":{"id": i+"-"+j+"E", "source": "N"+i+"-"+j, "target": "N"+i +"-"+(j+1)} };
  //     l++;
  //     edges[l]={"data":{"id": i+"-"+j+"S", "source": "N"+i+"-"+j, "target": "N"+(i+1) +"-"+j} };
  //     l++;
  //     }
  //     else if(i=matrix-1){
       
  //       if(j=matrix-1){

  //       }
  //       else{
  //       edges[l]={"data":{"id": i+"-"+j+"E", "source": "N"+i+"-"+j, "target": "N"+i +"-"+(j+1)} };
  //              l++;
  //       }
  //     }
  //     else if(j=matrix-1){
  //       edges[l]={"data":{"id": i+"-"+j+"S", "source": "N"+i+"-"+j, "target": "N"+(i+1) +"-"+j} };
  //       l++;
  //     }
   
  //       else{
          
  //       }
  //   }
  // }


for( let i=0 ; i<matrix ; i++){
  for(let j=0; j<matrix ; j++){
    let obj={"data":{"id":`N${i}-${j}`}};
    nodes.push(obj);
    
    if( j < matrix-1 ){
      let obj = {"data":{"id":`${i}-${j}E`,"source" :`N${i}-${j}` ,'target':`N${i}-${j+1}`}}

       edges.push(obj);
    }

    if( j>0 ){
      let obj = {"data":{"id":`${i}-${j}W`,"source" :`N${i}-${j}` ,'target':`N${i}-${j-1}`}}
       edges.push(obj);
    }
    if(i < matrix-1){
      let obj = {"data":{"id":`${i}-${j}S`,"source" :`N${i}-${j}` ,'target':`N${i+1}-${j}`}}
       edges.push(obj);
    }
    if(i >0){
      let obj = {"data":{"id":`${i}-${j}N`,"source" :`N${i}-${j}` ,'target':`N${i-1}-${j}`}}
       edges.push(obj);
    }
    
    if( i<matrix-1 && j<matrix-1){
      let obj = {"data":{"id":`${i}-${j}SE`,"source" :`N${i}-${j}` ,'target':`N${i+1}-${j+1}`}}
       edges.push(obj);
    }
    
    if( j > 0 && i < matrix-1 ){
      let obj = {"data":{"id":`${i}-${j}SW`,"source" :`N${i}-${j}` ,'target':`N${i+1}-${j-1}`}}
        edges.push(obj);
    }

  }

 

}

  elements = {
    nodes,
    edges
  };

  return elements;

}
module.exports.mapdata = mapdata;


