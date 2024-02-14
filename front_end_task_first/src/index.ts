import { Header } from './header';
import { Main } from './main';
import { Nav } from './nav';
import { Footer } from './footer';

const body = document.body;
body.style.margin = '0'


const header = new Header();
header.render(body);

const main = new Main();
main.render(body);

const nav = new Nav();
nav.render(body);

const footer = new Footer();
footer.render(body);