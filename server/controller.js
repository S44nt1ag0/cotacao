
const home = (req, res) => {
    res.send({api: "1.0.1", dev:"Santiago", status: "working"})
}

module.exports = {
    home
}