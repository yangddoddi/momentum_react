import React from "react";

const quote = [
  {
    quoteENG:
      "The road to success and the road to failure are almost exactly the same.",
    quoteKR: "성공으로 가는 길과 실패로 가는 길은 거의 같다.",
    author: "- Colin R. Davis",
  },
  {
    quoteENG:
      "It is better to fail in originality than to succeed in imitation.",
    quoteKR: "창의적으로 실패하는 것이 모방해서 성공하는 것보다 낫다.",
    author: "- Herman Melville",
  },
  {
    quoteENG:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    quoteKR: "성공이란 열정을 잃지 않고 실패에서 실패로 걸어가는 것이다.",
    author: "- Winston Churchill",
  },
  {
    quoteENG: "All progress takes place outside the comfort zone.",
    quoteKR: "모든 성과는 요령을 피우지 않을 때 생긴다.",
    author: "- Michael John Bobak",
  },
  {
    quoteENG: "The way to get started is to quit talking and begin doing.",
    quoteKR: "무언가를 시작하려면 말은 멈추고 행동해야 한다.",
    author: "- Walt Disney",
  },
  {
    quoteENG:
      "It is better to fail in originality than to succeed in imitation.",
    quoteKR: "창의적으로 실패하는 것이 모방해서 성공하는 것보다 낫다.",
    author: "- Herman Melville",
  },
  {
    quoteENG: "In order to succeed, we must first believe that we can.",
    quoteKR:
      "성공하기 위해서, 우리는 먼저 우리 자신이 할 수 있다는 것을 믿어야 한다.",
    author: "- Nikos Kazantzakis",
  },
  {
    quoteENG:
      "The only place where success comes before work is in the dictionary.",
    quoteKR: "노력 전에 성공이 나오는 곳은 사전뿐이다.",
    author: "- Vidal Sassoon",
  },
];



const randomIndex = Math.floor(Math.random() * quote.length);
const randomQuote = quote[randomIndex];

function QuoteContainer() {
  return(
<p>{randomQuote.quoteENG}</p>
<p>
  {randomQuote.quoteKR} {randomQuote.author}
</p>_}

export default randomQuote;
