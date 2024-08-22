import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Função de carrega os dados do arquivo CSV


def carregar_dados():
    return pd.read_csv('data/data.csv')
# Função para carregar a média de um intervalo
def calcular_media_intervalo(intervalo):
    if '-' in intervalo:
        minimo, maximo = map(int, intervalo.split('-'))
        return (minimo + maximo+1) / 2
# Função para contar os intervalos, filtrando apenas os intervalos válidos
def contar_intervalos(dados):
    # Filtra apenas os intervalos válidos (aqueles que contêm '-')
    intervalos_validos = dados['1. Age'].loc[dados['1. Age'].str.contains('-')]

    # Conta o número de itens em cada intervalo
    contagem_intervalos = intervalos_validos.value_counts()

    # Lista para armazenar os intervalos formatados
    intervalos_formatados = []

    for intervalo, total_de_itens in contagem_intervalos.items():
        # Extrai os limites inferior e superior
        if intervalo != 'Below 18' and intervalo != 'Above 30':  # Ignorar "Below 18" e "Above 30"
            limite_inferior, limite_superior = map(int, intervalo.split('-'))
        else:
            # Defina limites padrão para "Below 18" e "Above 30" se necessário
            if intervalo == 'Below 18':
                limite_inferior, limite_superior = 0, 17
            elif intervalo == 'Above 30':
                limite_inferior, limite_superior = 31, 100

        # Adiciona o intervalo formatado à lista
        intervalos_formatados.append({
            'intervalo': intervalo,
            'limiteInferior': limite_inferior,
            'limiteSuperior': limite_superior,
            'totalDeItens': total_de_itens
        })

    return intervalos_formatados
# Função para calcular a média geral das idades
def calcular_media_idade(dados):
    # Aplica a função calcular_media_intervalo para cada valor na coluna '1. Age'
    dados['Media Idade'] = dados['1. Age'].apply(calcular_media_intervalo)
    # Filtra apenas os valores não nulos
    dados_filtrados = dados.dropna(subset=['Media Idade'])
    # Calcula a média geral das idades, ignorando valores nulos
    media_geral = dados_filtrados['Media Idade'].mean()
    return int(media_geral)

def intrevistados_por_universidade(dados):
    # Conta o número de itens em cada universidade
    contagem_universidades = dados['3. University'].value_counts()
    # Lista para armazenar as universidades formatadas
    universidades_formatadas = []
    for universidade, total_de_itens in contagem_universidades.items():
        # Adiciona a universidade formatada à lista
        universidades_formatadas.append({
            'universidade': universidade,
            'totalDeItens': total_de_itens
        })
    return universidades_formatadas

def obter_numero_de_universidades(dados):
    numero = {'numero_de_universidades': dados['3. University'].nunique()}
    return numero

def obter_amplitude_idade(dados):
    # Verifica as strings de intervalo de idade, transforma em número e retorna o valor mínimo e máximo
    intervalos = dados['1. Age'].str.split('-', expand=True)
    intervalos = intervalos.apply(pd.to_numeric)

    minimo = int(intervalos.min().min())
    maximo = int(intervalos.max().max()+1)
    amplitude = {'minimo': minimo, 'maximo': maximo,
                 'amplitude': maximo - minimo}
    return amplitude

def media_aritmetica_universidade(dados):
    valores = intrevistados_por_universidade(dados)
    soma = 0
    for valor in valores:
        soma += valor['totalDeItens']

    numeroDeUniversidades = obter_numero_de_universidades(
        dados)['numero_de_universidades']

    media = soma / numeroDeUniversidades
    # Retornar apenas o valor inteiro
    return {'media': int(media)}

def separarPorGenero(dados):
    # Filtra os dados por genero
    homens = 0
    mulheres = 0
    outros = 0
    for i in dados:
        if i == '2. Gender':
            # Filtra os dados por genero
            genero = dados[i]
            for i in genero:
                if i == 'Male':
                    homens += 1
                elif i == 'Female':
                    mulheres += 1
                else:
                    outros += 1
    return {'homens': homens, 'mulheres': mulheres, 'outros': outros}

def popular_tabela(dados):
    # Filtra os dados por genero
    classes = contar_intervalos(dados)
    # desvio = calcular_media_idade(dados) - classes['ponto_medio']
    return {'classes': classes}
    
def obter_classe_modal(dados):
    classes = popular_tabela(dados)['classes']
    classe_modal = max(classes, key=lambda x: x['totalDeItens'])
    return {'classe_modal': classe_modal}

    
def obter_moda(dados):
    classe_modal = obter_classe_modal(dados)
    limite_inferior = classe_modal['classe_modal']['limiteInferior']
    limite_superior = classe_modal['classe_modal']['limiteSuperior']
    moda = (limite_inferior + limite_superior) / 2
    return {'moda': moda}

def obter_mediana(dados):
    #Intervalos:
    intervalos = contar_intervalos(dados)
    #Número total de itens
    n = sum([intervalo['totalDeItens'] for intervalo in intervalos])
    #Posição da mediana
    posicao_mediana = n / 2
    #Classe mediana:
    
    for intervalo in intervalos:
        if posicao_mediana <= intervalo['totalDeItens']:
            classe_mediana = intervalo
            break
        else:
            posicao_mediana -= intervalo['totalDeItens']
    #Limites da classe mediana
    limite_inferior = classe_mediana['limiteInferior']
    limite_superior = classe_mediana['limiteSuperior']
    itens_da_classe = classe_mediana['totalDeItens']
    intervalo = limite_superior + 1  - limite_inferior
    frequencia_anterior = sum([intervalo['totalDeItens'] for intervalo in intervalos if intervalo['limiteInferior'] < limite_inferior])
    
    mediana = limite_inferior + ((posicao_mediana - frequencia_anterior) * intervalo ) / itens_da_classe
    mediana = round(mediana, 2)
    
    return {'mediana': posicao_mediana, 'limite_inferior': limite_inferior, 'itens_da_classe': itens_da_classe, 'intervalo': intervalo, 'frequencia_anterior': frequencia_anterior, 'mediana': mediana}