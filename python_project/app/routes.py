from flask import Blueprint, jsonify, request, session
from .services import dataManipulation, usuarios


# Cria um blueprint
main = Blueprint('main', __name__)


# Rota inicial
@main.route('/')
def index():
    return 'Rotas disponíveis: /api/intervalos; /api/intervalos/<string:nome>'


@main.route('/api/intervalos/idade', methods=['GET'])
def get_intervalos_teste():

    dados = dataManipulation.carregar_dados()
    # Obtem a contagem de intervalos de idade

    intervalos = dataManipulation.contar_intervalos(dados)
    media_geral = dataManipulation.calcular_media_idade(dados)

    # dados_json = intervalos.to_dict()

    media_geral_json = {'media_geral': media_geral}
    return jsonify(intervalos)


@main.route('/api/intervalos/idade/media', methods=['GET'])
def get_media_geral():

    dados = dataManipulation.carregar_dados()
    media_geral = dataManipulation.calcular_media_idade(dados)
   

    media_geral_json = {'media_geral': media_geral}
    return jsonify(media_geral_json)


@main.route('/api/login', methods=['POST'])
def login():
    try:
        # Obtém os dados JSON da requisição
        dados = request.json

        # Verifica se os campos necessários estão presentes
        if not dados or 'nome' not in dados or 'senha' not in dados:
            return jsonify({'mensagem': 'Dados incompletos'}), 400

        username = dados['nome']
        password = dados['senha']

        # Cria um objeto Usuario com os dados fornecidos
        usuario = usuarios.Usuario(username, password)

        # Verifica se o usuário é válido
        if usuarios.verificar_usuario(usuario):
            session['usuario'] = usuario.nome
            return jsonify({'mensagem': 'Usuário autenticado'}), 200
        else:
            return jsonify({'mensagem': 'Usuário não autenticado'}), 401
    except Exception as e:
        # Loga o erro para depuração
        print(f'Erro no login: {e}')
        return jsonify({'mensagem': 'Erro interno no servidor'}), 500

# @main.rout('/api/genero', methods=['GET'])

@main.route('/api/intervalos/universidade', methods=['GET'])
def get_universidades():
    dados = dataManipulation.carregar_dados()
    universidades = dataManipulation.contar_universidades(dados)
    return jsonify(universidades)

@main.route('/api/intervalos/idade/amplitude', methods=['GET'])
def obter_amplitude_idade():
    dados = dataManipulation.carregar_dados()
    amplitude = dataManipulation.obter_amplitude_idade(dados)
    print(amplitude)
    
    return jsonify(amplitude)
