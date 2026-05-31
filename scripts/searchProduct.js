export function searchProductJs() {
  const inputElement = document.querySelector('.input-element-html');

  inputElement.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;

    const getValue = inputElement.value.toLowerCase().trim();

    if (!getValue) return;

    // ✅ fixed key name (camelCase)
    localStorage.setItem('searchedQuery', getValue);

    // redirect to search page
    window.location.href = 'search.html';
  });
}

