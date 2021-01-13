const request = require('supertest');
const expect = require('chai').expect
const app = require('../src/config/app');

describe('GET /iecho', function() {
  it('Response 200', async function() {
    const res = await request(app)
      .get('/iecho')
      .query({
        text: "text"
      });
    console.log('res', res.body);
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.be.a('object');
    expect(res.body).to.have.property('text');
    expect(res.body).to.have.property('palindrome');
  })

  it('Response 400', async function() {
    const res = await request(app)
      .get('/iecho');

    expect(res.statusCode).to.equal(400);
    expect(res.body).to.be.a('object');
    expect(res.body).to.have.property('error');

    expect(res.body.error).to.equal("no text");
  })

  it('text: hola', async function() {
    const res = await request(app)
      .get('/iecho')
      .query({
        text: "hola"
      });
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property('text');
    expect(res.body).to.have.property('palindrome');

    expect(res.body.text).to.equal("aloh");
    expect(res.body.palindrome).to.equal(false);
  });

  it('text: level', async function() {
    const res = await request(app)
      .get('/iecho')
      .query({
        text: "level"
      });
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property('text');
    expect(res.body).to.have.property('palindrome');

    expect(res.body.text).to.equal("level");
    expect(res.body.palindrome).to.equal(true);
  });
})