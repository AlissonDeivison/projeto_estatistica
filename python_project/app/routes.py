from flask import Blueprint, jsonify
from .services import dataManipulation

# Cria um blueprint
main = Blueprint('main', __name__)


# Rota inicial
@main.route('/')
def index():
    return 'Rotas disponíveis: /api/intervalos; /api/intervalos/<string:nome>'


# Define uma rota para /api/intervalos
@main.route('/api/intervalos', methods=['GET'])
def get_intervalos():
    # Simula um dicionário de intervalos
    dados = [{'nome': '0-10'}, {'nome': '11-20'}, {'nome': '21-30'}, {'nome': '31-40'}, {'nome': '41-50'},
        {'nome': '51-60'}, {'nome': '61-70'}, {'nome': '71-80'}, {'nome': '81-90'}, {'nome': '91-100'}]
    return jsonify(dados)


@main.route('/api/intervalos/idade', methods=['GET'])
def get_intervalos_teste():
    
    dados = dataManipulation.carregar_dados()
    #Obtem a contagem de intervalos de idade
    
    intervalos = dataManipulation.contar_intervalos(dados)
    media_geral = dataManipulation.calcular_media_idade(dados)
    
    # dados_json = intervalos.to_dict()
    
    media_geral_json = {'media_geral': media_geral}
    return jsonify(intervalos)
    