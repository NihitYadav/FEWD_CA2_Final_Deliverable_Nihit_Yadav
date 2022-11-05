var pla = document.getElementById("hey3")

pla.onclick = () => {
    location.href = "./game.html";
    const pname = document.getElementById("alpha").value;
    localStorage.setItem('p1',pname);
    const pname2 = document.getElementById("alpha2").value;
    localStorage.setItem('p2',pname2);
}