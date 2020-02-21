export const getDateExpires = days => {
	const date = new Date();
	date.setDate(date.getDate() + days);
	return date;
};
