export function getFilter([color, brand, size]) {
    return `?${color ? "color_like=" + color + '&' : ""}${brand ? "brand_like=" + brand + '&' : ""}${size ? "size_like=" + size : ""}`
}