console.log('asd');

const dsa = new Promise((r) => {
	r('asd');
}) as Promise<string>;

export class Asd {
	 public  static async asd(): Promise<string> {
		const ddd = await dsa;

		console.log(ddd);
		Array.from([1, 2, 3], (el) => {
			console.log(el);
		});

		return ddd;
	}
}

Asd.asd();
