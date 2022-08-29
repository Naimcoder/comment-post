const loadComment = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displaydata(data));
};

const displaydata = (comment) => {
  comment.forEach((comments) => {
    // console.log(comments)
    const containerComment = document.getElementById("comment-container");
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
     <div class="card-body">
            <div class="card-header">id: ${comments.id}</div>
            <h5 class="card-title">${comments.name}</h5>
            <p class="card-text">${comments.body}</p>
            <a href="#"onclick="displaydetais(${comments.id})" class="btn btn-primary">Go Detalis</a>
     </div>
     `;
    containerComment.appendChild(div);
  });
};
const displaydetais = (idDetals) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${idDetals}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadDtiales(data));
};
const loadDtiales = (detalis) => {
  console.log(detalis);
  const deatiscontainer = document.getElementById("item-container");
  deatiscontainer.innerHTML = ``;

  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <div class="card-body">
            <div class="card-header">id:${detalis.id}</div>
            <h5 class="card-title">${detalis.title}</h5>
            <p class="card-text">${detalis.body}</p>
            <a href="#"onclick="hidebtn()" class="btn btn-primary">hide me</a>
     </div>
    `;
  deatiscontainer.appendChild(div);
};
const hidebtn = () => {
  const deatiscontainer = document.getElementById("item-container");
  deatiscontainer.innerHTML = ``;
};

loadComment();
