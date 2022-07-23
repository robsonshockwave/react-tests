const users = {
  name: 'Aluizio',
  email: 'aluiziodeveloper@email.com',
};

describe('Match object', () => {
  it('basic usage', () => {
    // verificar se existe a propriedade no objeto
    expect(users.name).toBeDefined();
    expect(users.age).not.toBeDefined();
  });
});
