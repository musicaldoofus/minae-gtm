import React from 'react';
import NextBtn from '../../../Common/NextBtn';

const Default = ({match}) => {
	return (
		<div className="container-with-TOC">
			<div>
				<h2>Introduction to promotion writing</h2>
			</div>
			<div>
				<p>
					A great six-pager sets up a high-quality discussion. In the same way, a great promo doc facilitates high-quality decision-making.
				</p>
				<p>
					"What do you need to achieve high standards in a particular domain area? First, you have to be able to recognize what good looks like in that domain. Second, you must have realistic expectations for how hard it should be (how much work it will take) to achieve that result – the scope." - Jeff Bezos, 2017 Shareholder Letter
				</p>
				<p>
					 Let’s start with Jeff’s first point. How do we know what good writing looks like? One way to tell is to look at an example of bad writing: 
				</p>
				<p>
					We want to drive the metrics to optimize the leveraging of the sales parameters to achieve a paradigm shift in our market penetration.
				</p>
				<p>
					 It’s easy to see that the above example is not good writing. That’s because it takes work to read bad writing. You know bad writing when you see it. Now, what if that writer wrote this instead: 
				</p>
				<p>
					In order to achieve our yearly goals, we need to diversify sales.
				</p>
				<p>
					 Much better, right? Good writing is easy to read. 
				</p>
				<p>
					"It would be extremely hard to write down the detailed requirements that make up a great memo. Nevertheless, I find that much of the time, readers react to great memos very similarly. They know it when they see it. The standard is there, and it is real, even if it’s not easily describable.” - Jeff Bezos, 2017 Shareholder Letter
				</p>
				<p>
					While promotion decisions require a high degree of judgment, reading the doc should be easy. Each section of a high-quality, well-written promo doc clearly meets its intended purpose.
				</p>
			</div>
			<NextBtn to={`${match.url}/before`}>
				Before you begin
			</NextBtn>
		</div>
	);
}

export default Default;