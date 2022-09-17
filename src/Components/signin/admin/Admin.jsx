
import './Admin.css'
import React from 'react'




function Admin() {
  return (
    <div className='addproduct'>
     <form className='form'>
     <h2>Enter the Product's information here</h2>
       <input type="text"  placeholder='Product Name'/>
       <input type="text"  placeholder='Category'/> 
       <input type="number"  placeholder='Price'/>
       <input type="text"  placeholder='Description'/>
       <input id='img'  type="file"/>
       <button > Add Product </button>
     </form>
    </div>
  )
}

export default Admin
