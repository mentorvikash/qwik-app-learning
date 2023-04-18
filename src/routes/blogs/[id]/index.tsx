import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

export const usereqData = routeLoader$( async (requestEvent) => { 
  return requestEvent.params.id;
})


const Blogs = component$(() => {

  const signal = usereqData()

  return <div>this is our {signal.value} blog</div>
});

export default Blogs