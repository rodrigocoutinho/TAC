module.exports = function () {


  this.Then(/^que um usuário ainda não tem cadastro$/, function () {
    return helpers.loadPage('http://localhost:3000/register')
  });

  this.Then(/^fornece nome "([^]*)"$/, function (name) {
    return helpers.loadPage('http://localhost:3000/register').then(function () {

      // use a method on the page object which also returns a promise
      return driver.findElement(by.name('name')).sendKeys(name);
    });
  });

  this.Then(/^fornece telefone "([^]*)"$/, function (telefone) {
    return helpers.loadPage('http://localhost:3000/register').then(function () {

      // use a method on the page object which also returns a promise
      return driver.findElement(by.name('fone')).sendKeys(telefone);
    });
  });

  this.Then(/^fornece tipo "([^]*)"$/, function (tipo) {
    return helpers.loadPage('http://localhost:3000/register').then(function () {

      // use a method on the page object which also returns a promise
      return driver.findElement(by.name('tipo')).sendKeys(tipo);
    });
  });

  this.Then(/^fornece email "([^]*)"$/, function (email) {
    return helpers.loadPage('http://localhost:3000/register').then(function () {

      // use a method on the page object which also returns a promise
      return driver.findElement(by.name('email')).sendKeys(email);
    });
  });

  this.Then(/^fornece senha "([^]*)"$/, function (senha) {
    return helpers.loadPage('http://localhost:3000/register').then(function () {

      // use a method on the page object which also returns a promise
      return driver.findElement(by.name('password')).sendKeys(senha);
    });
  });

  this.Then(/^é exibida mensagem "([^]*)"$/, function (mensagem) {
    return helpers.loadPage('http://localhost:3000/register').then(function () {

      driver.findElement(by.name('name')).sendKeys("Rodrigo");
      driver.findElement(by.name('fone')).sendKeys("62-99999-9999");
      driver.findElement(by.name('tipo')).sendKeys("Engenheiro de Software");
      driver.findElement(by.name('email')).sendKeys("teste@teste.com.br");
      driver.findElement(by.name('password')).sendKeys("123");
      const resultado = driver.findElement(by.id('mensagem'));
      return resultado
    });
  });

}