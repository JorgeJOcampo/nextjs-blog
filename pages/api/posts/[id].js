export default (req, res) => {
    const {
      query: { id },
    } = req
  
    res.send({id: `${id}`})
  }