export const toFarsiNumber = (n: number): string => {
  const farsiDigits: string[] = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  return n.toString().replace(/\d/g, (x: any) => farsiDigits[x]);
};
