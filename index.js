class index {
	static tarih(date) {
		const aylar = {
			"1": "Ocak",
			"2": "Şubat",
			"3": "Mart",
			"4": "Nisan",
			"5": "Mayıs",
			"6": "Haziran",
			"7": "Temmuz",
			"8": "Ağustos",
			"9": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
		}
    const tarih = new Date(date)
    var gun = tarih.getDay() + 1
    if(gun.toString().length === 1) {
        var gun = Number('0' + gun)
    }
    const ay = tarih.getMonth() + 1
    const yil = tarih.getFullYear()
    const saat = `${tarih.getHours()} ${tarih.getMinutes()} ${tarih.getSeconds()}`
		return `${gun} ${aylar[ay]} ${yil} ${saat}`
	}
}

module.exports = index;
