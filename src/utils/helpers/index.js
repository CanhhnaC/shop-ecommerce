export function getFilter([color, brand, size, price, order]) {
  let color_like = color && `color_like=${color}&`;
  let brand_like = brand && `brand_like=${brand}&`;
  let size_like = size && `size_like=${size}&`;
  let [gte, lte] = price.split(",");
  let range = lte && `price_gte=${gte}&price_lte=${lte}&`;
  let sort =
    order &&
    `_sort=price&_order=${order === "Price: Ascending" ? "asc" : "desc"}`;
  return `?${color_like}${brand_like}${size_like}${range}${sort}`;
}
