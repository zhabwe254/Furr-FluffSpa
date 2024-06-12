import unittest
from models.pet_model import Pet

class TestPetModel(unittest.TestCase):
    def test_pet_init(self):
        pet = Pet(name="Fido", species="Dog", age=3)
        self.assertEqual(pet.name, "Fido")
        self.assertEqual(pet.species, "Dog")
        self.assertEqual(pet.age, 3)

    def test_pet_str(self):
        pet = Pet(name="Fido", species="Dog", age=3)
        self.assertEqual(str(pet), "Fido (Dog, 3 years old)")

if __name__ == "__main__":
    unittest.main()
