import React from 'react'


const initState={
    name:"",
    isMarried:"",
    gender:"",
    email:""
}

const Form = () => {

 const [formData,setFormData]=React.useState(initState)

const handleChange=(e)=>{
    console.log(e)
let {name,value,checked,type}=e.target 
value=type==="checkbox" ? checked : value;


setFormData((prev)=>({...prev,[name]:value}))
}

 const onSubmit =()=>{
     console.log();
 }



 const {name,isMarried,gender,email}=formData;
  return (
    <div>
   <h1>Form:Persons details</h1>
  <form onSubmit={()=>{}} >

    <label >Name 
        <input type="text" name="name" value={name}  onChange={handleChange} />

    </label>

    <br />
    <br />

    <label >Email
        <input type="email" name="email" value={email}  onChange={handleChange}/>

    </label>

    <br />
    <br />

    
    <label >isMarried
        <input type="checkbox" 
        name='isMarried'
        value={isMarried}
        onChange={handleChange}/>

    </label>

<br />
<br />
    <select name='gender' value={gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="ds">don;t want to share</option>
    </select>
 

    

  </form>
    </div>
  )
}

export default Form
