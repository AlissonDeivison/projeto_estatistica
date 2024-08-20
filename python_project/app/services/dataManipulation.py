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
    else:
        # Retorna None para intervalos que não devem ser considerados
        return None


# Função para exibir os resultados
def exibir_resultados(resultado):
    print(resultado)

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
    return media_geral.round(2)

# Função para calcular a % do genero dos intrevistados
# def calcular_percentual_genero(dados):


def contar_universidades(dados):
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


def obter_amplitude_idade(dados):
    # Verifica as strings de intervalo de idade, transforma em número e retorna o valor mínimo e máximo
    intervalos = dados['1. Age'].str.split('-', expand=True)
    intervalos = intervalos.apply(pd.to_numeric)

    minimo = int(intervalos.min().min())
    maximo = int(intervalos.max().max())
    amplitude = {'minimo': minimo, 'maximo': maximo, 'amplitude': maximo - minimo}
    return amplitude
