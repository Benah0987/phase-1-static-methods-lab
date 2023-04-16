class Formatter {
  //add static methods here
  static capitalize(string){
    const caps = string.charAt(0).toUpperCase() + string.slice(1);
    return caps;

  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(string) {
    const nonCapitalizedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(' ');

    const capitalizedWords = words.map((word, index) => {
      if (index === 0 || !nonCapitalizedWords.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });

    return capitalizedWords.join(' ');
  }
}
//console log capitalize
const capitalizedString = Formatter.capitalize('hello world');
console.log(capitalizedString); 

//console log sanitize
const sanitizedString = Formatter.sanitize('hello!@#world');
console.log(sanitizedString); 
//console log titlesize
const titleizedString = Formatter.titleize('the quick brown fox jumps over the lazy dog');
console.log(titleizedString); 

