module.exports = {
  getBins: (req, res) => {
    let db = req.app.get('db');
    db.getBins([req.params.shelf])
      .then((bins) => {
        res.status(200).send(bins)
      })
      .catch((err) => res.status(500).send(err))
  },
  getBin: (req, res) => {
    const db = req.app.get('db');
    db.getBin([req.params.shelf, req.params.bin])
      .then((bin) => res.status(200).send(bin))
      .catch(() => res.status(500).send())
  },
  updateBin: (req, res) => {
    const db = req.app.get('db');
    var { Name, Price, ImageURL } = req.body;
    db.updateBin([req.params.shelf, req.params.bin, Name, Price, ImageURL])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send())
  },
  createBin: (req, res) => {
    const db = req.app.get('db');
    var { Name, Price, ImageURL } = req.body;
    db.createBin([req.params.shelf, req.params.bin, Name, Price, ImageURL])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send())
  },
  deleteBin: (req, res) => {
    const db = req.app.get('db');
    db.deleteBin([req.params.shelf, req.params.bin])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send())
  }
}