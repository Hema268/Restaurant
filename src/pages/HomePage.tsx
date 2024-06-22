import React, { useEffect, useState } from 'react'
import RestaurantCard from '../components/RestaurantCard'
import { getRestaurants } from '../api/Restaurant';
export interface Restaurant {
    id: number;
    name: string;
    cuisine: string;
    location: string;
    image: string;
  }
function HomePage() {
  const [restraunts, setRestaurants] = useState<Restaurant[]>([]);
  const fetchRestaurants = async () => {
    try {
      const response = await getRestaurants();
      console.log(response);
      setRestaurants(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);
  return (
    <div className='flex flex-wrap mt-10'>
      
        {restraunts.map((restaurant)=>(
           <RestaurantCard hotel={restaurant}/>                        
        ))}
        
    </div>
    
  )
}

export default HomePage