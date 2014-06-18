/**
    Auto-poke script for Facebook US
    
    For other versions, replace "Poke Back" by the label used in your version
*/

var deSuite = 0;
var noPokes = 0;

function poke()
{
    console.log("Calling poke()..")
    
    /* Auto-poke part */
    elt_links = document.getElementsByTagName("a");
    var deSuitePrev = deSuite;
    for (var i = 0 ; i != elt_links.length; i++)
    {
        elt_link = elt_links[i];
        if (elt_link.innerHTML.contains("Poke Back"))
        {
            deSuite++;
            var nbPokesDiv = document.getElementById("nb_pokes_div");
            nbPokesDiv.innerHTML = parseInt(nbPokesDiv.innerHTML) +1;
            elt_link.click();
        }
    }
    
    /* Make it more real */
    if (deSuitePrev == deSuite)
    {
        noPokes++;
    }
    else
    {
        noPokes = 0;
    }
    
    if (deSuite == 0)
    {
        console.log("Calling poke().. (0)")
        setTimeout(poke, 1000+Math.round(Math.random()*600000));
    }
    else if (deSuitePrev == deSuite && noPokes > 5)
    {
        console.log("Calling poke().. (1)")
        setTimeout(poke, 1000+Math.round(Math.random()*120000));
        deSuite = 0;
    }
    else if (deSuite <= 6)
    {
        console.log("Calling poke().. (2)")
        setTimeout(poke, 1000+Math.round(Math.random()*30000));
    }
    else if (deSuite >= 50)
    {
        console.log("Calling poke().. (3)")
        setTimeout(poke, 1000+Math.round(Math.random()*120000));
    }
    else
    {
        console.log("Calling poke().. (4)")
        setTimeout(poke, 1000);
    }
}

var nbPokesDiv = document.createElement("div");
nbPokesDiv.id = "nb_pokes_div";
nbPokesDiv.innerHTML = "0";
nbPokesDiv.style.position = "fixed";
nbPokesDiv.style.zIndex = "999";
nbPokesDiv.style.left = "3px";
nbPokesDiv.style.top = "42px";
nbPokesDiv.style.width = "25px";
nbPokesDiv.style.textAlign = "center";
nbPokesDiv.style.border = "1px #5555ff solid";
nbPokesDiv.style.color = "#5555ff";
nbPokesDiv.style.backgroundColor = "#ffffff";
nbPokesDiv.style.fontSize = "0.7em";
document.body.appendChild(nbPokesDiv);

poke();

