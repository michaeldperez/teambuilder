import path       from 'path';
import express    from 'express';
import bodyParser from 'body-parser';
import Teams      from './routes/teams';
import Team       from './models/team';
import Database   from './db/db';

const db = new Database();
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..')));

let team
  , teams;

db.connect('mongodb://localhost/teambuilder')
  .then(() => {
    team = new Team(db);
    teams = Teams(team);
    app.use('/teams', teams);
  })
  .catch(err => {
    console.log(`Error: ${err.message}`);
  });

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});