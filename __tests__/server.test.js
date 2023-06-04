'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelize } = require('../src/auth/models');

const request = supertest(app);


beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Auth Routes', (()=> {

  test('allow for user signup', async () =>{
    const response = await request.post('/signup').send({
      username: 'kao',
      password: 'pass',
    });
    
    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('kao');
  });
  

}));