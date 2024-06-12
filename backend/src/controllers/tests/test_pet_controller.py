import unittest
from controllers.pet_controller import PetController
from services.pet_service import PetService
from models.pet_model import Pet

class TestPetController(unittest.TestCase):
    def test_get_all_pets(self):
        pet_controller = PetController(PetService())
        response = pet_controller.get_all_pets()
        self.assertIsInstance(response, list)
        self.assertEqual(len(response), 0)  # initially, the list should be empty

    def test_create_pet(self):
        pet_controller = PetController(PetService())
        pet_data = {"name": "Fido", "species": "Dog", "age": 3}
        response = pet_controller.create_pet(pet_data)
        self.assertEqual(response.status_code, 201)
        self.assertIsInstance(response.data, Pet)

    def test_get_pet_by_id(self):
        pet_controller = PetController(PetService())
        pet_data = {"name": "Fido", "species": "Dog", "age": 3}
        pet_controller.create_pet(pet_data)
        pet_id = pet_data["id"]
        response = pet_controller.get_pet_by_id(pet_id)
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.data, Pet)

if __name__ == "__main__":
    unittest.main()
