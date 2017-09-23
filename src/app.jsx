var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: 'Episode Appearances',
    number: 26,
    header: 'Rick',
    description: 'Rick is a genius scientist that likes adventuring with his grandson, Morty. Wubbalubbadubdub!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Rick_Sanchez.png'
  },{
    title: 'Episode Appearances',
    number: 26,
    header: 'Morty',
    description: 'Morty is Rick\'s grandson. Whenever grandpa Rick wants to do something crazy, he\'s like "Oh, geeze, Rick." Then he tries to make sense out of the situation the best that he can; ultimately, this results in Morty doing whatever Rick wants him to do.',
    imageUrl: 'https://vignette3.wikia.nocookie.net/animal-jam-clans-1/images/c/c2/Mortybebb.png/revision/latest?cb=20160830030805'
  },{
    title: 'Episode Appearances',
    number: 17,
    header: 'Jerry',
    description: 'Jerry is Rick\'s son in law, and he just thinks that a man\'s home is his castle, and he strongly believes that the factory 10 setting is always too high.',
    imageUrl: 'https://ih0.redbubble.net/image.96347486.4687/flat,800x800,075,f.u1.jpg'
  }]
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.target'));
