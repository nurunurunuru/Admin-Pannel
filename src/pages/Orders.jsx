import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backend_url } from '../App'
import { toast } from 'react-toastify'
import { TfiPackage } from 'react-icons/tfi'

const Orders = ({token}) => {

  const [orders, setOrders] = useState([])
  const fetchAllOrders = async () => {
    if(!token){
      return null
    }
    try {
      const response = await axios.post(backend_url + '/api/order/list',{}, {headers:{token}})
      if(response.data.success){
        setOrders(response.data.orders)
      } else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div>
      <h3>All Orders</h3>
      <div>
        {orders.map((order)=>(
          <div key={order._id}>
            <TfiPackage/>
            <div>
              <div>
                {order.items.map((item,index)=>{
                  if(index === order.items.length -1){
                    return <p key={index}>
                      <span>Items: </span>
                      {item.name} X {item.quantity} <span>"{item.size}"</span>
                    </p>
                  }else{
                    return <p key={index}>
                    <span>Items: </span>
                    {item.name} X {item.quantity} <span>"{item.size}"</span> ,
                  </p>
                  }
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders