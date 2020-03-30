type FilterList = {
	id: number;
	title: 'All' | 'First Group' | 'Second Group' | 'Third Group';
	filter: 'all' | 'first' | 'second' | 'third';
};

export const FilterList: FilterList[] = [
	{
		id: 0,
		title: 'All',
		filter: 'all'
	},
	{
		id: 1,
		title: 'First Group',
		filter: 'first'
	},
	{
		id: 2,
		title: 'Second Group',
		filter: 'second'
	},
	{
		id: 3,
		title: 'Third Group',
		filter: 'third'
	}
];
