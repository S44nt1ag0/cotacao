const webservice = require("./service")

const home = (req, res) => {
    res.send({api: "1.0.1", dev:"Santiago", status: "working"})
}

const cotacao = async(req, res) => {
    let dados_api = await webservice.api()
    
    if(dados_api === 0){
        res.send({error:true, msg:"erro interno"})
        return
    }

    res.send({dados_api})

}

module.exports = {
    home,
    cotacao
}