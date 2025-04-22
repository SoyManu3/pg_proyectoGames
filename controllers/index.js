
const { where } = require("sequelize");
const models =  require("../database/models");

const  createGame  = async (req,  res)  =>  {
   console.log('creating game');

   try {
      const game = await models.VideoJuegos.create(req.body);
      
      return res.status(201).json( { game });
   }
   catch  (error) {
      return res.status(500).send ( { error: error.message  } );
   }

};

const  deleteGame  = async (req,  res)  =>  {
   console.log('deleting game...');

   try {
      const game = await models.VideoJuegos.findOne({ where: { id: req.params.id } });
      if (game) {
	  console.log(game);
          await game.destroy();
      } 
      else {
         return res.status(200).json( { "error ": req.params.id  +  " no existe"});
      } 
      return res.status(200).json( { "deleted ": req.params.id });
   }
   catch  (error) {
      return res.status(500).send ( { error: error.message  } );
   }

};

const updateGame  = async (req,  res)  =>  {
   console.log('updating game...');

   try {
      const game = await models.VideoJuegos.findOne({ where: { id: req.params.id } });
      if (game) {
	  console.log(game);
          game.name = req.body.name;
          game.launch_year = req.body.launch_year;
          game.platforms = req.body.platforms;
          game.genre = req.body.genre;
	  game.developers = req.body.developers;
	  game.modes = req.body.modes;
          await game.save();
      }
      else {
         return res.status(200).json( { "error ": req.params.id  +  " no existe"});
      }

      return res.status(200).json( { "updated ": game });
   }
   catch  (error) {
      return res.status(500).send ( { error: error.message  } );
   }

};




const  getAllGames  = async (req,  res)  =>  {
   console.log('getting games');

   try {
      const games = await models.VideoJuegos.findAll({
         include: []
      });
      
      return res.status(200).json( { games });
   }
   catch  (error) {
      return res.status(500).send ( error.message);
   }

};

const  getByIdGame  = async (req,  res)  =>  {
   console.log('getting game');

   try {
      const game = await models.VideoJuegos.findOne({where:{id: req.params.id}} )
      if (!game) {
         return res.status(404).json({ error: `No se encontró el juego con id ${req.params.id}` });
       }
      
      return res.status(200).json( { game });
   }
   catch  (error) {
      return res.status(500).send ( error.message);
   }

};

module.exports = {
  createGame,
  getAllGames,
  deleteGame,
  updateGame,
  getByIdGame
};


