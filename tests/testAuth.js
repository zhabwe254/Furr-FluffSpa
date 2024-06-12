const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const db = require('../db/testDatabase');

const should = chai.should();
chai.use(chaiHttp);

describe('Auth API', () => {
  beforeEach((done) => {
    db.serialize(() => {
      db.run('DELETE FROM users', done);
    });
  });

  describe('/POST register', () => {
    it('it should register a new user', (done) => {
      let user = {
        username: 'testuser',
        password: 'password123'
      };
      chai.request(server)
        .post('/api/auth/register')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          done();
        });
    });
  });

  describe('/POST login', () => {
    it('it should login a user and return a token', (done) => {
      let user = {
        username: 'testuser',
        password: 'password123'
      };
      db.run('INSERT INTO users (username, password) VALUES (?, ?)', [user.username, user.password], function(err) {
        if (err) return done(err);
        chai.request(server)
          .post('/api/auth/login')
          .send(user)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('token');
            done();
          });
      });
    });
  });
});
