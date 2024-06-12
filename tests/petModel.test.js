const mongoose = require('mongoose');
const Pet = require('../models/petModel');

describe('Pet Model Test', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/furfluffespa_test', { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create & save a pet successfully', async () => {
    const petData = { name: 'Fido', species: 'Dog', age: 3, userId: '60d0fe4f5311236168a109ca' };
    const validPet = new Pet(petData);
    const savedPet = await validPet.save();

    expect(savedPet._id).toBeDefined();
    expect(savedPet.name).toBe(petData.name);
    expect(savedPet.species).toBe(petData.species);
    expect(savedPet.age).toBe(petData.age);
  });

  it('should fail to create pet without required fields', async () => {
    const petWithoutRequiredField = new Pet({ name: 'Fido' });
    let err;
    try {
      await petWithoutRequiredField.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.species).toBeDefined();
  });
});
