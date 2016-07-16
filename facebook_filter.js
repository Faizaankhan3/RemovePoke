(function() {
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var newNodes = mutation.addedNodes;
            if (newNodes !== null) {                
                
                var nodes = document.querySelectorAll('.userContentWrapper, ._1bar, ._5my2, ._4qjp, ._2kg4');
                for (var ii = 0, nn = nodes.length; ii < nn; ii++)
                {
                    var text = nodes[ii] ? nodes[ii].textContent.toLowerCase() : '';
                    if (text && (text.indexOf('pokemon') >= 0 || text.indexOf('pokémon')>=0 || text.indexOf('pikachu')>=0) && nodes[ii].style.display != 'none')
                    {
                        nodes[ii].style.display = 'none';
                        chrome.runtime.sendMessage({action: "removePokemon"});
                    }
                }

            }
        });
    });

    observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
    });

})();
