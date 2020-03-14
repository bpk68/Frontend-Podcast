---
templateKey: episode
title: Static code analysis, linting, introducing coding style guides and how to enforce them
episodeNumber: 3
date: 2020-03-16T08:00:15.566Z
description: >-
  Introducing coding style policies into your organisation, why they're important and how to enforce them, with guest, Chris Betrand
tags:
  - origin stories
  - technical
---

## In this Episode

In episode three we have [Chris Bertrand](https://twitter.com/DesignPuddle), a senior fullstack developer with [Aldermore bank](https://www.aldermore.co.uk/). Chris has a wealth of coding experience across different technologies and is filling us in on static code analysis, code linting and software development policies; what they are, why they're a good thing, and how you can implement them in your own organisation.

## Listen now

<iframe src="https://anchor.fm/the-front-end/embed/episodes/Static-code-analysis--linting--introducing-coding-style-guides-and-how-to-enforce-them-eb88da/a-a1kn7ij" height="auto" width="100%" frameborder="0" scrolling="no"></iframe>

## Sponsors

Want to sponsor the show? Head on over to [the sponsorship page](/sponsorship) to take advantage of early sponsorship!

## Resources

We mention a few different resources in the show and you can find them here:

- [Chris Betrand](https://twitter.com/DesignPuddle) twitter profile, 
- Chris' freelance alter ego [Design Puddle](http://www.designpuddle.com/),
- [Husky Git Hook](https://github.com/typicode/husky), 
- [Prettier](https://github.com/prettier/prettier) - opinionated code formatter. 
- [ESLint website](https://eslint.org/).
- [AirBnB JavaScript style guide](https://github.com/airbnb/javascript).
- [Google's JavaScript style guide](https://google.github.io/styleguide/jsguide.html)
- Chris' excellent [article on setting up and enforcing linting policies](http://blog.designpuddle.com/web-development/the-secret-way-to-improve-and-automate-your-code-quality/)

You can find out more about me, [Rob Kendal, on my personal website](https://robkendal.co.uk), or [follow me on Twitter](https://twitter.com/kendalmintcode). 

## Transcript

### Part 1

**Rob  0:00**  
Hi Chris,  how's it going? 

**Chris  0:02**
I'm good. Thank you. How are you?

**Rob  0:03**  
Yeah, very good, sir. Very good myself. Chris is a senior developer with Aldermore Bank recently of Sage, that is the same, the do the Sage accounting software. But it was Sage people. And he's going to talk to us a little bit about his coding story and kind of how we got into development. And then we'll talk about really technical things; static code analysis and ESLint, enforcing rules and the pitfalls and, and good parts and bad parts of all that. So Chris, senior developer, how long have you been a developer?

**Chris  0:34**  
So I've been developing for, I think it's like coming up to 12 years. So quite a while now.

**Rob  0:41**  
Yeah, quite the veteran. I like it. How did you get into it? And I ask this of a lot of guests because I quite like to know people's kind of coding origin stories. And as I was saying, just before we started recording, mine is very linear. I built computers, and then I programmed them so I literally build them and tell them what to do. And that's kind of as interesting as my story gets. Where everyone else seems to be like I used to be an Olympic shot-putter, and I started doing big data in Python. And it's like this really pendulum swing. So how did how did you get into it?

**Chris  1:09**  
Yeah, my story is a little boring, I guess. I've always been sort of interested in computers from an early age, you know, having a spectrum and stuff. And then like PCs, when the internet was was just coming around that I suppose NTL was giving away sort of free broadband. And that was the sort of time when you jumping on and you had your Napster's and all your fun, internet things. I think you're talking about my space this week on the podcast.

**Rob  1:35**  
Yeah, we were we were talking about obviously it's another fellow golden era of internet when we had the dial up when you had to shout at your mum to get off the phone. And you like got the phone I need to use the modem and it was there right horrendous noise for 10 minutes. And then the promise is maybe connected. Maybe not.

**Chris  1:50**  
But chat rooms. chat rooms don't really exist anymore, do they? But they were they were interesting.

**Rob  1:54** 
They were fun. Yeah. lot more safety in the randoms on the internet then, things are a lot more creepy now. Now just some random in America we talking to someone in the chat room got into it in the sort of the Golden Era with the free NTL and stuff. How did you work you were into sage and then into the bank? Were you are now?

**Chris  2:12**  
Yeah, so it was pretty much a straight route I went through free school, straight to university and then in as a sort of junior web developer sort of my first role and then spent a few years doing that and decided to actually go and explore the world a little bit, have a little bit of a travel, get away from computers for a while and then returned and sort of properly stuck stuck into it and and learn learn the craft as you'd say.

**Rob  2:37**  
So that's another thing I mentioned in the in the very first episode, and it comes up a lot I get asked whether and there's a lot of debates on Twitter and I get asked a lot whether you need a computer science degree or something of that nature. Did you go through that full range of like higher educational things? Or did you kind of do similar to I did a bit of self taught then you got like a junior role and just kind of find that learning curve.

**Chris  2:59**  
I did think Computer Science degree. But I yeah, it's an interesting topic that whether what you've learned at that course actually teaches you anything business related, it's a good grounding. But in terms of what I did at university to what I'm doing now, there isn't a whole lot of overlap apart from, you know, object orientated design and sort of those bits

**Rob  3:20**  
for I mean, I haven't come from that background. And it's interesting to meet someone because I've not really talked to many people who have come from that background. So it's nice to hear the other side of it of like, you've got a computer science degree, how do you find that helps. And I think that's the conclusion that I've come to on my own is that it will open some doors for you. And I think it will give you more of a grounding in the kind of formal structure of things like object oriented programming and the solid principles and everything else that you kind of use without knowing maybe what they are. So it would give you that that sort of grounding

**Chris  3:50**  
but equally I think you go into you go into education at such a young age that you know, you're kind of finding yourself as well as trying to find your career. So I don't necessarily know if it's the best time but I think it's good, yeah it's a good time of your life really so there's definitely no regrets there as well

**Rob  4:04**  
it's nice to hear you know both sides of it. As a as a senior dev at a bank then you're definitely in this in this FinTech, which I'm not gonna lie I first thought was something to do with like, the tech coming out of Finland when it was all these FinTech everyone's doing? D id not know this financial tech. So I'm going to hold my hands up that you can still be at the senior developer and get that horribly wrong. How do you find life in in FinTech? What What do you kind of get up to as a senior dev in a bank,

**Chris  4:30**  
all sorts I guess it that whole software lifecycle, getting it from early requirements and getting out there to the customer to us going from design phase to sort of the DevOps and pushing stuff out and making it as robust and you know, there's a lot of regulation in banks so it's making it secure and doing all those sorts of I guess you could call boring things but equally things that make code solid for for the end user

**Rob  4:56**  
that's quite an interesting, quite interesting side with the regulations because you know, Normally, in a lot of kind of agency environments where I am where we're kind of making our own software up, there are kind of there's a lot of security implications. I mean, we're I'm in the security authentication space, but there's not really a lot of regulation around it. And that's quite a must be quite an interesting, maybe interesting or interesting with quotes addition to just the normal challenges of software development. So yeah, do you find that makes it a bit more difficult, it just adds an extra kind of challenge around it with that, that kind of regulation,

**Chris  5:28**  
it definitely makes it more tricky because, you know, software has to be signed off that's got the rules. It's got to be reasons for doing it. So playing around with the latest and greatest is is always tricky, and they're always a little step behind just to make sure that there's no sort of severe vulnerabilities and that's in the tools that you use.

### Part 2

**Rob  0:00**  
But the meat and potatoes of what we're here to talk about is exciting tech topics like static code analysis and linting and the normal mortals will go "what is that, and why are you excited by it?", but us devs we like our, our our rules and our static code analysis. So for anyone who's not familiar with things like static code analysis or linting, maybe you haven't used it before, but could you explain a little bit about what static code analysis is?

**Chris  0:26**  
Yeah. linting in a nutshell, is the name for the process of checking your code against a set of rules, you know, each language is sort of specific. So linting will run a programme or a tool that will analyse the code and that language for potential errors and then they will let you know as a developer, if something's you know, wrong or severely wrong, and then potentially give you options to fix it or you know, just let you know

**Rob  0:52**  
so why should people why should people care about and if they're looking to implement in their organisation why why would that be good for them?

**Chris  1:00**  
I've been to a few roles and and few companies and a lot of things as a new developer, you'll come in and you'll sort of ask, what are our coding standards? You know, what, what, as a developer do, do, we need to follow it in this sort of organisation. And usually you'll be given a 600 page document with examples of using camelcase, Pascal case, Hungarian notation, if you're doing some old dotnet stuff, and it's quite difficult because although you read all the rules, they're not really ever enforced or, or shown to you while you're doing the code, you know, unless it goes through a code review process. And then someone will say, Oh, we do it like this. We do it like that our brackets are now on a different line. I think it's quite a good way to to enforce your coding sort of principles or your values and organisation during your development process, rather than sort of after on an ad hoc basis.

**Rob  1:51**  
Yeah, it's nice. I mean, I think for me, it comes down to communication. I mean, I'm a big fan of linting. I must admit I don't do a lot of configuration. I worked in the dirty world of react, and even more dirtier, the kind of create react app, which kind of is very opinionated and puts a lot of stuff in place for you like linting rules, but it's kind of like the best practice one. But I'm a big fan of enabling people to communicate in the same sort of way because I think ultimately, good software development comes down to efficiency and maintainability. And I think if you're all on the same page, and that's enforced with things like linting, that gives you that efficiency and maintainability because it's a bit like I know people like to get very gatekeepy about who I like my brackets this way, and I like there's a lot of people get really excited about having their variables and CSS properties in alphabetical order, and that's all fine but ultimately, it comes down to it's the same way that people get very guardy about about grammar, and I'm the biggest grammar nazi ever. But I think it's important because it enables you to communicate more effectively with people you know, if you if you start sticking commas in the wrong place or missing them out, or just having your sentences run on with absolutely zero punctuation, it makes it more difficult to communicate and I think some of that kind of linting is what that comes down to, you know, you know that when you open someone else's file, it's going to be formatted in a particular way that you're familiar and comfortable with and surely, that's got to make it a bit easier for you. Right?

**Chris  3:11**  
Exactly. And especially for you know, this being a front end podcast, sort of interpreted languages like JavaScript, you don't necessarily know about problems in your code until you run it. So a linter will sort of tell you those up front. So it kind of gives you a helpful hand as well that, Oh, actually, this code might not work rather than having to go through the process of finding it yourself.

**Rob  3:33** 
Yeah, sure. It definitely definitely is one of the both the nice thing and the terrible thing about JavaScript is so free and easy. Just like, hey, it's like the hippie of languages. I just do whatever you want, but it's fine. Because you're not strongly typed here we're not going to have that strict police state stuff, type whatever you like. But you're right, it does introduce potentially modern problems and things. So it's nice to have that if you're not a fan of TypeScript. Like I'm not, for whatever reason, I'm just I'm not a fan of it, but TypeScript circumvents a few of those things, I think by trying to be a bit more so strongly typed and ape other languages like C sharp. Yeah, without that without that, linting is a good first step, I suppose to kind of catch those errors.

**Chris  4:13**  
I've been a Microsoft sort of developer for pretty much my whole career. So moving from C sharp to TypeScript is a is a lovely move. But yeah, if you're a JavaScript developer, and then having all the types imposed on you, is a bit of a hurdle. Usually I find,

**Rob  4:28**  
yeah, I did it that way. I started as like a full stack developer in the in the good old days if asp.net, too. So I came from kind of Visual Basic, then quickly realised no one used that and switched over to C sharp, which kind of was very similar. Just you shoved a few more curly braces. Everything was kind of the same. And then I kind of did more JavaScript, but we didn't have things like TypeScript when I kind of did the switch. That's a retro fit TypeScript into my workflows a bit like, well, I'm already I already write pretty okay, JavaScript, hopefully, I don't know, my employers will tell you maybe otherwise I don't feel the need for the extra thing. It's quite nice as I suppose to help pure Microsoft C sharp veterans, if you like, move into the kind of JavaScript and keep a lot of the familiar language side of it. You know, we've got some good benefits there. But I mean, with most things in development, you've got a trade off between the benefits and the drawbacks. So what are some of the perhaps, the cons to linters, or employing some kind of static code analysis policy?

**Chris  5:24**  
Yeah. So say, say you you've just, you know, you've got a massive project already. It's a big, big application and you kind of go, Okay, I want I want to introduce it halfway through or, or right now, and you'll run it once and you'll get potentially sort of thousands of errors or warnings coming up, sometimes as many as there are sort of lines of code. So it can lead to a lot of false positives, that sort of may deter you from from fixing what, what is there or what's actually important, and that's why sort of setting up the rules that you sort of believe in and you know, those sort of fundamentals is sort of crucial.

**Rob  5:58**  
Have you always worked at somewhere where you've had these kind of linting policies? Or have you been instrumental in kind of bringing those into places? I mean, as a senior dev you have you have a bit more influence? Are you allowed to bring a bit more experience in your waggon with you, when you join it you have you kind of rallied everyone to get those things implemented and enforced yourself?

**Chris  6:18**  
I'm a big fan of sort of process, but in adding process to to a team and getting them sort of improving in that way. So I'm yeah, recently added linting into a sort of big project. And it was a sort of an Angular JS project, that sort of then morphed into Angular two plus project with JavaScript and TypeScript and all sorts of all sorts of stuff. So I think I came across this problem at that time, where there were just errors everywhere, and people get really scared because when you come up and they say your code has got like, 10,000 issues with it, you know, you kind of want to run a mile, so it's scary, but it's all about the sort of the time that can save you moving forward. I always think if you're going to lint code that you're never going to touch again then just leave it it's not necessary but if you want to be improving this tool if it's you know, like Software as a Service product that you're going to be expanding upon then adding this in especially if your team's expanding or there and sort of number of developers and you you want to teach them best practices, you've got some junior developers there you get everyone on to the sort of same level understanding what what they can and cannot do.

**Rob  7:28**  
That's quite a nice additional angle actually kind of training up maybe less experienced or junior developers by you know, as bad as it sounds almost forcing this best you will write it this way, you know, the best practice is like forcing it on them, which is quite nice, because I suppose it takes that element of uncertainty away from them if that's that with a wall of code going, "oh how's the best way to kind of put this in? Where do I put the braces and, and how do I do if statements?" and things like this where you kind of give them that that subtle? Maybe not so subtle influence with that's quite a nice additional benefit.

**Chris  7:58**  
Yeah, definitely. You know, linting is inexpensive and actual compute time there isn't. It happens while you're writing it, and you can enforce it in different ways. But it doesn't actually, you know, doesn't stop the developer doing it, it just sort of nudges them to say, hey, you could do it a different way. Or, you know, we could think of this to do it, some newer syntax, or the new null, operational chaining and all those things, you can add in those rules to say, structure my code in such a way or in another way, because the new rules come in, or a new new property has come in in ES, I'm not sure we up to now 20. So I like it. I'm a big fan, I can see the benefits, especially if your team's really big. And you don't want a lot of manual time being spent reviewing people's code.

**Rob  8:40**  
Yeah, definitely. So when you when you've kind of come along and brought that in how how do you go about introducing that, as it's one thing taking an organisation that already has it maybe in place and you just add to it, but if you've got an organisation that has not got any kind of linting policy, how do you go about stuffing that into the into the organisation? Do you kind of just turn it on and go deal with the errors, or do you kind of introduce like a gradual adoption process?

**Chris  9:06**  
Yeah. So I think the first time I did it, I just said, lint the whole code base every time someone, someone does something and just sort of, like a passive approach, so hands off, so say, these are the issues. I'm not saying you have to fix them, but this is what they are. And you sort of monitor that process over, you know, a period of time and see, does anyone take any notice? And basically, no, they don't do it. If at the time you say to someone, this isn't quite right, but I'm not going to stop you people kind of just go Okay, well, I will, I won't do anything about it. I sort of find the happy medium is it's like the boy scout rule. When you touch a bit of code or a file you sort of make it better than when you found it; sort of keep it cleaner than when you found it. You know, I think the sort of happy, happy medium is you only lint or enforce linting on the files that you've changed and your and your committing or or staging You don't make them fix everything, because it's probably a bit irrational, but you make them fix what, what they're currently doing. 

**Rob  10:07**  
There's a James Bond title in there something like you only lint once. I like that boy scout rule. If anyone's wants a key takeaway from this podcast, I would imagine that's really quite good. I wrote an article ages ago about this kind of continuous refactoring, if you like, where, you know, I've worked in places where they're like, right, we're going to have this imaginary time in the future where we're going to refactor everything, and everything will be shiny. We're all sitting around, you know, walk around holding hands, and it'll be great. And it's like, it doesn't happen. You don't need to be aggressively, obsessively refactoring. But I think you need to do it as you go along. Or like you said, if you open a file, and you can, you can improve it to make some changes, and you can improve it while you're there. Whether that's refactoring it or linting it. Yeah, that's a really, really good way to do it. And I suppose that does eventually you will eventually expand your lint, the coverage of the linting  if you like.

how do you decide on what rules and policies to apply? I mean, even if you just go on one linting tool like, ESLint as awesome as that is there are hundreds of different rules and things that you can apply to it. How do you decide which ones to apply? Which ones to not?

**Chris  11:13**  
Yeah, so there, I've sort of been doing sort of the angular side of it. So Angular has, has a rule set called Codalizer, which is specific to the way Angular sort of templates are written. But there are sort of big, big name companies that have rule sets. So Airbnb is a sort of popular one. Then you've got the sort of react and Shopify that have their own rule sets and what what you kind of do is you take them as a base, and then you extend them to do what's right for your organisation. You can write them from scratch yourself. And if you have a document that specifies all of your principles in a nice way, then you could do it yourself. But I'd say using something battle tested that some companies already use out in the Wild is a good way of creating sort of a benchmark or a baseline that you can you can build upon to do what, what you need it to do.

**Rob  12:07**  
And I think it's it's important to, you know, remember that massive companies like Facebook or Airbnb and things, they don't have all the answers. Yes, they have a lot of really excellent, you know, top notch people at work. And I think it's just the sheer amount of people that work for them and the amount of code they go through they, they find the failures quicker. So I think they are a good place to start, take them how you know, you're a very successful company pushing out very huge code bases on the regular which bits can we kind of learn from your successes or learn as much from your failures? Like that's probably a good place to start. And how do you how you enforce the policies? Do you do like a combination of in people's IDE like through say an ESLint config? Do you do it out of the continuous development integration point to like at the build servers? Where, how do you how do you enforce all these policies?

**Chris  12:56**  
optimally, you want them done it at all stages. So you Want to keep the amount of issues that you've got as visible across across all stages? So everyone has visibility of everything. I think the easiest way is just before check in of your code and that way you kind of stopped people checking in code if it doesn't adhere to your standards, and that will then work across different IDE's and and everything because you're rather than as you said, using a plugin or something that's very specific to you. It's done by the application itself, as in all of the configuration for the linting is within the application.

**Rob  13:31**  
And what about setting it all up? I know, we talked about this before about you know what we're going to discuss on the podcast, I we said think it'd be interesting to talk about the setup of it and things. Do you have any kind of tools and platforms that you recommend people look into to set it up?

**Chris  13:45**  
Yeah, completely. So there's sort of three external libraries, packages, node modules, as you call them, that you use. So Husky is one which is just an easy way to configure Git hooks. So Git hooks will be at whichever stage you want them so it at Git add, Git commit, Git push, you can then run other tools. So I guess you use Husky to configure your Git hooks, and then within that you can use two other tools: lint staged is one that I've used recently, and that will run your linting against your stage files. So that that's amazing. And then it will so when you do your Git add it will say we're just checking your files, and then it will say your files are done, you know, move on to the to the next process, and that we use something called pretty quick. And that runs prettier behind the scenes on all your staged files just to get them into your format. So your linter will look at the code and its quality, and prettier will run your formatting on that. So then you've got two ends of the spectrum. So I think ESLint will do formatting for you. But as a rule of thumb, everyone uses prettier for that nowadays. So you can you can sort of you get the best of both worlds and use the tools that are right for the job at each stage.

**Rob  15:00**  
Yeah, it's really Yes, I've never, I must admit, I've never used Git hooks before, because it's either one of those where I suppose it's already set up. I think I will have experienced them in previous companies I've had enforced message lengths and things like this. So yeah, you will see them, but I've never personally kind of used them or set them up, certainly not for the linting by linting purposes. So that's really interesting. I'm definitely gonna go and check out Husky. I like the fact that with prettier, you can take some of the energy out for devs where if it goes, well, this isn't quite in the right format. I'm going to do it for you, which is nice, because you get the end result you want without actually having to put extra burden on devs, because we're not generally an energetic bunch. So if we have to do extra things, anything that takes that away from us, although we can automate to the robot, then great. I mean, that's dev life isn't it? We'll spend, we could easily spend a day writing something to automate, automate a process that takes 10 minutes.

**Chris  15:49**  
I always find it afterwards. Once you've got that in place, and then you're doing comparisons between sort of history of the file, you then don't have that sort of formatting, the spacing, seeing all of that, getting in your way from seeing the changes, you can see exactly what was done and probably why without having to sort of sift through the noise to get to the to what you're looking for.

**Rob  16:12**  
I'm not gonna lie to you. I have no more questions about linting. I think I'm completely linted out. Is there anything you want to mention your in your wealth of linting experience? 

**Chris  16:22**  
I guess to give it a try. I think most people will have a plugin that will run stuff behind the scenes, but it's never enforced. And you know, everyone wants to write good code they want to keep up to date with with the latest and greatest. They want to follow best practices. I think it's an easy way to do to do so because these rules get updated when new things come in. If you if you're using it, you'll always be up to date. You'll always be following best practices and I think that's what all developers one, I think we always want to do what's best so use us something to do it for you. Because we can't remember everything ourselves

**Rob  16:56**  
no, I think you're right. We all want to be or you should want to be the best version, or best developer version of yourself. And I think, you know, you might be an amazing coder, I might be an amazing coder, but what the code we write is very different. And I think getting that unified exemplary code is what it's all about, and work into a set of kind of, you know, mutually agreed standard of the best version of our code. So no, I like that. Thank you for coming and talking to us about about linting. You know, I hope that because we're, you know, we're awesome, we can make these relatively dry topics, a little bit more interesting. But it's good to get the pros and cons of things like linting and policies like that around that why it's so important. 

Do you have anything you'd like to anything you'd like to plug a website that weird band that you're in, d'you make homebrew that you sell? I don't know what whatever you like to plug

**Chris  17:45**  
just my Twitter handle. So @designpuddle. I post a lot of stuff on everything sort of dev related. So if you're interested in following me, that would be great.

**Rob  17:57**  
Definitely, I think he's, I follow Chris, he's well worth, hence he's on the show. He's well worth a follow. If you'd like to talk to Chris, about linting, anything dev related, or maybe not dev related, just talking in general, then yeah, you can find him on twitter @designpuddle. I'll put some links to the tools and policies and things that Chris mentioned, like Husky and prettier. I think eventually, you probably going to, I'm certainly going to badger you about writing a blog post on all this because it'd be quite nice to have a maybe a walkthrough and how to setup things, with Git hooks. So I'll keep poking you about that. And if you get that written, then I'll I'll add that to the show notes as well.

**Chris  18:33**  
Yeah, that's a great idea. Yeah, I'll definitely think about that

**Rob  18:36**  
the collective pressure of people, or people sat there waiting for this article. Wanting you to write this write, the linting article, the collective internet pressure, I love it. Well, thank you very much for coming on. It's been an absolute pleasure. It's goodbye for me and we will we will catch you later Chris.

**Chris  18:52**  
Lovely. Cheers Rob. Thanks.

