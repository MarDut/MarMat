Projekt zawiera zestaw testów dla sklepu internetowego, stworzonych przy użyciu frameworka Cypress.js

INSTALACJA
1. sklonuj repozytorium:
    git clone https://github.com/MarDut/MarMat.git

2. zainstaluj zależności projektu przy użyciu menedżera pakietów node.js:
    npm install

URUCHAMIANIE TESTÓW
1. Otwórz Cypress
    npx cypress open

2. Wybierz e2e testing > wybierz przeglądarkę, w której uruchomione zostaną testy > wybierz plik testBase.cy.js


STRUKTURA PROJKETU
W projekcie zastosowano wzorzec Page Object Pattern - każdej stronie poddanej testom przyporządkowano klasę z zestawem pól odpowiadajacych poszczególnym elementom obiektu DOM, oraz zestawem metod modyfikujących je.

cypress/e2e - katalog z testami
cypress/Pages - katalog z klasami stron
cypress/fixtures - katalog z danymi wykorzystywanymi w testach
cypress.config.js - plik konfiguracyjny cypress