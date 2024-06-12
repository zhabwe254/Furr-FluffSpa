const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const db = require('../db/testDatabase');
const { verifyToken } = require('../middleware/authMiddleware');

const should = chai.should();
chai.use(chaiHttp);

describe('Appointments API', () => {
  let token;

  before((done) => {
    db.serialize(() => {
      db.run('DELETE FROM appointments');
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

  describe('/POST appointment', () => {
    it('it should POST a new appointment', (done) => {
      let appointment = {
        date: '2024-07-01',
        time: '10:00',
        service: 'Grooming'
      };
      chai.request(server)
        .post('/api/appointments')
        .set('Authorization', token)
        .send(appointment)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          done();
        });
    });
  });

  describe('/GET appointments', () => {
    it('it should GET all appointments', (done) => {
      chai.request(server)
        .get('/api/appointments')
        .set('Authorization', token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('appointments');
          res.body.appointments.should.be.a('array');
          done();
        });
    });
  });
});
