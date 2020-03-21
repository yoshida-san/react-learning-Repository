import Calculate from '../src/functions/Calculate'

describe('テストサンプル', () => {
  const c = new Calculate()
  it('1+1が2であること', () => {
    expect(c.sum(1, 1)).toBe(2)
  })
  it('1+1が3でないこと', () => {
    expect(c.sum(1, 1)).not.toBe(3)
  })
  it('1+(-1)が0であること', () => {
    expect(c.sum(1, -1)).toBe(0)
  })
})
