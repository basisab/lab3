const input = document.querySelector('#input')
const button = document.querySelector('#button')

const output = document.querySelector('#output')


let initialArr = null

function shellSort(arr) {
	output.innerHTML = ''
	let n = arr.length;

	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
		for (let i = gap; i < n; i += 1)  {
			let temp = +arr[i];
			
			let j;
			for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)  {
				const div = document.createElement('div');
				
				arr.forEach(e => {
					let span = document.createElement('span');
					span.textContent = e
					if(e === arr[j] || e === arr[j-gap]) {
						span.classList.add('active')
					}
					
					div.append(span)
				});

				arr[j] = +arr[j-gap];

				output.append(div)
			}

			arr[j] = temp;
		}
	}


	let res = document.createElement('div')
	res.textContent = `result: ${arr}`
	
	output.append(res)
	return arr;
}




button.addEventListener('click', () => {


	initialArr = input.value.split(',').filter((item) => item !== '')
	shellSort(initialArr)
	
})

