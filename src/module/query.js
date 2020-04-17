// 목록 요청 쿼리 작성
export const makeListQuery = ({
  type,
  lastId = 0,
  limit = 20,
  searchKeyword,
  startDate,
  endDate,
  sort,
  channel
}) => {
  let result = `/${type}/list?lastId=${lastId}&limit=${limit}`;
  if (searchKeyword) result += `&searchKeyword=${searchKeyword}`;
  if (startDate) result += `&startDate=${startDate} 00:00:00`;
  if (endDate) result += `&endDate=${endDate} 23:59:59`;
  if (sort) result += `&sort=${sort}`;
  if (channel) result += `&channel=${channel}`;
  return result;
};
