export const filterData = (data: any[], searchValue: string) => {
  if (searchValue.trim() !== "") {
    return data.filter((item) =>
      Object.values(item).some(
        (value: any) =>
          value !== undefined &&
          value !== null &&
          value.toString().toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
  }
  return data;
};
