import React from 'react';
import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier =  form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details =  form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,quantity,supplier,taste,category,details,photo};
        console.log(newCoffee);
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Successful!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
              }
           
        })
    }
    return (
        <div className='bg-[#F4F3F0]'>
            <h1 className='text-4xl text-violet-500 text-center'>Add a Coffee</h1>
            
            <form onSubmit={handleSubmit}>
                {/* 1st Row */}
                <div  className='mt-10 flex gap-10  md:mx-[600px]'>
                    <div>
                        <label className='ml-4' htmlFor="name">Name </label> <br /> <br />
                        <input type="text"  name='name' placeholder="enter coffee name" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div>
                        <label className='ml-4' htmlFor="">Available Quantity </label> <br /> <br />
                        <input type="number" name='quantity' placeholder="Available Quantity" className="input input-bordered input-md w-full max-w-xs" />
                    </div>  
                </div>

                {/* 2nd Row */}
                <div  className='mt-10 flex gap-10  bg-[#F4F3F0]  md:mx-[600px]'>
                    <div>
                        <label className='ml-4' htmlFor="name">Supplier</label> <br /> <br />
                        <input type="text" name='supplier' placeholder="enter coffee supplier" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div>
                        <label className='ml-4' htmlFor="">Taste </label> <br /> <br />
                        <input type="text" name='taste' placeholder="Enter coffee taste" className="input input-bordered input-md w-full max-w-xs" />
                    </div>  
                </div>
                {/* 3rd Row */}
                <div  className='mt-10 flex gap-10   bg-[#F4F3F0]  md:mx-[600px]'>
                    <div>
                        <label className='ml-4' htmlFor="name">Category </label> <br /> <br />
                        <input type="text" name='category' placeholder="enter coffee category" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div>
                        <label className='ml-4' htmlFor="">Details </label> <br /> <br />
                        <input type="text" name='details' placeholder="enter coffee details"  className="input input-bordered input-md w-full max-w-xs mb-10" />
                    </div>  
                </div>
                <div className='md:mx-[600px]'>
                <label className='ml-4' htmlFor="">Photo</label> <br /> <br />
                <input type="text" name='photo' placeholder="enter photo URL" className="input input-bordered input-md w-full max-w-xs mb-10" />
                </div>
                <input type="submit" value="Add Coffee"  className='btn btn-block bg-[#D2B48C]'/>
            </form>
            
        </div>
    );
};

export default AddCoffee;