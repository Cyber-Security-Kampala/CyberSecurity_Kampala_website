import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit, OnDestroy {
  teamMembers = [
    // Your team members data...
      { name: 'John Doe', position: 'CEO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'Jane Doe', position: 'CTO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'John Smith', position: 'COO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'John D', position: 'CEO', imageUrl: '/assets/images/image1.jpeg' },
      { name: ' Doe', position: 'CTO', imageUrl: '/assets/images/image1.jpeg' },
      { name: ' Smith', position: 'COO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'Jjk', position: 'CEO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'Jane ', position: 'CTO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'J Smith', position: 'COO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'Joh', position: 'CEO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'Jan', position: 'CTO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'Jomith', position: 'COO', imageUrl: '/assets/images/image1.jpeg' },
      // Add more team members as needed
    
  ];
  slides: any[] = [];
  currentIndex = 0;
  slideSubscription: Subscription = new Subscription;

  ngOnInit() {
    // Initialize your team members here or fetch them from a service
    this.teamMembers = [
      // Your team members data...
      { name: 'John Doe', position: 'CEO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'Jane Doe', position: 'CTO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'John Smith', position: 'COO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'John D', position: 'CEO', imageUrl: '/assets/images/image1.jpeg' },
      { name: ' Doe', position: 'CTO', imageUrl: '/assets/images/image1.jpeg' },
      { name: ' Smith', position: 'COO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'Jjk', position: 'CEO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'Jane ', position: 'CTO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'J Smith', position: 'COO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'Joh', position: 'CEO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'Jan', position: 'CTO', imageUrl: '/assets/images/image1.jpeg' },
      { name: 'Jomith', position: 'COO', imageUrl: '/assets/images/image1.jpeg' },
      // Add more team members as needed
    ];


    // Prepare slides
    this.slides = this.chunkArray(this.teamMembers, 4);

    this.slideSubscription = interval(5000).subscribe(() => this.nextSlide());
  }

  ngOnDestroy() {
    if (this.slideSubscription) {
      this.slideSubscription.unsubscribe();
    }
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? (this.slides.length - 1) : (this.currentIndex - 1);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  // Updated chunkArray function
  chunkArray(array: any[], chunkSize: number): any[] {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    // If the last slide has fewer than 4 team members, distribute them evenly across slides
    const lastSlide = result[result.length - 1];
    const remainingTeamMembers = 4 - lastSlide.length;
    if (remainingTeamMembers > 0 && remainingTeamMembers < 4) {
      for (let i = 0; i < remainingTeamMembers; i++) {
        result[i % result.length].push(array[i]);
      }
    }
    return result;
  }
}