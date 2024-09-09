calculateTime = () => {
  // Creăm un nou obiect Date
  var date = new Date();
  // Accesăm numărul zilei şi stocăm valoarea în variabilă
  var dayNumber = date.getDay();
  // Accesăm ora şi stocăm valoarea în variabilă
  var hour = date.getHours();
  // Accesăm minutele zilei şi stocăm valoarea în variabilă
  var minute = date.getMinutes();
  // Setăm ora la formatul AM/PM
  var ampm = hour >= 12 ? 'PM' : 'AM';
  // Creăm un array cu zilele săptămânii ca să le putem accesa ulterior prin numărul zilei curente
  var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Avem nevoie să afişăm ora în format AM/PM, deci avem nevoie de un range de 12 ore. Folosim modulo (%)
  // Respectiv dacă e ora 17, hour va fi egal cu 5 (restul împărţirii 17 la 12)
  hour = hour % 12;
  // Pentru cazurile de miazăzi şi miazănoapte, modulo va fi 0, deaceea trebuie să acoperim şi acest scenariu
  // Dacă e orice oră în afară de 00 şi 12, vom afişa ora dată - deja prin setarea anterioară de modulo
  // Dacă însă e 00 sau 12 - o să afişăm 12
  hour = hour ? hour : '12';
  // De asemenea, dorim să afişăm ora mereu prin 2 cifre, respectiv trebuie să acoperim scenariul când ora e 1, 2, 3 - pănâ la 10
  // şi să afişăm un zero în faţă. În caz contrar (ora 10 / 11 / 12) - afişăm însăşi ora
  hour = hour < 10 ? '0' + hour : hour;
  // Acelaşi lucru îl aplicăm pentru minute
  minute = minute < 10 ? '0' + minute : minute;

  // Targhetăm elementele necesare în pagină şi le completăm cu datele corespunzătoare
  // - Ziua săptămânii
  document.querySelector("#day").textContent = dayNames[dayNumber];
  // - Ora
  document.querySelector("#hour").textContent = hour;
  // - Minutele
  document.querySelector("#minute").textContent = minute;
  // - AM/PM
  document.querySelector("#ampm").textContent = ampm;

  // - - - - - B O N U S   P A R T - - - - - -
  // Accesăm data curentă a lunii şi stocăm valoarea în variabilă
  var dateToday = date.getDate();
  // Creăm un array cu lunile anului ca să le putem accesa ulterior prin numărul lunii curente
  var monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  // Accesăm luna curentă a anului şi stocăm valoarea în variabilă
  var monthNumber = date.getMonth();
  // Accesăm anul curent şi stocăm valoarea în variabilp
  var year = date.getFullYear();

  // Targhetăm elementele necesare în pagină şi le completăm cu datele corespunzătoare
  // - Data 
  document.querySelector("#date").textContent = dateToday;
  // - Luna
  document.querySelector("#month").textContent = monthNames[monthNumber];
  // - Anul
  document.querySelector("#year").textContent = year;


  // Element necesar - ne permite să actualizăm toate datele
  setTimeout(calculateTime, 200);
}

// Apelăm funcţia la evenimentul de window load
window.addEventListener('load', calculateTime);
