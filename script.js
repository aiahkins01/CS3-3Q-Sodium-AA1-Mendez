const PI = 3.14;
let Radius = 6,378,000;
let Circumference = (2*PI*Radius);
let surfaceArea = 4*PI*(Radius**2);
let Volume = (4/3)*PI*(Radius**3);

document.write('The radius of the sphere is ' + Radius + '.' + '<br>');
document.write('The circumference is ' + Circumference + '.' + '<br>');
document.write('The surface area is ' + surfaceArea + '.' + '<br>");
document.write('The volume is ' + Volume + '.');
