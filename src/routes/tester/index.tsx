import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class=" font-bold text-lg from-neutral-100"  >
            <h1 class="p-5"  >THIS IS OUR TEST PAGE</h1>
            <p class="p-5 " >this is a simple ptag</p>
        </div>
    )
});

export const head: DocumentHead = {
    title: "this our test page",
    meta: [
        {
            name: "description",
            content: "this is our test page"

        }
    ]
}