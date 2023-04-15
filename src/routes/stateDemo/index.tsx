import { component$, useSignal, useStore } from '@builder.io/qwik';
 
export default component$(() => {

    const fname = useSignal("vikash")
    const lname = useSignal("singh")
    const fullName =  useStore({fname: "revive", lname: "coding"})
    

  return (

    <div>
    <div>
        My name is {fullName.fname} {fullName.lname}
    </div>
    <button onClick$={() => fullName.fname = "Rajat" } >Change me</button>
    </div>

  );
});