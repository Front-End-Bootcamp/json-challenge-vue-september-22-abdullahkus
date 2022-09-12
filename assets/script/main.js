import data from "../data.json"; // data çekildi.

let formatedStudents = {}; // Formatladığım objeye global erişim sağlamak için tanımlandı.

function getGroups() {
	const students = data.filter((student) => student.type === null); // Gelen data'daki öğrencileristudents'e atandı.
	const assistant = data.filter((student) => student.type !== null); // Gelen data'daki asistanlar assistant'a atandı.

	assistant.map((assistant) => {
		// Her grupda asistan için dizi gönderilmediğinden dolayı sadece tek asistan olabilir olarak anladım ve asistanları tek tek gezerek grup isimleri dinamik olarak elde etmek için map'lendi.
		if (!formatedStudents[assistant.group]) {
			// Grup daha önce oluşturuldu mu diye kontrol edildi.
			formatedStudents = {
				...formatedStudents, // Obje'nin şuanki halini aldı.
				[assistant.group]: {
					// Obje içerisine grup adında bir obje oluşturuldu.
					students: [],
					assistant: assistant.name, // asistan atandı.
				},
			};
		}

		// Öğrencilerin grubuyla eşleşenler filtelendi.
		const filteredStudents = students.filter(
			(student) => student.group === assistant.group
		);

		// Filterelen öğrencilerin isimleri grubun öğrencilerine atandı.ßß
		filteredStudents.map((student) => {
			formatedStudents[assistant.group].students.push(student.name);
		});
	});
	console.log(formatedStudents);
}

function filterByGroupName(groupName) {
	console.log(formatedStudents[groupName]); // Gönderilen grup ismini formatlanan öğrenci objesinde aranarak ilgili veriye erişildi.
}

getGroups();
filterByGroupName("SteelBlue");
