export default function isObjectVoid(obj: any): boolean {
  return Object.keys(obj).length === 0 || Object.values(obj).every(value => value === " ");
}