const { deleteId } = require("../models/Post");
const Post = require("../models/Post");

// Kaikki tiedot asyncronisesti
exports.getAllPosts = async (req, res, next) => {
  // Pyyntö, vastaus, seuraava tms
  try {
    const [posts, _] = await Post.findAll(); // Palauttaa 2-ulotteisen taulun, josta otetaan postit talteen
    res.status(200).json({ count: posts.length, posts }); // Jos kaikki on ok, palautuu 200 json muodossa. Mieti aina tarkasti, että mitä haluat palautettavan!
  } catch (error) {
    // Jos tulee error, annetaan ilmoitus
    console.log(error);
    next(error);
  }
};

// Tiedot ID:n perusteella
exports.getPostById = async (req, res, next) => {
  try {
    let postId = Number(req.params.id); // Tietotyyppi numero, tietueen ID:stä otetaan parametri
    let [post, _] = await Post.findById(postId); // Palauttaa 2-ulotteisen taulun, josta otetaan postit talteen
    res.status(200).json({ post }); // "Palauttaa" postin 1. ilmentymän
  } catch (error) {
    // Jos tulee error, annetaan ilmoitus
    console.log(error);
    next(error);
  }
};

// Post eli tietueen lisäys
exports.createNewPost = async (req, res, next) => {
  try {
    let { title, body } = req.body;
    let post = new Post(title, body); // Tehdään uusi Post, jossa on title ja body
    post = await post.save(); // Tallennetaan
    res.status(201).json({ message: "Post created" }); // Ilmoitetaan käyttäjälle, että uusi tietue on lisätty
  } catch (error) {
    // Jos tulee error, annetaan ilmoitus
    console.log(error);
    next(error);
  }
};

//Put eli Title ja bodyn muokkaus
exports.updatePost = async (req, res, next) => {
  try {
    let postId = Number(req.params.id); // Tietotyyppi numero, tietueen ID:stä otetaan parametri
    let body = req.body;
    await Post.updateById(postId, body.title, body.body);
    res.status(201).json({ message: "Post updated" }); // Ilmoitetaan käyttäjälle, että uusi tiedot on muokattu
  } catch (error) {
    // Jos tulee error, annetaan ilmoitus
    console.log(error);
    next(error);
  }
};

//Delete eli tietueen poisto
exports.deletedById = async (req, res, next) => {
  try {
    let postId = Number(req.params.id); // Tietotyyppi numero, tietueen ID:stä otetaan parametri
    let [post, _] = await Post.removeId(postId); // Palauttaa 2-ulotteisen taulun, josta otetaan postit talteen
    res.status(200).json({ message: "Post deleted" }); // Ilmoitetaan käyttäjälle, että tiedot on poistettu
  } catch (error) {
    // Jos tulee error, annetaan ilmoitus
    console.log(error);
    next(error);
  }
};
