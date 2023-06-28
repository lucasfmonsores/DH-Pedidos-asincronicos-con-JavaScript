window.onload = async () => {
      const $id = document.querySelector("#id");
      const $title = document.querySelector("#title");
      const $rating = document.querySelector("#rating");
      const $awards = document.querySelector("#awards");
      const $release_date = document.querySelector("#release_date");
      const $length = document.querySelector("#length");
      const $edit = document.querySelector("#edit");
      const $create = document.querySelector("#create");
      const $delete = document.querySelector("#delete");
      const response = await fetch("http://localhost:3031/api/movies/26");
      const peliculas = await response.json();
      const data = peliculas.data;
      $id.value = data.id;
      $title.value = data.title;
      $rating.value = data.rating;
      $awards.value = data.awards;
      $release_date.value = new Date(data.release_date).toISOString().slice(0, 10);
      $length.value = data.length;

      $edit.addEventListener("click", async () => {
            const res = {
                  title: $title.value,
                  rating: $rating.value,
                  awards: $awards.value,
                  release_date: $release_date.value,
                  length: $length.value,
                  genre_id: data.genre_id,
            };
            const response = await fetch(`http://localhost:3031/api/movies/update/${data.id}`, {
                  method: "PUT",
                  headers: {
                        "Content-Type": "application/json",
                  },
                  body: JSON.stringify(res),
            });
            if (response.ok) {
                  console.log(res);
                  window.location.href = "/home.html"; // Redirecciona a la página /home.html
            }
            console.log(res);
      });
      $create.addEventListener("click", async () => {
            const res = {
                  title: $title.value,
                  rating: $rating.value,
                  awards: $awards.value,
                  release_date: $release_date.value,
                  length: $length.value,
                  genre_id: data.genre_id,
            };
            const response = await fetch(`http://localhost:3031/api/movies/create/`, {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                  },
                  body: JSON.stringify(res),
            });
            if (response.ok) {
                  console.log(res);
                  window.location.href = "/home.html"; // Redirecciona a la página /home.html
            }
            console.log(res);
      });
      $delete.addEventListener("click", async () => {
            const res = {
                  title: $title.value,
                  rating: $rating.value,
                  awards: $awards.value,
                  release_date: $release_date.value,
                  length: $length.value,
                  genre_id: data.genre_id,
            };
            const response = await fetch(`http://localhost:3031/api/movies/delete/${$id.value}`, {
                  method: "DELETE",
                  /*                   headers: {
                        "Content-Type": "application/json",
                  },
                  body: JSON.stringify(res),
 */
            });
            if (response.ok) {
                  console.log(res);
                  window.location.href = "/home.html"; // Redirecciona a la página /home.html
            }
            console.log(res);
      });
};
