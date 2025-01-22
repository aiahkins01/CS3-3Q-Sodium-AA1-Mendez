const Pi = 3.14;
var  R = 6.378e6;
 
 var C = (2*Pi*R);
 var A = (4*Pi)*(R**2);
 var V = (4/3)*Pi*(R**3);
 
 document.write('The radius of the sphere is ' + R + '.');
 document.write('<br>');
 document.write('The circumference is ' + C +'.');
 document.write('<br>');
 document.write('The surface area is ' + A +'.');
 document.write('<br>');
 document.write('The volume is ' + V +'.');
