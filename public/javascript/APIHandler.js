class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }
  getFullList(cb) {
    axios
      .get(`${this.BASE_URL}`)
      .then(response => {
        cb(response);
      })
      .catch(err => {
        cb({ error: err });
      });
  }

  getOneRegister(charId, cb) {
    axios
      .get(`${this.BASE_URL}/${charId}`)
      .then(response => {
        cb(response);
      })
      .catch(err => {
        cb({ error: err });
      });
  }

  createOneRegister(char, cb) {
    axios
      .post(`${this.BASE_URL}`, char)
      .then(response => {
        cb(response);
      })
      .catch(err => {
        cb({ error: err });
      });
  }

  updateOneRegister(charId, char, cb) {
    axios
      .put(`${this.BASE_URL}/${charId}`, char)
      .then(response => {
        cb(response);
      })
      .catch(err => {
        cb({ error: err });
      });
  }

  deleteOneRegister(charId, cb) {
    axios
      .delete(`${this.BASE_URL}/${charId}`)
      .then(response => {
        cb(response);
      })
      .catch(err => {
        cb({ error: err });
      });
  }
}
