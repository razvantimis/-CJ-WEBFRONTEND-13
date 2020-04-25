# Snake

Propunere: Ne propunem sa facem un joc de tip snake

Functionalitati: 
1. Sa avem un snake care se misca intr-un container ( mai multe div-uri cu dimensiuni fixe ), 
2. Il facem sa se miste in continuu
3. Dorim sa schimbam directia de miscare a snake-ului prin apasarea tastelor - arrow left/right/up/down 
4. Cand va incepe jocul, va aparea un patrat, pozitionat random in acelasi container cu snake-ul, care reprezinta mancarea - food
5. Daca snake-ul atinge mancarea, atunci el va creste iar mancarea va aparea in alta parte
6. De fiecare data cand snake-ul manac, ii va creste viteza cu care deplaseaza pe ecran
7. Gameover - daca iesim din acest container cu snake-ul atunci jocul se termina ( nu este implementat )

Classe: Snake, Game, Food

Snake 
  - Functionalitatea 1: scopul clasei Snake este sa afisezi pe ecran snake-ul
  - Functionalitatea 2: implementeaza logica de miscare de snake-ului prin metoda move
  - Functionalitatea 3: sa tina directia de deplasare

Food
  - Functionalitatea 4: logica de afisare random pe ecran

Game ( jocul nostre este controlat de acest obiect)

  - Functionalitatea 2 - folosind setInterval, pentru al face sa miste in continuu
  - Functionalitatea 5
  - Functionalitate 6
  - Functionalitate 7

 