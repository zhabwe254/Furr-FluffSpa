const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const db = require('../db/testDatabase');
const { verifyToken } = require('../middleware/authMiddleware');

const should = chai.should();
chai.use(chaiHttp);

describe('Inventory API', () => {
  let token;

  before((done) => {
    db.serialize(() => {
      db.run('DELETE FROM inventory');
      db.run('DELETE FROM users');
      db.run('INSERT INTO users (username, password) VALUES (?, ?)', ['testuser', 'password123'], function (err) {
        if (err) return done(err);
        chai.request(server)
          .post('/api/auth/login')
          .send({ username: 'testuser', password: 'password123' })
          .end((err, res) => {
            if (err) return done(err);
            token = res.body.token;
            done();
          });
      });
    });
  });

  describe('/POST inventory', () => {
    it('it should POST a new inventory item', (done) => {
      let item = {
        item: 'Dog Food',
        quantity: 20,
        threshold: 5
      };
      chai.request(server)
        .post('/api/inventory')
        .set('Authorization', token)
        .send(item)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          done();
        });
    });
  });

  describe('/GET inventory', () => {
    it('it should GET all inventory items', (done) => {
      chai.request(server)
        .get('/api/inventory')
        .set('Authorization', token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('items');
          res.body.items.should.be.a('array');
          done();
        });
    });
  });
});
