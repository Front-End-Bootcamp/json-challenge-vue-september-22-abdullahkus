import studentData from "../data.json"; // data çekildi.

// Belirtilen grubu getirir.
function getGroup(groupName) {
	// Grup ismi kontrolü
	const isGroup = studentData.find((student) => student.group === groupName)
	if (!isGroup) {
		console.log(`The group name specified as "${groupName}" could not be found.`)
		// Eğer grup ismi yoksa boş döndürür.
		return null;
	}

	// İlgili gruba üye olanlar bulundu.
	const filteredStudents = studentData.filter((student) => student.group === groupName)
	// İlgili gruba üye olan asistan bulundu.
	const assistant = filteredStudents.find((student) => student.type === "assistant")
	// Asistanın index numarası bulundu ve asistan, öğrencilerden silindi.
	let assistantIndex = filteredStudents.indexOf(assistant)
	filteredStudents.splice(assistantIndex, assistantIndex)

	// Öğrenciler tek tek dolaşılarak öğrecilerin isimleri students dizisine aktarıldı.
	const students = []
	filteredStudents.forEach(function (student) {
		students.push(student.name)
	})

	// Geri dönüş için obje formatlandı.
	const formatedGroup = {
		[groupName]: {
			students: students,
			assistant: assistant.name
		}
	}

	console.log(formatedGroup)
	return formatedGroup
}

// Tüm grupları getirir.
function getGroups() {
	let groups = []
	// Grup isimlerini depolayacağım bir set oluşturuyorum.
	const groupNames = new Set()

	// Data'ı gezerek group.name'i groups isimli Set'e aktarıyorum. (Set'i kullanmamım sebebi, içideki veri kümelerinin benzersiz olmasıdır.)
	studentData.forEach(function (element) {
		groupNames.add(element.group)
	})

	// Grup isimleri tek tek dolaşılır.
	groupNames.forEach(function (groupName) {
		// Grup bilgileri için getGroup çalıştırılır.
		const group = getGroup(groupName)
		// Önceki verilere gelen grubun bilgileri eklenir.
		groups = [
			...groups,
			group
		]
	})
	console.log(groups)
	return groups
}

getGroup("SteelBlue")
// getGroups();
