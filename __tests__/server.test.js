'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);
const { sequelizeDatabase.sync } = require('../src/auth/models');
const { DESCRIBE } = require('sequelize/types/query-types');
const { TestScheduler } = require('jest');

beforeAll(async () => {
    await sequelizeDatabase.drop();
});

afterAll(async () => {
    await sequelizeDatabase.drop();
});

describe('Server', () => {

    test('404 on bad route', async () => {
        const response = await mockRequest.get('/foo');
        expect(response.status).toEqual(404);
    });

    test('404 on bad method', async () => {
        const response = await mockRequest.post('/');
        expect(response.status).toEqual(404);

    });

});