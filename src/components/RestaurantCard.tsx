import React from 'react'
import {Star} from 'lucide-react'
import myimage from '../images/img.jpg'
import { Restaurant } from '../pages/HomePage'

interface RestaurantProps{
    hotel: Restaurant
}
function RestaurantCard({hotel}: RestaurantProps) {
  return (
    <div className='w-[350px] m-2'>
        <img className="w-full h-48 rounded-lg object-cover" src={hotel.image} />
        <div className='text-bold text-xl'>{hotel.name}</div>
        <div className='flex'>
        <Star color='green' strokeWidth={3} size={20}></Star>
        <div className='text-bold'>4.3 • 20-25 mins</div>
        </div>
        
        <div className='text-gray-500'>{hotel.cuisine}</div>
        <div className='text-gray-500'>{hotel.location}</div>
    </div>
  )
}

export default RestaurantCard