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
          <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" id="icon" alt="User Icon" />
        </div>
    
        <!-- Login Form -->
        <form @submit = ${onSubmit}>
          <input type="text" id="login" class="fadeIn second" name="email" placeholder="Email">
          <input type="password" id="password" class="fadeIn third" name="password" placeholder="Password">
          <input type="submit" class="fadeIn fourth" value="Log In">
        </form>
    
        <!-- Remind Passowrd -->
        <div id="formFooter">
          <a class="underlineHover" href="/register">Register</a>
        </div>
    
      </div>
    </div>
    </div>
     `;
}
export const loginView = (ctx) => {
  ctx.render(template(onSubmit), root);

  async function onSubmit(e){
      e.preventDefault();

      const formData = new FormData(e.target);
      const email = formData.get('email');
      const password = formData.get('password');
  
      if(email == '' || password == ''){
          return alert('Empty')
      }
      else
      {
        try {
            await ctx.data.login(email, password);
            ctx.page.redirect('/mainthread');
        } catch (error) {
            alert(error.message)
        }
      }
  }
}