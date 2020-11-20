% leer datos previamente formateados
table = readtable('./practica33.csv')

% personalizar grafica
title('Resistencia electr�ca en funci�n de la temperatura')
xlabel('Temperatura [�C]')
ylabel('Resistencia [\Omega]')

% graficar puntos y lineas
hold on
plot(table.Var1, table.Var2, 'o')
hold off

