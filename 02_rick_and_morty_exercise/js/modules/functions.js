const displayAllCharacters = (array, row) => {
  let html = "";
  array.results.forEach((element) => {
    html += `<article class='col-lg-3 col-md-4 col-sm-6 col-12 my-4 px-2'>
            <div class="p-2 d-flex flex-column bg-light border rounded shadow" data-id='${element.id}'>
                <img src='${element.image}' class='img-fluid' alt='${element.name}'>
                <h5>${element.name}</h5>
              <button class='btn btn-success btn-block my-2 py-1 border-success bg-white text-success rounded like' data-id='${element.id}'>Like <i class="far fa-thumbs-up"></i></button>
            </div>
          </article>`;
  });

  row.innerHTML = html;
};

const selectCharacter = () => {
  let id;
  localStorage.clear();
  let button = document.querySelectorAll(".like");
  button.forEach((element) =>
    element.addEventListener("click", function () {
      id = element.getAttribute("data-id");
      localStorage.setItem("id", id);
    })
  );
  return;
};

export { displayAllCharacters, selectCharacter };
