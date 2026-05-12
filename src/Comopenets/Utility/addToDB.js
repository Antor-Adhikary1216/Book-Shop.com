

const addTostoreBooks=()=>{
const data =localStorage.getItem("pageToRead");

return data ? JSON.parse(data) : [];

}



const addTostoreDB=(id)=>{
const sotoredata = addTostoreBooks()

if(sotoredata.includes(id)){
    alert("alredy Add this book")
}
else{
    sotoredata.push(id)
   const data = JSON.stringify(sotoredata);
   localStorage.setItem("pageToRead",data)
   
     
}
}


export {addTostoreDB}