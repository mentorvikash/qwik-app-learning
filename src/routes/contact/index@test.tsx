import { component$, $ } from '@builder.io/qwik';

interface dataType {
  fname: string
  lname: string
  email: string
}


export default component$(() => {

  const handleOnSubmit = $((data:dataType ) => {
    console.log({data})
  })

  return (
    <div >
      <h1>Constact Page</h1>
      <div>
        <form>
          <input type="text" name="fname" id="fname" />
          <input type="text" name="lname" id="lname" />
          <input type="text" name="email" id="email" />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
});