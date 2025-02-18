import React from 'react'
import Upload from "../assets/upload_icon.png"

const Add = () => {
  return (
    <form>
      <div>
        <h3>Upload Image</h3>
        {/* Images */}
        <div>
          <label htmlFor='image1'>
            <img src={Upload} alt="" className='h-52' />
            <input type="file" name='image' id='image1 hidden' />
          </label>
          <label htmlFor='image2'>
            <img src={Upload} alt="" className='h-52' />
            <input type="file" name='image' id='image2 hidden' />
          </label>
          <label htmlFor='image3'>
            <img src={Upload} alt="" className='h-52' />
            <input type="file" name='image' id='image3 hidden' />
          </label>
          <label htmlFor='image4'>
            <img src={Upload} alt="" className='h-52' />
            <input type="file" name='image' id='image4 hidden' />
          </label>
        </div>
      <div>
        <h5>Product Name</h5>
         <input type="text" placeholder='Write here' className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-[333px] sm:w-full' />
      </div>
      <div>
         <h5>Product Description</h5>
         <input type="text" placeholder='Write here' className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-[333px] sm:w-full' />
      </div>
      <div>
        <div>
          <div>
            <div>
              <h5>Category</h5>
              <select className="max-w-20 px-3 py-2 text-gray-30 ring-1 ring-slate-900/5 bg-white rounded">
              <option value="Men"></option>
              <option value="Women"></option>
              <option value="Kids"></option>
              </select>
            </div>
            <div>
              <h5>Sub-Category</h5>
              <select className="max-w-20 px-3 py-2 text-gray-30 ring-1 ring-slate-900/5 bg-white rounded">
              <option value="TopWear"></option>
              <option value="BottomWear"></option>
              <option value="WinterWear"></option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <h5>Product Sizes</h5>
        </div>
      </div>
      </div>  
    </form>
  )
}

export default Add;