from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///furrfluffspa.db"
db = SQLAlchemy(app)

class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    species = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {"id": self.id, "name": self.name, "species": self.species, "age": self.age}

@app.route('/pets', methods=['GET'])
def get_pets():
    pets = Pet.query.all()
    return jsonify([pet.to_dict() for pet in pets])

@app.route('/pets', methods=['POST'])
def create_pet():
    data = request.get_json()
    pet = Pet(name=data["name"], species=data["species"], age=data["age"])
    db.session.add(pet)
    db.session.commit()
    return jsonify({"message": "Pet created successfully"})

@app.route('/pets/<int:pet_id>', methods=['GET'])
def get_pet(pet_id):
    pet = Pet.query.get(pet_id)
    if pet is None:
        return jsonify({"message": "Pet not found"}), 404
    return jsonify(pet.to_dict())

@app.route('/pets/<int:pet_id>', methods=['PUT'])
def update_pet(pet_id):
    pet = Pet.query.get(pet_id)
    if pet is None:
        return jsonify({"message": "Pet not found"}), 404
    data = request.get_json()
    pet.name = data["name"]
    pet.species = data["species"]
    pet.age = data["age"]
    db.session.commit()
    return jsonify({"message": "Pet updated successfully"})

@app.route('/pets/<int:pet_id>', methods=['DELETE'])
def delete_pet(pet_id):
    pet = Pet.query.get(pet_id)
    if pet is None:
        return jsonify({"message": "Pet not found"}), 404
    db.session.delete(pet)
    db.session.commit()
    return jsonify({"message": "Pet deleted successfully"})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
