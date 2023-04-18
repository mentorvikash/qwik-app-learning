import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city'; 

export const reviewData = routeLoader$(async ( requestEvent ) =>{
    return requestEvent.params
})

const ReviewPage = component$(() => {
    
  const paramData = reviewData()
  
  return <div class=" font-bold, text-lg " >This is the {paramData.value.rid} review of my {paramData.value.id} blog </div>
});

export default ReviewPage