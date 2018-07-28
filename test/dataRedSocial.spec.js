

describe('data', () => {

  it('debería exponer función validateFormateEmail en objeto global', () => {
    assert.isFunction(validateFormateEmail);
  });

  describe ('Funcion validateEmail ', ()=>{
    let data = 'zarelixzana@gmail.com';

    it('debería retornar TRUE, al ingresar email(zarelixzana@gmail.com) ', () => {
      assert.equal(validateFormateEmail('zarelixzana@gmail.com'),true);
    });

    it('debería retornar FALSE, al ingresar email(z@gmail.com) ', () => {
      assert.equal(validateFormateEmail('z@gmail.com'),'email diminuto o invalido');
    });

    it('debería retornar FALSE, al ingresar email(zarelix@gmail) ', () => {
      assert.equal(validateFormateEmail('zarelix@gmail'),'dominio inexistente');
    });

    it('debería retornar FALSE, al ingresar email(1zarelixzana@gmail.com', () => {
      assert.equal(validateFormateEmail('1zarelixzana@gmail.com'),'Formato correo invalido');
    });

   


  }); 


});
