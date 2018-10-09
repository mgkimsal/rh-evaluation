
# Section 1 - Design and Development

## Q1 Could you outline what you would consider to be important considerations if you were asked to develop a web application that could be potentially used by thousands of users?

Developing a web application that could potentially be used by thousands of users, I would consider the following categories:
- Hardware: I never assume that a “desktop computer” isn't a touch device or that a “mobile device” doesn't have an input device attached. If there is some common on-board sensor (like a GPS) that would make the tasks less repetitive and more interactive, it may be worth exploring in the design of the UI.
- Memory: The user may have many tabs open, and the device could be anything from a Blackberry to a Kindle, Smart TV or PlayStation. Browser quirks aside, the most important factor for the user to get the content is how much memory the application requires. For static content, that might mean replacing bitmaps with SVGs. For dynamic functionality, it might mean treeshaking.
- Rendering: Viewport size and pixel density I put before browser quirks, render layers, etc.
- Privacy: Users may be avoiding cookies, using a private/incognito window, or otherwise not interested in being tracked. It's never a bad idea to maximize usefulness without asking the user to give anything private away.
- Delight: Time spent with graphic designers can vastly help overall user experience simply by "making it pretty." A character or inanimiate object with a face might be helpful. Motion and animation in interactions can make an interface's intent more clear.
- Empty space: An often overlooked subject, I think it's a good idea to check a container or list for clarity in full and completely empty states. I would check that containers in proximity to each other or even nested within one another are still clear.

## Q2 What techniques do you employ to keep up-to-date with the rapid pace of progress in the field [of] front-end development? How do you choose which technologies are worth taking the time to learn more about?

I got into a habit roughly three years ago of making sure I tried something new every Friday. It might be practical to whatever I'm working on; it might be largely irrelevant. I might have something finished and working in an hour, or I might only get one line written after stumbling through a dozen guides. It's about checking with my gut how a particular tool will benefit me and keeping the sample rate regular and short. Wins that come to mind are Meteor, Noodl, Vue, Babel, Emmet, and Github Pages. It's rare that I get star-struck by a tool that is still rapidly changing or is hard to learn the basics of in a day. It has happened though with GraphQL for its easy concept and difficult implementation, but it solves a much larger pain point so it's worth the trouble. CONCLUSION - WHY DID PREVIOUS EXAMPLES = WORTH THE TIME. ALSO, HOW DOES YOUR GUT DECIDE?

# Section 2 - & Deployment

## Q1 Describe the approach you take in testing your applications

Test frameworks are certainly valuable for reducing errors. I am still learning how to write tests myself as opposed to letting it be delegated to someone else. When a CI tool such as Travis and Jenkins leverages tests to ensure that nothing breaks a production build, it is nothing short of genius. On the other hand, when I sit down with an average customer those are the moments that it is most apparent and obvious what needs to be changed and even more importantly *why*. Usability interviews have won over test frameworks for my attention because the latter tells me how a user *feels*, and I find feelings to be the most valueable feedback. 

## Q2 What do you value in a code base?

A codebase feels valuable to me when it has the following:

Transportability: The ability to take a piece out, and examine it in isolation or seamlessly put it into another codebase.

A respect of defaults: If there's a common, well-documented way of implementing something, and this code needs to be different, some explanation as to why. Comments are of particular importance to anyone new who may have only just come from the documentation themselves.

Cleanliness and humility: I like to see install instructions for software's complete lifecycle from first install, to daily routines, starting over with current settings, and deleting completely. 

Support: Help could come in any form: guides, docs, forums, or whatever.

# Section 3 - General

## Q1 What do you find most exciting or interesting about working in the software development field?

Software is becoming increasingly human, more "fuzzy" as I call it. I'm most excited about how neural networks and graph theory is so useful and related to user experience research. The idea that software is informing humans just as much as humans are informing software makes me feel really good on so many levels.

## Q2 In your career to date, what are you most proud of and why?

The most rewarding moments I've had in my career have been those that I spent in a room with other people, leading a process. Connecting with so many real people, employees and customers alike, gave me a lot of perspective on what UX should be about. I never backed down from taking opinions from people who had been thought of as outliers. I'm proud that I was able to show my colleages how to take advantage of a lot of technologies I now use so often that it's easy to forget that they aren't yet common in the average office. I've always been proud to cook up a web application for someone on the spot and give them the keys. This might come off as corny, but I'm extremely proud of JavaScript too; the web has had a lot of ups and downs, I'm very glad I never gave up on it. 

