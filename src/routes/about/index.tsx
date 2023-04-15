import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styleAbout from './style.css?inline'

export default component$(() => {
    
    useStylesScoped$(styleAbout)
    
    return (

    <article >
        <h1>Mentor Vikash</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae ratione esse, repellendus tempore vel, dignissimos eveniet dolore beatae blanditiis, odio numquam perspiciatis provident iusto aliquam deserunt asperiores similique praesentium? </p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae ratione esse, repellendus tempore vel, dignissimos eveniet dolore beatae blanditiis, odio numquam perspiciatis provident iusto aliquam deserunt asperiores similique praesentium? </p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae ratione esse, repellendus tempore vel, dignissimos eveniet dolore beatae blanditiis, odio numquam perspiciatis provident iusto aliquam deserunt asperiores similique praesentium? </p>
        <a href="">click me</a>
    </article>
    );
});