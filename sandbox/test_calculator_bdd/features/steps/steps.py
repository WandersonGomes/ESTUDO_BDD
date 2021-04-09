from behave import given, when, then

@given('que eu acesse a calculadora em localhost')
def go_to_calculator(context):
    context.browser.get('http://127.0.0.1:5500/sandbox/calculator/index.html')

@when('eu inserir a seguinte expressao matematica "{expression}"')
def insert_expression_sum_two_number_integer(context, expression):
    input_expression = context.browser.find_element_by_id('input-expression')
    button_equals = context.browser.find_element_by_id('button-equals')

    input_expression.send_keys(expression)
    button_equals.click()

@then('deve ser mostrado no visor da calculadora o valor "{result}"')
def check_result_expression(context, result):
    input_expression = context.browser.find_element_by_id('input-expression')
    assert input_expression.get_attribute("value") == result