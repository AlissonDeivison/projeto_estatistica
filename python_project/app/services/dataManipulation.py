import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

#Função de carrega os dados do arquivo CSV
def carregar_dados():
    return pd.read_csv('data/data.csv')


#Função para carregar a média de um intervalo
def calcular_media_intervalo(intervalo):
    if '-' in intervalo:
        minimo, maximo = map(int, intervalo.split('-'))
        return (minimo + maximo+1) / 2
    else:
        # Retorna None para intervalos que não devem ser considerados
        return None

#Função para gerar o gráfico
def gerar_grafico(contagem_intervalos):
    # Cria um gráfico de barras para a contagem dos intervalos usando Seaborn
    plt.figure(figsize=(10, 6))
    sns.barplot(x=contagem_intervalos.index,
                y=contagem_intervalos.values, palette='coolwarm')
    plt.title('Contagem de Intervalos de Idade')
    plt.xlabel('Intervalo de Idade')
    plt.ylabel('Número de Entradas')
    plt.xticks(rotation=45)
    plt.grid(axis='y', linestyle='--', alpha=0.7)
    plt.tight_layout()
    plt.show()

#Função para exibir os resultados
def exibir_resultados(resultado):
    print(resultado)

#Função para contar os intervalos, filtrando apenas os intervalos válidos
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


#Função para calcular a média geral das idades
def calcular_media_idade(dados):
    # Aplica a função calcular_media_intervalo para cada valor na coluna '1. Age'
    dados['Media Idade'] = dados['1. Age'].apply(calcular_media_intervalo)
    # Filtra apenas os valores não nulos
    dados_filtrados = dados.dropna(subset=['Media Idade'])
    # Calcula a média geral das idades, ignorando valores nulos
    media_geral = dados_filtrados['Media Idade'].mean()
    return media_geral
