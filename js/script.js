const nav = document.querySelector(".navbar"),
    navlist = nav.querySelectorAll("li"),
    totalnavlist = navlist.length;
    allsection = document.querySelectorAll(".section"),
    totalsection = allsection.length;

for (let i = 0; i < totalnavlist; i++) 
{
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function () 
    {
        for (let j = 0; j < totalnavlist; j++)
        {
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
    })
}

function showSection(element) {
    for(let i =0; i<totalsection; i++) 
    {
        allsection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}