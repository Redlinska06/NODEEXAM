// // Wykorzystując zdobytą wiedzę z zajęć, stwórz aplikację KONSOLOWĄ której głównym zadaniem będzie zarządzanie bazą cytatów.
// // Wprowadzanie jak i sterowanie danymi ma być za pomocą wprowadzonych argumentów wejściowych aplikacji
// // (node app.js someCommand –someArh "...")

// 1. Podstawowym zadaniem aplikacji jest możliwość dodania, usunięcia oraz wyświetlenia cytatów. Dane jakie powinniśmy
// przetrzymywać to treść oraz autor "złotej myśli". (Tworząc aplikację warto pomyśleć o unikalnych identyfikatorach
// zapisanych treści. Ułatwi to usuwanie ich z listy.)

// 2. Aplikacja powinna pozwolić na wyświetlenie losowego cytatu po wywołaniu odpowiedniej komendy z naszej aplikacji.
// Mile widziane by było dodanie licznika wystąpień naszego cytatu w przypadku wywołania owej komendy.

// 3. Świetnym dodatkiem może być dodawanie grupy do jakiej należy nasz cytat. Rozszerzając naszą aplikację o ten dodatek
// powinniśmy uwzględnić dodatkowe filtrowanie podczas wyświetlania naszej listy "złotych myśli".

// 4. Dla urozmaicenia aplikacji powinniśmy dodać możliwość pobrania losowej "złotej myśli" z zewnętrznego serwera i wyświetlenie
// jej w konsoli. W tym celu po wywołaniu odpowiedniej komendy powinniśmy wysłać żądanie na adres:
// http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php w celu pobrania losowego cytatu i wyświetlenie
// jej w konsoli.

const addCommand = require("./add");
const removeCommand = require("./remove");
const listCommand = require("./list");
const filterCommand = require("./filter");
const groupCommand = require("./group");
const externalCommand = require("./external");

require("yargs")
  .command(addCommand)
  .command(removeCommand)
  .command(listCommand)
  .command(filterCommand)
  .command(groupCommand)
  .command(externalCommand)
  .demandCommand(1, "Musisz podać przynajmniej jedno polecenie")
  .help().argv;
