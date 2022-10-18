//Third party module
import packageConfig from './package.json' assert { type: 'json' };
import express from 'express';
import looger from 'morgan';
import session from 'express-session'
import path, {dirname} from 'path;'
import { fileURLToPath } from 'url';
 const __dirname = dirname(fileURLToPath(import.meta.url))

// Import Routes
import indexRouter from './app/routes/index.route.server.js'


//Instantiate express application
const app = express();



//setup middle wares
//setup viewEngine EJS
app.set('views',path.join(__dirname, '/app/views'))
app.set('view engine','ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'/client')));
app.use(session({
    secret: 'MySecret',
    SaveUninitialized: false,
    resave: false
}))

//Use Routes
app.use('/', indexRouter);




app.listen(3000);