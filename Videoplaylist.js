const videosList = [
{
	video: 'https://www.udrop.com/file/Lxdd/Hokkaido-Gals-Are-Super-Adorable-S01E01-720p-HIN-ENG-JAP-PIKAHD.COM.mkv.compressed.mp4',
	title: 'Hokkaido-Gals-Are-Super-Adorable-S01E01'
},
{
	video: 'https://www.udrop.com/file/Lxe8/Hokkaido-Gals-Are-Super-Adorable-S01E02-720p-HIN-ENG-JAP-PIKAHD.COM.mkv.compressed.compressed.mp4',
	title: 'Hokkaido-Gals-Are-Super-Adorable-S01E02'
},
{
	video: 'https://www.udrop.com/file/Lxho/Hokkaido-Gals-Are-Super-Adorable-S01E03-720p-HIN-ENG-JAP-PIKAHD.COM.mkv.compressed.compressed.mp4',
	title: 'Hokkaido-Gals-Are-Super-Adorable-S01E03'
},
{
	video: 'https://www.udrop.com/file/LxhL/Hokkaido_Gals_Are_Super_Adorable!_S01E04_[RareToonsIndia]_720P_HD.compressed.mp4',
	title: 'Hokkaido-Gals-Are-Super-Adorable-S01E04'
},
{
	video: 'images/vid-4.mp4',
	title: 'Comming_soon'
},
{
	video: 'images/vid-5.mp4',
	title: 'Comming_soon'
},
{
	video: 'images/vid-6.mp4',
	title: 'Comming_soon'
},
{
	video: 'images/vid-7.mp4',
	title: 'Comming_soon'
},
{
	video: 'images/vid-8.mp4',
	title: 'Comming_soon'
},
]

const categories = [...new Set(videosList.map((item) => { return item }))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
	var { video, title } = item;
	return (
		`<div class="list active">
		<video src=${video} class="list-video"></video>
		<h3 class="list-title">${title}</h3>
		</div>`
		)
}).join('')

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(remove => { remove.classList.remove('active') });
videoList.forEach(vid => {
	vid.onclick = () => {
		videoList.forEach(remove => { remove.classList.remove('active') });
		vid.classList.add('active');
		let src = vid.querySelector('.list-video').src;
		let title = vid.querySelector('.list-title').innerHTML;
		document.querySelector('.main-video-container .main-video').src = src;
		document.querySelector('.main-video-container .main-video').play();
		document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
	};
});