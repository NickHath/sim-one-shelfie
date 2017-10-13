module.exports = {
  getBins: (req, res) => {
    console.log(req.params.shelf)
    let db = req.app.get('db');
    db.getBins([req.params.shelf])
      .then((bins) => {
        res.status(200).send(bins)
      })
      .catch((err) => res.status(500).send(err))
  },
  getBin: (req, res) => {
    const db = req.app.get('db');
    db.getBin([req.query.shelf, req.query.id])
      .then((bin) => res.status(200).send(bin))
      .catch(() => res.status(500).send())
  },
  updateBin: (req, res) => {
    const db = req.app.get('db');
    var { Name, Price, ImageURL } = req.body;
    db.updateBin([req.query.shelf, req.query.shelf, Name, Price, ImageURL])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send())
  },
  createBin: (req, res) => {
    const db = req.app.get('db');
    var { Name, Price, ImageURL } = req.body;
    db.createBin([req.query.shelf, Name, Price, ImageURL])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send())
  },
  deleteBin: (req, res) => {
    const db = req.app.get('db');
    db.deleteBin([req.query.table, req.query.id])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send())
  }
}