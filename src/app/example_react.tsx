'use strict';

import React, { useState } from 'react';
import ReactDOMClient from 'react-dom/client';

(function (Drupal, once) {
	Drupal.behaviors.yumeExampleCounter = {
		attach: function (context: HTMLElement) {
			function init(element: HTMLBodyElement) {
				const Root = () => {
					const [count, setCount] = useState<number>(0);

					return (
						<div>
							<p className='text-xl text-black/70'>Example #1 — Counter</p>
							<p className='text-3xl mb-4'>Counter value: {count}</p>
							<button
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
								onClick={() => setCount(count + 1)}>
								Add +1
							</button>
							<button
								className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
								onClick={() => setCount(count - 1)}>
								Remove -1
							</button>
						</div>
					);
				};

				const container = document.getElementById('react-app');
				const renderer = ReactDOMClient.createRoot(container!);

				renderer.render(<Root />);
			}

			once('yumeExampleCounter', '#react-app', context).forEach(init);
		},
	};
})(Drupal, once);
