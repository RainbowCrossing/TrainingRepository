fetch('https://jsonplaceholder.typicode.com/albums')
  .then(response => response.json())
  .then(albums => {
    const fetchList = document.getElementById('fetchList');
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    albums.forEach(album => {
      const listItem = document.createElement('li');
      listItem.classList.add('album-item');

      listItem.innerHTML = `
        <h3>Album ID: ${album.id}</h3>
        <p>${album.title}</p>`;
      fetchList.appendChild(listItem);
    });
  })
