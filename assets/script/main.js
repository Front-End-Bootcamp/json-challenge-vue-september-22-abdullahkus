import data from "../data.json";

let formatedStudents = {};

function getGroups() {
	const students = data.filter((student) => student.type === null);
	const assistant = data.filter((student) => student.type !== null);

	assistant.map((assistant) => {
		formatedStudents = {
			...formatedStudents,
			[assistant.group]: {
				students: [],
				assistant: assistant.name,
			},
		};

		const filteredStudents = students.filter(
			(student) => student.group === assistant.group
		);

		formatedStudents[assistant.group].students = filteredStudents;
	});
	console.log(formatedStudents);
}

function filterByGroupName(groupName) {
	console.log(formatedStudents[groupName]);
}

getGroups();
filterByGroupName("SteelBlue");
