export function renderCountry(country) {
    const div = document.createElement('div');
    div.classList.add('country');

    const a = document.createElement('a');
    a.href = `/details/?id=${country.id}`;

    const h1 = document.createElement('h1');
    h1.textContent = `${country.name}`;

    const img = document.createElement('img');
    img.src = `./assets/${country.name}.jpg`;

    div.append(h1, img);

    a.append(div);

    return a;
}

console.log('helo from render utils');