import {html} from '../../node_modules/lit-html/lit-html.js'

const root = document.getElementById('root');

const template = (onSubmit) => 
{
    return html`<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="../../styles/loginPage.css"><link/>
    <!------ Include the above in your HEAD tag ---------->
    <div class="all">
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->
    
        <!-- Icon -->
        <div class="fadeIn first">
          <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d3JpdGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" id="icon" alt="User Icon" />
          <h1>New post</h2>
        </div>
    
        <form @submit = ${onSubmit}>
          <input type="text" id="login" class="fadeIn second" name="title" placeholder="Title">
          <input type="password" id="password" class="fadeIn third" name="details" placeholder="Details">
          <input type="password" id="password" class="fadeIn third" name="imageLink" placeholder="Image link">
          <input type="submit" class="fadeIn fourth" value="Log In">
        </form>
    
      </div>
    </div>
    </div>
     `;
}
export const newPostView = (ctx) => {
  ctx.render(template(onSubmit), root);

  async function onSubmit(e){
      e.preventDefault();

      const formData = new FormData(e.target);
      const title = formData.get('title');
      const details = formData.get('details');
      const imageLink = formData.get('imageLink');
  
      if(title == '' || details == '' || imageLink == ''){
          return alert('Empty')
      }
      else
      {
        try {
            //await ctx.data.addNewPost(title, details, imageLink);
            ctx.page.redirect('/mainthread');
        } catch (error) {
            alert(error.message)
        }
      }
  }
}