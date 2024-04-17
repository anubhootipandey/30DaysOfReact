import React from 'react'

const Card = () => {
  return (
    <div className='w-full bg-white border border-gray-200
    rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <a href='/'>
        <img className="p-8 rounded-t-lg" src="https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=600" alt="product_image1" />
        </a>
        <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        I see a Light in the darkness.
                    </h5>
                </a>
            </div>
    </div>
  )
}

export default Card