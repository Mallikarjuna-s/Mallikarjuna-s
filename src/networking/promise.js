const getApiCall =()=>{
  let count = 0;
  let pro = new Promise((resolve, reject)=>{
    if(count){
      setTimeout(() => {
        resolve('hi i am reslove')
      }, 2000);
    }else{
      reject('hi am recject')
    }
  })

  return pro
}

const getData = () =>{

  let response = getApiCall.then((result)=>{

  })


}