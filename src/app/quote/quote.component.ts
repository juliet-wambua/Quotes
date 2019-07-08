import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[new Quote("-Juliet Wambua","Dag Hammarskjold","The longest journey is the journey inwards. Of him who has chosen his destiny, Who has started upon his quest for the source of his being."),
new Quote("-Juliet Wambua","Brian Tracy","Multi-level, or network marketing is an excellent second income opportunity. Millions of people alll over America nd throughout the world are taking advantage of the opportunity multi-level marketing offers to start and build a successful business, quick and expensive. They use the foundation of network marketing business to learn vital business skills at low cost.")]
  preNum:number
  lastNum:number
  counter:number

  addQuote(emittedQuote){
    this.quotes.push(emittedQuote)
  }

  upvote(i){
      this.quotes[i].upvotes+=1
  }
  downvote(i){
    this.quotes[i].downvotes+=1
  }
  delQuote(i){
    this.quotes.splice(i, 1)
  }
  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
  constructor() { }

  ngOnInit() {
  }

}
