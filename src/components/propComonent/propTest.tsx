import { component$ } from '@builder.io/qwik';
import { type } from 'os';

type propType = {
    superhero:{
        first: string,
        second: string
    },
    handleSuperHero: () => void;
}

export default component$((prop: propType) => {
    const {superhero, handleSuperHero} = prop;

    handleSuperHero()

    return (
        <div class="propclass">
            <p class="propitem">we have our {superhero.first}, {superhero.second}</p>
        </div>
    );
});
