function getValidSortedUsers(users, pageNumber, pageSize) {
  const validUsers = users.filter((u) => {
    if (!u.name || u.name.length < 2) return false;
    if (!u.email) return false;
    if (new Date(u.signupDate) <= new Date("2025-01-01")) return false;
    return true;
  });

  const sorted = validUsers.sort((a, b) => {
    if (a.signupDate !== b.signupDate) {
      return new Date(b.signupDate) - new Date(a.signupDate);
    }
    return a.name.localeCompare(b.name);
  });

  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return sorted.slice(startIndex, endIndex);
}
