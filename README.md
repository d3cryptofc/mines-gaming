<p align="center">
  <b>💣 Mines 💣</b>
  <br>
  A simple mines game, but a little bit different.
  <br><br>
  <img src="https://i.imgur.com/ye0mu6y.gif" width="500">
</p>

---

### 📚 Objective & Rules

1. You must accumulate points.
2. Be careful with greed in each match.
3. When clicking on a bomb, the points earned will be removed and you will still lose the same amount of the match.

---

### 🎮 How to run it?

- Poetry (without docker)

  ```bash
  poetry install
  poetry run gunicorn app:app -k gevent
  ```

- Docker

  From public registry:

  ```
  docker run -p 8000:8000 d3cryptofc/mines:1.0.0
  ```

  Build the image yourself (advanced users):
  ```
  docker build -t d3cryptofc/mines .
  docker run -p 8000:8000 d3cryptofc/mines
  ```
