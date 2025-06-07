
function paginate(items, pageSize) {

  const notValidInput = !Array.isArray(items) || typeof pageSize !== 'number' || pageSize <= 0;

  if (notValidInput) {
    console.error('Invalid arguments. "items" must be an array and "pageSize" must be a positive number');
    return [];
  }

  const pages = [];
  
  for (let i=0;i<items.length;i += pageSize) {
    const page = items.slice(i, i + pageSize);
    pages.push(page);
  }

  return pages;
}

// const r = paginate([1,2,3,4,5,6,7], 3);
//console.log(r);

paginate('not valid', 3);
