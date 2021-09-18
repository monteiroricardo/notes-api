const db = require('../../config/data_base');

module.exports = {

  getAllNotes: async () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM notes', (error, results) => {
        if (error) { reject(error); return; }
        resolve(results);
      });
    });
  },

  getNoteById: (id) => {
    return new Promise((resolve, reject) => {

      db.query('SELECT * FROM notes WHERE id = ?', [id], (error, results) => {
        if (error) { reject(error); return; }
        if (results.length > 0) {
          resolve(results[0]);
        }
        else {
          resolve(false);
        }
        resolve
      });

    });
  },

  add: (title, body) => {
    return new Promise((resolve, reject) => {

      db.query('INSERT INTO notes (title, body) VALUES (?, ?)',
        [title, body],
        (error, results) => {
          if (error) { reject(error); return; }
          resolve(results.insertId);
        }
      );

    });
  },
  update: (id, title, body) => {
    return new Promise((resolve, reject) => {

      db.query('UPDATE notes SET title = ?, body = ? WHERE id = ?',
        [title, body, id],
        (error, results) => {
          if (error) { reject(error); return; }
          resolve(results);
        }
      );

    });
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {

      db.query('DELETE FROM notes WHERE id = ?', [id],
        (error, results) => {
          if (error) { reject(error); return; }
          resolve(results);
        }
      );

    });
  },
}
