export default function jsNumberForAddress (address) {
  const addr = address.replace(/[^0-9abcdef]+/g, '0').slice(0, 8).padEnd(8, "abcdef0123456789")
  const seed = parseInt(addr, 16);
  return seed;
}
