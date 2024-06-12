const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const db = require('../db/testDatabase');
const { verifyToken } = require('../middleware/authMiddleware');

const should = chai.should();
chai.use(chaiHttp);

describe('Customers API', () => {
  let token;

  before((done) => {
    db.serialize(() => {
      db.run('DELETE FROM customers');
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

  describe('/POST customer', () => {
    it('it should POST a new customer', (done) => {
      let customer = {
        name: 'John Doe',
        phone: '1234567890',
        email: 'john.doe@example.com'
      };
      chai.request(server)
        .post('/api/customers')
        .set('Authorization', token)
        .send(customer)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          done();
        });
    });
  });

  describe('/GET customers', () => {
    it('it should GET all customers', (done) => {
      chai.request(server)
        .get('/api/customers')
        .set('Authorization', token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('customers');
          res.body.customers.should.be.a('array');
          done();
        });
    });
  });
});
