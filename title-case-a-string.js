function titleCaseMe(string) {
    if(string) {
      return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
}

export {titleCaseMe};

//NOT ORIGINAL
//FROM: https://teamtreehouse.com/community/can-someone-explain-the-logic-of-replacews-to-me
