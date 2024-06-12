const request = require('supertest');
const express = require('express');
const app = require('../app');
const mongoose = require('mongoose');
const Appointment = require('../models/appointmentModel');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost/furfluffespa_test', { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Appointment Controller Test', () => {
  it('should create a new appointment', async () => {
    const response = await request(app)
      .post('/appointments')
      .send({
        serviceId: '60d0fe4f5311236168a109ca',
        userId: '60d0fe4f5311236168a109ca',
        preferredTime: '2022-12-12T12:00:00Z'
      });
    expect(response.status).toBe(201);
    expect(response.body._id).toBeDefined();
    expect(response.body.serviceId).toBe('60d0fe4f5311236168a109ca');
  });

  it('should fail to create a new appointment without required fields', async () => {
    const response = await request(app).post('/appointments').send({});
    expect(response.status).toBe(400);
  });

  it('should get all appointments', async () => {
    const response = await request(app).get('/appointments');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
