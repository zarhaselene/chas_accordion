// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

const container = document.querySelector(".accordion");

async function getPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((element) => {
    const title = document.createElement("div");
    title.className = "title";
    title.innerHTML = `${element.title}`;

    const description = document.createElement("div");
    description.className = "description";
    description.innerHTML = `<p>${element.body}</p>`;

    container.appendChild(title);
    container.appendChild(description);

    title.addEventListener("click", toggle);
  });
}
getPost();
