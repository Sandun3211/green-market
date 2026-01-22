from flask import Flask
from flask_cors import CORS
from flaskext.mysql import MySQL
from flask import Flask, jsonify, request


# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Allow frontend requests

# MySQL config
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = '123Lasindu@'
app.config['MYSQL_DATABASE_DB'] = 'green_market'

# Initialize MySQL
mysql = MySQL()
mysql.init_app(app)

# Home route
@app.route('/')
def home():
    return "Green Market Python Backend Running"

# -------------------------
# Products API
# -------------------------

# GET all products
@app.route('/products', methods=['GET'])
def get_products():
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM products")
    data = cursor.fetchall()
    conn.close()

    # Convert tuple to list of dicts
    result = []
    for row in data:
        result.append({
            "id": row[0],
            "name": row[1],
            "price": float(row[2]),
            "quantity": row[3]
        })
    return result

# POST add new product
@app.route('/products', methods=['POST'])
def add_product():
    new_product = request.json
    name = new_product['name']
    price = new_product['price']
    quantity = new_product['quantity']

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO products (name, price, quantity) VALUES (%s, %s, %s)",
        (name, price, quantity)
    )
    conn.commit()
    conn.close()
    return {"message": "Product added successfully"}, 201

# PUT update product
@app.route('/products/<int:id>', methods=['PUT'])
def update_product(id):
    updated_product = request.json
    name = updated_product['name']
    price = updated_product['price']
    quantity = updated_product['quantity']

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(
        "UPDATE products SET name=%s, price=%s, quantity=%s WHERE id=%s",
        (name, price, quantity, id)
    )
    conn.commit()
    conn.close()
    return {"message": "Product updated successfully"}

# DELETE product
@app.route('/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM products WHERE id=%s", (id,))
    conn.commit()
    conn.close()
    return {"message": "Product deleted successfully"}

# -------------------------
# Run app
# -------------------------
if __name__ == '__main__':
    app.run(debug=True)
