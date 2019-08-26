import express      from 'express';
import log4js       from 'log4js';
import cors         from 'cors';
import port         from './config/config.json'
import dbConnect    from './engine/dbEngine';
import bodyParser   from 'body-parser';

// ~~~~~~~ ROUTES ~~~~~~~~~~
import routes       from './routes/routes';
import budgetRoute  from './routes/budgetRoute';
import goalRoutes   from './routes/setGoalRoute';
import dashboard    from './routes/dashboard.route';

const logger = log4js.getLogger('SERVER')
const app    = express();
logger.level = 'debug'

dbConnect.CreateConnection().then(connection => {console.log(connection.code);}).catch(err => {return err;});

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(routes);
app.use(budgetRoute);
app.use(goalRoutes);
app.use(dashboard);

app.listen(port.port, () => {
    logger.debug('LISTENING ON PORT: ', port.port);
});


