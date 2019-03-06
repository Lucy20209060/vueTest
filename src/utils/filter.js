// 时间过滤器
export const timeStamp = (second_time) => {

	let time = parseInt(second_time) + "秒";

	if (parseInt(second_time) > 60) {
		let second = parseInt(second_time) % 60;
		let min = parseInt(second_time / 60);
		time = min + "分" + second + "秒";
		if (min > 60) {
			min = parseInt(second_time / 60) % 60;
			let hour = parseInt(parseInt(second_time / 60) / 60);
			time = hour + "小时" + min + "分" + second + "秒";
			if (hour > 24) {
				hour = parseInt(parseInt(second_time / 60) / 60) % 24;
				let day = parseInt(parseInt(parseInt(second_time / 60) / 60) / 24);
				time = day + "天" + hour + "小时" + min + "分" + second + "秒";
			}
		}
	}
	return time;

}