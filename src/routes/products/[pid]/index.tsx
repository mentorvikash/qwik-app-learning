import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

export const productData = routeLoader$(async ( requestEvent ) =>{
    const productID = requestEvent.params.pid
    const response = await fetch(`http://localhost:4000/products/${productID}`)
    const data = await response.json() 
    return data    
})

export default component$(() => {

    const pdata = productData() 

  return( 
  <div>
    <p>this is our id {pdata.value.id}</p>
    <p>this is our name {pdata.value.name}</p>
    <p>this is our price {pdata.value.price}</p>
  </div>
  )
});