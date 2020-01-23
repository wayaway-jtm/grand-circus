import { SwearWordFilterPipe } from './swear-word-filter.pipe';

describe('SwearWordFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new SwearWordFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
