Feature: BDD Calculadora - Soma, Subtracao, Divisao, Multiplicacao
    # SCENARIOS RELACIONADOS A SOMA
    Scenario: realizar a soma entre dois numeros inteiros positivos
        Given que eu acesse a calculadora em localhost 
        When eu inserir a seguinte expressao matematica "10 + 10"
        Then deve ser mostrado no visor da calculadora o valor "20"
    
    Scenario: realizar a soma entre dois numeros inteiros, um positivo e o outro negativo
        Given que eu acesse a calculadora em localhost
        When eu inserir a seguinte expressao matematica "10 + (-11)"
        Then deve ser mostrado no visor da calculadora o valor "-1"
    
    Scenario: realizar a soma entre dois numeros inteiros, um negativo e o outro positivo
        Given que eu acesse a calculadora em localhost
        When eu inserir a seguinte expressao matematica "(-10) + 11"
        Then deve ser mostrado no visor da calculadora o valor "1"
    
    Scenario: realizar a soma entre dois numeros inteiros negativos
        Given que eu acesse a calculadora em localhost
        When eu inserir a seguinte expressao matematica "(-10) + (-11)"
        Then deve ser mostrado no visor da calculadora o valor "-21"
    
    Scenario: realizar a soma entre um numero inteiro positivo e um numero decimal tambem positivo
        Given que eu acesse a calculadora em localhost
        When eu inserir a seguinte expressao matematica "10 + 2.5"
        Then deve ser mostrado no visor da calculadora o valor "12.5"
    
    Scenario: realizar a soma entre um numero inteiro positivo e um numero decimal negativo
        Given que eu acesse a calculadora em localhost
        When eu inserir a seguinte expressao matematica "10 + (-2.5)"
        Then deve ser mostrado no visor da calculadora o valor "7.5"

    Scenario: realizar a soma entre um numero inteiro negativo e um numero decimal positivo
        Given que eu acesse a calculadora em localhost
        When eu inserir a seguinte expressao matematica "(-10) + 2.5"
        Then deve ser mostrado no visor da calculadora o valor "-7.5"
    
    # SCENARIOS RELACIONADOS A SUBTRACAO
    Scenario: realizar a subtracao entre dois numeros inteiros positivos (number1 = number2)
        Given que eu acesse a calculadora em localhost
        When eu inserir a seguinte expressao matematica "10 - 10"
        Then deve ser mostrado no visor da calculadora o valor "0"
    
    # SCENARIOS RELACIONADOS A MULTIPLICACAO
    Scenario: realizar a multiplicacao entre caracteres
        Given que eu acesse a calculadora em localhost
        When eu inserir a seguinte expressao matematica "a * b"
        Then deve ser mostrado no visor da calculadora o valor "ERROR"

    # SCENARIOS RELACIONADOS A DIVISAO
    Scenario: realizar a divisao de um numero inteiro pelo valor zero
        Given que eu acesse a calculadora em localhost
        When eu inserir a seguinte expressao matematica "10/0"
        Then deve ser mostrado no visor da calculadora o valor "Infinity"