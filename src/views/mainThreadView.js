import {html} from '../../node_modules/lit-html/lit-html.js'

const root = document.getElementById('root');

const template = (data) => 
{
    return html`
    <a class="md-fab md-fab-bottom-right" href="/newpost">
        <md-icon>Add</md-icon>
    </a>
    ${data.map(item => cardTemplate(item))}
    <img id="bg" src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHw%3D&w=1000&q=80">
    `;
}
const cardTemplate = (info) => {
    console.log(info);
    return html`
    <div class="cardOver" style="width: 18rem;">
    <img class="card-img-top" src=${info.imageLink} alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${info.title}</h5>
        <p class="card-text">>${info.details}</p>
        <a href="#" class="btn btn-primary">Details</a>
    </div>
    </div>`;
}
export const mainThreadView = async (ctx) => {
    let data = await ctx.data.readAllPosts();
    let arr = [];
    data.forEach((doc) => {
        arr.push(doc.data());
      });
    console.log(arr);
    ctx.render(template(arr), root);
}