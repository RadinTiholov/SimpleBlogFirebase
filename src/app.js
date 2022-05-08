import page from '../node_modules/page/page.mjs'
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { mainThreadView } from './views/mainThreadView.js';
import { newPostView } from './views/newPostView.js';
import { registerView } from './views/registerView.js';

page(renderMiddleware);
page(navigationMiddleware);
page('/', homeView)
page('/login', loginView)
page('/register', registerView)
page('/logout', logoutView)
page('/mainthread', mainThreadView)
page('/newpost', newPostView)
page.start();

