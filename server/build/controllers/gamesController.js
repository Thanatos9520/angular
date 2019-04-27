"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GamesController {
    list(req, res) {
        res.json('listing games');
    }
    getOne(req, res) {
        res.json({ text: 'This is game' + req.params.id });
    }
    create(req, res) {
        console.log(req.body);
        res.json({ text: 'creating game' });
    }
    update(req, res) {
        res.json({ text: 'updating a game' + req.params.id });
    }
    delete(req, res) {
        res.json({ text: 'deleting a game' + req.params.id });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
