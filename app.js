const express= require('express');
const app = express();
var routes =require('./routes');
var path =require('path');
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.get('/',routes.home);


app.get('/star_wars_episode/:episode_number?',routes.movie_single);


app.get('*',routes.notfound);


const port = process.env.PORT || 3000
app.listen(port);
