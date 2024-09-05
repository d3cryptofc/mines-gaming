<p align="center">
  <b>💎 Mines Gaming 💎</b>
  <br>
  A simple mines game, but a little bit different.
  <br><br>
  <img src="https://img.shields.io/badge/Python%203.11-282C34?style=flat-square&logo=python&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/Flask-282C34?style=flat-square&logo=flask&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/Docker%20(optional)-282C34?style=flat-square&logo=docker&logoColor=61DAFB">
  <br><br>
  <img src="https://i.imgur.com/HVDKlsq.png" width="400">
  <img src="https://i.imgur.com/WFvPbMn.png" width="400">
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
