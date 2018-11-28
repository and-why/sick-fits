describe('Sample test 101', () => {
  // test()
  it('Works as expected', () => {
    const age = 100;
    expect(1).toEqual(1);
    expect(age).toEqual(100);
  });

  // skip it - skip the test
  xit('Handles ranges just fine', () => {
    const age = 200;
    expect(age).toBeGreaterThan(100);
  });

  // focus it - only run this test
  fit('Makes a list of dog names', () => {
    const dogs = ['Snickers', 'Hugo'];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain('Snickers');
    expect(dogs).toContain('Snickers');
  });
});
