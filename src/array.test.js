const users = ['Aluizio', 'Developer'];

describe('Match arrays', () => {
  it('verify array elements', () => {
    // verifica se o array contém tal elemento
    expect(users).toContainEqual('Aluizio');
    // verifica se o array contém essa posição
    expect(users).toContain(users[1]);
  });
});
