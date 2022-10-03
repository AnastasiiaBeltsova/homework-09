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

