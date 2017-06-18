import { Router } from 'express';

const router     = Router()
    , collection = 'teams';

export default function(team) {
  router.get('/', (req, res) => {
    team.all(collection)
        .then(teams => {
          res.send(teams);
        })
        .catch(err => {
          res.status(500)
             .send(err.message);
        });
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;

    team.get(collection, id)
        .then(team => {
          res.send(team);
        })
        .catch(err => {
          res.status(500)
             .send(err.message);
        })
  });

  router.post('/', (req, res) => {
    const teamToAdd = req.body;

    team.add(collection, teamToAdd)
        .then(() => {
          res.send('team added');
        })
        .catch(err => {
          res.status(500)
             .send(err.message);
        });
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;

    team.delete(collection, id)
        .then(() => {
          res.send('team deleted');
        })
        .catch(err => {
          res.status(500)
             .send(err.message);
        });
  });

  return router;
};
