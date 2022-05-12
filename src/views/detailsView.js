import {html,nothing} from '../../node_modules/lit-html/lit-html.js'

const template = (item, creator) => {
    return html`
    <!-- Details Meme Page (for guests and logged users) -->
    <section >
        <div class="post-details">
        <h1>Post Title: ${item.title}
        </h1>
        <div>
            <div>
                <img src=${item.imageUrl}>
            </div>
            <div class="meme-description">
                <h2>Details: </h2>
                <p>
                    ${item.details}
                </p>
                ${creator ? html`<!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                <a type="button" class="btn btn-warning" href='/edit/${item.id}'>Edit</a>
                <button id = "deleteBtn"type="button" class="btn btn-danger">Delete</button>` : nothing}
            </div>
        </div>
        </div>
    </section>`;
}
export const detailsView = async (ctx) => {
    const id = ctx.params.id;
    try {
        const item = await ctx.data.getItem(id);
        const creator = sessionStorage.getItem('userId') == item.creatorId;
        ctx.render(template(item, creator));
        
    const deleteBtn = document.getElementById('deleteBtn');
    deleteBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        if (confirm("Do you want to delete it?") == true) { 
            await ctx.data.del(id);
            ctx.page.redirect('/mainthread');
        }
    })
    } catch (error) {
        throw error
    }
    
}