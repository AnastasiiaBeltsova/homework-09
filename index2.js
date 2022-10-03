document.write('<table>');
let num = 1; 
for (let i = 0; i < 10; i++) {
    document.write('<tr>');
    for (let j = 0; j < 10; j++) {
        document.write('<td>' + num++ + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>')



// const COUNT = 10;
//         let array = new Array(COUNT);
 
//         fillMatrix();
//         console.log(array);
//         showMatrix();
 
//         function fillMatrix() {
//             for (let i = 0; i < COUNT; ++i) {
//                 array[i] = new Array(COUNT);
//                 for (let j = 0; j < COUNT; ++j) {
//                     array[i][j] = i * 10 + j + 1;
//                 }
//             }
//         }
//         function showMatrix() {
//             for (let i = 0; i < COUNT; ++i) {
//                 for (let j = 0; j < COUNT; ++j) {
//                     // Вывести с выравниванием
//                     document.write(array[i][j].toString().padStart(4,"\u00A0"));
//                     // Если выравнивание не интересует, то:
//                     // document.write(array[i][j] +" ");
//                 }
//                 document.write("<br />");
//             }
//         }