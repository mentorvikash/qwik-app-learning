import { component$, useResource$, Resource } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {

    const productsData = useResource$(async () => {
        const response = await fetch("http://localhost:4000/products?_limit=10")
        const data = await response.json()
        return data
    })

    return (
        <>
            <Resource
                value={productsData}
                onPending={() => <h2>Loding....</h2>}
                onResolved={(data) => data.map(product => <h1 key={product.id} > <Link href={`/products/${product.id}`} > {product.name}</Link></h1>)}
            />
        </>
    )
});