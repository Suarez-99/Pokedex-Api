const filteredData = data.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
);
