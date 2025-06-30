import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { assets } from '../assets/assets'

const Add = () => {
  return (
    <form className='flex flex-col w-full items-start gap-3'>
       <div>
        <p className='mb-2'>Upload Image</p>

        <div className='flex flex-col gap-4 w-full'>

          <label htmlFor='image1'>
            <img className='w-20' src= {assets.upload_area} alt='' />
            <input type='file' id='image1' hidden  />
          </label>

          <label htmlFor='image2'>
            <img className='w-20' src= {assets.upload_area} alt='' />
            <input type='file' id='image2' hidden  />
          </label>

          <label htmlFor='image3'>
            <img className='w-20' src= {assets.upload_area} alt='' />
            <input type='file' id='image3' hidden  />
          </label>

          <label htmlFor='image4'>
            <img className='w-20' src= {assets.upload_area} alt='' />
            <input type='file' id='image4' hidden  />
          </label>

          <div className='w-full'>
            <p className='mb-2'>Product Name</p>
            <input type='text' placeholder='Type Here' required className='w-full max-w-[500px] px-3 py-2' />
          </div>

          <div className='w-full'>
            <p className='mb-2'>Product Description</p>
            <textarea type='text' placeholder='Write content here' required className='w-full max-w-[500px] px-3 py-2' />
          </div>

          <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8' >

              <div>
                <p className='mb-2'>Product Category</p>
                <select className='w-full px-2 py-2'>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>
           
              <div>
                <p className='mb-2'>Sub Category</p>
                <select className='w-full px-2 py-2'>
                  <option value="Topwear">TopWear</option>
                  <option value="Bottomwear">BottomWear</option>
                  <option value="Winter">WinterWear</option>
                </select>
              </div>

          </div>

           <div>
            <p className='mb-2'>Product Price</p>
            <input className='w-full px-3py2' type="number" placeholder='24' />
           </div>
        </div>
       </div>

       <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-2'>
          <div>
            <p className='bg-slate-200 cursor-pointer px-3 py-1'>S</p>
          </div>
          <div>
            <p className='bg-slate-200 cursor-pointer px-3 py-1'>M</p>
          </div>
          <div>
            <p className='bg-slate-200 cursor-pointer px-3 py-1'>L</p>
          </div>
          <div>
            <p className='bg-slate-200 cursor-pointer px-3 py-1'>XL</p>
          </div>
          <div>
            <p className='bg-slate-200 cursor-pointer px-3 py-1'>XXl</p>
          </div>
        </div>
       </div>



       <div className='flex gap-2 mt-2'>
        <input type='checkbox' id='bestseller' />
        <label className='cursor-pointer' htmlFor='bestseller'> Add to bestseller</label>
       </div>

       <button type='submit' className=' w-20 py-3 mt-4 bg-black text-white' > ADD</button>
    </form>
  )
}

export default Add