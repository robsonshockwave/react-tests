describe('Compare numbers', () => {
  it('basic usage', () => {
    // espera um número maior que o definido
    expect(1 + 1).toBeGreaterThan(1);
    // espera um número maior ou igual que o definido
    expect(1 + 1).toBeGreaterThanOrEqual(2);

    // espera um número menor que o definido
    expect(1 + 1).toBeLessThan(3);
    // espera um número menor ou igual que o definido
    expect(1 + 1).toBeLessThanOrEqual(2);
  });
});
