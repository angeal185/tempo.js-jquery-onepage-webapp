var loaderTpl = "<div id='page-loader'><div class='loader-icon fa fa-spin colored-border'></div></div>",

headerTpl = "<header id='top'><canvas id='low-poly'></canvas><div class='welcome'><div class='logo'><img src='images/logo.png' alt=''></div><div class='social-icons'><ul id='socialTop' class='animated fadeInDownBig'><li data-template><a href='{{href}}'><i class='fa fa-fw fa-{{icon}}'></i></a></li></ul></div></div></header>",

counterTpl = "<section class='countdown-section' id='countdown'><div class='container'><div class='row'><h3 data-sr='wait 0.25s, then enter top and move 40px over 1s'><i class='fa fa-clock-o'></i> We are Coming Soon...</h3><div class='countdown' data-sr='wait 0.25s, then enter bottom and move 40px over 1s'></div></div></div></section>",

servicesTpl = "<section class='gradient services'><div class='container'><div class='row'><h3 data-sr='wait 0.5s, then enter top and move 40px over 1s'>OUR SERVICES.</h3><div id='servicesData' class='col-md-12'><div data-template class='col-md-4' data-sr='wait 0.25s, then enter {{direction}} and move 40px over 1s'><div class='icon'><i class='fa fa-{{icon}} fa-fw'></i></div><h2>{{heading}}</h2><p>{{info}}</p></div></div></div></div></section>",

subscribeTpl = "<section class='subscribe'><div class='container'><div class='row'><h2 data-sr='wait 0.5s, then enter top and move 40px over 1s'>Subscribe to our newsletter.</h2><form id='ajaxChimp' data-sr='wait 0.5s, then enter bottom and move 40px over 1s'><input id='mc-email' type='text' placeholder='Enter your email address'> <button type='submit'><i class='fa fa-fw fa-envelope'></i></button><label for='mc-email'></label></form></div></div></section>",

aboutTpl  = "<section class='gradient about'><div class='container'><div class='row'><h3 data-sr='wait 0.5s, then enter top and move 40px over 1s'>ABOUT US.</h3><div id='aboutData' class='col-md-12'><div data-template class='col-md-4' data-sr='wait 0.25s, then enter {{direction}} and move 40px over 1s'><img src='images/team/{{img}}'><h2>{{name}}</h2><p>{{info}}</p><div class='social-icons'><ul><li><a href='{{hrefA}}'><i class='fa fa-fw fa-twitter'></i></a></li><li><a href='{{hrefB}}'><i class='fa fa-fw fa-facebook'></i></a></li><li><a href='{{hrefC}}'><i class='fa fa-fw fa-github'></i></a></li><li><a href='{{hrefD}}'><i class='fa fa-fw fa-linkedin'></i></a></li></ul></div></div></div></div></div></section>",

contactTpl  = "<section class='contact'><div class='container'><div class='row'><h2 data-sr='wait 0.5s, then enter top and move 40px over 1s'>Contact us</h2><div class='col-md-12'><div id='note'></div><div id='fields'><form id='ajax-contact-form'><input type='text' name='name' id='name' placeholder='Name' value='' data-sr='enter left move 25px, after 0.3s'> <input type='email' name='email' id='email' placeholder='Email' value='' data-sr='enter right move 25px, after 0.3s'><textarea name='msg' id='msg' placeholder='Message' data-sr='enter bottom move 25px, after 0.3s'></textarea><input type='submit' name='submit' id='submit' value='Send message' data-sr='wait 0.8s, then enter top and move 40px after 0.3s'></form></div></div></div></div></section>",

mapTpl = "<div class='google-map'><div id='google-container'></div><div id='zoom-in'></div><div id='zoom-out'></div><div class='contact-info gradient'><div class='container'><div class='row'><div class='col-md-12'><address data-sr='wait 0.25s, then enter left and move 40px over 1s'><i class='fa fa-map-marker'></i>Location</address><div class='phone' data-sr='wait 0.25s, then enter top and move 40px over 1s'><i class='fa fa-phone'></i>+00 000 000</div><div class='email' data-sr='wait 0.25s, then enter right and move 40px over 1s'><i class='fa fa-paper-plane'></i>admin@admin.com</div></div></div></div></div></div>",

footerTpl = "<footer><div class='container'><div class='row'><div class='copyright' data-sr='wait 0.5s, then enter bottom and move 40px over 1s'>2016 Ben Eaves</div></div></div></footer>";