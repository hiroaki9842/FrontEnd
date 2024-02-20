import { Header } from './header';
import { Main } from './main';
import { Nav } from './nav';
import { Footer } from './footer';
import { fetchData } from './api_servis';
const body = document.body;
body.style.margin = '0';
const header = new Header();
header.render(body);
const main = new Main();
main.render(body);
const nav = new Nav();
nav.render(body);
const footer = new Footer();
footer.render(body);
fetchData()
    .then((data) => {
    console.log('API Data:', data);
})
    .catch((error) => {
    console.error('Error during API call:', error.message);
});
//# sourceMappingURL=index.js.map