import { component$, $, useStore, useSignal } from '@builder.io/qwik';
import PropTest from '~/components/propComonent/propTest';

interface dataType {
  fname: string
  lname: string
  email: string
}

export default component$(() => {

  const userData = useStore({
    fname: "",
    lname: "",
    email: "",
  })

  const isOpen =  useSignal(false)
  
  const handleOnSubmit = $(() => {
    console.log(userData)
  })

  const superhero = useStore({ first: 'Super', second: 'Men' })

  const handleSuperHero = $(() =>{
    console.log("I am a super hero!")
  })

  return (
    <div >
      <h1>Constact Page</h1>
      <button onClick$={() => isOpen.value = true } >Contact Me</button>
      <PropTest superhero={superhero} handleSuperHero={handleSuperHero } />
      {isOpen.value &&      
      <div>
        <form class=" flex flex-col mx-20 my-5 gap-4 " preventdefault:submit  onSubmit$={handleOnSubmit} >
          <label for="fname"> First Name</label>
          <input type="text" name="fname" id="fname" value={userData.fname} onInput$={(e) => userData.fname = (e.target as HTMLInputElement).value } />
          <label for="fname"> Last Name</label>
          <input type="text" name="lname" id="lname" value={userData.lname} onInput$={(e) => userData.lname = (e.target as HTMLInputElement).value }  />
          <label for="fname"> Email</label >
          <input type="text" name="email" value={userData.email} id="email" class="mb-5" onInput$={(e) => userData.email = (e.target as HTMLInputElement).value } />
          <button class=" bg-fuchsia-800 text-white " type='submit'>Submit</button>
        </form>
      </div>
      }
    </div>
  )
});