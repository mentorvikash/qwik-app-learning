import {
  component$,
  Resource,
  useResource$,
  useSignal,
} from '@builder.io/qwik';
 
type datatype = {name: string, price: number}[]

export default component$(() => {
  const prNumber = useSignal('3576');

  const prTitle = useResource$ <datatype> (async ({ track }) => {
    // it will run first on mount (server), then re-run whenever prNumber changes (client)
    // this means this code will run on the server and the browser
    // track(() => prNumber.value);
    const response = await fetch(
      `http://localhost:4000/products?_limit=10`
    );
    const data = await response.json();
    return data;
  });
 
  return (
    <>
      {/* <input type="number" bind:value={prNumber} /> */}

s      <Resource
        value={prTitle}
        onPending={() => <p>Loading...</p>}
        onResolved={(data)=> data.map((el) => <h1 key={el.price}> profuct name: {el.name} and price: {el.price} </h1>  )}
      />
    </>
  );
});