const array0 = [1, 2, 3, 4, 5, 6];          //объявляем массив 1
const array1 = [4, 5, 6, 2, 7, 8, 9, 0];    // объявляяем массив 2

function intersects(arr1, arr2) {           // функция, определяющая пересечения элементов массива
    let result = [];                        // результируюзий массив
    arr1.forEach(                           // для каждого элемента массива 1
        (i) => {                            // выполняем функцию, в которой
            arr2.forEach(                   // для каждого элемента массива 2
                (y) => {                    // выполняем функцию
                    if (y === i)            // сравнения элемента массива 2 с элементом массива 1
                    {
                        result.push(y);     // в случае совпадения элементов помещаем один их елементов в результирующий массив
                    }
                }
            )
        }
    )
    return result;                          // возвращаем результат
}

console.log(intersects(array0, array1));    // вывод в лог результата выполнения функции