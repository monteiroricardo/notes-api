const db_service = require('../services/db_service');

module.exports = {
  notes: async (req, res) => {
    let json = { error: '', result: [] };

    let notes = await db_service.getAllNotes();


    for (let i in notes) {
      json.result.push({
        id: notes[i].id,
        title: notes[i].title,
      })
    }

    return res.json(json);
  },
  note: async (req, res) => {

    let json = { error: '', result: {} };
    let id = req.params.id;
    let note = await db_service.getNoteById(id);

    if (note) {
      json.result = note;
    }


    res.json(json);
  },
  new: async (req, res) => {
    let json = { status: '', result: {} };

    let title = req.body.title;
    let content = req.body.content;

    if (title && content) {

      let noteId = await db_service.add(title, content);
      json.status = 'success';
      json.result = {
        id: noteId,
        title,
        content
      };

    } else {

      json.status = 'error';
    }

    res.json(json);
  },
  update: async (req, res) => {
    let json = { status: '', result: {} };

    let id = req.params.id;
    let title = req.body.title;
    let content = req.body.content;

    if (id && title && content) {

      await db_service.update(id, title, content);

      json.status = 'success';

      json.result = {
        id,
        title,
        content
      };

    } else {

      json.status = 'error';
    }

    res.json(json);
  },
  delete: async (req, res) => {
    let json = { status: '', result: {} };

    try {
      await db_service.delete(req.params.id);
      json.status = 'success';
    } catch (error) {
      json.status = 'error';
    }

    res.json(json);
  }
}



