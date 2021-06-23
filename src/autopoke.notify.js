/**
    Auto-poke script for Facebook US
    Now prints a short message so you know it's doing its job
    
    For other versions, replace "Poke Back" by the label used in your version
*/
function poke()
{
    elt_links = document.getElementsByTagName("a");
    var n=0;
    for (var i = 0 ; i != elt_links.length; i++)
    {
        elt_link = elt_links[i];
        if (elt_link.innerHTML.contains("Poke Back"))
            {
            elt_link.click();
            n=n+1;
        }
    }

    if(n>0) console.log("Poked " + n);
    setTimeout(poke, 1000);
}

poke();
