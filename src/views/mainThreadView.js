import {html} from '../../node_modules/lit-html/lit-html.js'

const root = document.getElementById('root');

const template = (data) => 
{
    return html`
    <a class="md-fab md-fab-bottom-right" href="/newpost">
        <md-icon>Add</md-icon>
    </a>
    <style>
.grid { 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
  }
.grid > article {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
}
.grid > article img {
  max-width: 100%;
}
.text {
  padding: 0 20px 20px;
}
.text > button {
  background: gray;
  border: 0;
  color: white;
  padding: 10px;
  width: 100%;
  }
</style>
<main class="grid">
    ${data.map(item => cardTemplate(item))}
    `;
}
const cardTemplate = (info) => {
    console.log(info);
    return html`
    <article>
        <img src=${info.imageLink} alt="Photo">
            <div class="text">
            <h2>${info.title}</h2>
            <p>${info.details}</p>
            <a href='details/${info.id}' class="btn btn-primary" id="fixedButton">Details</a>
        </div>
    </article>
    `;
}
export const mainThreadView = async (ctx) => {
    let data = await ctx.data.readAllPosts();
    let arr = [];
    let i = 0;
    data.forEach((doc) => {
        arr.push(doc.data());
        arr[i]['id'] = doc.id;
        i++;
      });
    ctx.render(template(arr), root);
}