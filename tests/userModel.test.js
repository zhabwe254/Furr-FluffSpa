const mongoose = require('mongoose');
const User = require('../models/userModel');

describe('User Model Test', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/furfluffespa_test', { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create & save a user successfully', async () => {
    const userData = { username: 'testuser', password: 'testpass' };
    const validUser = new User(userData);
    const savedUser = await validUser.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.username).toBe(userData.username);
    expect(savedUser.password).toBe(userData.password);
  });

  it('should fail to create user without required fields', async () => {
    const userWithoutRequiredField = new User({ username: 'testuser' });
    let err;
    try {
      await userWithoutRequiredField.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.password).toBeDefined();
  });
});
