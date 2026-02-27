"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Review Assignment

   Author: Dominic Bass
   Date:   

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.

      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the _ character.

*/

window.addEventListener("load", findKeyWords());
window.addEventListener("load", makeKeyStyles());

function findKeyWords() {
  var keyword = document.createElement("aside")
  keyword.id = "keywords"
  
  var heading = document.createElement("h1")
  heading.textContent = "Keyword List"

  var keywordList = document.createElement("ol")
  keyword.appendChild(keywordList)

  var keyWordElems = document.querySelectorAll("dfn")
  const keyWords = new Array(keyWordElems.length);
  for (var i = 0; i < keyWordElems.length; i++) {
   keyWords[i] = keyWordElems[i].textContent;
  }

  var linkID = replaceWS(keyWords[i])
  keyWordElems[i].id = "keyword_linkID";

  keyWords.sort();

  for (let i = 0; i < keyWords.length; i++) {
   var keyWordListItem = document.createElement("li")
   var keyWordLink = document.createElement("a")
   keyWordLink.innerHTML = keyWords[i]
  }
}






/* Supplied Functions */

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}
