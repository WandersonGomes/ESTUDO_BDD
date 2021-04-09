from json import loads
from behave import given, when, then
from selenium.webdriver import Firefox

# BOT BROWSER
bot_browser = Firefox()

# PRIMEIRO CENARIO
@given('que eu acesse a calculadora em localhost')
def go_to_page(context):
    global bot_browser
    context.browser = bot_browser
    context.browser.get('http://127.0.0.1:5500/sandbox/calculator/index.html')

@when('eu inserir a seguinte expressao matematica')
def insert_expression(context):
    step_text = loads(context.text)
    context.input_expression = context.browser.find_element_by_id('input-expression')
    button_equals = context.browser.find_element_by_id('button-equals')

    context.input_expression.send_keys(step_text['expressao'])
    button_equals.click()

@then('o resultado deve mostrar o valor "{result}" no visor da calculadora')
def check_result_expression(context, result):
    context.browser.implicitly_wait(10)
    assert context.input_expression.get_attribute("value") == result


# SEGUNDO CENARIO
@given('que eu ja tenha acessado a calculadora')
def nothing(context):
    context.browser = bot_browser

@when('eu clicar nos botoes (1), (+), (3) e (igual)')
def insert_expression_one_plus_three(context):
    button_one = context.browser.find_element_by_id("button-one")
    button_addition = context.browser.find_element_by_id("button-addition")
    button_three = context.browser.find_element_by_id("button-three")
    button_equals = context.browser.find_element_by_id("button-equals")

    button_one.click()
    button_addition.click()
    button_three.click()
    button_equals.click()

@then('deve ser mostrado no visor da calculadora o valor "{result}"')
def check_result_expression_one_plus_three(context, result):
    context.input_expression = context.browser.find_element_by_id("input-expression")
    context.browser.implicitly_wait(10)
    assert context.input_expression.get_attribute("value") == result