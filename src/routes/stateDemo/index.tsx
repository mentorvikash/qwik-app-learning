import { component$, useSignal, useStore, $ } from '@builder.io/qwik';

export default component$(() => {

    const fname = useSignal("vikash")
    const lname = useSignal("singh")
    const fullName = useStore({ fname: "revive", lname: "coding" })
    const products = useStore([
        { id: 0, name: "product1", price: 100, quantity: 10 },
        { id: 1, name: "product2", price: 200, quantity: 20 },
        { id: 2, name: "product3", price: 300, quantity: 30 },
        { id: 3, name: "product4", price: 400, quantity: 40 }
    ])

    const text1 = useSignal("")

    const handlSubmit = $( data => {
        console.log({data})
    })

    return (
        <div>
            <form preventdefault:submit onSubmit$={handlSubmit}>
            <div>
                My name is {fullName.fname} {fullName.lname}
            </div>
            <input value={text1.value} type="text" onInput$={(event) => text1.value = (event.target as HTMLInputElement).value} />
            {products.map((product) => <p key={product.id} > {product.name} </p>)}

            <button onClick$={() => fullName.fname = "Rajat"} >Change me</button>
            <p>{text1}</p>
            <button type="submit">Submit</button>
            </form>
        </div>

    );
});