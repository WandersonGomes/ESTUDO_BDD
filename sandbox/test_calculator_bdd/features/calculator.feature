Feature: BDD Calculadora
    Scenario: Acessar a Calculadora e realizar uma soma entre dois numeros
        Given que eu acesse a calculadora em localhost 
        When eu inserir a seguinte expressao matematica
            """
                {
                    "expressao": "10 + 10"
                }
            """
        Then o resultado deve mostrar o valor "20" no visor da calculadora

    
    Scenario: Acessar a Calculadora inserir dois numeros atraves dos botoes
        Given que eu ja tenha acessado a calculadora
        When eu clicar nos botoes (1), (+), (3) e (igual)
        Then deve ser mostrado no visor da calculadora o valor "4"