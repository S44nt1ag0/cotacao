const axios = require("axios");

const dataAtual = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
};

const formatarReal = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 3, maximumFractionDigits: 3 });
};

const api = async () => {
    try {

        const primeira_api = await axios.get("https://economia.awesomeapi.com.br/json/last/USD-BRL");
        const segunda_api = await axios.get(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${dataAtual()}%27&$format=json`);
        
        if(!primeira_api || !segunda_api){
            return 0
        }

        const { bid } = primeira_api.data.USDBRL;
        const { cotacaoCompra } = segunda_api.data.value[0];

        if(!bid || !cotacaoCompra){
            return 0
        }

        return retorno = {
            data: {
                api_awesomeapi: formatarReal(parseFloat(bid)),
                api_bcb:formatarReal(cotacaoCompra)
            }
        }

    } catch (error) {
        return 0
    }
}

module.exports = {api}