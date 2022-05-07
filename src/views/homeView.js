import {html} from '../../node_modules/lit-html/lit-html.js'

const root = document.getElementById('root');

const template = () => 
{
    return html`
    <a id ="btnover" type="button" href="/login">Get started!</a>
    <img id="bg" src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHw%3D&w=1000&q=80">
    `;
}
export const homeView = (ctx) => {
    ctx.render(template(), root);
}