import {html, render} from '../../node_modules/lit-html/lit-html.js'

const root = document.getElementById('site-header');

const logged = (user) => {
  return html`
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/mainthread">Main thread</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/logout">Logout</a>
        </li>`;
}
const guest = () => {
  return html`
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/register">Register</a>
        </li>`
        
}
const template = (user) => {
    return html`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">SimpleBlog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        ${user ? logged(user) : guest()}
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`;
}

export const navigationView = (ctx) => {
    const user = sessionStorage.getItem('userEmail');
    render(template(user), root);
}