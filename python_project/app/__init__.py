from flask import Flask
from flask_cors import CORS
from .routes import main  # Importa o blueprint das rotas

def create_app():
    app = Flask(__name__)

    # Configura o CORS
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:4200"}})

    # Registra o blueprint
    app.register_blueprint(main)

    return app
