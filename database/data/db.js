const faker = require("faker");//require fake data
const mongoose = require("mongoose");
const config = require("../config/keys.js");// require 
const Schema = mongoose.Schema;

const uri = process.env.mongoURI || config.mongoURI;
mongoose.connect(uri, {useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true})
  .catch(error => console.log("error"));

const { connection } = mongoose;

connection.once("open", () => {
  console.log("connected");
});

//--------------Home Page schema -----------

const HomeSchema  = Schema({
 id: {
      type: Number,
      required: true
  },
  img_url: {
      type: String,
      required: true
  }
});
const Home = mongoose.model('home', HomeSchema);






//--------------Auther db schema-----------
const AutherSchema  = Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const Auther = mongoose.model('auther', AutherSchema);



//--------------Article db schema-------------
const ArticleSchema = Schema({
    auth_id: {
        type: Number,
        required: true
    },

    title: {
        type: String,
        required: true
    },
    sammary: {
        type: String,
        required: true
    },
    img_url: {
        type: String
    },
    body: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const Article = mongoose.model('article', ArticleSchema);

//------------------Next topics db schema------------
// const NextTopic = Schema({
//     title: {
//         type: String,
//         require: true
//     },
//     title_url: {
//         type: String,
//         require: true
//     }
// })
// const Topic = mongoose.model('topic', NextTopic);

//---------------------deal Schema---------------------
var dealSchema = mongoose.Schema({
    img_url: {type: String, trim:true, unique: true},
    title: {type: String, trim:true, unique: true}
  });
  
var Deal = mongoose.model('Deal', dealSchema)


//----------------------comment Schema--------------------

const commentSchema = Schema({
	postId: {
		type: Number
	},
  profilePic:{
    type: String
  },
  autherName: {
    type: String
  } ,
  createdAt: {
    type: String
    
  },
  body:{
    type: String
  } 
});
const CommentModel = mongoose.model('comments', commentSchema);


//--------------------------recom Schema---------------

const RecomSchema = mongoose.Schema({
    title: String,
    img_url: String
  });

 const RecomModel =  mongoose.model("articles", RecomSchema);


// -------------------------------------save Authors---------------------------------
// const save = function () {
//   for (var i = 1; i < 100; i ++) {
//     var item = new Auther({
//       id: faker.random.number(),
//       name: faker.name.findName(),
//       password: faker.internet.password(),
//     });
//     item.save();
//   }
//   };
// save();

// ---------------------------------save Articles-----------------------
// const saveArticle = function() {
//     for (let i = 1; i <100; i++) {
//         var article = new Article({
//             auth_id: faker.random.number(),
//             title: faker.lorem.sentence(),
//             sammary: faker.lorem.paragraph(),
//             img_url: faker.image.image(),
//             body: faker.lorem.lines(),
//             topic: faker.lorem.word(),
//             date: faker.date.past()
//         });
//         article.save();
//     }
   
// };
// saveArticle();




// ------------------------------------- save deal ---------------------------------

        // const save = function () {
        // for (var i = 1; i < 100; i ++) {
        //     var item = new Deal({
        //         img_url: faker.image.image(),
        //         title: faker.lorem.sentence()
           
        //     });
        //     item.save();
        // }
        // };
        // save()
// ------------------------------------- save comment ---------------------------------
            // const save = function() {
            //     for (let i = 1; i <100; i++) {
            //         var comment = new CommentModel({
            //             postId: faker.random.number(),
            //             profilePic: faker.image.avatar(),
            //             autherName: faker.name.findName(),
            //             createdAt: faker.date.past(),
            //             body:faker.lorem.lines()
            //         });
            //         comment.save();
            //     }
            
            // };
            // save();



// ------------------------------------- save recom ---------------------------------

// const save = function () {
//         for (var i = 1; i < 100; i ++) {
//             var item = new RecomModel({
//                 title: faker.lorem.sentence(),
//                 img_url: faker.image.image()
                        
//             });
//             item.save();
//             // console.log(item)
//         }
//         };
//         save();



// -------------------------------------save Home---------------------------------
        const save = function () {
          
            var item = new Home({
              id: 6,
              img_url  : "https://cdn.vox-cdn.com/thumbor/lFdp_7i-lOlagoUV6VE9nHtUgaw=/0x0:2048x1152/280x158/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65755159/Samsung_Galaxy_S11_5K_render_1.0.jpg"
            });
            item.save();
          };
         
        save();








module.exports.save = save;
// module.exports.saveArticle= saveArticle;
module.exports.Auther = Auther;
module.exports.Article = Article;
module.exports.Deal = Deal;
module.exports.CommentModel = CommentModel;
module.exports.RecomModel = RecomModel;