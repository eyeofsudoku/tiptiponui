<script>
  const books = [
    { title: "The Eye of Sudoku", url: "puzzles/3d-sudoku.html" },
    { title: "Sudokaji Catitude", url: "puzzles/sudoku-for-adults.html" },
    { title: "Sudoku for Kids Heroes", url: "puzzles/sudoku-for-kids.html" },
    { title: "River and Mr Banjo", url: "literature/children's-books.html" }
    // Add more from Excel as needed
  ];

  const searchInput = document.getElementById("bookSearch");
  const resultsBox = document.createElement("ul");
  resultsBox.id = "searchResults";
  resultsBox.style.position = "absolute";
  resultsBox.style.background = "#fff";
  resultsBox.style.padding = "10px";
  resultsBox.style.listStyle = "none";
  resultsBox.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
  resultsBox.style.borderRadius = "6px";
  resultsBox.style.marginTop = "10px";
  resultsBox.style.zIndex = "1000";
  resultsBox.style.display = "none";

  document.querySelector(".nav-search").appendChild(resultsBox);

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();
    resultsBox.innerHTML = "";
    if (!query) {
      resultsBox.style.display = "none";
      return;
    }

    const matches = books.filter(b => b.title.toLowerCase().includes(query));
    if (matches.length === 0) {
      resultsBox.innerHTML = "<li>No matches found</li>";
    } else {
      matches.forEach(book => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${book.url}">${book.title}</a>`;
        resultsBox.appendChild(li);
      });
    }
    resultsBox.style.display = "block";
  });

  // Hide on click outside
  document.addEventListener("click", e => {
    if (!searchInput.contains(e.target)) {
      resultsBox.style.display = "none";
    }
  });
</script>