import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-deco',
  templateUrl: './deco.component.html',
  styleUrls: ['./deco.component.css'],
})
export class DecoComponent implements OnInit {
  words = ['EMPOWERING SECURITY:', 'SAFE GUARDING THE DIGITAL REALM', 'WITH VIGILANCE AND INNOVATION']; // Replace with your phrases
  currentIndex =  0;

  ngOnInit() {
    this.changePhrase();
  }

  changePhrase() {
    // Change the phrase after  5 seconds
    setTimeout(() => {
      this.currentIndex++;
      if (this.currentIndex >= this.words.length) {
        this.currentIndex =  0; // Loop back to the first phrase
      }
      this.changePhrase(); // Call again to keep changing phrases
    },  5000);
  }

}
