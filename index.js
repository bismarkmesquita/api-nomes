import axios from 'axios'
import * as https from 'https'

// Cria uma instância do agente HTTPS com a opção rejectUnauthorized como false
const agent = new https.Agent({
    rejectUnauthorized: false
})

// Função para fazer a requisição à API
async function consultaApiNomes() {
    try {
        let nome = 'Alan'
        // Faz a requisição GET à API
        const response = await axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`, { httpsAgent: agent })

        // Obtém os dados da resposta
        const dados = response.data[0].res

        // Para cada item (período de anos com frequencia de nomes) salva a frequencia de nomes.
        let frequenciaDeNomes
        for (let item in dados) {
            frequenciaDeNomes = dados[item].frequencia

            //console.log(frequenciaDeNomes)
        }
        
        if (frequenciaDeNomes !== 0) {
            console.log("Nome encontrado")
        }

    } catch (error) {
        // Trata erros da requisição
        console.log('Nome não encontrado')
    }
}

consultaApiNomes()