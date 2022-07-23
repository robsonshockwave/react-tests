describe('Match regular expression', () => {
  it('basic', () => {
    // somente expressões regulares
    expect('developer').toMatch(/\w+/);
    expect('(21)91234-5678').toMatch(/^\(\d{2}\)\d{5}-\d{4}$/);
  });
});
