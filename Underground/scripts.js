function SeleccionDeAutos(selecion)
{
    switch (SeleccionDeAutos)
    case 1:

    case 2:
}

document.getElementById()

document.addEventListener("DOMContentLoaded" , function () {
    const navItemsIds = ["Index", "Contact" , "About" , "News"]
    const navItems = navItemsIds.map( id => document.getElementById(id));
    navItems.forEach(item => {
        item.addEventListener("click", function(){
            navItems.forEach( a=> a.classList.remove("active"))
                this.classList.add("active");
            })
        })            
    }
);

