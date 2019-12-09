/** Add a character with a permalink next to any header */
var headings = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");

for (var i = 0; i < headings.length; i++) {
headings[i].innerHTML = headings[i].innerHTML +
  ' <a class="headerlink" href="#' + headings[i].id + '">¶</a>';
}
