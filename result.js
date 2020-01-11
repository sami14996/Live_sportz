console.clear();

var text = 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip'.split(' ');

var loremIpsum = function(min, max) {
  length =  Math.floor(Math.random() * (max - min)) + min;
  
  return text.slice(0, length).join(' ');
}

var resultsDiv = document.querySelector('.results');

var resultsCounter = 1;

var createResults = function() {
  for (var i = 0; i < 6; i++) {
    var title = loremIpsum(2, 7);
    var body = loremIpsum(5, 32);
    var result = document.createElement('div');
    
    result.classList.add('result', 'new');
    
    result.innerHTML = '<small>Result ' + resultsCounter + '<\/small><h1>' + title + '<\/h1><p>' + body + '<\/p>';
    
    resultsCounter++;
    
    resultsDiv.appendChild(result);
    
    void result.offsetWidth;
    result.classList.remove('new');
    
 
    masonry.appended(result);
    masonry.layout();
  }
}

var masonry = new Masonry(resultsDiv, {
  itemSelector: '.result',
  gutter: 20
});

createResults();