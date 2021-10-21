// Задание 1

/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, 
что массив может содержать не только числа, но и, например, знаки, null и так далее.*/

function numberElem(){
	const arr = [1, 2, '1', 7, 9, null]
	let evenTest = 0;  
	let evenNumber = 0;
	let oddNumber = 0;
	let noNumber= 0;
	for (let i = 0; i < arr.length; i++) {
	  if (typeof arr[i] === 'number'){ 
		evenTest = arr[i] % 2;  
		  if (evenTest === 0){
			evenNumber++;       
		} else oddNumber++;		
	  } else noNumber++			
	}
	console.log(`Четных чисел: ${evenNumber}, нечетных: ${oddNumber}, элементов не являющихся числами: ${noNumber}`)
	}
	numberElem()