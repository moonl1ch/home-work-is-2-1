function create_rectangle_list(widths, heights) {
if (widths.length !== heights.length) {
    return "Количество ширин и высот должно совпадать";
}
    
let rectangles = [];
for (let i = 0; i < widths.length; i++) {
    let rectangle = {
    width: widths[i],
    height: heights[i]
    };
    rectangles.push(rectangle);
}
return rectangles;
}
  
let inputWidths = prompt("Введите ширины прямоугольников через запятую");
let inputHeights = prompt("Введите высоты прямоугольников через запятую");
  
let widths = inputWidths.split(",").map(Number);
let heights = inputHeights.split(",").map(Number);
  
let rectangleList = create_rectangle_list(widths, heights);
console.log(rectangleList);