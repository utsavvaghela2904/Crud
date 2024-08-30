// db.collection.replaceOne(
//     <filter>,
//     <replacement>,
//     {
//        upsert: <boolean>,
//        writeConcern: <document>,
//        collation: <document>,
//        hint: <document|string>
//     }
//  )

db.movies.replaceOne({title : "Jurassic World: Fallen Kingdom"},{title: 'RRR',genres: [ 'Action', 'Drama' ],runtime: 187,rated: 'UA',year: 2022,directors: [ 'S. S. Rajamouli' ],cast: [ 'N. T.Rao Jr.', 'Ram Charan', 'Alia Bhatt' ],type: 'movie'},{title: 'Jurassic World: Fallen Kingdom',genres: [ 'Action', 'Sci-Fi' ],runtime: 130,rated: 'PG-13',year: 2018,directors: [ 'J. A. Bayona' ],cast: [ 'Chris Pratt', 'Bryce Dallas Howard', 'Rafe Spall' ],type: 'movie'},);
