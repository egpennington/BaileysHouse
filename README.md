forked srimba === https://scrimba.com/scrim/co9e84ec2a33413c6dd20dd36# ===
# BaileysBank
 scrimba's mod4 solo project BEST BANK - HTML, CSS, JavaScript

 ## depository
 https://github.com/egpennington/BaileysHouse

 ## live site
 https://baileyshouse.netlify.app/

# Scrimba Module 4 Boot Camp Solo Project - Best Bank
https://scrimba.com/scrim/cocf84a259acc922196ded766

Included in this Bank project in the "Payment" link is my last solo project (Module 3 - Pager Project) based on Frontend Mentor's interactive credit card project. It fit well with the bank theme. 
Live site found here ===> https://baileysbounty.netlify.app/

Also included Scrimba's JavaScrimptas challenge Day 8 - Animated Progress Bar. This fit in well with the Expenses balances. 
Scrim found here ===> https://scrimba.com/scrim/coba748788cf3667423183a56

From Module 5 start, used the World's most annoying cookie display for my nav message displays
https://scrimba.com/learn/frontend/position-the-modal-co8934bc1b93006b91994b29d


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:
- build it from scratch
- use semantic HTML
- hover states
- container
- group selectors
- compound selectors
- follow the design Figma for Module 4 Best Bank found here
===> https://www.figma.com/file/LjgZKxASJfSRxEITUyVujP/BestBank?node-id=0%3A1&mode=dev
- stretch goals:
  - column with spending bars
  - animated hover effect to button
  - fetch data from JS
  - click on account to change view

### Screenshot

![](\images\desktopScreenshot.png)
![](\images\desktopActiveState1Screenshot.png)
![](\images\desktopActiveState2Screenshot.png)


### Links

- Solution URL: (https://github.com/egpennington/BaileysHouse)
- Live Site URL: (https://baileyshouse.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

Recap over some of learnings while working through this project.

First, i would like to have a better  UI/UX design

Tried to use mobile version, but found there is empty space to the left of the container.  Maybe from the hamburger hidden menu on mobile.  need to fix this big bug.

```html
<input type="text" inputmode="numeric" pattern="[0-9]*" id="month-input-el" placeholder="MM" min="1" max="12" minlength="2" maxlength="2" required>
```

```css
background: linear-gradient(to bottom, var(--very-dark-violet), #3F0EAA, #1E0633);
```

used position fixed for the display messages.  worked well.
```css
.modalHome,
.modalSavings,
.modalFinancing {
    display: none;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 450px;
    width: 350px;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 2px #666;
    background-color: #212529;
    color: whitesmoke;
    opacity: 0.88;
}
```

put mobile css in seperate file because a lot of style changes
```html
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/mobile.css">
```

and used a working css to try out and test any changes without changing the original code.  Thought it worked out well. may do this again.
```html
    <!-- <link rel="stylesheet" href="css/aigen.css"> -->
```

researched, copy and pasted and changed js for getting commas in user input.
needed to have commas at every 4 numbers because Korean won is comma'ed in 1000s
found this cool code from chatgpt
```js
    function numberWithCommasKoreanStyle(number) {
        return number.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ",")
    }
```

it is similar to the one i used in the frontend mentor credit card project
```js
    function formatCardNumber(cardNum) {    
        return cardNum.replace(/(\d{4})(?=\d)/g, '$1 ')
      }

```

maybe next time i should use this timeout for error message or the "payment not working right now" message instead of alert()
```js
        setTimeout(() => {
            messageError.textContent = ""
        }, 2000)
```


### Continued development

Need to learn how to get rid of the extra space on the left side in mobile version

spend more time to get transfer amount to add and subtract from account numbers in arrary


### Useful resources

- [Module 4 boot camp project] https://scrimba.com/scrim/cocf84a259acc922196ded766
- [Scrimba Module 3 Pager Project](https://scrimba.com/scrim/co9b447f7b7a0dc6201d27636) - This is the Module 3 Pager solo project. I liked the bank credit card idea more, and it semmed like the same learnings so adabpted it for this project.

## Author

- Website - [Emmett Pennington](https://www.COMINGSOON)
- discord - [emmettpenn23(애멧)]
- Frontend Mentor - [@egpennington](https://www.frontendmentor.io/profile/egpennington)
- Twitter - [@yemmettpenn23](https://www.twitter.com/emmettpenn23)
- email - [egpennington@hotmail.com]

## Acknowledgments

Scrimba's frontend development boot camp is well organized and takes me on a well organized and layout plan that has each lesson build off of the previous lessons.