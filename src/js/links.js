/** Find all links and make them searchable
https://www.devbridge.com/sourcery/components/jquery-autocomplete
*/

$(document).ready(function() {
    function resetButton() {
        $('#go-btn').attr('href', '/'); //reset link button
        $('#go-btn').css("pointer-events", "none");
    };

    // Set search field to focus if not incoming request is a in-page link. Only for large screens.
    if (location.hash == "") {
        var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
        if (!isMobile) {
            $('#autocomplete-dynamic').focus();
        }
    }

    // Load all links into array
    var links = [];
    $('.link-content > ul').find('a[href]').each(function(){
        //links.push({value: $(this).text(), data: {category: $(this).closest('.link-content').children('h2:first').text(), url: this.href}});
        links.push({value: $(this).text(), data: {category: $(this).closest('ul').prevAll('h3:first').text(), url: this.href}});
        //console.log($(this).text());
        //console.log(this.href);
    });

    console.log(`%c
    _   _____    _   ______  __    _____   ____ _______
   / | / /   |  / | / / __ \\/ /   /  _/ | / / /\/_/ ___/
  /  |/ / /| | /  |/ / / / / /    / /\/  |/ / ,<  \\__ \\
 / /|  / ___ |/ /|  / /_/ / /____/ /\/ /|  / /| |___/ /
/_/ |_/_/  |_/_/ |_/\\____/_____/___/_/ |_/_/ |_/____/  `, "font-family:monospace");
    console.log("Total: " + links.length);
    console.log("Random: " + links[Math.floor(Math.random()*links.length)].data.url);

    // Initialize search autocomplete:
    $('#autocomplete-dynamic').autocomplete({
        lookup: links,
        onSelect: function (suggestion) {
            //window.location.href = suggestion.data.url; //Go to link when selecting the link
            $('#go-btn').attr('href', suggestion.data.url); //set link button

            //Enable button
            if ($(this).val() != "") {
                $('#go-btn').css("pointer-events", "auto");
            }
        },
        showNoSuggestionNotice: true,
        noSuggestionNotice: "No link or category found",
        groupBy: 'category',
        triggerSelectOnValidInput: false,
        tabDisabled: true,
        autoSelectFirst: true,
        lookupFilter: function (suggestion, query, queryLowerCase) {
            return suggestion.value.toLowerCase().indexOf(queryLowerCase) === 0 || suggestion.value.toLowerCase().indexOf(queryLowerCase) !== -1 || suggestion.data.category.toLowerCase().indexOf(queryLowerCase) === 0 || suggestion.data.category.toLowerCase().indexOf(queryLowerCase) !== -1; //checking with both link label and category (both beginning and anywhere)
        }
    });

    // Disable previous href when typing anything else, prevents jumping to link on enter
    $('#autocomplete-dynamic').on("change paste input", function() {
        resetButton();
    });

    // Go to site when hitting enter
    $('#autocomplete-dynamic').keydown(function(event){
    	if(event.keyCode == 13) {
      	    event.preventDefault();

            var url = $('#go-btn').attr('href');
            if (url != "/") {
                window.location.href = url;
            }
            return false;
        }
    });

    //Disable link button after input is cleared
    $('#autocomplete-dynamic').closest('form').on('reset', function(event) {
        resetButton()
    });

    //Disable link button by default
    resetButton()
});
