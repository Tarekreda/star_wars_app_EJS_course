var moviesjson=require('../movies.json');


exports.home = function(req,res){
    var movies =moviesjson.movies;

    res.render('home',{
        title:'star wars movies',
        movies : movies ,
    });
};
//movie_single
exports.movie_single = function(req,res){
    var movies =moviesjson.movies;
    var episode_number =req.params.episode_number;

    if (episode_number>0 & episode_number<7 ){


        episode_number=episode_number-1;
        res.render('movie_single' ,{
            movies : movies ,
            title:movies[episode_number].title,
            movie:movies[episode_number],
            main_characters:movies[episode_number].main_characters
        });
    }else {
    res.render('notfound',{
        movies:movies,
        title:"this is not the page you are looking for"
    });
    }
};
//not found

exports.notfound = function(req,res){
    var movies =moviesjson.movies;
    res.render('notfound',{
        movies : movies ,
        title:"this is not the page you are looking for"
    });
};
