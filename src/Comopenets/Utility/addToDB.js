 import swal from 'sweetalert';
 
const addTostoreBooks=()=>{
const data =localStorage.getItem("pageToRead");

return data ? JSON.parse(data) : [];

}



const addTostoreDB=(id)=>{
const sotoredata = addTostoreBooks()

if(sotoredata.includes(id)){
    swal("This Book is Alredy Added your Book List!", {
    className: "red-bg",
  });
}
else{
    sotoredata.push(id)
   const data = JSON.stringify(sotoredata);
   localStorage.setItem("pageToRead",data)
   
     
}
}


export {addTostoreDB,addTostoreBooks}