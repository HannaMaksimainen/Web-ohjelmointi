const db = require("../config/db");

class Post {
  // luodaan uusi Post, joten menee title ja body
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  // Asyncrominen ratkaisu
  async save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let createdDate = `${yyyy}-${mm}-${dd}`;
    let sql = `INSERT INTO posts(title,body,created_at) VALUES('${this.title}', '${this.body}', '${createdDate}')`;

    const [newPost, _] = await db.execute(sql);
    return newPost;
  }

  // Staattinen ratkaisu
  static findAll() {
    let sql = "SELECT * FROM posts;";
    return db.execute(sql);
  }

  // ID:n perusteella haetaan ID
  static findById(id) {
    let sql = `SELECT * FROM posts WHERE id=${id}`; // upotetaan parametri
    return db.execute(sql);
  }

  // PUT eli päivitys, päivitetään id:n perusteella title ja body
  static updateById(id, title, body) {
    //UPDATE posts SET title='jotainjotain' WHERE id=15;
    let sql = `UPDATE posts SET title='${title}' , body='${body}' WHERE id=${id}`;
    return db.execute(sql);
  }

  // DELETE eli poisto ID:n perusteella
  static removeId(id) {
    let sql = `DELETE FROM posts WHERE id=${id} `; // upotetaan parametri
    return db.execute(sql);
  }
}
// Tiedosto näkyy ulkopuolelle tämän avulla
module.exports = Post;
