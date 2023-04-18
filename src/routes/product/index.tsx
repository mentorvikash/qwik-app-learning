import {
  component$,
  Resource,
  useResource$,
  // useSignal,
} from '@builder.io/qwik';

type datatype = { name: string, price: number }[]

export default component$(() => {
  // const prNumber = useSignal('3576');

  const products = useResource$<datatype>(async () => {

    try {
      const response = await fetch(
        `http://localhost:4000/products?_limit=10`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error
    }

  })

  return (
    <>

      <Resource
        value={products}
        onPending={() => <h1>Loding..</h1>}
        onResolved={(data: { name: string, price: number }[]) => data.map(el => <h1>{el.name}</h1> )}
        onRejected={(error) => <h1>Error...</h1>}
      />
    </>
  );
});