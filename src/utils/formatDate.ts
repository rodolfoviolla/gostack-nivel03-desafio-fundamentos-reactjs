const formatDate = (date: Date): string => {
  const newDate = new Date(date);
  return Intl.DateTimeFormat('pt-BR').format(newDate);
};

export default formatDate;
