let toggleFilter = () => {
  let btn = document.querySelector("#filter");
  if (document.getElementById("filterMobile").style.display == "none") {
    document.getElementById("filterMobile").style.display = "block";
    btn.setAttribute("aria-expanded", "true");
  } else {
    document.getElementById("filterMobile").style.display = "none";
    btn.setAttribute("aria-expanded", "false");
  }
};

let goTo = (artId) => {
  window.localStorage.setItem("identifier", artId);
  window.open("articulo.html", "_self");
};

let goToHome = (artId) => {
  window.localStorage.setItem("identifier", artId);
  window.open("htmls/articulo.html", "_self");
};

let loadArticle = () => {
  var artId = window.localStorage.getItem("identifier");
  artId = parseInt(artId);

  let tit = document.getElementById("title");
  let des = document.getElementById("desc");
  let imm = document.getElementById("image");
  let pri = document.getElementById("price");

  tit.innerHTML = articulos[artId].name;
  des.innerHTML = articulos[artId].desc;
  imm.src = articulos[artId].img;
  pri.innerHTML = `U$S ${articulos[artId].price}`;

  tit.className = "artTitle";
  des.className = "artDesc";
  imm.className = "artImg";
  pri.className = "artPrice";

  document.title = `${articulos[artId].name} - Indumentis`;
};

let loadMens = () => {
  let arr1 = Array.from(document.querySelectorAll(".qunt"));
  let arr2 = Array.from(document.querySelectorAll(".Nqunt"));
  let arr = arr1.concat(arr2);
  arr.forEach((obj) => {
    obj.setAttribute("aria-hidden", true);
  });

  let count = 17;
  for (let k = 0; k < 4; k++) {
    for (let i = 0; i < articulos.length; i++) {
      if (articulos[i].gender == "M") {
        let articleElement = document.createElement("article");
        articleElement.id = articulos[i].id;

        articleElement.setAttribute("onclick", "goTo(this.id)");
        articleElement.setAttribute("title", `${articulos[i].name}`);
        articleElement.setAttribute(
          "aria-label",
          `Articulo. Titulo: ${articulos[i].name}. Precio:${articulos[i].price}`
        );
        articleElement.setAttribute("tabindex", count);
        var tooltip = new bootstrap.Tooltip(articleElement);

        let img = document.createElement("img");
        img.src = articulos[i].img;
        img.alt = articulos[i].desc;

        let sep = document.createElement("div");
        sep.className = "separator";

        let artName = document.createElement("p");
        artName.innerHTML = articulos[i].name;
        artName.className = "artTitle";

        let artPrice = document.createElement("p");
        artPrice.innerHTML = `U$S ${articulos[i].price}`;
        artPrice.className = "artPrice";

        articleElement.appendChild(img);
        articleElement.appendChild(sep);
        articleElement.appendChild(artName);
        articleElement.appendChild(artPrice);

        document.getElementById("articlesHolder").appendChild(articleElement);
        count++;
      }
    }
  }
};

let loadWomans = () => {
  let arr1 = Array.from(document.querySelectorAll(".qunt"));
  let arr2 = Array.from(document.querySelectorAll(".Nqunt"));
  let arr = arr1.concat(arr2);
  arr.forEach((obj) => {
    obj.setAttribute("aria-hidden", true);
  });

  let count = 18;
  for (let k = 0; k < 4; k++) {
    for (let i = 0; i < articulos.length; i++) {
      if (articulos[i].gender == "F") {
        let articleElement = document.createElement("article");
        articleElement.id = articulos[i].id;

        articleElement.setAttribute("onclick", "goTo(this.id)");
        articleElement.setAttribute("title", `${articulos[i].name}`);
        articleElement.setAttribute(
          "aria-label",
          `Articulo. Titulo: ${articulos[i].name}. Precio:${articulos[i].price}`
        );
        articleElement.setAttribute("tabindex", count);
        var tooltip = new bootstrap.Tooltip(articleElement);

        let img = document.createElement("img");
        img.src = articulos[i].img;
        img.alt = articulos[i].desc;

        let sep = document.createElement("div");
        sep.className = "separator";

        let artName = document.createElement("p");
        artName.innerHTML = articulos[i].name;
        artName.className = "artTitle";

        let artPrice = document.createElement("p");
        artPrice.innerHTML = `U$S ${articulos[i].price}`;
        artPrice.className = "artPrice";

        articleElement.appendChild(img);
        articleElement.appendChild(sep);
        articleElement.appendChild(artName);
        articleElement.appendChild(artPrice);

        document.getElementById("articlesHolder").appendChild(articleElement);
        count++;
      }
    }
  }
};

let toggleFrm = () => {
  let frm = document.getElementById("frm");
  let btn = document.getElementById("reservar");
  let wait = document.getElementById("waitingHolder");

  if (frm.style.display == "none") {
    frm.style.display = "block";
    wait.style.display = "none";
    btn.innerHTML = "Cancelar";
    btn.className = "btn btn-danger";
    btn.setAttribute("aria-expanded", "true");
  } else {
    frm.style.display = "none";
    wait.style.display = "block";
    btn.innerHTML = "Reservar";
    btn.className = "btn btn-primary";
    btn.setAttribute("aria-expanded", "false");
  }
};

let arr = new Array();
let loadCards = () => {
  arr.splice(0, arr.length);
  generate(5); //Determina el numero de tarjetas
  for (let i = 0; i < arr.length; i++) {
    let articleElement = document.createElement("article");
    articleElement.id = articulos[arr[i]].id;

    articleElement.setAttribute("onclick", "goToHome(this.id)");
    articleElement.setAttribute("title", `${articulos[arr[i]].name}`);
    var tooltip = new bootstrap.Tooltip(articleElement);

    let img = document.createElement("img");
    img.src = articulos[arr[i]].img;
    img.alt = articulos[arr[i]].desc;

    let sep = document.createElement("div");
    sep.className = "separator";

    let artName = document.createElement("p");
    artName.innerHTML = articulos[arr[i]].name;
    artName.className = "artTitle";

    let artPrice = document.createElement("p");
    artPrice.innerHTML = `U$S ${articulos[arr[i]].price}`;
    artPrice.className = "artPrice";

    articleElement.appendChild(img);
    articleElement.appendChild(sep);
    articleElement.appendChild(artName);
    articleElement.appendChild(artPrice);

    document.getElementById("homeCardsHolder").appendChild(articleElement);
  }
};

let generate = (q) => {
  while (arr.length < q) {
    var target = Math.floor(Math.random() * 12);
    var used = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        used = true;
      }
    }
    if (!used) {
      arr.push(target);
    }
  }
};
