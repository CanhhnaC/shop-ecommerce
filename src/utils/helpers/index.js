export function getFilter([color, brand, size, order, _page, _limit]) {
  let color_like = color && `color_like=${color}&`;
  let brand_like = brand && `brand_like=${brand}&`;
  let size_like = size && `size_like=${size}&`;

  let sort =
    order &&
    `_sort=price&_order=${order === "Price: Ascending" ? "asc" : "desc"}`;
  let page = _page && `_page=${_page}&_limit=${_limit}&`;
  return `?${color_like}${brand_like}${size_like}${sort}${page}`;
}
