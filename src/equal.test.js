describe('equality', () => {
  it('basic usage - toEqual', () => {
    expect(1 + 1).toEqual(2);
    expect(1 + 1).not.toEqual(3);
    expect('developer').toEqual('developer');
    expect({ name: 'developer' }).toEqual({ name: 'developer' });
    expect([1, 2, 3]).toEqual([1, 2, 3]);
    expect(true).toEqual(true);
  });

  it('basic usage - toBe', () => {
    // somente para tipos primitivos
    expect(1 + 1).toBe(2);
    expect('developer').toBe('developer');
    expect(true).toBe(true);
  });
});
