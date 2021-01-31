module.exports = {
    //also optional msg argument for error log
    errorHandler: (err, res) => {
        if (err) {
            console.log(err)
            if (res !== undefined) {
                res.status(409).send({
                    error: 'error'
                })
            }
        }
    }
}