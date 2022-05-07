import {html} from '../../node_modules/lit-html/lit-html.js'

const root = document.getElementById('root');

const template = () => 
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
        <form>
          <input type="text" id="login" class="fadeIn second" name="email" placeholder="login">
          <input type="text" id="password" class="fadeIn third" name="password" placeholder="password">
          <input type="text" id="repassword" class="fadeIn third" name="repassword" placeholder="repeat password">
          <input type="submit" class="fadeIn fourth" value="Register">
        </form>
    
        <!-- Remind Passowrd -->
        <div id="formFooter">
          <a class="underlineHover" href="/login">Log in</a>
        </div>
    
      </div>
    </div>
    </div>
     `;
}
export const registerView = (ctx) => {
    ctx.render(template(), root);
}