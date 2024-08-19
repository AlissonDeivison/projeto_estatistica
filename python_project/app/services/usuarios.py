import json

class Usuario:
    def __init__(self, login, senha):
        self.nome = login
        self.senha = senha

def carregar_usuarios():
    with open('data/user.json', 'r') as arquivo:
        usuarios = json.load(arquivo)
    return usuarios

def verificar_usuario(usuario):
    usuarios = carregar_usuarios()
    for u in usuarios:
        if u['login'] == usuario.nome and u['senha'] == usuario.senha:
            return True
        else:
            return False