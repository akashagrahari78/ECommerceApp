import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { assets } from '../assets/assets'
import axios   from "axios"
import backendUrl from "../config";
import { toast } from 'react-toastify'


const Add = () => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("Men")
  const [subCategory, setSubCategory] = useState("Topwear")
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async(e)=>{
   e.preventDefault();
   try {
    const formData = new FormData();
    formData.append("name", name)
    formData.append("description", description)
    formData.append("price", price)
    formData.append("category", category)
    formData.append("subCategory", subCategory)
    formData.append("bestseller",bestseller )
    formData.append("sizes",JSON.stringify(sizes))

    image1 && formData.append("image1", image1)
    image2 && formData.append("image2", image2)
    image3 && formData.append("image3", image3)
    image4 && formData.append("image4", image4)



    const token = localStorage.getItem('token');   
    
    const response = await axios.post(backendUrl + "/api/product/add", formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    
    // console.log(response.data); 
    if(response.data.success){
      toast.success(response.data.message)
      setName("")
      setImage1(false)
      setImage2(false)
      setImage3(false)
      setImage4(false)
      setPrice("")
    }else{
      toast.error(response.data.message)
    }

   } catch (error) {
      console.log(error);
      toast.error(error.message)
   }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
       <div>
        <p className='mb-2'>Upload Image</p>

        <div className='flex flex-col gap-4 w-full'>

          <label htmlFor='image1'>
            <img className='w-20' src= {!image1 ?  assets.upload_area : URL.createObjectURL(image1) } alt='' />
            <input onChange={(e)=> setImage1(e.target.files[0])} type='file' id='image1' hidden  />
          </label>

          <label htmlFor='image2'>
            <img className='w-20' src= {!image2 ?  assets.upload_area : URL.createObjectURL(image2) } alt='' />
            <input onChange={(e)=> setImage2(e.target.files[0])} type='file' id='image2' hidden  />
          </label>

          <label htmlFor='image3'>
            <img className='w-20' src= {!image3 ?  assets.upload_area : URL.createObjectURL(image3) } alt='' />
            <input onChange={(e)=> setImage3(e.target.files[0])} type='file' id='image3' hidden  />
          </label>

          <label htmlFor='image4'>
            <img className='w-20' src= {!image4 ?  assets.upload_area : URL.createObjectURL(image4) } alt='' />
            <input onChange={(e)=> setImage4(e.target.files[0])} type='file' id='image4' hidden  />
          </label>

          <div className='w-full'>
            <p className='mb-2'>Product Name</p>
            <input onChange={(e)=> setName(e.target.value)} value={name} type='text' placeholder='Type Here' required className='w-full max-w-[500px] px-3 py-2' />
          </div>

          <div className='w-full'>
            <p className='mb-2'>Product Description</p>
            <textarea type='text' onChange={(e)=> setDescription(e.target.value)} value={description} placeholder='Write content here' required className='w-full max-w-[500px] px-3 py-2' />
          </div>

          <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8' >

              <div>
                <p className='mb-2'>Product Category</p>
                <select onChange={(e)=> setCategory(e.target.value)} className='w-full px-2 py-2'>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>
           
              <div>
                <p className='mb-2'>Sub Category</p>
                <select onChange={(e)=> setSubCategory(e.target.value)} className='w-full px-2 py-2'>
                  <option value="Topwear">TopWear</option>
                  <option value="Bottomwear">BottomWear</option>
                  <option value="Winter">WinterWear</option>
                </select>
              </div>

          </div>

           <div>
            <p className='mb-2'>Product Price</p>
            <input onChange={(e)=> setPrice(e.target.value)} value={price} className='w-full px-3py2' type="number" placeholder='24' />
           </div>
        </div>
       </div>

       <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-2'>
          <div onClick={()=> setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S"): [...prev, "S"] )}>
            <p className= {`${sizes.includes("S")? "bg-pink-100": "bg-slate-200"} cursor-pointer px-3 py-1`}>S</p>
          </div>
          <div onClick={()=> setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M"): [...prev, "M"] )}>
            <p className= {`${sizes.includes("M")? "bg-pink-100": "bg-slate-200"} cursor-pointer px-3 py-1`} >M</p>
          </div>
          <div onClick={()=> setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L"): [...prev, "L"] )}>
            <p className= {`${sizes.includes("L")? "bg-pink-100": "bg-slate-200"} cursor-pointer px-3 py-1`} >L</p>
          </div>
          <div onClick={()=> setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL"): [...prev, "XL"] )}>
            <p className= {`${sizes.includes("XL")? "bg-pink-100": "bg-slate-200"} cursor-pointer px-3 py-1`}>XL</p>
          </div>
          <div  onClick={()=> setSizes(prev => prev.includes("XXl") ? prev.filter(item => item !== "XXl"): [...prev, "XXl"] )}>
            <p className={`${sizes.includes("XXl")? "bg-pink-100": "bg-slate-200"} cursor-pointer px-3 py-1`} >XXl</p>
          </div>
        </div>
       </div>



       <div className='flex gap-2 mt-2'>
        <input onChange={()=> setBestseller(prev => !prev)}  checked = {bestseller} type='checkbox' id='bestseller' />
        <label className='cursor-pointer' htmlFor='bestseller'> Add to bestseller</label>
       </div>

       <button type='submit' className=' w-20 py-3 mt-4 bg-black text-white' > ADD</button>
    </form>
  )
}

export default Add