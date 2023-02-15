function getGameList() {
    console.log('hello')
    let html = GAMES
    let nameFilter = document.getElementById("nameInput").value.toLowerCase()
    //let packInput = document.getElementById("packInput").value
    let packs = getPacks()
    console.log('pack',packs)
    //let maxInput = document.getElementById("maxInput")?.value
    //let minInput = document.getElementById("minInput")?.value

    html = html
    .filter(x=>x.name.toLowerCase().includes(nameFilter)) //name
    .filter(x=>getPacks().includes(x.pack)) //Pack
    // .filter(x=>x.max <= maxInput) //max
    // .filter(x=>!(x.min > minInput)) //min
    html = html.map(x=>getGameRow(x)) 

    html.unshift(getGameRow(Header))
    document.getElementById("gamelist").innerHTML = html.join('')
}

function getPacks(){
    return [
        document.getElementById("jp1").checked ? "1" : null,
        document.getElementById("jp2").checked ? "2" : null,
        document.getElementById("jp3").checked ? "3" : null,
        document.getElementById("jp4").checked ? "4" : null,
        document.getElementById("jp5").checked ? "5" : null,
        document.getElementById("jp6").checked ? "6" : null,
        document.getElementById("jp7").checked ? "7" : null,
        document.getElementById("jp8").checked ? "8" : null,
        document.getElementById("jp9").checked ? "9" : null,
    ].filter(x=>x)
}

function getGameRow(data){
    return `<tr onclick="launch('${data.url}')">
        <td>${data.name}</td>
        <td>${data.pack}</td>
        <td>${data.min}</td>
        <td>${data.max}</td>
    </tr>`
}

function launch(url){
    console.log(url)
    if(!url)return
    window.location.href = url
}