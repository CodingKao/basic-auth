'use strict';

// tests made for lab 06, may need to be updated for today's lab 5/23

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
      username: 'Reece',
      password: 'pass',
    });
    
    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('Reece');
  });
  
  //TODO: Auth string is needed for set method on line 34. that will be given by the bcrypt
  // test('allow for user signin', async () =>{
  //   const response = (await request.post('/signin')).set('Authorization', 'Basic  ');
    

  //   expect(response.status).toEqual(200);
  //   expect(response.body.username).toEqual('Reece');
  // });

}));