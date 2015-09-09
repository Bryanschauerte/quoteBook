angular.module('quoteBook').service('mainService', function(){

  var quotes = [
  { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
  { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
  { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
  { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
  { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
  { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
  { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
];

 this.quoteGetter = function(){
   return quotes;

 };

this.add = function(quote){
  if((quote.text == '') || (quote.author == '')){
    alert("Must submit both a Quote AND and the author");
} else if ((quote.text !== '') && (quote.author !== '')){
  quotes.push(quote);
}

}

this.removeQuote = function(querry) {
  for(var i =0; i < quotes.length; i++){
  for(var values in quotes[i]){
      if(quotes[i][values] == querry){
        quotes.splice(i, 1);
      }
    }
  }
}
this.save = function() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
  console.log(quotes);
}

this.load = function() {

 quotes = JSON.parse(localStorage.getItem('quotes'));
console.log(quotes);
this.quotes = quotes;
}




})
